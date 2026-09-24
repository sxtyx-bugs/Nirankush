import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, AUTHOR_ID, SITE_URL } from "@/lib/authority";

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | निरांकुश`,
    description: article.short,
    authors: [{ name: "Nirankush (Ankush Patil)", url: `${SITE_URL}/nirankush` }],
    alternates: { canonical: `${SITE_URL}/lekh/${slug}` },
    openGraph: { type: "article", title: article.title, description: article.short, url: `${SITE_URL}/lekh/${slug}`, images: [{ url: "/sahyadinashi.jpg", alt: "सह्यजिनशी" }] },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const articleJsonLd = {
    "@context":"https://schema.org", "@type":"Article", headline:article.title, description:article.short,
    inLanguage:"mr-IN", datePublished:"2026-09-24", dateModified:"2026-09-24", mainEntityOfPage:`${SITE_URL}/lekh/${slug}`,
    image:`${SITE_URL}/sahyadinashi.jpg`, author:{"@id":AUTHOR_ID}, publisher:{"@id":AUTHOR_ID},
    about:[{"@type":"Person","@id":AUTHOR_ID},{"@type":"Book","@id":`${SITE_URL}/#sahyajinashi`}],
  };
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    <section className="authority-hero"><div className="authority-wrap"><div className="authority-eyebrow">{article.eyebrow}</div><h1>{article.title}</h1><p className="authority-lead">{article.short}</p><p>लेखक: निरांकुश • 24 सप्टेंबर 2026</p></div></section>
    <section className="authority-section"><div className="authority-wrap authority-article"><article className="authority-prose" dangerouslySetInnerHTML={{ __html: article.body }} /><aside className="authority-aside"><Image src="/sahyadinashi.jpg" width={820} height={1328} alt="सह्यजिनशी पुस्तकाचे मुखपृष्ठ" /><div className="authority-card"><strong>अधिकृत माहिती</strong><p>लेखक: निरांकुश<br />पुस्तक: सह्यजिनशी<br />ISBN: 978-93-4845-889-6</p><Link href="/sahyajinashi">पुस्तक पृष्ठ →</Link></div></aside></div></section>
    <section className="authority-section authority-section-dark"><div className="authority-wrap"><h2>सह्यजिनशीची प्रत राखा</h2><p>द्वितीय आवृत्ती तयारीत आहे. अधिकृत WhatsApp क्रमांकावर आपली प्राथमिक नोंद करा.</p><a className="authority-button red" href="https://wa.me/918983539860">WhatsApp संपर्क</a></div></section>
  </main>;
}

