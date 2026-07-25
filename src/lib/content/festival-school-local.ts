import type { ServicePageContent } from "@/lib/types";

export const festivalSchoolLocal: ServicePageContent = {
  slug: "festival-school-local",
  breadcrumb: [
    { name: "홈", href: "/" },
    { name: "행사별 솔루션", href: "/event-solutions" },
    { name: "대학교/고교/지역축제", href: "/event-solutions/festival-school-local" },
  ],
  metaTitle: "학교·지역축제 무대 설치 | 대학교·고교·지역행사 통합 시공 | LORD",
  metaDescription:
    "LORD는 대학교축제, 고교축제, 지역축제를 위한 무대·음향·조명·포토존·부스 설치를 지원합니다. 관객 동선, 출연자 대기, 안전관리, 야외 변수까지 고려해 축제형 행사 공간을 구성합니다.",
  h1: "대학교·고교·지역축제 무대 설치 솔루션",
  aiSummary:
    "LORD는 대학교축제, 고교축제, 지역축제를 위한 무대·음향·조명·포토존·부스 설치를 지원합니다. 관객 동선, 출연자 대기, 안전관리, 야외 변수까지 고려해 축제형 행사 공간을 구성합니다.",
  heroImageAlt: "광교호수공원 야외 지역축제 무대 설치 현장",
  heroImage: "/images/hero/01-outdoor-festival-stage-lake-park.jpg",
  summaryTable: [
    { label: "적용 행사", value: "대학교축제, 고교축제, 지역축제" },
    { label: "기본 구성", value: "무대, 음향, 조명" },
    { label: "선택 구성", value: "포토존, 부스/구조물, 트러스" },
    { label: "설치 시간", value: "약 4~7시간" },
    { label: "설치 지역", value: "수도권 중심, 전국 출장 가능" },
  ],
  eventFit: ["대학교축제", "고교축제", "지역축제"],
  caseCategoryTags: ["대학교축제", "고교축제", "지역축제"],
  scope: [
    "축제 무대 설치",
    "음향·조명 구성",
    "포토존 구성",
    "트러스 구조물",
    "부스/구조물 설치",
    "관객 동선 설계",
    "야외 안전 대응",
  ],
  configExamples: [
    { title: "소규모 고교축제", detail: "가로 5~6m 무대, 음향·조명 중심 구성" },
    { title: "대학교 축제", detail: "가로 8m 이상, 트러스 + 포토존 통합 구성" },
    { title: "지역축제", detail: "무대 + 부스/구조물 + 안전 동선 통합 구성" },
  ],
  process: [
    "상담 — 행사 규모와 참여 학생·주민 수 확인",
    "현장 확인 — 운동장·광장 조건, 우천 대비 점검",
    "구성 제안 — 무대·시스템 구성 제안",
    "견적 — 비용 산정 및 확정",
    "설치 — 현장 시공",
    "운영 — 행사 당일 현장 지원",
    "철거 — 행사 종료 후 철거",
  ],
  safetyChecklist: [
    "관객 안전선 확보",
    "우천 대비 천막·방수 준비",
    "장비 반입 동선 확보",
    "전력 용량 확인",
  ],
  costFactors: [
    { item: "무대", factors: "크기, 트러스 보강 여부" },
    { item: "포토존", factors: "디자인, 설치 위치" },
    { item: "부스·구조물", factors: "수량, 규모" },
  ],
  faq: [
    {
      q: "학교축제와 지역축제를 한 메뉴로 묶은 이유는 무엇인가요?",
      a: "관객 참여형 야외·실내 행사라는 공통점이 있고, 무대·음향·조명·포토존·안전 동선 구성이 유사하기 때문입니다.",
    },
    {
      q: "축제 무대는 당일 설치와 철거가 가능한가요?",
      a: "현장 규모와 장비 구성에 따라 가능하지만, 대형 무대나 LED·트러스가 포함되면 전날 설치가 더 안정적입니다.",
    },
    {
      q: "학생 참여 행사에 맞는 포토존도 같이 제작할 수 있나요?",
      a: "가능합니다. 학교 로고, 행사명, 동아리 콘셉트, SNS 촬영 구도를 반영해 포토존을 함께 구성할 수 있습니다.",
    },
    {
      q: "지역축제처럼 참여 인원이 많은 행사도 진행하나요?",
      a: "네, 관객 규모에 맞춰 안전 동선과 스피커 배치를 조정해 진행합니다.",
    },
    {
      q: "우천 시에도 축제 진행이 가능한가요?",
      a: "가능합니다. 천막, 방수 장비, 전기 안전 점검을 사전에 준비해 대비합니다.",
    },
  ],
  relatedLinks: [
    { label: "야외 무대", href: "/stage-rental-installation/outdoor-stage" },
    { label: "포토존 제작·렌탈", href: "/photozone-rental-production" },
    { label: "트러스/레이어", href: "/system-equipment-rental/truss-layer" },
    { label: "비용·견적 가이드", href: "/cost-estimate-guide" },
  ],
};
