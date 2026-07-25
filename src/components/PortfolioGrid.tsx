"use client";

import { useEffect, useMemo, useState } from "react";
import PortfolioCard from "@/components/PortfolioCard";
import type { PortfolioItem } from "@/lib/types";

const ALL = "all";
type SortOrder = "newest" | "oldest";

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex flex-col gap-1 text-xs font-bold text-black/60">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="rounded-full border border-black/15 bg-white px-4 py-2 text-sm font-bold text-lord-black transition hover:border-lord-orange focus:border-lord-orange focus:outline-none"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  // 빈 배열 = 전체 노출. 값이 있으면 해당 카테고리(들)만 노출. (상단 카테고리 버튼과 하단 유형 셀렉트가 공유하는 상태)
  const [active, setActive] = useState<string[]>([]);
  const [region, setRegion] = useState<string>(ALL);
  const [place, setPlace] = useState<string>(ALL);
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(items.map((item) => item.category)));
    return [{ label: "전체", value: ALL }, ...unique.map((value) => ({ label: value, value }))];
  }, [items]);

  const regions = useMemo(() => {
    const unique = Array.from(new Set(items.map((item) => item.region)));
    return [{ label: "전체", value: ALL }, ...unique.map((value) => ({ label: value, value }))];
  }, [items]);

  const places = useMemo(() => {
    const unique = Array.from(new Set(items.map((item) => item.place)));
    return [{ label: "전체", value: ALL }, ...unique.map((value) => ({ label: value, value }))];
  }, [items]);

  // 2뎁스 상세페이지의 "전체 포트폴리오 보기" 링크(?category=콘서트, ?category=기념식,기공식, ?place=실내)로
  // 들어온 경우 해당 조건만 필터링된 상태로 시작한다.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const requestedCategory = params.get("category");
    const requestedPlace = params.get("place");
    // 정적 export라 URL 쿼리는 마운트 후 window.location에서만 읽을 수 있어 렌더 중 계산이 불가능하다.
    if (requestedCategory) {
      const validCategories = new Set(items.map((item) => item.category));
      const requestedCategories = requestedCategory.split(",").filter((value) => validCategories.has(value));
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (requestedCategories.length > 0) setActive(requestedCategories);
    }
    if (requestedPlace && items.some((item) => item.place === requestedPlace)) {
      setPlace(requestedPlace);
    }
  }, [items]);

  const filtered = items
    .filter((item) => active.length === 0 || active.includes(item.category))
    .filter((item) => region === ALL || item.region === region)
    .filter((item) => place === ALL || item.place === place)
    .sort((a, b) => (sortOrder === "newest" ? b.date.localeCompare(a.date) : a.date.localeCompare(b.date)));

  const resetAll = () => {
    setActive([]);
    setRegion(ALL);
    setPlace(ALL);
    setSortOrder("newest");
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((filter) => {
          const isActive = filter.value === ALL ? active.length === 0 : active.length === 1 && active[0] === filter.value;
          return (
            <button
              key={filter.value}
              onClick={() => setActive(filter.value === ALL ? [] : [filter.value])}
              className={`rounded-full border px-4 py-2 text-sm font-bold transition ${
                isActive
                  ? "border-lord-orange bg-lord-orange text-white"
                  : "border-black/15 text-lord-black hover:border-lord-orange hover:text-lord-orange"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-end gap-3 rounded-2xl border border-black/10 bg-lord-cream/40 p-4">
        <FilterSelect label="지역" value={region} options={regions} onChange={setRegion} />
        <FilterSelect
          label="유형"
          value={active.length === 1 ? active[0] : ALL}
          options={categories}
          onChange={(value) => setActive(value === ALL ? [] : [value])}
        />
        <FilterSelect label="장소" value={place} options={places} onChange={setPlace} />
        <FilterSelect
          label="일자"
          value={sortOrder}
          options={[
            { label: "최신순", value: "newest" },
            { label: "오래된순", value: "oldest" },
          ]}
          onChange={(value) => setSortOrder(value as SortOrder)}
        />
        <button
          onClick={resetAll}
          className="ml-auto rounded-full border border-black/15 px-4 py-2 text-sm font-bold text-lord-black transition hover:border-lord-orange hover:text-lord-orange"
        >
          필터 초기화
        </button>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <PortfolioCard key={item.slug} item={item} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-sm text-black/50">조건에 맞는 사례가 아직 없습니다.</p>
      )}
    </div>
  );
}
