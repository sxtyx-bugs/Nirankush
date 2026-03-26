'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import React, { useRef } from 'react';
import Image from 'next/image';

export function AuthorHero() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

    return (
        <section ref={container} className="relative w-full h-[110vh] min-h-[800px] flex flex-col justify-between overflow-hidden px-4 md:px-8 pt-24 pb-0"
            style={{
                background: "linear-gradient(135deg, hsla(52, 84%, 53%, 1) 0%, hsla(50, 60%, 78%, 1) 38%, hsla(0, 8%, 90%, 1) 70%, hsla(0, 0%, 100%, 1) 100%)",
            }}
        >

            {/* Decorative floating orbs to make it impressive */}
            <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-white/50 blur-[100px] pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#E9DEA7]/80 blur-[120px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }}></div>

            {/* Background Texture & Grain */}
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay transition-opacity duration-1000" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}></div>

            {/* Top Content Row */}
            <div className="relative z-20 w-full max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-8 md:mt-12">

                {/* Left: Badge & Role - Glassmorphism */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="md:col-span-4 flex flex-col items-start space-y-6 backdrop-blur-md bg-white/20 p-8 rounded-3xl border border-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-transform duration-500"
                >
                    <div className="flex items-center gap-3 px-5 py-2.5 bg-black/80 backdrop-blur-xl rounded-full text-white shadow-xl border border-white/10">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#ECD123] animate-[pulse_1.5s_ease-in-out_infinite] shadow-[0_0_10px_#ECD123]"></div>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] font-manrope pt-0.5">Available for Projects</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-khand font-bold text-[#1a1a1a] leading-[1.1] drop-shadow-sm">
                        Marathi Author &<br />
                        <span className="text-black/50">Thinker based in</span><br />
                        Maharashtra
                    </h2>
                </motion.div>

                {/* Right: Intro & CTA - Glassmorphism */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                    className="md:col-span-4 md:col-start-9 flex flex-col items-start md:items-end text-left md:text-right space-y-6 md:pt-4 backdrop-blur-md bg-white/20 p-8 rounded-3xl border border-white/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-transform duration-500"
                >
                    <p className="font-manrope text-base md:text-lg text-[#1a1a1a]/80 max-w-sm leading-relaxed font-medium">
                        Hi, I'm Ankush — an author passionate about crafting narratives that explore the depths of human emotion and cultural identity.
                    </p>

                    <button onClick={() => document.getElementById('books')?.scrollIntoView({ behavior: 'smooth' })} className="group relative overflow-hidden flex items-center gap-3 px-8 py-4 bg-[#1a1a1a] text-white rounded-full hover:scale-105 transition-all duration-300 shadow-2xl border border-white/20 cursor-none">
                        <span className="relative z-10 font-manrope text-sm uppercase tracking-[0.2em] font-bold">See My Books</span>
                        <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform text-[#ECD123]" />
                        <div className="absolute inset-0 h-full w-full pointer-events-none flex justify-center items-center">
                            <div className="h-[200%] w-[200%] bg-white/10 rotate-45 translate-y-[100%] group-hover:translate-y-[-100%] transition-transform duration-700 ease-in-out"></div>
                        </div>
                    </button>
                </motion.div>
            </div>

            {/* Center Visual & Massive Text */}
            <div className="relative flex-1 flex flex-col justify-end items-center w-full">

                {/* Central Image - Positioned to look like it's rising from the text */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0 }}
                    style={{ y }}
                    className="relative z-10 w-full max-w-[350px] md:max-w-[450px] aspect-[3/4] mb-[-10%] md:mb-[-5%]"
                >
                    <div className="relative w-full h-full rounded-t-[200px] overflow-hidden border-4 border-[#EAE8E4] shadow-2xl">
                        <Image
                            src="/author-hero.jpeg"
                            alt="Ankush Patil"
                            fill
                            className="object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                            priority
                        />

                        {/* Subtle Grain Overlay */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-black"></div>
                    </div>
                </motion.div>

                {/* Massive Name - Behind Image slightly due to negative margin/z-index play or just below */}
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    style={{ y: textY }}
                    className="relative z-20 text-[22vw] leading-[0.75] font-khand font-bold text-[#1a1a1a] tracking-tighter uppercase text-center mix-blend-normal pointer-events-none select-none"
                >
                    ANKUSH
                </motion.h1>

                {/* Floating Elements / Decor */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 right-[10%] w-24 h-24 border border-dashed border-[#1a1a1a]/20 rounded-full flex items-center justify-center pointer-events-none"
                >
                    <div className="w-2 h-2 bg-[#1a1a1a]/40 rounded-full" />
                </motion.div>

            </div>

        </section>
    );
}
