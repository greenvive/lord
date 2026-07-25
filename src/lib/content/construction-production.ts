import type { ServicePageContent } from "@/lib/types";

export const constructionProduction: ServicePageContent = {
  slug: "construction-production",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "행사별 솔루션", href: "/event-solutions" },
    { name: "공사/제작", href: "/event-solutions/construction-production" },
  ],
  metaTitle: "행사 공간 공사·제작 | 가벽·도어·목공 구조물 제작 | LORD",
  metaDescription:
    "LORD는 행사장과 문화공간에 필요한 가벽, 스윙도어, 목공 구조물, 백월, 임시 시설물 제작을 지원합니다. 현장 치수와 마감, 동선, 철거성을 고려해 안전하고 깔끔한 결과물을 제공합니다.",
  h1: "행사 공간 공사·제작 솔루션",
  aiSummary:
    "LORD는 행사장과 문화공간에 필요한 가벽, 스윙도어, 목공 구조물, 백월, 임시 시설물 제작을 지원합니다. 현장 치수와 마감, 동선, 철거성을 고려해 안전하고 깔끔한 결과물을 제공합니다.",
  heroImageAlt: "행사장 맞춤 제작 가벽·목공 구조물 설치 현장",
  heroImage: "/images/hero/06-custom-photozone-backdrop-gate.jpg",
  summaryTable: [
    { label: "적용 상황", value: "문화공간 리뉴얼, 전시 가벽 공사, 행사장 임시 구조물" },
    { label: "기본 구성", value: "가벽, 목공 구조물" },
    { label: "선택 구성", value: "스윙도어, 백월, 임시 벽체" },
    { label: "설치 기간", value: "현장 규모에 따라 상이 (사전 실측 후 안내)" },
    { label: "설치 지역", value: "수도권 중심, 전국 출장 가능" },
  ],
  eventFit: ["문화공간 리뉴얼", "전시 가벽 공사", "행사장 임시 구조물 제작"],
  caseCategoryTags: ["공사/제작"],
  notableCases: [
    { date: "2025-12-29", category: "공사/제작", title: "경기아트센터스윙도어제작", region: "수원시", place: "실내", organizer: "수원시" },
    { date: "2025-12-03", category: "공사/제작", title: "수원문화재단가벽공사", region: "수원시", place: "실내", organizer: "수원문화재단" },
  ],
  scope: [
    "가벽 제작·시공",
    "스윙도어 제작",
    "목공 구조물 제작",
    "백월 제작",
    "임시 벽체 시공",
    "현장 맞춤 제작",
    "설치·철거",
  ],
  configExamples: [
    { title: "소규모 가벽 공사", detail: "가벽 + 마감재 시공" },
    { title: "문화공간 구조물 제작", detail: "목공 구조물 + 스윙도어 통합 제작" },
  ],
  process: [
    "상담 — 공간 용도와 제작 목적 확인",
    "현장 실측 — 치수, 동선, 마감 상태 확인",
    "제작 설계 — 가벽·구조물 도면 제안",
    "견적 — 비용 산정 및 확정",
    "제작·설치 — 현장 시공",
    "마감 확인 — 완성도와 안전성 점검",
    "철거 — 사용 종료 후 철거",
  ],
  safetyChecklist: [
    "현장 실측 오차 확인",
    "마감재 안전성 점검",
    "철거 시 원상복구 여부 확인",
    "설치 하중 점검",
  ],
  costFactors: [
    { item: "가벽·구조물", factors: "규모, 마감재" },
    { item: "도어", factors: "수량, 소재" },
    { item: "설치·철거", factors: "현장 접근성, 기간" },
  ],
  faq: [
    {
      q: "행사장 가벽이나 임시 구조물 제작도 가능한가요?",
      a: "가능합니다. 수원문화재단 가벽공사, 경기아트센터 스윙도어 제작과 같은 맞춤 제작 사례가 있습니다.",
    },
    {
      q: "제작물은 사용 후 철거까지 가능한가요?",
      a: "가능합니다. 제작 단계에서부터 설치 안전성과 철거 편의성을 함께 고려해 설계합니다.",
    },
    {
      q: "목공 제작물도 포토존이나 무대와 연계할 수 있나요?",
      a: "네, 백월, 가벽, 자체 구조물, 포토존 오브제 등으로 무대·포토존과 함께 연계할 수 있습니다.",
    },
    {
      q: "현장 실측부터 진행하나요?",
      a: "네, 정확한 제작을 위해 현장 실측을 우선 진행한 뒤 설계와 견적을 안내합니다.",
    },
    {
      q: "마감재는 원하는 색상이나 소재로 지정할 수 있나요?",
      a: "가능합니다. 공간 용도와 브랜드 톤에 맞춰 마감재와 색상을 협의해 제작합니다.",
    },
  ],
  relatedLinks: [
    { label: "포토월·백월", href: "/photozone-rental-production/photowall-backwall" },
    { label: "트러스/레이어", href: "/system-equipment-rental/truss-layer" },
    { label: "설치 포트폴리오", href: "/portfolio" },
  ],
};
