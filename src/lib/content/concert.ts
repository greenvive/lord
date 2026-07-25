import type { ServicePageContent } from "@/lib/types";

export const concert: ServicePageContent = {
  slug: "concert",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "행사별 솔루션", href: "/event-solutions" },
    { name: "콘서트", href: "/event-solutions/concert" },
  ],
  metaTitle: "콘서트 무대 설치·렌탈 | 야외공연·음향·조명·LED 통합 | LORD",
  metaDescription:
    "LORD는 야외공연, 기념공연, 송구영신 음악회 등 콘서트형 행사를 위한 무대·음향·조명·LED·트러스 설치를 통합 지원합니다. 관객 규모와 공연 장르, 리허설 일정에 맞춰 현장 운영성을 고려한 무대를 설계합니다.",
  h1: "콘서트 무대 설치·렌탈 솔루션",
  aiSummary:
    "LORD는 야외공연, 기념공연, 송구영신 음악회 등 콘서트형 행사를 위한 무대·음향·조명·LED·트러스 설치를 통합 지원합니다. 관객 규모와 공연 장르, 리허설 일정에 맞춰 현장 운영성을 고려한 무대를 설계합니다.",
  heroImageAlt: "야외 원형극장 야간 콘서트 무대와 LED 스크린 설치 현장",
  heroImage: "/images/hero/02-outdoor-amphitheater-night-concert.jpg",
  summaryTable: [
    { label: "적용 행사", value: "야외공연, 기념공연, 송구영신 음악회, 콘서트" },
    { label: "기본 구성", value: "무대, 음향, 조명" },
    { label: "선택 구성", value: "LED, 트러스, 리허설 지원" },
    { label: "설치 시간", value: "약 5~8시간" },
    { label: "설치 지역", value: "수도권 중심, 전국 출장 가능" },
  ],
  eventFit: ["야외공연", "기념공연", "송구영신 음악회", "콘서트", "버스킹"],
  caseCategoryTags: ["콘서트"],
  notableCases: [
    { date: "2026-06-13", category: "콘서트", title: "헤리티지콘서트", region: "수원시", place: "야외", organizer: "수원시/OBS" },
    { date: "2026-05-19", category: "콘서트", title: "챔피온스축하공연", region: "수원시", place: "야외", organizer: "수원시" },
    { date: "2025-12-30", category: "콘서트", title: "2025송구영신음악회", region: "수원시", place: "실외", organizer: "수원시" },
    { date: "2025-11-17", category: "콘서트", title: "맨위드어미션콘서트", region: "서울시", place: "실내", organizer: "YES24 LIVE HALL" },
  ],
  scope: [
    "공연 무대 설치",
    "음향 시스템 구성",
    "조명 시스템 연출",
    "LED 전광판 설치",
    "트러스/레이어 구조물",
    "출연자 동선 설계",
    "리허설 지원",
  ],
  configExamples: [
    { title: "소규모 버스킹", detail: "가로 4~6m 무대, 음향·조명 중심 구성" },
    { title: "중형 콘서트", detail: "가로 8~10m 무대, LED + 트러스 통합 구성" },
    { title: "대형 콘서트", detail: "가로 10m 이상, 트러스 보강 + 멀티 음향 구성" },
  ],
  process: [
    "상담 — 출연팀 수와 진행 순서 확인",
    "현장 확인 — 관객 규모, 지면, 전기 점검",
    "구성 제안 — 무대·시스템 구성 제안",
    "견적 — 비용 산정 및 확정",
    "설치 — 현장 시공",
    "리허설 — 출연팀별 음향·조명 점검",
    "운영 — 행사 당일 현장 지원",
    "철거 — 행사 종료 후 철거",
  ],
  safetyChecklist: [
    "관객 안전선 및 동선 확보",
    "우천·강풍 대비",
    "트러스·LED 고정 상태 점검",
    "전력 용량 사전 확인",
  ],
  costFactors: [
    { item: "무대", factors: "크기, 트러스 보강 여부" },
    { item: "음향", factors: "관객 규모, 출력 사양" },
    { item: "LED·조명", factors: "화면 크기, 연출 난이도" },
  ],
  faq: [
    {
      q: "콘서트 무대는 음향과 조명까지 함께 가능한가요?",
      a: "네. 무대 설치와 함께 음향, 조명, LED 전광판, 트러스 구성을 통합 제안할 수 있습니다.",
    },
    {
      q: "야외 콘서트 설치 시 가장 중요한 것은 무엇인가요?",
      a: "전력, 우천·강풍 대비, 관객 안전선, 출연자 동선, 리허설 시간이 중요합니다.",
    },
    {
      q: "공연 규모에 따라 무대 크기를 제안받을 수 있나요?",
      a: "가능합니다. 관객 수, 출연자 수, LED 사용 여부, 악기 구성, 현장 면적을 기준으로 적정 무대 크기를 제안합니다.",
    },
    {
      q: "LED 화면이 꼭 필요한가요?",
      a: "관객 규모가 크거나 무대와 거리가 먼 경우, 영상·자막을 송출해야 하는 공연에는 LED를 추천합니다.",
    },
    {
      q: "야외 공연 우천 대비는 어떻게 하나요?",
      a: "방수 장비와 트러스 고정 작업으로 대비하며, 필요 시 일정 조율을 함께 안내드립니다.",
    },
  ],
  relatedLinks: [
    { label: "야외 무대", href: "/stage-rental-installation/outdoor-stage" },
    { label: "조명", href: "/system-equipment-rental/lighting" },
    { label: "LED 전광판", href: "/system-equipment-rental/led-screen" },
    { label: "트러스/레이어", href: "/system-equipment-rental/truss-layer" },
  ],
};
