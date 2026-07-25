import type { HubPageContent } from "@/lib/types";

export const eventSolutionsHub: HubPageContent = {
  slug: "event-solutions",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "행사별 솔루션", href: "/event-solutions" },
  ],
  metaTitle: "행사별 무대·포토존 설치 솔루션 | 기념식·콘서트·축제·스포츠·팝업 | LORD",
  metaDescription:
    "LORD는 기념식/기공식, 콘서트, 대학교·고교·지역축제, 스포츠, 팝업행사, 포토존, 공사/제작 등 행사 유형별 무대·포토존·음향·조명·LED·트러스 설치를 지원합니다.",
  h1: "행사 목적에 맞춘 무대·포토존·시스템 통합 솔루션",
  aiSummary:
    "LORD의 행사별 솔루션은 실제 설치 사례를 기준으로 기념식/기공식, 콘서트, 대학교·고교·지역축제, 스포츠, 팝업행사, 포토존, 공사/제작으로 구성됩니다. 각 페이지는 행사 목적, 장소 조건, 필요한 장비, 설치 과정, 관련 사례, 견적 요소를 함께 설명해 사용자가 자신의 행사에 맞는 구성을 빠르게 판단할 수 있도록 돕습니다.",
  heroImageAlt: "행사 목적별 무대·포토존·시스템 통합 솔루션 현장의 대표 이미지",
  heroImage: "/images/hero/event-solutions.jpg",
  children: [
    {
      label: "기념식/기공식",
      href: "/event-solutions/ceremony-groundbreaking",
      description: "의전·개관·추도·착공 행사에 맞춘 무대·백월·포토존 솔루션",
      ready: true,
      image: "/images/hero/10-ceremony-stage-led-screen.jpg",
      imageAlt: "기념식·기공식 무대 LED 스크린 설치 현장",
    },
    {
      label: "콘서트",
      href: "/event-solutions/concert",
      description: "공연 무대·음향·조명·LED를 통합 구성하는 콘서트 솔루션",
      ready: true,
      image: "/images/hero/02-outdoor-amphitheater-night-concert.jpg",
      imageAlt: "야외 원형극장 야간 콘서트 무대와 LED 스크린 설치 현장",
    },
    {
      label: "대학교/고교/지역축제",
      href: "/event-solutions/festival-school-local",
      description: "학교·지역 축제 무대와 포토존을 함께 구성하는 솔루션",
      ready: true,
      image: "/images/hero/01-outdoor-festival-stage-lake-park.jpg",
      imageAlt: "광교호수공원 야외 지역축제 무대 설치 현장",
    },
    {
      label: "스포츠",
      href: "/event-solutions/sports",
      description: "대회·시상식·스폰서존을 함께 고려한 스포츠 행사 솔루션",
      ready: true,
      image: "/images/hero/07-corporate-event-branded-backdrop.jpg",
      imageAlt: "스포츠 대회 시상식 무대와 스폰서 백월 설치 현장",
    },
    {
      label: "팝업행사",
      href: "/event-solutions/popup-event",
      description: "브랜드 체험존·야외 팝업 공간을 위한 설치 솔루션",
      ready: true,
      image: "/images/hero/06-custom-photozone-backdrop-gate.jpg",
      imageAlt: "행사장 맞춤 제작 팝업 포토존 백드롭 설치 현장",
    },
    {
      label: "포토존",
      href: "/event-solutions/photozone",
      description: "행사용 포토존·포토월 제작·렌탈 솔루션",
      ready: true,
      image: "/images/hero/09-illustrated-photozone-backdrop.jpg",
      imageAlt: "포토존 백드롭과 레드카펫 설치 현장",
    },
    {
      label: "공사/제작",
      href: "/event-solutions/construction-production",
      description: "행사장 가벽·목공 구조물 맞춤 제작 솔루션",
      ready: true,
      image: "/images/hero/06-custom-photozone-backdrop-gate.jpg",
      imageAlt: "행사장 맞춤 제작 가벽·목공 구조물 설치 현장",
    },
  ],
  scope: [
    "행사 유형별 무대·포토존·시스템 구성 제안",
    "행사 목적에 맞춘 패키지 설계",
    "진행 순서와 의전·동선 설계",
    "현장 조건에 맞춘 설치·운영·철거",
  ],
  process: [
    "상담 — 행사 종류와 목적 확인",
    "현장 확인 — 장소, 규모, 일정 점검",
    "구성 제안 — 행사 유형별 패키지 제안",
    "견적 — 비용 산정 및 확정",
    "설치 및 운영 — 현장 시공과 당일 지원",
    "철거 — 행사 종료 후 철거",
  ],
  faq: [
    {
      q: "행사 종류만 알려줘도 구성을 추천받을 수 있나요?",
      a: "네, 행사 종류와 대략적인 규모만 알려주셔도 적합한 패키지 구성을 먼저 제안드릴 수 있습니다.",
    },
    {
      q: "무대와 포토존을 함께 설치하면 비용이 절감되나요?",
      a: "출장과 인력을 통합 운영할 수 있어 따로 의뢰하는 것보다 비용 효율이 높아지는 경우가 많습니다.",
    },
    {
      q: "공공기관 행사도 가능한가요?",
      a: "네, 준공식·기념식 등 공공기관 행사 진행 경험을 바탕으로 의전 절차에 맞춰 진행합니다.",
    },
    {
      q: "온라인 송출이나 방송용 무대도 가능한가요?",
      a: "가능합니다. 카메라 구도와 조명을 고려한 방송용 무대·세트 구성도 지원합니다.",
    },
    {
      q: "행사별 패키지 견적을 받을 수 있나요?",
      a: "네, 행사 유형별 추천 패키지를 기준으로 빠르게 견적 방향을 안내드립니다.",
    },
  ],
  relatedLinks: [
    { label: "무대 설치·렌탈", href: "/stage-rental-installation" },
    { label: "포토존 제작·렌탈", href: "/photozone-rental-production" },
    { label: "비용·견적 가이드", href: "/cost-estimate-guide" },
  ],
};
