import Image from "next/image";
import type { Breadcrumb } from "@/lib/types";
import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";

interface PageHeroProps {
  breadcrumb: Breadcrumb[];
  h1: string;
  aiSummary: string;
  heroImageAlt: string;
  heroImage: string;
}

export default function PageHero({ breadcrumb, h1, aiSummary, heroImageAlt, heroImage }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-lord-black px-5 pb-20 pt-10 text-white">
      <div className="absolute inset-0 -z-10" aria-hidden>
        <Image
          src={heroImage}
          alt={heroImageAlt}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black/90" />
        <div
          className="absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #FF6A00 0%, transparent 70%)" }}
        />
      </div>
      <div className="relative mx-auto max-w-4xl py-10 sm:py-16">
        <Breadcrumbs items={breadcrumb} />
        <h1 className="hero-title mt-5 max-w-3xl">{h1}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{aiSummary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/about-contact" variant="primary">빠른 견적 문의</Button>
          <Button href="/portfolio" variant="secondary">포트폴리오 보기</Button>
        </div>
      </div>
    </section>
  );
}
