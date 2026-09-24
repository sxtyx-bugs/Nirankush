import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { bookJsonLd, SITE_URL } from "@/lib/authority";

export const metadata: Metadata = {
  title: "सह्यजिनशी (Sahyajinashi) | Marathi Poetry Book by Nirankush",
  description: "Official page for Sahyajinashi, the Marathi poetry collection by Nirankush (Ankush Patil), ISBN 978-93-4845-889-6.",
  alternates: { canonical: `${SITE_URL}/sahyajinashi` },
  openGraph: { type: "book", title: "सह्यजिनशी — निरांकुश", description: "सह्याद्रीच्या रक्ताचे वंशज — मराठी काव्यसंग्रह.", url: `${SITE_URL}/sahyajinashi`, images: [{ url: "/sahyadinashi.jpg", alt: "सह्यजिनशी पुस्तकाचे मुखपृष्ठ" }] },
};

export default function SahyajinashiPage() {
  return <main>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }} />
    <section className="authority-hero"><div className="authority-wrap authority-hero-grid"><div>
      <div className="authority-eyebrow">मराठी काव्यसंग्रह • Marathi poetry collection</div><h1>सह्यजिनशी</h1>
      <p className="authority-lead">सह्याद्रीच्या रक्ताचे वंशज</p>
      <p>‘सह्यजिनशी’ हा निरांकुश (अंकुश पाटील) यांचा मराठी काव्यसंग्रह आहे. महाराष्ट्र, सह्याद्री, इतिहास, शौर्य, त्याग, नाती आणि स्वाभिमान या भावविश्वांना तो कवितेतून एकत्र आणतो.</p>
      <div className="authority-actions"><a className="authority-button red" href="https://wa.me/918983539860?text=%E0%A4%B8%E0%A4%B9%E0%A5%8D%E0%A4%AF%E0%A4%9C%E0%A4%BF%E0%A4%A8%E0%A4%B6%E0%A5%80%20%E0%A4%A6%E0%A5%8D%E0%A4%B5%E0%A4%BF%E0%A4%A4%E0%A5%80%E0%A4%AF%20%E0%A4%86%E0%A4%B5%E0%A5%83%E0%A4%A4%E0%A5%8D%E0%A4%A4%E0%A5%80%E0%A4%B8%E0%A4%BE%E0%A4%A0%E0%A5%80%20%E0%A4%AE%E0%A4%BE%E0%A4%9D%E0%A5%80%20%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A4%A4%20%E0%A4%B0%E0%A4%BE%E0%A4%96%E0%A4%BE.">द्वितीय आवृत्तीची प्रत राखा</a></div>
    </div><Image className="authority-book-cover" src="/sahyadinashi.jpg" width={820} height={1328} priority alt="सह्यजिनशी — सह्याद्रीच्या रक्ताचे वंशज पुस्तकाचे मुखपृष्ठ" /></div></section>
    <section className="authority-section"><div className="authority-wrap authority-grid">
      <div className="authority-card"><h2>परिचित कविता</h2><p>मी मराठा त्या जातीचा<br />गोष्ट ही सिंहाची नाही<br />घालू मुजरे रायगडी<br />पावनखिंड<br />मर्द रांगडा</p></div>
      <div className="authority-card"><h2>आवृत्ती</h2><p>पहिल्या आवृत्तीच्या सर्व प्रती वाचकांपर्यंत पोहोचल्या आहेत. द्वितीय आवृत्ती तयारीत आहे.</p></div>
      <div className="authority-card"><h2>पुस्तक माहिती</h2><p>लेखक: निरांकुश<br />ISBN: 978-93-4845-889-6<br />प्रकार: मराठी काव्यसंग्रह<br />अपेक्षित किंमत: ₹300</p></div>
    </div></section>
    <section className="authority-section authority-section-dark"><div className="authority-wrap"><h2>तुम्ही कविता ओळखता. आता पुस्तकाला भेटा.</h2><p>लोकप्रिय ध्वनिचित्रफितीतून भेटलेल्या कविता पुस्तकात व्यापक काव्यविश्वाचा भाग म्हणून वाचता येतात.</p><Link className="authority-button red" href="/lekh/sahyajinashi-marathi-kavyasangrah">पुस्तक परिचय वाचा</Link></div></section>
  </main>;
}

