"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDE_DURATION_MS = 5000;

export interface HeroSlide {
  src: string;
  alt: string;
}

export default function HeroSlideshow({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-lord-black" aria-hidden>
      {slides.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          preload={i === 0}
          fetchPriority={i === 0 ? "high" : undefined}
          sizes="100vw"
          className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
    </div>
  );
}
