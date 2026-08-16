import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";

const BASE = "https://keiqi.design"; // 上线后替换为真实域名

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/projects",
    "/design",
    "/craftsmanship",
    "/healthy-home",
    "/japanese-living",
    "/ai-designer",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
  }));

  const details = PROJECTS.map((p) => ({
    url: `${BASE}/projects/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...details];
}
