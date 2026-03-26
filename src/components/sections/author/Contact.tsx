"use client";

import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Instagram, PenTool, BookOpen } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function Contact() {
    const sectionRef = useRef<HTMLElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Sticky Notes Pinning Logic
        const cards = gsap.utils.toArray('.sticky-note-card');
        
        cards.forEach((card: any, index: number) => {
            // Apply scale-down effect to previous cards, but keep opacity 1 to prevent text bleed
            const tween = gsap.to(card, {
                scale: 1 - ((cards.length - index) * 0.05), // scale down progressively
                ease: "none",
                scrollTrigger: {
                    trigger: card,
                    start: "top 10%", 
                    endTrigger: wrapperRef.current,
                    end: "bottom bottom",
                    scrub: true,
                }
            });

            ScrollTrigger.create({
                trigger: card,
                start: "top 10%",
                endTrigger: wrapperRef.current,
                end: "bottom bottom",
                pin: true,
                pinSpacing: false,
                id: `card-${index}`,
            });
        });

        // Background Flowing Text
        gsap.to(".contact-marquee-1", {
            xPercent: -30,
            ease: "none",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
            }
        });
        
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="relative w-full bg-[#F5F2F0] text-[#1a1a1a] pt-32 pb-64 overflow-hidden">
            
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply pointer-events-none z-0" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }} />

            {/* Background Marquee Text */}
            <div className="absolute top-[20%] left-0 w-[200%] overflow-hidden pointer-events-none opacity-5 z-0">
                <div className="contact-marquee-1 flex whitespace-nowrap">
                    <h1 className="text-[18vw] font-crossten font-black text-[#1a1a1a] uppercase pr-10">CONNECT • INSPIRE • </h1>
                    <h1 className="text-[18vw] font-crossten font-black text-transparent uppercase pr-10" style={{ WebkitTextStroke: '2px #1a1a1a' }}>CONNECT • INSPIRE • </h1>
                </div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center mb-20 text-center">
                <span className="font-manrope text-sm md:text-base uppercase tracking-[0.4em] font-bold text-stone-500 mb-6 block">
                    Collaboration
                </span>
                <h2 className="text-5xl md:text-8xl font-crossten font-black uppercase text-[#1a1a1a] leading-tight tracking-tighter">
                    Let's create something <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-stone-600 to-[#1a1a1a]">
                        extraordinary
                    </span>
                </h2>
            </div>

            {/* Sticky Cards Wrapper */}
            <div ref={wrapperRef} className="relative w-full max-w-5xl mx-auto px-4 md:px-12 flex flex-col gap-[30vh]">
                
                {/* Note 1: The Quote (Yellow) */}
                <div className="sticky-note-card w-full h-[75vh] min-h-[500px] flex items-center justify-center rounded-[3rem] p-10 md:p-16 shadow-[0_-20px_40px_rgba(0,0,0,0.1)] bg-[#FCE116] text-[#1a1a1a] transform origin-top border border-[#1a1a1a]/10">
                    <div className="absolute top-8 left-10 md:left-16 flex items-center gap-3 opacity-90">
                        <PenTool size={28} />
                        <span className="font-crossten font-bold uppercase tracking-widest text-sm">Philosophy</span>
                    </div>
                    
                    <div className="text-center w-full max-w-4xl pt-10">
                        <h3 className="font-crossten font-black text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-tighter uppercase">
                            "Writing of Identity, <br />
                            Self respect, <br />
                            and History!"
                        </h3>
                    </div>
                    
                    <div className="absolute bottom-8 right-10 md:right-16 opacity-50 font-manrope font-bold text-sm">
                        01
                    </div>
                </div>

                {/* Note 2: Instagram Stats (Warm Ivory) */}
                <div className="sticky-note-card w-full h-[75vh] min-h-[500px] flex flex-col justify-center rounded-[3rem] p-10 md:p-16 shadow-[0_-20px_40px_rgba(0,0,0,0.1)] bg-[#EAE8E4] text-[#1a1a1a] transform origin-top border border-[#1a1a1a]/10">
                    <div className="absolute top-8 left-10 md:left-16 flex items-center gap-3 opacity-90">
                        <Instagram size={28} />
                        <span className="font-crossten font-bold uppercase tracking-widest text-sm">The Movement</span>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 w-full pt-10">
                        <div className="flex flex-col items-center flex-1">
                            <span className="font-crossten font-black text-6xl md:text-[8rem] lg:text-[10rem] tracking-tighter leading-none">2M<span className="text-stone-400">+</span></span>
                            <span className="font-crossten font-bold text-lg md:text-2xl uppercase tracking-widest mt-4">Readers Monthly</span>
                        </div>
                        
                        <div className="w-full md:w-[2px] h-[2px] md:h-64 bg-[#1a1a1a]/10" />

                        <div className="flex flex-col items-center flex-1">
                            <span className="font-crossten font-black text-6xl md:text-[8rem] lg:text-[10rem] tracking-tighter leading-none">50k<span className="text-stone-400">+</span></span>
                            <span className="font-crossten font-bold text-lg md:text-2xl uppercase tracking-widest mt-4 text-center">Followers actively reading</span>
                        </div>
                    </div>
                    
                    <div className="absolute bottom-8 right-10 md:right-16 opacity-50 font-manrope font-bold text-sm">
                        02
                    </div>
                </div>

                {/* Note 3: Action Button (Ink Black) */}
                <div className="sticky-note-card w-full h-[75vh] min-h-[500px] flex flex-col items-center justify-center rounded-[3rem] p-10 md:p-16 shadow-[0_-20px_40px_rgba(0,0,0,0.1)] bg-[#1a1a1a] text-[#fcfaf7] transform origin-top border border-[#fcfaf7]/10">
                    <div className="absolute top-8 left-10 md:left-16 flex items-center gap-3 opacity-90 hover:text-[#FCE116] transition-colors">
                        <BookOpen size={28} />
                        <span className="font-crossten font-bold uppercase tracking-widest text-sm">Reach Out</span>
                    </div>

                    <div className="text-center w-full flex flex-col items-center pt-10">
                        <h3 className="font-crossten font-black text-5xl md:text-7xl lg:text-[5rem] leading-[0.9] tracking-tighter uppercase mb-16">
                            Start a Conversation
                        </h3>
                        
                        <a href="mailto:er.ankush.patil@gmail.com" className="group relative flex items-center justify-center w-56 h-56 md:w-64 md:h-64 bg-[#fcfaf7] text-[#1a1a1a] rounded-full overflow-hidden hover:scale-105 transition-transform duration-500 shadow-xl border-4 border-[#1a1a1a]">
                            <div className="absolute inset-0 bg-[#FCE116] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                            <div className="flex flex-col items-center gap-2 relative z-10 transition-colors duration-500 group-hover:text-[#1a1a1a]">
                                <span className="font-crossten text-2xl md:text-3xl uppercase tracking-widest font-bold">Say Hello</span>
                                <ArrowUpRight className="transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" size={36} />
                            </div>
                        </a>
                    </div>
                    
                    <div className="absolute bottom-8 right-10 md:right-16 opacity-50 font-manrope font-bold text-sm">
                        03
                    </div>
                </div>

            </div>
            
        </section>
    );
}

