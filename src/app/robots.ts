import { MetadataRoute } from "next"

/**
 * We don't want search engines to index the app or events on it, so we disallow all robots.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: "/",
    },
  }
}
