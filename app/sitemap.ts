import type { MetadataRoute } from "next";
import { projects } from "../content";
import { siteUrl } from "../site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];

  return ["/", "/resume", ...projects.map(({ slug }) => `/projects/${slug}`)]
    .map((path) => ({ url: new URL(path, siteUrl).href }));
}
