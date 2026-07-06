import Image from "next/image";
import Link from "next/link";
import type { PortfolioItem } from "@/lib/types";
import { withBasePath } from "@/lib/base-path";

export default function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <Link href={`/portfolio/${item.slug}`} className="portfolio-card block transition hover:-translate-y-1">
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={withBasePath(item.image)}
          alt={item.imageAlt}
          fill
          sizes="(min-width: 1024px) 360px, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <p className="text-lg font-extrabold text-lord-black">{item.title}</p>
        <div className="portfolio-meta mt-4 text-[#4a4a4a]">
          <p><span className="font-bold text-lord-black">지역</span> {item.region}</p>
          <p><span className="font-bold text-lord-black">행사유형</span> {item.category}</p>
          <p><span className="font-bold text-lord-black">장소</span> {item.place}</p>
          <p><span className="font-bold text-lord-black">일자</span> {item.date}</p>
        </div>
        <p className="mt-4 text-sm text-[#4a4a4a]">
          <span className="font-bold text-lord-black">주최·주관</span> {item.organizer}
        </p>
        <span className="mt-4 inline-block text-sm font-bold text-lord-orange">사진 더보기 →</span>
      </div>
    </Link>
  );
}
