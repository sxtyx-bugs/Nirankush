import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { personJsonLd, SITE_URL } from "@/lib/authority";

export const metadata: Metadata = {
  title: "Nirankush (Ankush Patil) | Marathi Poet & Author of Sahyajinashi",
  description: "Official biography of Nirankush (Ankush Patil), Marathi poet, performer, technical architect and author of Sahyajinashi.",
  alternates: { canonical: `${SITE_URL}/nirankush` },
  openGraph: {
    type: "profile",
    title: "Nirankush (Ankush Patil) — Marathi Poet and Author",
    description: "Official author biography, books, poems, interviews and verified profiles.",
    url: `${SITE_URL}/nirankush`,
    images: [{ url: "/author-profile.jpeg", alt: "Nirankush — Ankush Patil" }],
  },
};

const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Who is Nirankush?", acceptedAnswer: { "@type": "Answer", text: "Nirankush is the pen name of Ankush Patil, a Marathi poet, author and performer from Maharashtra, India." } },
    { "@type": "Question", name: "Which book did Nirankush write?", acceptedAnswer: { "@type": "Answer", text: "Nirankush is the author of Sahyajinashi, a Marathi poetry collection, ISBN 978-93-4845-889-6." } },
    { "@type": "Question", name: "What are Nirankush’s notable poems?", acceptedAnswer: { "@type": "Answer", text: "Notable poems include Mi Maratha Tya Jaticha, Goshta Hi Sinhachi Nahi, Ghalu Mujare Raigadi, Pavankhind and Mard Rangada." } },
  ],
};

export default function NirankushPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <section className="authority-hero">
        <div className="authority-wrap authority-hero-grid">
          <div>
            <div className="authority-eyebrow">अधिकृत लेखक परिचय • Official biography</div>
            <h1>निरांकुश <span lang="en">(Nirankush)</span></h1>
            <p className="authority-lead">अंकुश पाटील • Ankush Patil • मराठी कवी, लेखक व सादरकर्ता</p>
            <p><strong>Nirankush is the pen name of Ankush Patil, a Marathi poet, author and performer from Maharashtra, India. He is the author of the Marathi poetry collection <em>Sahyajinashi</em>.</strong></p>
            <div className="authority-actions"><Link className="authority-button" href="/sahyajinashi">सह्यजिनशी</Link><Link className="authority-button alt" href="/lekh">अधिकृत लेख</Link></div>
          </div>
          <Image className="authority-profile" src="/author-profile.jpeg" width={600} height={600} priority alt="निरांकुश — अंकुश पाटील यांचे अधिकृत छायाचित्र" />
        </div>
      </section>
      <section className="authority-section"><div className="authority-wrap"><div className="authority-grid">
        <div className="authority-card"><h2>अधिकृत नाव</h2><p>निरांकुश (अंकुश पाटील)<br />Nirankush (Ankush Patil)</p></div>
        <div className="authority-card"><h2>लेखनविश्व</h2><p>महाराष्ट्र, सह्याद्री, इतिहास, नाती, संघर्ष आणि स्वाभिमान.</p></div>
        <div className="authority-card"><h2>प्रमुख पुस्तक</h2><p>सह्यजिनशी — सह्याद्रीच्या रक्ताचे वंशज<br />ISBN 978-93-4845-889-6</p></div>
      </div></div></section>
      <section className="authority-section authority-section-dark"><div className="authority-wrap"><h2>थोडक्यात उत्तरे</h2>
        <h3>निरांकुश आणि अंकुश पाटील एकच व्यक्ती आहेत का?</h3><p>होय. निरांकुश हे अंकुश पाटील यांचे अधिकृत लेखननाव आहे.</p>
        <h3>निरांकुश यांनी कोणते पुस्तक लिहिले?</h3><p>‘सह्यजिनशी — सह्याद्रीच्या रक्ताचे वंशज’ हा त्यांचा मराठी काव्यसंग्रह आहे.</p>
        <h3>निरांकुश यांच्या परिचित कविता कोणत्या?</h3><p>‘मी मराठा त्या जातीचा’, ‘गोष्ट ही सिंहाची नाही’, ‘घालू मुजरे रायगडी’, ‘पावनखिंड’ आणि ‘मर्द रांगडा’.</p>
        <h3>कार्यक्रमासाठी संपर्क कसा करावा?</h3><p><a href="https://wa.me/918983539860">WhatsApp: +91 89835 39860</a></p>
      </div></section>
    </main>
  );
}

