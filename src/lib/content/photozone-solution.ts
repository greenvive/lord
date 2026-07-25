import type { ServicePageContent } from "@/lib/types";

export const photozoneSolution: ServicePageContent = {
  slug: "photozone",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "행사별 솔루션", href: "/event-solutions" },
    { name: "포토존", href: "/event-solutions/photozone" },
  ],
  metaTitle: "행사 포토존 제작·렌탈 | 학교·기업·브랜드 포토월 설치 | LORD",
  metaDescription:
    "LORD는 학교축제, 동아리축제, 기업행사, 브랜드 행사에 어울리는 포토존·포토월·백월 제작 및 렌탈을 지원합니다. 로고 노출, 사진 구도, 야간 조명, SNS 확산성을 고려해 제작합니다.",
  h1: "행사 포토존 제작·렌탈 솔루션",
  aiSummary:
    "LORD는 학교축제, 동아리축제, 기업행사, 브랜드 행사에 어울리는 포토존·포토월·백월 제작 및 렌탈을 지원합니다. 로고 노출, 사진 구도, 야간 조명, SNS 확산성을 고려해 제작합니다.",
  heroImageAlt: "포토존 백드롭과 레드카펫 설치 현장",
  heroImage: "/images/hero/09-illustrated-photozone-backdrop.jpg",
  summaryTable: [
    { label: "적용 행사", value: "학교축제, 동아리축제, 기업행사, 브랜드 행사" },
    { label: "기본 구성", value: "포토월, 백월, 조명" },
    { label: "선택 구성", value: "입체 포토존, 로고월, 레드카펫" },
    { label: "설치 시간", value: "약 2~4시간" },
    { label: "설치 지역", value: "수도권 중심, 전국 출장 가능" },
  ],
  eventFit: ["학교축제", "동아리축제", "기업행사", "브랜드 행사"],
  caseCategoryTags: ["포토존"],
  notableCases: [
    { date: "2026-05-12", category: "포토존", title: "덕성여대축제", region: "서울시", place: "야외", organizer: "덕성여대" },
    { date: "2026-03-24", category: "포토존", title: "성균관대동아리축제", region: "서울시", place: "야외", organizer: "성균관대" },
  ],
  scope: [
    "포토월 제작",
    "백월 제작",
    "입체 포토존 구성",
    "로고월 제작",
    "조명 설치",
    "레드카펫 설치",
    "SNS 촬영 동선 설계",
  ],
  configExamples: [
    { title: "학교축제 포토존", detail: "로고월 + 조명 중심 구성" },
    { title: "기업행사 포토존", detail: "백월 + 레드카펫 통합 구성" },
  ],
  process: [
    "상담 — 행사 콘셉트와 촬영 목적 확인",
    "현장 확인 — 설치 공간, 조명 여건 점검",
    "구성 제안 — 포토월·백월 구성 제안",
    "견적 — 비용 산정 및 확정",
    "설치 — 현장 시공",
    "운영 — 행사 당일 현장 지원",
    "철거 — 행사 종료 후 철거",
  ],
  safetyChecklist: [
    "야외 설치 시 바람·우천 대비",
    "바닥 고정 상태 확인",
    "야간 조명 밝기 점검",
    "촬영 대기 동선 확보",
  ],
  costFactors: [
    { item: "포토월·백월", factors: "디자인, 출력 소재" },
    { item: "조명", factors: "수량, 밝기" },
    { item: "부속물", factors: "레드카펫, 로고월 추가 여부" },
  ],
  faq: [
    {
      q: "포토존 제작과 렌탈 중 어떤 것이 좋나요?",
      a: "단기 행사와 예산 효율이 중요하면 렌탈형이 적합하고, 브랜드 콘셉트나 로고 노출이 중요하면 제작형이 적합합니다.",
    },
    {
      q: "야외 포토존 설치 시 주의할 점은 무엇인가요?",
      a: "바람, 우천, 바닥 고정, 야간 조명, 관람객 동선, 촬영 대기 공간을 고려해야 합니다.",
    },
    {
      q: "학교축제나 기업행사 포토존도 가능한가요?",
      a: "가능합니다. 실제 학교축제와 동아리축제 포토존 사례를 기반으로 행사 성격에 맞는 구성을 제안할 수 있습니다.",
    },
    {
      q: "포토존과 무대를 함께 설치할 수 있나요?",
      a: "네, 무대 디자인 톤에 맞춰 포토존 백월과 로고 배치를 통일해 함께 설치할 수 있습니다.",
    },
    {
      q: "행사 종료 후 당일 철거가 가능한가요?",
      a: "가능합니다. 포토존 규모와 설치 방식에 따라 당일 설치·철거 일정을 조율합니다.",
    },
  ],
  relatedLinks: [
    { label: "포토존 제작·렌탈", href: "/photozone-rental-production" },
    { label: "포토월·백월", href: "/photozone-rental-production/photowall-backwall" },
    { label: "조명", href: "/system-equipment-rental/lighting" },
  ],
};
