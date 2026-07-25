import type { Metadata } from "next";
import LegacyRedirect from "@/components/LegacyRedirect";

const TARGET = "/event-solutions/sports";

export const metadata: Metadata = {
  title: "스포츠 행사 무대 설치 솔루션으로 이동",
  robots: { index: false, follow: true },
  alternates: { canonical: TARGET },
};

export default function SportsBroadcastStageRedirectPage() {
  return <LegacyRedirect to={TARGET} />;
}
