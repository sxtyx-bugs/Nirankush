import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: ["Googlebot", "Bingbot", "OAI-SearchBot", "GPTBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot"], allow: "/" },
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://www.nirankush.com/sitemap.xml",
    host: "https://www.nirankush.com",
  };
}

