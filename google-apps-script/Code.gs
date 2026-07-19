// LORD 상담 신청 폼 백엔드
// 배포 방법(구글 계정으로 1회 설정):
// 1. https://docs.google.com/spreadsheets/d/1G0j8qUDnZEINd0b5DhAJ0vvshODE3rOSM7ERDTcdwkE/edit 접속
// 2. 상단 메뉴 확장 프로그램 > Apps Script 클릭
// 3. 기본 생성된 Code.gs 내용을 모두 지우고 이 파일 내용을 붙여넣기
// 4. 저장 (Ctrl+S)
// 5. 우측 상단 배포 > 배포 관리 → 기존 배포 편집(연필 아이콘)
//    - 버전: 새 버전
//    - 다음 계정으로 실행: 나(본인 계정)
//    - 액세스 권한이 있는 사용자: 전체
// 6. 배포 클릭 (코드만 저장하고 재배포하지 않으면 기존 웹 앱 URL에는 반영되지 않습니다)

const SPREADSHEET_ID = "1G0j8qUDnZEINd0b5DhAJ0vvshODE3rOSM7ERDTcdwkE";
const SHEET_NAME = "상담관리_마스터시트";
const NOTIFY_EMAILS = ["shchen74@naver.com", "ncate@naver.com"];

// 상담관리_마스터시트의 앞쪽 14개 열(번호~문의 내용) 순서에 맞춘 헤더입니다.
// 15번째 열(담당자)부터는 담당자가 상담 진행 중 수기로 채우는 항목이라 폼 제출 시에는 비워둡니다.
const HEADER = [
  "번호", "접수일시", "이름", "회사명", "연락처", "이메일", "행사명", "행사일",
  "설치 장소", "실내/야외", "예상 참석 인원", "필요한 서비스", "예산 범위", "문의 내용",
];

const FORM_FIELDS = [
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
    const sheet = getSheet();
    appendRow(sheet, data);
    sendNotificationEmail(data);
    return jsonResponse({ result: "success" });
  } catch (error) {
    return jsonResponse({ result: "error", message: String(error) });
  }
}

function getSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADER);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADER.length).setFontWeight("bold");
  }
  return sheet;
}

function appendRow(sheet, data) {
  const timestamp = Utilities.formatDate(new Date(), "Asia/Seoul", "yyyy-MM-dd HH:mm:ss");
  const services = Array.isArray(data.services) ? data.services.join(", ") : (data.services || "");
  const nextNumber = Math.max(sheet.getLastRow() - 1, 0) + 1;
  const totalColumns = Math.max(sheet.getLastColumn(), HEADER.length);

  const row = new Array(totalColumns).fill("");
  row[0] = nextNumber;
  row[1] = timestamp;
  row[2] = data.name || "";
  row[3] = data.company || "";
  row[4] = data.phone || "";
  row[5] = data.email || "";
  row[6] = data.eventName || "";
  row[7] = data.eventDate || "";
  row[8] = data.location || "";
  row[9] = data.indoorOutdoor || "";
  row[10] = data.attendees || "";
  row[11] = services;
  row[12] = data.budget || "";
  row[13] = data.message || "";

  sheet.appendRow(row);
}

function sendNotificationEmail(data) {
  const subject = `[LORD 상담 신청] ${data.eventName || data.name || "신규 문의"}`;
  const services = Array.isArray(data.services) ? data.services.join(", ") : (data.services || "");
  const body = FORM_FIELDS
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
