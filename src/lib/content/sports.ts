import type { ServicePageContent } from "@/lib/types";

export const sports: ServicePageContent = {
  slug: "sports",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "행사별 솔루션", href: "/event-solutions" },
    { name: "스포츠", href: "/event-solutions/sports" },
  ],
  metaTitle: "스포츠 행사 무대 설치 | 시상식·중계·스폰서존 구성 | LORD",
  metaDescription:
    "LORD는 테니스, 당구, 스포츠 세미나 등 스포츠 행사에 필요한 시상식 무대, 중계·스폰서 노출, 포토월, 관람 동선을 통합 구성합니다. 실내외 경기장 조건과 브랜드 노출을 고려한 설치가 가능합니다.",
  h1: "스포츠 행사 무대 설치 솔루션",
  aiSummary:
    "LORD는 테니스, 당구, 스포츠 세미나 등 스포츠 행사에 필요한 시상식 무대, 중계·스폰서 노출, 포토월, 관람 동선을 통합 구성합니다. 실내외 경기장 조건과 브랜드 노출을 고려한 설치가 가능합니다.",
  heroImageAlt: "스포츠 대회 시상식 무대와 스폰서 백월 설치 현장",
  heroImage: "/images/hero/07-corporate-event-branded-backdrop.jpg",
  summaryTable: [
    { label: "적용 행사", value: "테니스대회, 당구대회, 스포츠 세미나, 체육대회" },
    { label: "기본 구성", value: "시상식 무대, 스폰서 백월, 음향" },
    { label: "선택 구성", value: "포토월, 중계석, 조명" },
    { label: "설치 시간", value: "약 3~5시간" },
    { label: "설치 지역", value: "수도권 중심, 전국 출장 가능" },
  ],
  eventFit: ["테니스대회", "당구대회", "스포츠 세미나", "체육대회", "시상식"],
  caseCategoryTags: ["스포츠"],
  scope: [
    "시상식 무대 설치",
    "스폰서 백월 구성",
    "포토월 설치",
    "중계·브랜드 노출 구역 구성",
    "음향 설치",
    "관람객·선수·운영진 동선 분리",
    "실내외 설치",
  ],
  configExamples: [
    { title: "소규모 시상식", detail: "시상무대 + 스폰서 백월 중심 구성" },
    { title: "실내 경기장 대회", detail: "시상무대 + 포토월 + 중계석 통합 구성" },
    { title: "야외 스포츠 대회", detail: "본부석 + 시상무대 + 분산형 음향 구성" },
  ],
  process: [
    "상담 — 대회 목적과 시상 규모 확인",
    "현장 확인 — 경기장 반입 동선, 전기 점검",
    "구성 제안 — 시상무대·백월 구성 제안",
    "견적 — 비용 산정 및 확정",
    "설치 — 현장 시공",
    "운영 — 행사 당일 현장 지원",
    "철거 — 행사 종료 후 철거",
  ],
  safetyChecklist: [
    "관람객·선수·운영진 동선 분리",
    "시상무대 주변 안전선 설치",
    "경기장 바닥 보호 조치",
    "전기 배선 안전 점검",
  ],
  costFactors: [
    { item: "무대", factors: "규모, 시상대 포함 여부" },
    { item: "스폰서 백월", factors: "로고 수량, 크기" },
    { item: "음향", factors: "경기장 규모, 스피커 수량" },
  ],
  faq: [
    {
      q: "스포츠 행사에는 어떤 무대가 필요한가요?",
      a: "개회식·폐회식·시상식용 무대, 스폰서 백월, 포토월, 관람객 동선과 분리된 운영 구역이 필요합니다.",
    },
    {
      q: "실내 경기장에도 설치가 가능한가요?",
      a: "가능합니다. 바닥 보호, 장비 반입 동선, 천장고, 전기 용량, 관람석 시야를 사전에 확인해야 합니다.",
    },
    {
      q: "스폰서 로고 노출도 고려해주나요?",
      a: "네. 백월, 포토월, 시상대, LED 화면, 사인물 위치를 통해 브랜드 노출이 잘 보이도록 구성합니다.",
    },
    {
      q: "체육대회처럼 참가 인원이 많은 행사도 가능한가요?",
      a: "가능합니다. 본부석·시상무대와 함께 분산형 음향 구성으로 넓은 운동장에서도 진행 음성이 잘 전달되도록 구성합니다.",
    },
    {
      q: "방송·중계용 촬영 구도도 고려해주나요?",
      a: "네, 중계 카메라 위치와 브랜드 노출 구역을 함께 고려해 무대와 백월 배치를 설계합니다.",
    },
  ],
  relatedLinks: [
    { label: "야외 무대", href: "/stage-rental-installation/outdoor-stage" },
    { label: "음향", href: "/system-equipment-rental/sound" },
    { label: "조명", href: "/system-equipment-rental/lighting" },
  ],
};
