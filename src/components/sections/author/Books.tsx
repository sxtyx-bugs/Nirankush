"use client";

import React, { useState, useRef, MouseEvent } from 'react';
import { motion, useSpring } from "framer-motion";
import { Highlighter } from "@/components/ui/highlighter";

const books = [
    {
        title: "चंद्राच्या जागी चंद्रच",
        theme: "Poetry Collection (Kavya-Sangrah)",
        year: "2022",
        publisher: "Nirankush",
        purchaseLink: "https://www.amazon.in/Chandrachya-Jagi-Chandrach-%E0%A4%9A%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A4%BE%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A4%BE-%E0%A4%9A%E0%A4%82%E0%A4%A6%E0%A5%8D%E0%A4%B0%E0%A4%9A/dp/B09RHFL78V/ref=sr_1_3?crid=6B6MHIF10N0D&dib=eyJ2IjoiMSJ9.gqZ_ldGnETG6ff5WHWhN3Bdr3mZLEi48pBV9K3XgFj3dQpBsoOQizBwyt6q_CEDpI9kvL7vAtA2GXg2M0DpNHsZIxsuHN_zOo4aElqS1V_WUufMwu3QuGnxiaWdnznxGX7c-pNKMgzkvvPbUZTFD9A.xKxFeHtR56t3q75JTOsx2ym3EzrdeLG746IgXdXEOqY&dib_tag=se&keywords=nirankush&qid=1771143001&sprefix=niranku%2Caps%2C337&sr=8-3",
        coverUrl: "/chandra.jpg"
    },
    {
        title: "परखंदळे इतिहासाच्या खुणा",
        theme: "Historical Signs (Parkhandale)",
        year: "2022",
        publisher: "Akshar Wangmay",
        purchaseLink: "https://www.amazon.in/Parkhandale-Itihasachya-Khuna-%E0%A4%AA%E0%A4%B0%E0%A4%96%E0%A4%82%E0%A4%A6%E0%A4%B3%E0%A5%87-%E0%A4%87%E0%A4%A4%E0%A4%BF%E0%A4%B9%E0%A4%BE%E0%A4%B8%E0%A4%BE%E0%A4%9A%E0%A5%8D%E0%A4%AF%E0%A4%BE/dp/B09X5F9VCR/ref=sr_1_1?crid=2LRM9RTHIN5XK&dib=eyJ2IjoiMSJ9.AOzCfr_cgCFNsyTqcwfgtg.Lpv_LVBBFe5yLXDa7tlFG2L0XQUVeV_GN5XOBwAThQo&dib_tag=se&keywords=parkhandale&qid=1771143043&sprefix=parkhandale%2Caps%2C337&sr=8-1",
        coverUrl: "/parkhandale.jpg"
    },
    {
        title: "सह्यजिनशी (Sahyajinashi)",
        theme: "Sahyadreechya Raktache Vanshaj",
        year: "2nd Edition Soon",
        publisher: "First Edition Sold",
        purchaseLink: "/sahyajinashi",
        coverUrl: "/sahyadinashi.jpg"
    }
];

export function Books() {
    const [img, setImg] = useState<{ src: string; alt: string; opacity: number }>({
        src: '',
        alt: '',
        opacity: 0,
    });

    const imageRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const spring = {
        stiffness: 150,
        damping: 15,
        mass: 0.1,
    };

    const imagePos = {
        x: useSpring(0, spring),
        y: useSpring(0, spring),
    };

    const handleMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!imageRef.current || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const { clientX, clientY } = e;
        const relativeX = clientX - containerRect.left;
        const relativeY = clientY - containerRect.top;

        imagePos.x.set(relativeX - imageRef.current.offsetWidth / 2);
        imagePos.y.set(relativeY - imageRef.current.offsetHeight / 2);
    };

    const handleImageInteraction = (item: (typeof books)[number], opacity: number) => {
        setImg({ src: item.coverUrl, alt: item.title, opacity });
    };

    return (
        <section id="books" className="py-24 md:py-32 bg-[#F7F5F0] relative overflow-hidden flex flex-col justify-center min-h-screen">
            {/* Subtle Texture */}
            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply pointer-events-none" />

            <div className="max-w-[1400px] mx-auto w-full relative z-10 px-6 md:px-12 flex flex-col">
                
                {/* Header */}
                <div className="mb-20 text-center md:text-left">
                    <span className="font-manrope text-xs font-bold uppercase tracking-[0.3em] text-stone-400 mb-4 block">Literary Works</span>
                    <h2 className="text-5xl md:text-8xl font-playfair text-stone-900 mb-6 tracking-tight">
                        Published <Highlighter action="underline" color="#FCD34D" className="text-author-accent font-authenticity text-6xl md:text-9xl ml-2 md:ml-4">Collection</Highlighter>
                    </h2>
                    <p className="text-stone-600 font-manrope max-w-2xl text-lg leading-relaxed">
                        A curation of literary explorations in poetry and history, each volume a journey into the depths of emotion and time. Hover over the titles to preview.
                    </p>
                </div>

                {/* Interaction Section */}
                <div 
                    ref={containerRef}
                    onMouseMove={handleMove}
                    className="relative w-full mx-auto"
                >
                    <div className="flex flex-col border-t-2 border-stone-200">
                        {books.map((book) => (
                            <a 
                                href={book.purchaseLink}
                                target={book.purchaseLink.startsWith('/') ? undefined : '_blank'}
                                rel={book.purchaseLink.startsWith('/') ? undefined : 'noopener noreferrer'}
                                key={book.title}
                                onMouseEnter={() => handleImageInteraction(book, 1)}
                                onMouseMove={() => handleImageInteraction(book, 1)}
                                onMouseLeave={() => handleImageInteraction(book, 0)}
                                className="w-full py-8 md:py-12 cursor-pointer group flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-stone-200 transition-colors hover:bg-black/5 px-4 md:px-8"
                            >
                                <p className="text-4xl md:text-6xl font-khand font-bold text-stone-400 flex-1 group-hover:text-[#1a1a1a] transition-colors duration-300 mb-4 md:mb-0">
                                    {book.title}
                                </p>
                                <span className="font-crossten font-bold text-stone-500 uppercase tracking-widest text-xs md:text-sm flex items-center gap-4 group-hover:text-stone-900 transition-colors duration-300">
                                    <span className="hidden lg:inline mr-8 bg-white/50 px-4 py-1 rounded-full">{book.theme}</span>
                                    <span>{book.publisher}</span>
                                    <span>{book.year}</span>
                                    <span className="w-3 h-3 bg-[#FCE116] inline-block shadow-sm"></span>
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* Floating Reveal Image */}
                    <motion.img
                        ref={imageRef}
                        src={img.src || books[0].coverUrl} // Fallback to first cover
                        alt={img.alt}
                        className="w-[220px] md:w-[320px] aspect-[3/4] rounded-xl object-cover absolute top-0 left-0 transition-opacity duration-300 ease-out pointer-events-none shadow-2xl z-50 origin-top-left border-4 border-white"
                        style={{
                            x: imagePos.x,
                            y: imagePos.y,
                            opacity: img.opacity,
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
