// LORD 상담 신청 폼 백엔드
// 배포 방법(구글 계정으로 1회 설정):
// 1. https://docs.google.com/spreadsheets/d/1G0j8qUDnZEINd0b5DhAJ0vvshODE3rOSM7ERDTcdwkE/edit 접속
// 2. 상단 메뉴 확장 프로그램 > Apps Script 클릭
// 3. 기본 생성된 Code.gs 내용을 모두 지우고 이 파일 내용을 붙여넣기
// 4. 저장 (Ctrl+S)
// 5. 우측 상단 배포 > 새 배포 클릭
//    - 유형 선택: 웹 앱
//    - 다음 계정으로 실행: 나(본인 계정)
//    - 액세스 권한이 있는 사용자: 전체
// 6. 배포 클릭 → 권한 승인(내 계정이므로 "고급" > "이동" 눌러 승인)
// 7. 발급된 웹 앱 URL(.../exec 로 끝남)을 복사
// 8. web/src/lib/site.ts 의 contactFormEndpoint 값을 이 URL로 교체

const SPREADSHEET_ID = "1G0j8qUDnZEINd0b5DhAJ0vvshODE3rOSM7ERDTcdwkE";
const SHEET_NAME = "상담신청";
const NOTIFY_EMAILS = ["shchen74@naver.com", "ncate@naver.com"];

const COLUMNS = [
  ["timestamp", "접수일시"],
  ["name", "이름"],
  ["company", "회사명"],
  ["phone", "연락처"],
  ["email", "이메일"],
  ["eventName", "행사명"],
  ["eventDate", "행사일"],
  ["location", "설치 장소"],
  ["indoorOutdoor", "실내/야외"],
  ["attendees", "예상 참석 인원"],
  ["services", "필요한 서비스"],
  ["budget", "예산 범위"],
  ["message", "문의 내용"],
];

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = getOrCreateSheet();
    appendRow(sheet, data);
    sendNotificationEmail(data);
    return jsonResponse({ result: "success" });
  } catch (error) {
    return jsonResponse({ result: "error", message: String(error) });
  }
}

function getOrCreateSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(COLUMNS.map(([, label]) => label));
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight("bold");
    sheet.autoResizeColumns(1, COLUMNS.length);
  }
  return sheet;
}

function appendRow(sheet, data) {
  const timestamp = Utilities.formatDate(new Date(), "Asia/Seoul", "yyyy-MM-dd HH:mm:ss");
  const services = Array.isArray(data.services) ? data.services.join(", ") : (data.services || "");
  const row = COLUMNS.map(([key]) => {
    if (key === "timestamp") return timestamp;
    if (key === "services") return services;
    return data[key] || "";
  });
  sheet.appendRow(row);
}

function sendNotificationEmail(data) {
  const subject = `[LORD 상담 신청] ${data.eventName || data.name || "신규 문의"}`;
  const services = Array.isArray(data.services) ? data.services.join(", ") : (data.services || "");
  const body = COLUMNS.filter(([key]) => key !== "timestamp")
    .map(([key, label]) => `${label}: ${(key === "services" ? services : data[key]) || "(미입력)"}`)
    .join("\n");

  MailApp.sendEmail({
    to: NOTIFY_EMAILS.join(","),
    subject,
    body,
  });
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}
