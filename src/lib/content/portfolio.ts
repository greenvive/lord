import type { PortfolioItem } from "@/lib/types";

function buildImages(slug: string, count: number, title: string) {
  return Array.from({ length: count }, (_, i) => {
    const n = String(i + 1).padStart(2, "0");
    return {
      src: `/images/portfolio/${slug}/${n}.jpg`,
      alt: `${title} 현장 사진 ${i + 1}`,
    };
  });
}

// "사진자료 내용정리.xlsx" 폴더명 기준으로 img_org/recent/ 실제 시공 사진과 매칭한 데이터입니다.
export const portfolioItems: PortfolioItem[] = [
  {
    slug: "un-forces-memorial-ceremony",
    title: "유엔군초전기념 추도식",
    category: "기념식",
    place: "야외",
    date: "2026.06.30",
    region: "오산시",
    organizer: "오산시",
    folder: "(260630)유엔군 초전기념 추도식",
    image: "/images/portfolio/un-forces-memorial-ceremony.jpg",
    imageAlt: "유엔군초전기념 추도식 야외 무대와 각국 국기 설치 전경",
    images: buildImages("un-forces-memorial-ceremony", 8, "유엔군초전기념 추도식"),
  },
  {
    slug: "memorial-theme-park",
    title: "메모리얼 테마파크",
    category: "팝업행사",
    place: "야외",
    date: "2026.06.26",
    region: "수원시",
    organizer: "경기남부보훈지청",
    folder: "(260626)메모리얼 테마파크",
    image: "/images/portfolio/memorial-theme-park.jpg",
    imageAlt: "메모리얼 테마파크 야외 게이트 조형물과 부스 설치 전경",
    images: buildImages("memorial-theme-park", 15, "메모리얼 테마파크"),
  },
  {
    slug: "heritage-concert",
    title: "헤리티지콘서트",
    category: "콘서트",
    place: "야외",
    date: "2026.06.13",
    region: "수원시",
    organizer: "수원시 / OBS",
    folder: "(260613)헤리티지 콘서트",
    image: "/images/portfolio/heritage-concert.jpg",
    imageAlt: "헤리티지콘서트 야외 대형 무대와 LED 스크린, 관객 전경",
    images: buildImages("heritage-concert", 8, "헤리티지콘서트"),
  },
];

export function getPortfolioBySlug(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}
