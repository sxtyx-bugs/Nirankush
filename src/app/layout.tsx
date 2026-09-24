import type { Metadata } from "next";
import { Manrope, Playfair_Display, Outfit } from "next/font/google";
import localFont from "next/font/local";
import { Suspense } from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { PersonaProvider } from "@/context/PersonaContext";
import { Header } from "@/components/layout/Header";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { SmoothCursor } from "@/components/ui/SmoothCursor";
import { Preloader } from "@/components/ui/Preloader";
import "./globals.css";

const siteUrl = "https://www.nirankush.com";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    display: 'swap',
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-unageo", // Mapping Outfit to Unageo requested variable
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: 'swap',
});

const khand = localFont({
    src: [
      { path: '../../public/fonts/Khand-Light.ttf', weight: '300', style: 'normal' },
      { path: '../../public/fonts/Khand-Regular.ttf', weight: '400', style: 'normal' },
      { path: '../../public/fonts/Khand-Medium.ttf', weight: '500', style: 'normal' },
      { path: '../../public/fonts/Khand-SemiBold.ttf', weight: '600', style: 'normal' },
      { path: '../../public/fonts/Khand-Bold.ttf', weight: '700', style: 'normal' },
        ],
    variable: "--font-khand",
    display: 'swap',
});

const crossten = localFont({
    src: '../../public/fonts/CrosstenBold.otf',
    variable: "--font-crossten",
    display: 'swap',
});

const almonde = localFont({
    src: '../../public/fonts/AlmondeRegular.ttf',
    variable: "--font-almonde",
    display: 'swap',
});

const authenticity = localFont({
    src: '../../public/fonts/AuthenticityAds-8OVgA.otf',
    variable: "--font-authenticity",
    display: 'swap',
});

const demather = localFont({
    src: '../../public/fonts/Demather.otf',
    variable: "--font-demather",
    display: 'swap',
});

const palisade = localFont({
    src: '../../public/fonts/Palisade.otf',
    variable: "--font-palisade",
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: { default: "Nirankush (Ankush Patil) | Marathi Poet, Author & Technical Architect", template: "%s | Nirankush" },
    description: "Official website of Nirankush (Ankush Patil), Marathi poet, author of Sahyajinashi and technical architect.",
    keywords: ["Nirankush", "निरांकुश", "Ankush Patil", "Marathi poet", "Marathi author", "Sahyajinashi", "सह्यजिनशी", "Technical Architect"],
    authors: [{ name: "Nirankush (Ankush Patil)", url: "/nirankush" }],
    creator: "Nirankush (Ankush Patil)",
    alternates: { canonical: "/" },
    openGraph: {
          title: "Nirankush (Ankush Patil) | Marathi Poet, Author & Technical Architect",
          description: "Official identity, books, poems, interviews and technical work of Nirankush (Ankush Patil).",
          type: "website",
          siteName: "Nirankush",
          url: siteUrl,
          locale: "mr_IN",
          images: [{ url: "/author-profile.jpeg", alt: "Nirankush — Ankush Patil" }],
    },
    twitter: { card: "summary_large_image", title: "Nirankush (Ankush Patil)", description: "Marathi poet, author of Sahyajinashi and technical architect.", images: ["/author-profile.jpeg"] },
    robots: {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
          <html lang="mr" suppressHydrationWarning>
                <head>
                  <link rel="alternate" type="text/plain" href="/llms.txt" title="Nirankush entity information" />
                  <Script id="nirankush-entity" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                      { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Nirankush", alternateName: ["निरांकुश", "Nirankush — Ankush Patil"], inLanguage: ["mr-IN", "en-IN"] },
                      { "@type": "Person", "@id": `${siteUrl}/#nirankush`, name: "निरांकुश", alternateName: ["Nirankush", "Ankush Patil", "अंकुश पाटील"], description: "Marathi poet, author of Sahyajinashi and technical architect.", url: `${siteUrl}/nirankush`, image: `${siteUrl}/author-profile.jpeg`, sameAs: ["https://www.instagram.com/nirankush/", "https://www.facebook.com/niraankush/", "https://www.youtube.com/@TheNirankushVoice", "https://www.threads.com/@nirankush", "https://in.linkedin.com/in/webdevankush"] },
                      { "@type": "Book", "@id": `${siteUrl}/#sahyajinashi`, name: "सह्यजिनशी", alternateName: "Sahyajinashi", isbn: "9789348458896", inLanguage: "mr", url: `${siteUrl}/sahyajinashi`, image: `${siteUrl}/sahyadinashi.jpg`, author: { "@id": `${siteUrl}/#nirankush` } }
                    ]
                  }) }} />
                  {/* Google Analytics */}
                        <Script
                                    strategy="afterInteractive"
                                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}`}
                                  />
                        <Script
                                    id="google-analytics"
                                    strategy="afterInteractive"
                                    dangerouslySetInnerHTML={{
                                                  __html: `
                                                                window.dataLayer = window.dataLayer || [];
                                                                              function gtag(){dataLayer.push(arguments);}
                                                                                            gtag('js', new Date());
                                                                                                          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}', {
                                                                                                                          page_path: window.location.pathname,
                                                                                                                                        });
                                                                                                                                                    `,
                                    }}
                                  />
                </head>
                <body
                          suppressHydrationWarning={true}
                          className={`${outfit.variable} ${manrope.variable} ${khand.variable} ${playfair.variable} ${almonde.variable} ${crossten.variable} ${authenticity.variable} ${demather.variable} ${palisade.variable} antialiased selection:bg-developer-accent/20 md:cursor-none`}
                        >
                        <div className="noise-overlay" />
                        <Suspense fallback={null}>
                                  <PersonaProvider>
                                              <Preloader />
                                              <SmoothScroll>
                                                            <SmoothCursor />
                                                            <Header />
                                                {children}
                                              </SmoothScroll>
                                  </PersonaProvider>
                        </Suspense>
                        <Analytics />
                </body>
          </html>
    );
}
