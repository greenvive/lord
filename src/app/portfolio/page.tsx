import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import CtaBanner from "@/components/CtaBanner";
import JsonLdScript from "@/components/JsonLdScript";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { portfolioItems } from "@/lib/content/portfolio";
import { portfolioBlurMap } from "@/lib/content/portfolio-blur";
import { withBasePath } from "@/lib/base-path";

const breadcrumb = [
  { name: "홈", href: "/" },
  { name: "설치 포트폴리오", href: "/portfolio" },
];

export const metadata: Metadata = {
  title: "설치 포트폴리오",
  description:
    "LORD가 진행한 무대 설치, 포토존 제작, 음향·조명·LED 시공 사례를 지역·행사유형 기준으로 확인할 수 있습니다.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLdScript data={breadcrumbJsonLd(breadcrumb)} />

      <PageHero
        breadcrumb={breadcrumb}
        h1="LORD 설치 포트폴리오"
        aiSummary="LORD 포트폴리오에서는 무대 설치, 포토존 제작, 음향·조명·LED·트러스 설치 사례를 행사 유형과 지역별로 확인할 수 있습니다. 각 사례는 행사명, 지역, 장소, 일자, 주최·주관 기준으로 정리하며, 시공 사례는 계속 업데이트됩니다."
        heroImageAlt="LORD 설치 포트폴리오 대표 이미지"
        heroImage={withBasePath("/images/hero/portfolio.jpg")}
        heroImageBlurDataURL={portfolioBlurMap["/images/hero/portfolio.jpg"]}
      />

      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl">
          <PortfolioGrid items={portfolioItems} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
