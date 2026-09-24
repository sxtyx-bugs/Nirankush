'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight, ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { About } from '@/components/sections/About';

export function HeroScroll() {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });

    const portraitY = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const titleY = useTransform(scrollYProgress, [0, 1], [0, 240]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

    return (
        <>
            <motion.section
                ref={heroRef}
                style={{ opacity: contentOpacity }}
                className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#050505] px-6 pb-12 pt-28 text-white md:px-12 lg:px-20"
            >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,255,255,0.10),transparent_34%)]" />
                <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] [background-size:72px_72px]" />

                <motion.p
                    style={{ y: titleY }}
                    className="pointer-events-none absolute left-1/2 top-[43%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-crossten text-[19vw] font-bold uppercase leading-none tracking-[-0.07em] text-white/[0.055]"
                    aria-hidden="true"
                >
                    Nirankush
                </motion.p>

                <div className="relative z-20 mx-auto grid w-full max-w-[1500px] items-end gap-10 lg:grid-cols-[1fr_minmax(380px,620px)_1fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="order-2 max-w-sm self-center lg:order-1 lg:self-end lg:pb-16"
                    >
                        <p className="mb-5 font-khand text-xs font-semibold uppercase tracking-[0.32em] text-white/45">
                            Systems Architect · Author
                        </p>
                        <h1 className="font-manrope text-4xl font-semibold leading-[0.98] tracking-[-0.05em] sm:text-5xl">
                            I design systems with clarity and write stories with soul.
                        </h1>
                        <p className="mt-6 max-w-xs font-manrope text-sm leading-7 text-white/55">
                            Nirankush is Ankush Patil — a technical architect, Marathi poet and author based in India.
                        </p>
                    </motion.div>

                    <motion.div
                        style={{ y: portraitY }}
                        initial={{ opacity: 0, scale: 0.96, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative order-1 mx-auto aspect-[4/5] w-full max-w-[560px] lg:order-2"
                    >
                        <div className="absolute inset-x-[8%] bottom-[5%] top-[16%] rounded-full bg-white/[0.07] blur-3xl" />
                        <Image
                            src="/heroimage2.png"
                            alt="Nirankush — Ankush Patil"
                            fill
                            priority
                            sizes="(max-width: 1024px) 90vw, 42vw"
                            className="object-contain object-bottom drop-shadow-[0_28px_45px_rgba(0,0,0,0.65)]"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="order-3 flex flex-col items-start gap-5 self-center lg:items-end lg:self-end lg:pb-16 lg:text-right"
                    >
                        <a
                            href="#experience"
                            className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 font-manrope text-xs font-semibold uppercase tracking-[0.2em] transition hover:border-white/35 hover:bg-white/10"
                        >
                            Explore my work
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="/nirankush"
                            className="group inline-flex items-center gap-2 font-manrope text-xs uppercase tracking-[0.18em] text-white/55 transition hover:text-white"
                        >
                            Author profile
                            <ArrowDownRight className="h-4 w-4" />
                        </a>
                        <p className="max-w-[260px] font-manrope text-xs leading-6 text-white/35">
                            Building scalable products. Writing Marathi poetry rooted in history, identity and human experience.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute bottom-5 left-6 z-20 font-manrope text-[10px] uppercase tracking-[0.28em] text-white/30 md:left-12 lg:left-20">
                    © {new Date().getFullYear()} Nirankush
                </div>
            </motion.section>
            <About />
        </>
    );
}
