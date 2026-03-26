'use client';

import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { usePersona } from '@/context/PersonaContext';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Instagram, Mail, ArrowUpRight, Feather, BookOpen, PenTool } from 'lucide-react';
import { LineShadowText } from '@/components/magicui/line-shadow-text';

function DeveloperFooter() {
    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/ErAnkushPatil' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/webdevankush/' },
        { name: 'Twitter', url: 'https://twitter.com/nirankush' },
        { name: 'Instagram', url: 'https://instagram.com/nirankush' },
        { name: 'YouTube', url: 'https://youtube.com/@thenirankushvoice?si=eCzTnCa01qaQvMrb' },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative px-6 py-12 md:px-12 md:py-16 bg-[#050505] text-[#FAFAFA] flex flex-col justify-end min-h-[90vh] z-10 border-t border-white/5 overflow-hidden">
            <div className="w-full max-w-[1600px] mx-auto flex flex-col justify-between flex-grow z-10 h-full">

                {/* Main Content Area */}
                <div className="flex flex-col items-center justify-center flex-grow py-24 md:py-32 h-full mt-auto">

                    {/* Minimal Eyebrow */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[10px] md:text-xs font-manrope font-bold uppercase tracking-[0.4em] text-white/40 mb-12 lg:mb-16 text-center"
                    >
                        Available for select freelance opportunities
                    </motion.p>

                    {/* Giant Typography */}
                    <div className="flex flex-col items-center text-center">
                        <div className="overflow-hidden pb-4">
                            <motion.h2
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                className="text-[14vw] sm:text-[12vw] md:text-[9vw] lg:text-[8vw] font-crossten font-black uppercase tracking-tighter leading-[0.85] text-white"
                            >
                                Let&apos;s build
                            </motion.h2>
                        </div>
                        <div className="overflow-hidden mt-2 md:mt-0 pb-4">
                            <motion.h2
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                viewport={{ once: true }}
                                className="text-[14vw] sm:text-[12vw] md:text-[9vw] lg:text-[8vw] font-crossten font-black uppercase tracking-tighter leading-[0.85] text-white/50 flex flex-wrap justify-center items-center gap-x-4 md:gap-x-8"
                            >
                                something
                                <span className="text-developer-accent italic font-playfair tracking-normal lowercase -mt-4 md:-mt-8 drop-shadow-[0_0_20px_rgba(220,38,38,0.4)]">epic.</span>
                            </motion.h2>
                        </div>
                    </div>

                    {/* Circular Action Button */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="mt-20 md:mt-28 mb-10"
                    >
                        <Link
                            href="mailto:er.ankush.patil@gmail.com"
                            className="group relative flex items-center justify-center w-40 h-40 md:w-56 md:h-56 bg-[#050505] border border-white/20 rounded-full hover:bg-white hover:text-black hover:border-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden"
                        >
                            <span className="font-crossten font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs lg:text-sm z-10 transition-transform duration-500 delay-75 group-hover:scale-110 flex flex-col items-center gap-2">
                                Say Hello
                            </span>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ms-16 md:ms-24 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 group-hover:ms-12 md:group-hover:ms-20 text-black">
                                <ArrowUpRight size={24} />
                            </div>
                            {/* Inner ripple for premium effect */}
                            <div className="absolute inset-x-0 bottom-0 top-full group-hover:top-0 bg-white opacity-10 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] z-0 rounded-[50%_50%_0_0]" />
                        </Link>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-12 pt-12 border-t border-white/10 w-full relative z-10 mt-auto">

                    {/* Local Time & Location */}
                    <div className="flex flex-col gap-3 font-manrope text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/50 w-full md:w-1/3 text-center md:text-left">
                        <span>Local Time — {new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' })} IST</span>
                        <span className="flex items-center justify-center md:justify-start gap-3">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Based in Pune, India
                        </span>
                    </div>

                    {/* Desktop Social Text Links (Middle) */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 w-full md:w-1/3">
                        {socialLinks.map((social, idx) => (
                            <motion.div
                                key={social.name}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 + (idx * 0.1) }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative font-crossten text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/80 overflow-hidden flex py-1"
                                >
                                    <div className="relative h-[1.2em] w-full overflow-hidden">
                                        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">{social.name}</span>
                                        <span className="absolute top-full left-0 block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full text-developer-accent">{social.name}</span>
                                    </div>
                                    {/* Link underline drawing */}
                                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 origin-right transition-transform duration-500 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-left group-hover:bg-developer-accent" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Copyright */}
                    <div className="font-manrope text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/50 w-full md:w-1/3 text-center md:text-right">
                        <span>&copy; {currentYear} Nirankush.</span>
                        <br className="hidden md:block mt-1" />
                        <span className="md:ml-2">All rights reserved.</span>
                    </div>

                </div>
            </div>

            {/* Extremely Subtle Ambient Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-developer-accent/10 blur-[150px] rounded-[100%] pointer-events-none z-0 translate-y-1/2" />
        </footer>
    );
}

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}


// --- Extreme Framer Motion Magnetic Component ---
function Magnetic({ children, className = "", pull = 0.3 }: { children: React.ReactNode, className?: string, pull?: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    
    // Snappy, highly responsive physics
    const mouseX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.5 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.5 });

    function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
        const { clientX, clientY } = event;
        const rect = event.currentTarget.getBoundingClientRect();
        const middleX = clientX - (rect.left + rect.width / 2);
        const middleY = clientY - (rect.top + rect.height / 2);
        x.set(middleX * pull); 
        y.set(middleY * pull);
    }

    function reset() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            className={`relative inline-block ${className}`}
            style={{ x: mouseX, y: mouseY, zIndex: 50 }}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
        >
            {children}
        </motion.div>
    );
}

function AuthorFooter() {
    const currentYear = new Date().getFullYear();
    const footerRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Massive flowing text on scroll
        gsap.fromTo(".flow-text-1", 
            { x: "10%" },
            { 
                x: "-30%", 
                ease: "none", 
                scrollTrigger: { trigger: footerRef.current, scrub: true, start: "top bottom", end: "bottom top" }
            }
        );
        gsap.fromTo(".flow-text-2", 
            { x: "-30%" },
            { 
                x: "10%", 
                ease: "none", 
                scrollTrigger: { trigger: footerRef.current, scrub: true, start: "top bottom", end: "bottom top" }
            }
        );

        // Vibrant Pill Reveal
        gsap.from(".vibrant-pill", {
            y: 100,
            opacity: 0,
            rotation: 15,
            stagger: 0.1,
            duration: 1,
            ease: "back.out(1.5)",
            scrollTrigger: { trigger: containerRef.current, start: "top 75%" }
        });

    }, { scope: footerRef });

    return (
        <section ref={footerRef} className="relative z-0 min-h-[90vh] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#FCE116]/30 via-[#F5F2F0] to-[#EAE8E4] text-[#1a1a1a] overflow-hidden flex flex-col justify-end pt-32 pb-8 border-t-[8px] border-[#FCE116]">
            
            {/* Fine Paper Filter & Base Setup */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-multiply" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }} />

            {/* Premium Mesh Gradient Orbs */}
            <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-gradient-to-br from-[#FCE116]/60 to-[#F5F2F0]/10 rounded-full blur-[200px] pointer-events-none overflow-hidden" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-gradient-to-tl from-[#EAE8E4] to-[#FCE116]/40 rounded-full blur-[180px] opacity-80 pointer-events-none" />
            <div className="absolute top-[30%] left-[50%] w-[40vw] h-[40vw] bg-[#1a1a1a] rounded-full blur-[140px] opacity-[0.03] pointer-events-none" />

            {/* Flowing Text Background */}
            <div className="absolute inset-0 flex flex-col justify-center pointer-events-none select-none overflow-hidden opacity-5 font-crossten font-black uppercase text-[15vw] leading-[0.85] whitespace-nowrap z-0">
                <div className="flow-text-1 text-[#1a1a1a]">INNOVATIVE THINKING • BOUNDLESS CREATIVITY • </div>
                <div className="flow-text-2 text-transparent" style={{ WebkitTextStroke: '2px #1a1a1a' }}>MASTERFUL EXECUTION • MASTERFUL EXECUTION • </div>
            </div>

            {/* Main Interactive Container */}
            <div ref={containerRef} className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
                
                <h2 className="text-5xl md:text-8xl font-crossten font-black uppercase text-center leading-tight tracking-tighter mb-16 text-[#1a1a1a]">
                    Ready to create <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-stone-500 to-[#1a1a1a]">
                        something Epic?
                    </span>
                </h2>

                {/* Elegant Action Pills */}
                <div className="flex flex-wrap justify-center gap-6 mb-24">
                    <a href="mailto:er.ankush.patil@gmail.com" className="vibrant-pill group relative px-10 py-5 bg-[#FCE116] text-[#1a1a1a] font-crossten font-bold uppercase tracking-widest text-sm md:text-base rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl border border-[#1a1a1a]/10">
                        <span className="relative z-10 flex items-center gap-3">
                            Start a Project <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                    </a>
                    
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" className="vibrant-pill group relative px-10 py-5 bg-[#1a1a1a] text-[#F5F2F0] font-crossten font-bold uppercase tracking-widest text-sm md:text-base rounded-full overflow-hidden hover:scale-105 transition-transform duration-300 shadow-xl">
                        <span className="relative z-10 flex items-center gap-3">
                            Join the Movement <Instagram className="group-hover:scale-110 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                    </a>
                </div>

                <div className="w-full flex flex-col md:flex-row justify-between items-center bg-white/50 backdrop-blur-xl border border-[#1a1a1a]/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                    <div className="flex flex-col gap-6 md:w-1/2 mb-10 md:mb-0">
                        <h3 className="text-2xl font-crossten font-bold text-[#1a1a1a]">Let's Connect</h3>
                        <p className="text-stone-600 font-manrope max-w-sm">
                            Always open for new opportunities to craft immersive online experiences and groundbreaking stories.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 md:w-1/2 md:items-end w-full">
                        {[
                            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/webdevankush/' },
                            { name: 'YouTube', url: 'https://youtube.com/@thenirankushvoice?si=eCzTnCa01qaQvMrb' },
                            { name: 'GitHub', url: 'https://github.com/ErAnkushPatil' },
                        ].map((social, i) => (
                            <a key={social.name} href={social.url} target="_blank" rel="noreferrer" className="flex items-center justify-between w-full md:w-64 px-6 py-4 bg-white rounded-xl hover:bg-[#FCE116] hover:text-[#1a1a1a] transition-colors duration-300 group border border-[#1a1a1a]/5 shadow-sm">
                                <span className="font-crossten font-bold uppercase tracking-widest text-sm text-[#1a1a1a]">{social.name}</span>
                                <ArrowUpRight size={18} className="text-[#1a1a1a] group-hover:rotate-45 transition-transform" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Footer Details */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 mt-24 flex flex-col md:flex-row justify-between items-center border-t border-[#1a1a1a]/10 pt-10 text-stone-500 font-manrope text-xs md:text-sm font-bold tracking-widest uppercase">
                <span>&copy; {currentYear} Nirankush. All Rights Reserved.</span>
                <span className="mt-4 md:mt-0 flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1a1a1a] opacity-50"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#1a1a1a]"></span>
                    </span>
                    Based in Pune, India
                </span>
            </div>
            
        </section>
    );
}

export function Footer() {
    const { persona } = usePersona();

    if (persona === 'developer') {
        return <DeveloperFooter />;
    }

    return <AuthorFooter />;
}
