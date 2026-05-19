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
    title: "Nirankush | Ankush Patil",
    description: "Dual Persona Portfolio of Nirankush (Ankush Patil) - Full-Stack Developer & Published Marathi Author",
    keywords: ["Nirankush", "Ankush Patil", "Full-Stack Developer", "Marathi Author", "Sahyajinashi", "React", "Next.js"],
    authors: [{ name: "Ankush Patil (Nirankush)" }],
    openGraph: {
          title: "Nirankush | Developer & Author",
          description: "Highly interactive portfolio showcasing modern web development and published Marathi literature.",
          type: "website",
          siteName: "Nirankush",
    },
    robots: {
          index: true,
          follow: true,
    },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
          <html lang="en" suppressHydrationWarning>
                <head>
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
                      </html>
