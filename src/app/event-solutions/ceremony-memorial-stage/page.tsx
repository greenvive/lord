import type { Metadata } from "next";
import LegacyRedirect from "@/components/LegacyRedirect";

const TARGET = "/event-solutions/ceremony-groundbreaking";

export const metadata: Metadata = {
  title: "기념식·기공식 무대 설치 솔루션으로 이동",
  robots: { index: false, follow: true },
  alternates: { canonical: TARGET },
};

export default function CeremonyMemorialStageRedirectPage() {
  return <LegacyRedirect to={TARGET} />;
}
