import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { portfolioItems } from "@/lib/content/portfolio";

export const dynamic = "force-static";

const staticPaths = [
  "",
  "/stage-rental-installation",
  "/stage-rental-installation/indoor-stage",
  "/stage-rental-installation/outdoor-stage",
  "/stage-rental-installation/corporate-event-stage",
  "/stage-rental-installation/festival-performance-stage",
  "/photozone-rental-production",
  "/photozone-rental-production/corporate-photozone",
  "/photozone-rental-production/brand-photozone",
  "/photozone-rental-production/photowall-backwall",
  "/photozone-rental-production/popup-store-photozone",
  "/system-equipment-rental",
  "/system-equipment-rental/sound",
  "/system-equipment-rental/lighting",
  "/system-equipment-rental/led-screen",
  "/system-equipment-rental/truss-layer",
  "/event-solutions",
  "/event-solutions/ceremony-groundbreaking",
  "/event-solutions/concert",
  "/event-solutions/festival-school-local",
  "/event-solutions/sports",
  "/event-solutions/popup-event",
  "/event-solutions/photozone",
  "/event-solutions/construction-production",
  "/portfolio",
  "/cost-estimate-guide",
  "/about-contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPaths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const portfolioEntries = portfolioItems.map((item) => ({
    url: `${site.url}/portfolio/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...portfolioEntries];
}
