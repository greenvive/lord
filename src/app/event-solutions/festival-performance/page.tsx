import type { Metadata } from "next";
import LegacyRedirect from "@/components/LegacyRedirect";

const TARGET = "/event-solutions/concert";

export const metadata: Metadata = {
  title: "콘서트 무대 설치·렌탈 솔루션으로 이동",
  robots: { index: false, follow: true },
  alternates: { canonical: TARGET },
};

export default function FestivalPerformanceRedirectPage() {
  return <LegacyRedirect to={TARGET} />;
}
