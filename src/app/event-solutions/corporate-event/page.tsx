import type { Metadata } from "next";
import LegacyRedirect from "@/components/LegacyRedirect";

const TARGET = "/event-solutions";

export const metadata: Metadata = {
  title: "행사별 솔루션으로 이동",
  robots: { index: false, follow: true },
  alternates: { canonical: TARGET },
};

export default function CorporateEventRedirectPage() {
  return <LegacyRedirect to={TARGET} />;
}
