import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import GalleryViewer from "@/components/GalleryViewer";
import CtaBanner from "@/components/CtaBanner";
import JsonLdScript from "@/components/JsonLdScript";
import { breadcrumbJsonLd, articleJsonLd } from "@/lib/jsonld";
import { portfolioItems, getPortfolioBySlug } from "@/lib/content/portfolio";
import { withBasePath } from "@/lib/base-path";

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);
  if (!item) return {};
  return {
    title: `${item.title} 시공 사례`,
    description: `${item.region}에서 진행된 ${item.title}(${item.category}) 설치 사례 현장 사진입니다. 장소: ${item.place}, 일자: ${item.date}, 주최·주관: ${item.organizer}.`,
    alternates: { canonical: `/portfolio/${item.slug}` },
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getPortfolioBySlug(slug);
  if (!item) notFound();

  const breadcrumb = [
    { name: "홈", href: "/" },
    { name: "설치 포트폴리오", href: "/portfolio" },
    { name: item.title, href: `/portfolio/${item.slug}` },
  ];

  return (
    <>
      <JsonLdScript
        data={[
          breadcrumbJsonLd(breadcrumb),
          articleJsonLd({
            headline: item.title,
            description: item.imageAlt,
            url: `/portfolio/${item.slug}`,
          }),
        ]}
      />

      <PageHero
        breadcrumb={breadcrumb}
        h1={item.title}
        aiSummary={`${item.region} ${item.place}에서 진행된 ${item.category} 행사입니다. 주최·주관: ${item.organizer} / 일자: ${item.date}.`}
        heroImageAlt={item.imageAlt}
        heroImage={withBasePath(item.image)}
      />

      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl space-y-10">
          <div className="grid gap-4 rounded-2xl border border-black/10 bg-lord-cream/60 px-6 py-5 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <p><span className="font-bold text-lord-black">행사유형</span> {item.category}</p>
            <p><span className="font-bold text-lord-black">장소</span> {item.place}</p>
            <p><span className="font-bold text-lord-black">일자</span> {item.date}</p>
            <p><span className="font-bold text-lord-black">지역</span> {item.region}</p>
            <p><span className="font-bold text-lord-black">주최·주관</span> {item.organizer}</p>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-lord-black sm:text-3xl">현장 사진</h2>
            <p className="body-copy mt-3 text-sm">좌우 버튼을 눌러 현장 사진을 넘겨 볼 수 있습니다.</p>
            <div className="mt-6">
              <GalleryViewer images={item.images} />
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
