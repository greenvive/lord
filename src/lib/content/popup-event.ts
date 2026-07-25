import type { ServicePageContent } from "@/lib/types";

export const popupEvent: ServicePageContent = {
  slug: "popup-event",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "행사별 솔루션", href: "/event-solutions" },
    { name: "팝업행사", href: "/event-solutions/popup-event" },
  ],
  metaTitle: "팝업행사 공간 설치 | 브랜드 체험존·테마파크·포토존 제작 | LORD",
  metaDescription:
    "LORD는 브랜드 팝업, 기념 테마파크, 체험존 행사에 필요한 포토존, 구조물, 사인물, 동선 연출, 야외 설치를 지원합니다. 방문객이 사진을 찍고 이동하기 쉬운 체험형 공간을 설계합니다.",
  h1: "팝업행사 공간 설치 솔루션",
  aiSummary:
    "LORD는 브랜드 팝업, 기념 테마파크, 체험존 행사에 필요한 포토존, 구조물, 사인물, 동선 연출, 야외 설치를 지원합니다. 방문객이 사진을 찍고 이동하기 쉬운 체험형 공간을 설계합니다.",
  heroImageAlt: "행사장 맞춤 제작 팝업 포토존 백드롭 설치 현장",
  heroImage: "/images/hero/06-custom-photozone-backdrop-gate.jpg",
  summaryTable: [
    { label: "적용 행사", value: "브랜드 팝업, 기념 테마파크, 체험존 행사" },
    { label: "기본 구성", value: "포토존, 체험존 구조물, 사인물" },
    { label: "선택 구성", value: "조명, 오브제, 테마 공간" },
    { label: "설치 시간", value: "약 3~6시간" },
    { label: "설치 지역", value: "수도권 중심, 전국 출장 가능" },
  ],
  eventFit: ["브랜드 팝업", "기념 테마파크", "체험존 행사"],
  caseCategoryTags: ["팝업행사"],
  notableCases: [
    { date: "2026-06-26", category: "팝업행사", title: "메모리얼 테마파크", region: "수원시", place: "야외", organizer: "경기남부보훈지청" },
  ],
  scope: [
    "브랜드 포토존 구성",
    "체험존 구조물 설치",
    "사인물 제작",
    "테마 공간 연출",
    "야외 설치물 시공",
    "동선 연출",
    "SNS 촬영 구도 설계",
  ],
  configExamples: [
    { title: "소규모 브랜드 팝업", detail: "포토존 + 사인물 중심 구성" },
    { title: "체험형 테마파크", detail: "체험존 구조물 + 포토존 + 동선 연출 통합 구성" },
  ],
  process: [
    "상담 — 브랜드 콘셉트와 체험 목적 확인",
    "현장 확인 — 공간 조건, 야외 여부 점검",
    "구성 제안 — 포토존·체험존 구성 제안",
    "견적 — 비용 산정 및 확정",
    "설치 — 현장 시공",
    "운영 — 행사 당일 현장 지원",
    "철거 — 행사 종료 후 철거",
  ],
  safetyChecklist: [
    "야외 바닥 고정 방식 확인",
    "야간 조명·전기 안전 점검",
    "보행자 동선 확보",
    "우천 대비 준비",
  ],
  costFactors: [
    { item: "포토존", factors: "디자인, 설치 위치" },
    { item: "체험존 구조물", factors: "규모, 소재" },
    { item: "사인물", factors: "수량, 크기" },
  ],
  faq: [
    {
      q: "팝업행사 설치는 포토존과 어떻게 다른가요?",
      a: "포토존은 촬영 중심이고, 팝업행사는 브랜드 체험, 이동 동선, 전시 구조물, 운영 공간까지 포함하는 경우가 많습니다.",
    },
    {
      q: "야외 팝업도 설치 가능한가요?",
      a: "가능합니다. 단, 날씨, 바닥 고정 방식, 전기, 야간 조명, 보행자 동선을 고려해야 합니다.",
    },
    {
      q: "SNS 확산을 고려한 공간 구성이 가능한가요?",
      a: "가능합니다. 정면 촬영 구도, 로고 위치, 조명, 대기 동선, 해시태그 노출 위치를 함께 설계합니다.",
    },
    {
      q: "짧은 기간 운영하는 팝업도 진행할 수 있나요?",
      a: "네, 단기 운영에 맞춰 설치·철거 일정을 조율하고, 렌탈형 구성으로 비용 효율을 높일 수 있습니다.",
    },
    {
      q: "체험존과 무대를 함께 구성할 수 있나요?",
      a: "가능합니다. 행사 규모에 따라 체험존, 포토존과 함께 소규모 무대나 진행 공간을 통합 설계할 수 있습니다.",
    },
  ],
  relatedLinks: [
    { label: "포토존 제작·렌탈", href: "/photozone-rental-production" },
    { label: "브랜드 포토존", href: "/photozone-rental-production/brand-photozone" },
    { label: "조명", href: "/system-equipment-rental/lighting" },
  ],
};
