import type { Metadata } from "next";
import Link from "next/link";
import { articles, SITE_URL } from "@/lib/authority";

export const metadata: Metadata = {
  title: "निरांकुश — अधिकृत लेख | Sahyajinashi and Marathi Poetry",
  description: "Official articles about Nirankush, Sahyajinashi and the context behind his widely shared Marathi poems.",
  alternates: { canonical: `${SITE_URL}/lekh` },
};

export default function ArticlesPage() {
  const itemList = { "@context":"https://schema.org", "@type":"ItemList", itemListElement: articles.map((a, i) => ({ "@type":"ListItem", position:i+1, name:a.title, url:`${SITE_URL}/lekh/${a.slug}` })) };
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
    <section className="authority-hero"><div className="authority-wrap"><div className="authority-eyebrow">अधिकृत लेख</div><h1>कवितेपासून पुस्तकापर्यंत</h1><p className="authority-lead">निरांकुश, सह्यजिनशी आणि परिचित कवितांच्या मोठ्या संदर्भाची अधिकृत नोंद.</p></div></section>
    <section className="authority-section"><div className="authority-wrap authority-article-grid">
      {articles.map((article) => <Link className="authority-article-card" key={article.slug} href={`/lekh/${article.slug}`}><div className="authority-eyebrow">{article.eyebrow}</div><h2>{article.title}</h2><p>{article.short}</p><span className="read">लेख वाचा →</span></Link>)}
    </div></section>
  </main>;
}

