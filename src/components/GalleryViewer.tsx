"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { PortfolioImage } from "@/lib/types";

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "이전 사진" : "다음 사진"}
      className={`absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition hover:bg-black/70 ${
        direction === "prev" ? "left-3" : "right-3"
      }`}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        {direction === "prev" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 6l6 6-6 6" />}
      </svg>
    </button>
  );
}

export default function GalleryViewer({ images }: { images: PortfolioImage[] }) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  useEffect(() => {
    if (total <= 1) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [total]);

  if (total === 0) return null;

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-lord-black sm:aspect-[16/10]">
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 896px, 100vw"
          className={`object-contain transition-opacity duration-200 ${
            i === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          priority={i === 0}
          loading={i === 0 ? undefined : "eager"}
          placeholder={image.blurDataURL ? "blur" : undefined}
          blurDataURL={image.blurDataURL}
        />
      ))}
      {total > 1 && (
        <>
          <ArrowButton direction="prev" onClick={goPrev} />
          <ArrowButton direction="next" onClick={goNext} />
          <div className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white">
            {index + 1} / {total}
          </div>
        </>
      )}
    </div>
  );
}
