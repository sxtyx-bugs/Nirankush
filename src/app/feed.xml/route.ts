import { articles, SITE_URL } from "@/lib/authority";

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({ "<":"&lt;", ">":"&gt;", "&":"&amp;", "'":"&apos;", '"':"&quot;" })[character] ?? character);
}

export function GET() {
  const items = articles.map((article) => `<item><title>${escapeXml(article.title)}</title><link>${SITE_URL}/lekh/${article.slug}</link><guid>${SITE_URL}/lekh/${article.slug}</guid><pubDate>Thu, 24 Sep 2026 00:00:00 +0530</pubDate><description>${escapeXml(article.short)}</description></item>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>निरांकुश — अधिकृत लेख</title><link>${SITE_URL}/lekh</link><description>निरांकुश, सह्यजिनशी आणि मराठी कवितांविषयी अधिकृत लेख.</description><language>mr-IN</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}

