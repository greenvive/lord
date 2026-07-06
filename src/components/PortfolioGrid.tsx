"use client";

import { useMemo, useState } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import type { PortfolioItem } from "@/lib/types";

export default function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const [active, setActive] = useState<string>("all");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(items.map((item) => item.category)));
    return [{ label: "전체", value: "all" }, ...unique.map((value) => ({ label: value, value }))];
  }, [items]);

  const filtered = active === "all" ? items : items.filter((item) => item.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActive(filter.value)}
            className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
              active === filter.value
                ? "border-lord-orange bg-lord-orange text-white"
                : "border-black/15 text-lord-black hover:border-lord-orange hover:text-lord-orange"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <PortfolioCard key={item.slug} item={item} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-black/50">해당 카테고리의 사례가 아직 없습니다.</p>
      )}
    </div>
  );
}
