"use client";

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function Philosophy() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        // Advanced Cinematic 3D Array + Triptych Reveal
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=4000", // Stretch scroll length for more epic maneuvers
                scrub: 1.5, // Ultra smooth 1.5s delay
                pin: true,
                pinSpacing: true,
                anticipatePin: 1
            }
        });

        // Initialize 3D perspective wrapper on the overall section
        gsap.set(".perspective-wrapper", { perspective: 2000 });
        gsap.set(".book-float", { transformStyle: "preserve-3d" });

        /* ======== SEQUENCE 1: "TO WRITE IS TO BLEED" ======== */
        // Book 1 blasts in from deep 3D right spinning
        tl.fromTo(".book-float-1", 
            { opacity: 0, scale: 0, z: -2000, x: "60vw", y: "-50vh", rotateY: 180, rotateZ: 90 }, 
            { opacity: 0.5, scale: 1.8, z: 200, x: "-20vw", y: "0vh", rotateY: 10, rotateZ: -10, duration: 4, ease: "power3.out" },
            0 // Starts immediately
        )
        // Foreground Text enters
        .fromTo(".slide-1", 
            { opacity: 0, scale: 0.2, filter: "blur(30px)", z: -500 }, 
            { opacity: 1, scale: 1, filter: "blur(0px)", z: 0, duration: 2.5, ease: "power2.out" },
            "-=3"
        )
        // Slide 1 exits past camera, Book 1 pushes back
        .to(".slide-1", { opacity: 0, scale: 4, filter: "blur(20px)", duration: 2, ease: "power2.in" }, "+=1.5")
        .to(".book-float-1", { opacity: 0.1, scale: 0.5, x: "-35vw", z: -1000, duration: 2, ease: "power2.in" }, "<")

        
        /* ======== SEQUENCE 2: "TO READ IS TO HEAL" ======== */
        // Book 2 sweeps in from deep 3D left
        .fromTo(".book-float-2", 
            { opacity: 0, scale: 0, z: -2000, x: "-60vw", y: "40vh", rotateY: -180, rotateZ: -90 }, 
            { opacity: 0.4, scale: 2.2, z: 400, x: "25vw", y: "5vh", rotateY: -15, rotateZ: 5, duration: 4, ease: "power3.out" },
            "-=1"
        )
        .fromTo(".slide-2", 
            { opacity: 0, scale: 0.2, filter: "blur(30px)", z: -500 }, 
            { opacity: 1, scale: 1, filter: "blur(0px)", z: 0, duration: 2.5, ease: "power2.out" },
            "-=3"
        )
        // Slide 2 exits past camera
        .to(".slide-2", { opacity: 0, scale: 4, filter: "blur(20px)", duration: 2, ease: "power2.in" }, "+=1.5")
        .to(".book-float-2", { opacity: 0.1, scale: 0.5, x: "35vw", z: -1000, duration: 2, ease: "power2.in" }, "<")


        /* ======== SEQUENCE 3: MARATHI TTRIPTYCH CLIMAX ======== */
        // Book 3 flies up from bottom straight to center
        .fromTo(".book-float-3",
            { opacity: 0, scale: 0, y: "100vh", rotateX: -90, z: -1000 },
            { opacity: 0.5, scale: 1.4, y: "0vh", x: "0vw", rotateX: 0, rotateZ: 0, z: 0, zIndex: 10, duration: 3, ease: "expo.out" },
            "-=0.5"
        )
        // IMMEDIATELY summon Book 1 and Book 2 to flank Book 3 (Forming the Triptych)
        .to(".book-float-1", 
            { opacity: 0.35, scale: 1.1, x: "-28vw", y: "5vh", z: -200, rotateY: 25, rotateZ: -12, rotateX: 5, duration: 2.5, ease: "expo.out" }, 
            "<"
        )
        .to(".book-float-2", 
            { opacity: 0.35, scale: 1.1, x: "28vw", y: "5vh", z: -200, rotateY: -25, rotateZ: 12, rotateX: 5, duration: 2.5, ease: "expo.out" }, 
            "<"
        )
        // Ignite ambient bloom
        .fromTo(".golden-bloom", 
            { opacity: 0, scale: 0 }, 
            { opacity: 1, scale: 1.8, duration: 3, ease: "power3.out" },
            "-=2"
        )
        // Final Marathi Quote lands powerfully over the books
        .fromTo(".slide-3", 
            { opacity: 0, y: "20vh", scale: 0.8, filter: "blur(20px)", rotateX: 45 }, 
            { opacity: 1, y: "0vh", scale: 1, filter: "blur(0px)", rotateX: 0, duration: 2.5, ease: "back.out(1.2)" },
            "-=2.5"
        )
        
        // Final frame lock to let the user admire the triptych
        .to({}, { duration: 2 });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="philosophy" className="perspective-wrapper relative h-screen bg-[#050505] w-full text-white selection:bg-[#FCE116] selection:text-black overflow-hidden flex items-center justify-center">
            
            {/* CSS Noise Texture background */}
            <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none z-0 mix-blend-screen" />

            {/* --- IMMERSIVE 3D BACKGROUND BOOKS (Triptych Elements) --- */}
            {/* Note: They are rendered in the DOM, GSAP handles all absolute positioning and size entirely */}
            <div className="book-float book-float-1 absolute z-0 w-[25vw] md:w-[32vh] aspect-[3/4] opacity-0 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden rounded-xl border-2 border-stone-800/50">
                <img src="/chandra.jpg" className="w-full h-full object-cover filter contrast-125 grayscale-[0.3]" alt="Book 1" />
            </div>
            <div className="book-float book-float-2 absolute z-0 w-[25vw] md:w-[32vh] aspect-[3/4] opacity-0 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden rounded-xl border-2 border-stone-800/50">
                <img src="/parkhandale.jpg" className="w-full h-full object-cover filter contrast-125 grayscale-[0.3]" alt="Book 2" />
            </div>
            <div className="book-float book-float-3 absolute z-0 w-[25vw] md:w-[32vh] aspect-[3/4] opacity-0 shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden rounded-xl border-2 border-stone-800/50">
                <img src="/sahyadinashi.jpg" className="w-full h-full object-cover filter contrast-125 grayscale-[0.3]" alt="Book 3" />
            </div>

            {/* --- FOREGROUND TEXT SLIDES --- */}
            
            {/* Slide 1: Bleed */}
            <div className="slide-1 absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 will-change-transform z-20">
                <h3 className="text-[12vw] md:text-[80px] lg:text-[140px] font-khand font-black leading-[0.8] text-center uppercase tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] text-stone-200">
                    To Write is <br/> 
                    <span className="text-[#FCE116] font-authenticity lowercase italic font-normal text-[1.2em] transform rotate-[-4deg] inline-block pt-4 pb-2">to bleed,</span> <br/>
                    but in ink.
                </h3>
            </div>

            {/* Slide 2: Heal */}
            <div className="slide-2 absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 will-change-transform z-20">
                <h3 className="text-[12vw] md:text-[80px] lg:text-[140px] font-khand font-black leading-[0.8] text-center uppercase tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,0.9)] text-stone-200">
                    To Read is <br/> 
                    <span className="text-stone-500 font-authenticity lowercase italic font-normal text-[1.2em] transform rotate-[-4deg] inline-block pt-4 pb-2">to heal,</span> <br/>
                    but in silence.
                </h3>
            </div>

            {/* Slide 3: Marathi Core, Triptych Landing & Golden Bloom */}
            <div className="slide-3 absolute inset-0 flex flex-col items-center justify-center px-4 md:px-20 opacity-0 will-change-transform z-30">
                
                {/* Immersive Bloom background attached to Slide 3 */}
                <div className="golden-bloom absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[900px] max-h-[900px] bg-gradient-radial from-[#FCE116]/20 to-transparent rounded-full blur-[80px] opacity-0 pointer-events-none -z-10 mix-blend-color-dodge" />

                <div className="text-[#FCE116] mb-8 md:mb-12 drop-shadow-[0_0_30px_rgba(252,225,22,0.6)]">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H11.983C10.8784 16 9.983 16.8954 9.983 18L9.983 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13 11L13 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M11 11L11 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M12 21L12 11C12 7.13401 15.134 4 19 4V4C19 7.86599 15.866 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M12 21L12 11C12 7.13401 8.86599 4 5 4V4C5 7.86599 8.13401 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                </div>

                {/* Removed tracking-tighter here so the Marathi spacing renders perfectly un-smushed */}
                <p className="font-khand font-black text-[35px] md:text-[70px] lg:text-[100px] leading-[1.05] text-white tracking-normal text-center max-w-[1400px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)] px-4">
                    "शब्दांच्या पलीकडे जिथे मौन बोलतं, तिथेच खरी साहित्यकला जन्म घेते."
                </p>

                <div className="flex items-center gap-6 mt-16 md:mt-24 w-full justify-center opacity-90 mix-blend-screen drop-shadow-xl">
                    <div className="h-px w-10 md:w-24 bg-gradient-to-l from-[#FCE116] to-transparent opacity-50" />
                    <span className="text-[10px] md:text-sm uppercase tracking-[0.6em] text-[#FCE116] font-manrope font-bold">The Essence of Art</span>
                    <div className="h-px w-10 md:w-24 bg-gradient-to-r from-[#FCE116] to-transparent opacity-50" />
                </div>

            </div>

            {/* Global Ambient Scroll Hint Instructions */}
            <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40 mix-blend-screen pointer-events-none z-50">
                <span className="text-[9px] md:text-[11px] font-manrope font-bold uppercase tracking-[0.4em] text-[#FCE116]">Scroll to Discover</span>
                <div className="w-px h-12 md:h-16 bg-gradient-to-b from-[#FCE116] to-transparent" />
            </div>

        </section>
    );
}
