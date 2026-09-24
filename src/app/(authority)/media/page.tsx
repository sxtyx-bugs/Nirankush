import type { Metadata } from "next";
import Image from "next/image";
import { SITE_URL } from "@/lib/authority";

export const metadata: Metadata = {
  title: "Nirankush — Official Author Bio, Media Kit and Booking",
  description: "Official biography, Sahyajinashi book description, ISBN, media kit and booking information for Nirankush (Ankush Patil).",
  alternates: { canonical: `${SITE_URL}/media` },
};

export default function MediaPage() {
  return <main>
    <section className="authority-hero"><div className="authority-wrap authority-hero-grid"><div><div className="authority-eyebrow">माध्यमे • कार्यक्रम • प्रकाशक</div><h1>अधिकृत माध्यम माहिती</h1><p className="authority-lead">लेखक आणि पुस्तकाविषयी सातत्यपूर्ण, पडताळलेली माहिती.</p></div><Image className="authority-profile" src="/author-profile.jpeg" width={600} height={600} alt="निरांकुश — अंकुश पाटील" /></div></section>
    <section className="authority-section"><div className="authority-wrap authority-article"><article className="authority-prose">
      <h2>50 शब्दांचा परिचय</h2><p>निरांकुश हे अंकुश पाटील यांचे लेखननाव. ते महाराष्ट्र, सह्याद्री, इतिहास, नाती आणि स्वाभिमान या विषयांवर लिहिणारे मराठी कवी व लेखक आहेत. ‘सह्यजिनशी — सह्याद्रीच्या रक्ताचे वंशज’ हा त्यांचा काव्यसंग्रह असून त्यांच्या अनेक कविता समाजमाध्यमांवर व्यापकपणे पोहोचल्या आहेत.</p>
      <h2>कार्यक्रमासाठी परिचय</h2><p>आजच्या सत्राचे कवी आणि लेखक निरांकुश—अर्थात अंकुश पाटील—यांच्या लेखनात महाराष्ट्र, सह्याद्री, इतिहास आणि मानवी भावविश्व एकत्र येते. ‘सह्यजिनशी’ या काव्यसंग्रहातून आणि त्यांच्या लोकप्रिय कवितांतून त्यांनी मोठा मराठी वाचक समुदाय निर्माण केला आहे.</p>
      <h2>सातत्याने वापरायची माहिती</h2><table className="authority-table"><tbody><tr><th>लेखक</th><td>निरांकुश (अंकुश पाटील) / Nirankush (Ankush Patil)</td></tr><tr><th>पुस्तक</th><td>सह्यजिनशी — सह्याद्रीच्या रक्ताचे वंशज</td></tr><tr><th>English</th><td>Sahyajinashi</td></tr><tr><th>ISBN</th><td>978-93-4845-889-6</td></tr><tr><th>संपर्क</th><td>WhatsApp: +91 89835 39860</td></tr></tbody></table>
      <div className="authority-actions"><a className="authority-button red" href="/nirankush-media-kit.pdf">Media kit PDF डाउनलोड करा</a></div>
    </article><aside className="authority-aside"><div className="authority-card"><h3>कार्यक्रम नोंदणी</h3><p>काव्यवाचन • साहित्यिक संवाद • ध्वनिचित्र मुलाखत • सांस्कृतिक सत्र</p><a href="https://wa.me/918983539860">WhatsApp संपर्क →</a></div></aside></div></section>
  </main>;
}

