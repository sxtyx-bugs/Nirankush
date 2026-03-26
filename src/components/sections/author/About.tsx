"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

export function About() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Intro Animations for Awwwards Style Hero
        const tl = gsap.timeline();
        
        // 1. Sliding block wipe effect (Loading screen style intro)
        tl.fromTo(".intro-block", 
            { scaleY: 1 }, 
            { scaleY: 0, duration: 1.2, stagger: 0.1, ease: "expo.inOut", transformOrigin: "top" }, 
            0
        )
        // 2. Yellow morph background sliding and skewing into place
        .fromTo(".yellow-morph", 
            { scaleX: 0, skewX: 0, transformOrigin: "left" }, 
            { scaleX: 1, skewX: -8, duration: 1.5, ease: "expo.out" },
            0.6
        )
        // 3. Huge WHO text staggered letter by letter
        .fromTo(".giant-who span.letter", 
            { y: 150, opacity: 0, rotationX: -90, transformOrigin: "bottom" }, 
            { y: 0, opacity: 1, rotationX: 0, duration: 1.2, stagger: 0.1, ease: "back.out(1.5)" }, 
            0.7
        )
        // 4. Parallax creative image reveal with mask
        .fromTo(".hero-photo-wrapper", 
            { clipPath: "inset(100% 0 0 0)", scale: 1.1 }, 
            { clipPath: "inset(0% 0 0 0)", scale: 1, duration: 1.8, ease: "power3.inOut" }, 
            0.8
        )
        // Image inner zoom and filter reveal (Optimized specifically for performance, avoid heavy blurs on big images)
        .fromTo(".hero-photo img", 
            { scale: 1.3, rotate: -3 }, 
            { scale: 1.15, rotate: 0, duration: 2.2, ease: "power2.out", force3D: true }, 
            0.8
        )
        // Light overlay fade instead of expensive CSS filter blending
        .fromTo(".hero-photo-wrapper::after", 
            { backgroundColor: "white", opacity: 0.8 }, 
            { opacity: 0, duration: 2.2, ease: "power2.out" }, 
            0.8
        )
        // 5. Floating Vision badge
        .fromTo(".img-badge", 
            { scale: 0, rotation: -90, opacity: 0 }, 
            { scale: 1, rotation: 10, opacity: 1, duration: 1, ease: "elastic.out(1, 0.4)" }, 
            1.6
        )
        // 6. Handwritten text drawing in
        .fromTo(".handwritten-word", 
            { y: -50, opacity: 0, rotate: 15, scale: 0.8 }, 
            { y: 0, opacity: 1, rotate: 0, scale: 1, stagger: 0.15, duration: 1.2, ease: "back.out(1.5)" }, 
            1.2
        )
        // 7. Bottom AUTHOR-LED text sliding up
        .fromTo(".bottom-artist-led",
            { x: -50, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.5, ease: "power4.out" },
            1.5
        );

        // Scroll Animations for sections (Optimized batching)
        gsap.utils.toArray('.animate-on-scroll').forEach((el: any) => {
            gsap.fromTo(el, 
                { y: 80, opacity: 0 }, 
                { 
                    y: 0, 
                    opacity: 1, 
                    duration: 1.2, 
                    ease: "power3.out",
                    force3D: true, // Hardware acceleration
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        // Sleek Parallax text scrolling for massive background letters (MUST START SMALL AND GROW)
        gsap.utils.toArray('.parallax-text').forEach((el: any) => {
            gsap.fromTo(el, 
                { 
                    scale: 0.3, // Starts significantly smaller
                    y: 100 
                },
                {
                    scale: 1.5, // Grows significantly larger
                    y: (i, target) => -150 * (target.dataset.speed || 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: el.parentElement,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.5 // Ultra-premium smoothing
                    }
                }
            );
        });


        // Rebus Scroll Velocity Text
        gsap.utils.toArray('.rebus-line').forEach((el: any) => {
            const direction = parseFloat(el.dataset.direction || "1");
            
            // Initial Entrance Pop
            gsap.fromTo(el, 
                { opacity: 0, y: 50, rotateX: -45 }, 
                { 
                    opacity: 1, y: 0, rotateX: 0, duration: 1.2, ease: "power3.out", force3D: true,
                    scrollTrigger: { trigger: ".rebus-trigger", start: "top 85%" } 
                }
            );

            // Scroll Velocity / Parallax shifting left and right
            gsap.to(el, {
                x: `${direction * 15}vw`,
                ease: "none",
                force3D: true,
                scrollTrigger: {
                    trigger: ".rebus-trigger",
                    start: "top 90%",
                    end: "bottom 10%",
                    scrub: 1, // Smooth scrolling scrub
                }
            });
        });

        // HOW Section Animated Reveal (Flawless reliable entrance)
        const howTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".how-section",
                start: "top 65%",
            }
        });
        
        howTl.from(".how-banner",
            { scaleX: 0, duration: 1.5, ease: "power4.inOut" }
        )
        .from(".how-title",
            { y: 50, opacity: 0, duration: 1, ease: "power3.out" },
            "-=1.2"
        )
        .from(".how-subtitle",
            { x: -50, opacity: 0, duration: 0.8, stagger: 0.15, ease: "back.out(1.5)" },
            "-=0.8"
        )
        .from(".how-image-container",
            { x: 100, opacity: 0, rotate: 10, duration: 1.2, ease: "power3.out" },
            "-=1.2"
        )
        .from(".how-signature",
            { scale: 0, opacity: 0, duration: 1, ease: "elastic.out(1, 0.4)" },
            "-=0.6"
        );

    }, { scope: container });

    return (
        <article ref={container} className="w-full bg-white text-[#1a1a1a] font-sans selection:bg-[#FCE116] selection:text-black">
            
            {/* ================= HERO SECTION (Awwwards Creative Layout) ================= */}
            <section id="who" className="relative w-full h-screen min-h-[750px] bg-[#fcfaf7] overflow-hidden flex pt-24 pb-40 lg:pb-0">
                
                {/* Intro Sliding Blocks Sequence */}
                <div className="intro-block absolute top-0 left-0 w-1/3 h-full bg-[#1a1a1a] z-50 pointer-events-none" />
                <div className="intro-block absolute top-0 left-1/3 w-1/3 h-full bg-[#FCE116] z-50 pointer-events-none" />
                <div className="intro-block absolute top-0 left-2/3 w-1/3 h-full bg-stone-300 z-50 pointer-events-none" />

                {/* Subtle Grid Background layer */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-30 z-0 pointer-events-none" />

                {/* Background Structural Shapes */}
                <div className="yellow-morph absolute top-0 left-[-5%] w-[60%] lg:w-[50%] h-[105%] bg-[#FCE116] transform -skew-x-[8deg] z-0 shadow-lg border-r-[10px] border-black/10 mix-blend-multiply origin-left" />

                {/* Decorative Side Text */}
                <div className="parallax-text absolute top-[10%] md:top-[20%] right-[-10%] md:right-[-5%] text-[15vw] font-khand font-black text-black/5 leading-none select-none z-0 rotate-90 origin-right whitespace-nowrap hidden md:block mix-blend-multiply pointer-events-none" data-speed="2">CREATIVE VISION</div>
                
                {/* Wrapper for content aligned to max-width */}
                <div className="relative w-full max-w-[1600px] mx-auto z-10 flex flex-col lg:flex-row h-full">
                    
                    {/* Main Left Content Area with Safe Flex Column */}
                    <div className="flex-1 relative w-full h-full flex flex-col justify-between px-[5%] pb-[10%]">

                        {/* TOP SECTION: WHO */}
                        <div className="relative z-10 w-full pt-4 md:pt-10">
                            {/* Number 001. */}
                            <div className="text-[10px] md:text-[12px] font-bold tracking-[0.2em] text-[#1a1a1a]/60 md:mb-2 ml-4 md:ml-0 overflow-hidden">
                                <span className="inline-block transform transition-transform animate-on-scroll">001.</span>
                            </div>

                            {/* Giant Background "WHO" with split letters for stagger */}
                            <div className="giant-who text-white text-[32vw] md:text-[22vw] lg:text-[18vw] font-khand font-black leading-[0.75] tracking-tighter mix-blend-overlay opacity-90 select-none md:-ml-[2%] mt-[-5%] sm:mt-0 flex perspective-[500px]">
                                <span className="letter block relative z-10 drop-shadow-sm">W</span>
                                <span className="letter block relative z-10 drop-shadow-sm">H</span>
                                <span className="letter block relative z-10 drop-shadow-sm">O</span>
                            </div>
                        </div>

                        {/* ABSOLUTE MIDDLE SECTION: Photo & Handwritten Canvas */}
                        <div className="absolute inset-0 z-20 pointer-events-none perspective-[1000px]">
                            
                            {/* Massive Photo Container with Mask Wrapper */}
                            <div className="absolute top-[25%] md:top-[12%] right-[5%] md:right-[15%] w-[80vw] md:w-[40vw] lg:w-[32vw] max-w-[600px] aspect-[3/4] z-10 group pointer-events-auto">
                                {/* Decorative offset rectangle */}
                                <div className="absolute inset-0 bg-[#FCE116] transform translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 rotate-3 transition-transform duration-700 ease-out group-hover:translate-x-12 group-hover:translate-y-12 shadow-2xl z-0 pointer-events-none" />
                                
                                {/* Image Mask Wrapper */}
                                <div className="hero-photo-wrapper relative w-full h-full overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-10 border border-white/20 transform transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                                    <div className="hero-photo absolute inset-0 w-full h-full">
                                        <Image src="/author-hero.jpeg" fill alt="Nirankush" className="object-cover object-top mix-blend-multiply filter grayscale-[0.8] contrast-125 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100" priority />
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0" />
                                </div>

                                {/* Floating Vision badge */}
                                <div className="img-badge absolute -left-6 -bottom-6 md:-left-12 md:-bottom-12 w-20 h-20 md:w-28 md:h-28 bg-stone-900 rounded-full flex flex-col items-center justify-center text-white font-khand font-bold text-[10px] md:text-sm tracking-widest uppercase shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-30 transform hover:scale-110 transition-transform duration-300">
                                    <span className="text-[#FCE116] leading-none mb-1">Author</span>
                                    <span className="leading-none">Vision</span>
                                </div>
                            </div>

                            {/* Handwritten Overlay */}
                            <div className="absolute top-[50%] md:top-[35%] left-[5%] md:left-[15%] z-30 transform -rotate-[6deg] flex flex-col items-start font-authenticity text-[16vw] md:text-[9vw] lg:text-[7vw] leading-[0.45] tracking-tight">
                                <span className="handwritten-word text-[#1a1a1a] drop-shadow-sm ml-[5%]">Artists</span>
                                <span className="handwritten-word ml-[20%] md:ml-[30%] text-transparent drop-shadow-md mt-4 z-30 opacity-90 relative" style={{ WebkitTextStroke: '2px white' }}>
                                    <span className="absolute inset-0 text-white opacity-20 hidden md:inline">Joy</span>
                                    Joy
                                </span>
                                <span className="handwritten-word ml-[10%] md:ml-[15%] text-[#1a1a1a] mt-4 z-20 shadow-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">Community</span>
                            </div>
                        </div>

                        {/* BOTTOM SECTION: Bold Text */}
                        <div className="bottom-artist-led relative z-30 lg:pl-[5%]">
                            <h2 className="text-[14vw] md:text-[7vw] lg:text-[6vw] font-khand font-black leading-[0.85] text-[#1a1a1a] tracking-tighter uppercase whitespace-nowrap drop-shadow-[0_10px_10px_rgba(255,255,255,0.9)]">
                                AUTHOR-LED
                            </h2>
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= WE CENTER SECTION (SCROLL VELOCITY COMPONENT) ================= */}
            <section className="w-full bg-white py-32 relative overflow-hidden">
                <div className="mx-auto flex flex-col items-center text-center relative z-10 w-full overflow-hidden">
                    <div className="w-full text-left text-[10px] font-bold text-[#1a1a1a]/50 mb-12 animate-on-scroll px-6 md:px-12 max-w-[1200px] mx-auto">002.</div>
                    
                    {/* The Rebus Text: Scroll Velocity Architecture */}
                    <div className="rebus-trigger w-full flex flex-col font-khand font-black text-[12vw] md:text-[8vw] lg:text-[110px] leading-[0.8] tracking-tighter text-[#1a1a1a] uppercase overflow-hidden py-10 perspective-[1000px]">
                        
                        <div className="rebus-line flex items-center justify-center gap-4 md:gap-8 transform will-change-transform whitespace-nowrap" data-direction="-1">
                            <span>WE</span>
                            <span className="inline-block w-[15vw] md:w-[150px] h-[10vw] md:h-[90px] rounded-[10px] md:rounded-2xl overflow-hidden relative grayscale brightness-110 shadow-lg shrink-0">
                                <Image src="/ankush.jpeg" fill className="object-cover object-top" alt="Ankush"/>
                            </span>
                            <span>WEAVE THE UNTOLD</span>
                        </div>

                        <div className="rebus-line flex items-center justify-center gap-4 md:gap-8 transform will-change-transform mt-2 md:mt-4 whitespace-nowrap" data-direction="1">
                            <span>HISTORIES AND PROFOUND DREAMS</span>
                        </div>

                        <div className="rebus-line flex items-center justify-center gap-4 md:gap-8 transform will-change-transform mt-2 md:mt-4 whitespace-nowrap" data-direction="-1">
                            <span>OF THE MARGINALIZED TO</span>
                            <span className="font-authenticity text-[#FCE116] lowercase font-normal text-[16vw] md:text-[160px] tracking-normal inline-block transform -rotate-2 drop-shadow-sm mt-[-5vw] md:mt-[-40px]">
                                transform
                            </span>
                        </div>

                        <div className="rebus-line flex items-center justify-center gap-4 md:gap-8 transform will-change-transform mt-2 md:mt-4 whitespace-nowrap" data-direction="1">
                            <span>HOW WE UNDERSTAND LITERATURE,</span>
                        </div>

                        <div className="rebus-line flex items-center justify-center gap-4 md:gap-8 transform will-change-transform mt-2 md:mt-4 whitespace-nowrap" data-direction="-1">
                            <span>CULTURE, AND HUMANITY.</span>
                        </div>
                    </div>
                    
                    <p className="animate-on-scroll mt-24 text-[13px] md:text-[15px] font-manrope font-semibold text-stone-600 max-w-3xl lowercase tracking-wide leading-relaxed px-6 md:px-12">
                        we collaborate with voices in the shadows, crafting stories and unearthing histories to create <span className="font-extrabold text-[#1a1a1a]">literary access</span> that connects deeply with truth, identity, and shared experiences.
                    </p>
                </div>
            </section>

            {/* ================= WHY GRID SECTION (MATCHING IMAGE 1, PART 2) ================= */}
            <section className="w-full bg-white pb-32 pt-16 overflow-hidden relative">
                <div className="max-w-[1000px] mx-auto relative px-6 md:px-0">
                    
                    {/* Background WHY text (Now with Premium Parallax) */}
                    <div className="parallax-text absolute -top-10 md:-top-20 left-0 right-0 text-center text-[#FCE116] font-khand font-black text-[180px] md:text-[320px] leading-none z-0 select-none" data-speed="1.2">
                        WHY
                    </div>

                    {/* Grid of 3 images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 relative z-10 pt-20 md:pt-40 px-6">
                        <div className="animate-on-scroll aspect-[3/4] bg-stone-200 grayscale relative overflow-hidden shadow-2xl transition-transform hover:scale-105 duration-500"><Image src="/sahyadinashi.jpg" fill className="object-cover" alt="Community 1"/></div>
                        <div className="animate-on-scroll aspect-[3/4] bg-stone-200 grayscale relative overflow-hidden shadow-2xl transition-transform hover:scale-105 duration-500 transform md:translate-y-16"><Image src="/chandra.jpg" fill className="object-cover" alt="Community 2"/></div>
                        <div className="animate-on-scroll aspect-[3/4] bg-stone-200 grayscale relative overflow-hidden shadow-2xl transition-transform hover:scale-105 duration-500"><Image src="/parkhandale.jpg" fill className="object-cover object-top" alt="Community 3"/></div>
                    </div>

                    {/* Overlaid Handwritten Text */}
                    <div className="animate-on-scroll absolute inset-0 z-20 flex items-center justify-center transform -rotate-6 pointer-events-none mt-20 md:mt-40">
                        <div className="flex flex-col items-center gap-6 md:gap-12 text-center drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                            <div>
                                <span className="text-white drop-shadow-xl align-middle mr-2 font-khand font-black text-[50px] md:text-[80px] uppercase tracking-tighter">TO </span>
                                <span className="font-authenticity text-[#FCE116] ml-2 drop-shadow-lg text-[90px] md:text-[140px] leading-[0.7]">narrate</span> 
                            </div>
                            <div>
                                <span className="font-khand font-black uppercase tracking-tighter text-white text-[45px] md:text-[75px] drop-shadow-xl align-middle mr-4">PROFOUND</span>
                                <span className="font-authenticity text-[#FCE116] drop-shadow-lg text-[90px] md:text-[140px] leading-[0.7]">stories </span>
                            </div>
                            <div>
                                <span className="font-khand font-black uppercase tracking-tighter text-white text-[45px] md:text-[60px] drop-shadow-xl align-middle mx-4">OF</span>
                                <span className="font-authenticity text-[#FCE116] drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)] text-[90px] md:text-[140px] leading-[0.7]">existence.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= HOW SECTION (MATCHING IMAGE 1, PART 3) ================= */}
            <section className="how-section w-full relative py-20 mt-10">
                
                {/* 003. label */}
                <div className="absolute top-[35%] right-8 md:right-[10%] text-[10px] font-bold text-[#1a1a1a]/60 z-30">003.</div>

                {/* Yellow Banner */}
                <div className="how-banner absolute top-[35%] md:top-[30%] left-0 w-full h-[45%] md:h-[40%] lg:h-[35%] bg-[#FCE116] z-0 shadow-inner origin-left" />
                
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center border-[#FCE116]/20 py-20">
                    
                    {/* Text Block */}
                    <div className="flex-1 relative z-20 pr-4 mt-20 md:mt-0">
                        <h2 className="how-title text-[120px] md:text-[230px] lg:text-[280px] font-khand font-black text-[#1a1a1a] leading-none mb-2 md:mb-6 drop-shadow-md">
                            HOW
                        </h2>
                        <div className="text-[35px] md:text-[50px] font-khand font-bold text-[#1a1a1a] uppercase leading-none md:mt-4 tracking-wide flex flex-col items-start gap-2">
                            <span className="how-subtitle block bg-[#1a1a1a] text-[#FCE116] px-4 py-1 w-fit shadow-lg shadow-black/10 transition-transform hover:-translate-y-1">We Write.</span>
                            <span className="how-subtitle block bg-[#1a1a1a] text-white px-4 py-1 w-fit shadow-lg shadow-black/10 transition-transform hover:-translate-y-1">We Publish.</span>
                            <span className="how-subtitle block bg-[#1a1a1a] text-stone-300 px-4 py-1 w-fit shadow-lg shadow-black/10 transition-transform hover:-translate-y-1">We Inspire.</span>
                        </div>
                    </div>
                    
                    {/* Image Block */}
                    <div className="flex-1 relative w-full h-[500px] md:h-[650px] mt-20 md:mt-0 flex justify-end items-center perspective-[1000px]">
                        <div className="how-image-container relative w-[95%] md:w-[75%] lg:w-[65%] max-w-[500px] aspect-[3/4] z-10 shadow-[0_30px_60px_rgba(0,0,0,0.4)] transition-transform hover:-translate-y-4 duration-500 ease-out">
                            <Image src="/ankush.jpeg" fill className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700" alt="Nirankush Holding Book"/>
                            
                            {/* Signature "We write." */}
                            <div className="how-signature absolute bottom-[2%] left-[-20%] md:left-[-35%] font-authenticity text-white text-[90px] md:text-[130px] lg:text-[180px] drop-shadow-[0_10px_15px_rgba(0,0,0,0.8)] -rotate-12 z-20 pointer-events-none whitespace-nowrap">
                                We write.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* ================= WHAT SECTION (IMAGE 1 FOOTER) ================= */}
             <section className="w-full bg-white py-20 px-6 md:px-12 text-center animate-on-scroll mb-20">
                 <h2 className="text-[100px] md:text-[180px] font-khand font-black text-[#1a1a1a] leading-[0.8]">
                     WHAT
                 </h2>
                 <p className="font-authenticity text-[50px] md:text-[80px] text-stone-500 -mt-10 md:-mt-16 ml-32 md:ml-64 transform rotate-[-5deg]">
                     it looks like...
                 </p>
             </section>

        </article>
    );
}
