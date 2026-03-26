'use client';

import { useScroll, useTransform, motion, MotionValue, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import React, { useRef } from 'react';
import { About } from '@/components/sections/About';
import RevealText from "@/components/ui/reveal-text";
import { LampContainer } from "@/components/ui/lamp";

interface SectionProps {
    scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Smooth mouse tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Dynamic background mouse tracking for subtle spotlight
    const bgMouseX = useMotionValue(0);
    const bgMouseY = useMotionValue(0);

    // Premium ultra-smooth trailing effect
    const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
    const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });

    const bgSpringX = useSpring(bgMouseX, { stiffness: 40, damping: 30 });
    const bgSpringY = useSpring(bgMouseY, { stiffness: 40, damping: 30 });

    const maskImage = useMotionTemplate`radial-gradient(circle 280px at ${springX}px ${springY}px, black 70%, transparent 100%)`;
    const spotlightTransform = useMotionTemplate`translate(${bgSpringX}px, ${bgSpringY}px)`;

    return (
        <motion.section
            style={{ scale, rotate, opacity }}
            className='sticky top-0 h-screen bg-[#050505] text-white flex flex-col items-center justify-center overflow-hidden z-0'
            onMouseMove={({ clientX, clientY }) => {
                bgMouseX.set(clientX - window.innerWidth / 2);
                bgMouseY.set(clientY - window.innerHeight / 2);
            }}
        >
            {/* 1. Ultra-Premium Ambient Lighting */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Subtle spotlight following mouse */}
                <motion.div
                    style={{ transform: spotlightTransform }}
                    className="absolute top-1/2 left-1/2 -ml-[30vw] -mt-[30vw] w-[60vw] h-[60vw] rounded-full bg-gray-500/[0.08] blur-[150px] pointer-events-none"
                />
            </div>

            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pt-[5vh]">

                {/* Massive Architectural Typography Background */}
                <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 1], [0, 250]) }}
                    className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none select-none flex items-center justify-center mix-blend-screen"
                >
                    <h1
                        className="font-crossten font-bold text-[22vw] md:text-[20vw] lg:text-[18vw] leading-[0.7] whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent tracking-tighter select-none pointer-events-none pt-12 uppercase"
                        style={{ WebkitTextStroke: '2px rgba(255,255,255,0.05)' }}
                    >
                        Nirankush
                    </h1>
                </motion.div>

                {/* Central Image with Lamp Effect */}
                <div className="absolute inset-0 z-10 w-full h-full flex flex-col items-center justify-center pt-24 pointer-events-none">
                    <div className="absolute top-[50%] -translate-y-1/2 w-[160%] h-[160%] z-0 pointer-events-none mix-blend-screen">
                        <LampContainer>
                            <span className="hidden">Lamp Background</span>
                        </LampContainer>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 w-[90%] md:w-[700px] lg:w-[850px] aspect-[4/5] flex items-end justify-center group pointer-events-auto"
                        onMouseMove={({ currentTarget, clientX, clientY }) => {
                            const { left, top } = currentTarget.getBoundingClientRect();
                            mouseX.set(clientX - left);
                            mouseY.set(clientY - top);
                        }}
                    >
                        {/* Minimal corner brackets for structure */}
                        <div className="absolute top-8 left-8 w-6 h-6 border-t border-l border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2 mix-blend-screen pointer-events-none"></div>
                        <div className="absolute bottom-16 right-8 w-6 h-6 border-b border-r border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:translate-x-2 group-hover:translate-y-2 mix-blend-screen pointer-events-none"></div>

                        {/* Base Image (Flawless Grayscale) */}
                        <img
                            src="/heroimage.png"
                            alt="Nirankush Patil Minimal"
                            draggable={false}
                            className="relative z-10 w-full h-full object-contain object-bottom filter grayscale contrast-[1.1] brightness-[0.8] drop-shadow-2xl transition-all duration-700 group-hover:brightness-100 opacity-90 pointer-events-none select-none"
                        />

                        {/* Overlay Image (Color - Elegantly Revealed) */}
                        <motion.div
                            className="absolute inset-0 z-20 w-full h-full pointer-events-none transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                            style={{
                                maskImage: maskImage,
                                WebkitMaskImage: maskImage,
                            }}
                        >
                            <img
                                src="/heroimage2.png"
                                alt="Nirankush Patil Premium Color"
                                draggable={false}
                                className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] saturate-[1.2] contrast-[1.1] pointer-events-none select-none"
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Floating Architectural Presentation Blocks */}
                <div className="absolute top-[65%] md:top-[60%] w-full max-w-[1500px] px-8 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-start md:items-center z-30 pointer-events-none gap-8 md:gap-0">

                    {/* Left Block - Elegant Frosted Glass */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-[340px] text-left pointer-events-auto backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] p-8 rounded-3xl shadow-2xl group hover:bg-white/[0.04] transition-colors duration-500"
                    >
                        <div className="w-12 h-[1px] bg-white/20 mb-6 group-hover:w-16 transition-all duration-500 ease-out"></div>
                        <RevealText
                            className="font-manrope text-[15px] font-medium leading-[1.8] text-gray-400"
                            delay={600}
                            direction="up"
                        >
                            <span className="text-white font-semibold">Nirankush Patil</span> is a <span className="text-white font-semibold">Systems Architect</span> based in India. Translating complex problems into minimal, scalable digital experiences.
                        </RevealText>
                    </motion.div>

                    {/* Right Block - Availability / Status */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-[300px] text-left md:text-right pointer-events-auto backdrop-blur-xl bg-white/[0.02] border border-white/[0.05] p-8 rounded-3xl shadow-2xl flex flex-col md:items-end group hover:bg-white/[0.04] transition-colors duration-500"
                    >
                        <div className="flex items-center justify-start md:justify-end gap-3 mb-6">
                            <div className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </div>
                            <span className="text-[10px] uppercase tracking-[0.3em] font-khand font-bold text-gray-300">Available For Work</span>
                        </div>
                        <p className="font-manrope text-[15px] font-medium leading-[1.8] text-gray-400">
                            Engineering the exceptional with extreme attention to detail and performance architecture.
                        </p>
                    </motion.div>
                </div>

                {/* Minimal Footer & Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-8 w-full max-w-[1500px] px-8 md:px-12 lg:px-24 flex justify-between items-end text-[10px] uppercase tracking-[0.2em] font-manrope font-semibold text-gray-500 z-20"
                >
                    <span className="select-none">&copy; NIRANKUSH {new Date().getFullYear()}</span>

                    <div className="flex flex-col items-center gap-3">
                        <span className="tracking-[0.4em]">Scroll</span>
                        <div className="w-[1px] h-12 bg-gray-700 relative overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 w-full h-[30%] bg-white"
                                animate={{ y: ["-300%", "300%"] }}
                                transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </motion.section>
    );
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

    return (
        <motion.section
            style={{ scale, rotate }}
            className='relative min-h-screen bg-[#0a0a0a] text-white z-10'
        >
            <About />
        </motion.section>
    );
};

export function HeroScroll() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    return (
        <main ref={container} className='relative h-auto bg-[#0a0a0a]'>
            <Section1 scrollYProgress={scrollYProgress} />
            <Section2 scrollYProgress={scrollYProgress} />
        </main>
    );
}

