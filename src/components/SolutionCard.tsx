import Image from "next/image";
import Link from "next/link";

interface SolutionCardProps {
  index: string;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
}

export default function SolutionCard({ index, title, description, href, image, imageAlt }: SolutionCardProps) {
  return (
    <Link href={href} className="solution-card group block">
      <div className="relative h-full min-h-[280px] w-full">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="solution-card__overlay" aria-hidden />
      <div className="solution-card__content">
        <span className="font-en text-xs font-bold text-lord-orange-light">{index}</span>
        <h3 className="mt-1 text-xl font-extrabold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80">{description}</p>
      </div>
    </Link>
  );
}
