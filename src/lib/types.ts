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
