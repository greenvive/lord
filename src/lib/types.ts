export interface Breadcrumb {
  name: string;
  href: string;
}

export interface SummaryRow {
  label: string;
  value: string;
}

export interface ConfigExample {
  title: string;
  detail: string;
}

export interface CostFactor {
  item: string;
  factors: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface RelatedLink {
  label: string;
  href: string;
}

export interface CaseStudyRow {
  date: string;
  category: string;
  title: string;
  region: string;
  place: string;
  organizer: string;
}

export interface ServicePageContent {
  slug: string;
  breadcrumb: Breadcrumb[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  aiSummary: string;
  heroImageAlt: string;
  heroImage: string;
  summaryTable: SummaryRow[];
  eventFit: string[];
  /** 이 페이지가 매칭할 portfolio.category 값 목록 (관련 포트폴리오 필터링 + 대표 사례 표에 사용). 없으면 기존 방식(배열 앞 2건)으로 표시 */
  caseCategoryTags?: string[];
  notableCases?: CaseStudyRow[];
  scope: string[];
  configExamples: ConfigExample[];
  process: string[];
  safetyChecklist: string[];
  costFactors: CostFactor[];
  faq: FaqItem[];
  relatedLinks: RelatedLink[];
}

export interface HubChildCard {
  label: string;
  href: string;
  description: string;
  ready: boolean;
  /** 이미지 기반 카드(SolutionCard)를 쓰려면 지정. 없으면 기존 ServiceCard(텍스트 카드)로 렌더링됨 */
  image?: string;
  imageAlt?: string;
}

export interface HubPageContent {
  slug: string;
  breadcrumb: Breadcrumb[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  aiSummary: string;
  heroImageAlt: string;
  heroImage: string;
  children: HubChildCard[];
  scope: string[];
  process: string[];
  faq: FaqItem[];
  relatedLinks: RelatedLink[];
}

export interface PortfolioImage {
  src: string;
  alt: string;
  blurDataURL?: string;
}

export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  place: string;
  date: string;
  region: string;
  organizer: string;
  folder: string;
  image: string;
  imageAlt: string;
  imageBlurDataURL?: string;
  cardImage: string;
  cardImageBlurDataURL?: string;
  images: PortfolioImage[];
}
