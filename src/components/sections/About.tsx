'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Camera, Code2, Cpu, Dribbble, Github, Instagram, Layers, Layout, Linkedin, Twitter } from 'lucide-react';
import { usePersona } from '@/context/PersonaContext';
import { Marquee } from '@/components/ui/Marquee';
import { CountUpStats } from '@/components/ui/CountUpStats';
import { Signature } from '@/components/ui/Signature';

const GridCard = ({ children, className, href }: { children: React.ReactNode; className?: string; href?: string }) => {
    const Content = (
        <div className={`bg-[#111] border border-white/5 rounded-[30px] p-8 relative overflow-hidden group hover:border-white/10 transition-all duration-300 h-full ${className}`}>
            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            {children}

            {/* Corner Icon */}
            {href && (
                <div className="absolute bottom-8 right-8 text-white/30 group-hover:text-white transition-colors duration-300">
                    <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </div>
            )}
        </div>
    );

    if (href) {
        return <Link href={href} className="block h-full">{Content}</Link>;
    }

    return Content;
};

export function About() {
    const { persona } = usePersona();
    const accentColor = persona === 'developer' ? 'text-developer-accent' : 'text-author-accent';
    const accentHex = persona === 'developer' ? '#FB493D' : '#F8DC25';

    return (
        <section id="about" className="py-24 px-4 md:px-8 bg-[#0a0a0a] text-white">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(240px,auto)]">

                    {/* 1. Profile Card ( spans 2 cols ) */}
                    <div className="lg:col-span-2 row-span-1 md:row-span-1 lg:row-span-1 h-full">
                        <GridCard className="flex flex-col md:flex-row items-center gap-8 md:gap-10 !p-10">
                            {/* Image with gradient background like GridX */}
                            <div className="relative w-48 h-48 flex-shrink-0">
                                <div className={`absolute inset-0 rounded-tr-[3rem] rounded-bl-[3rem] bg-gradient-to-tr ${persona === 'developer' ? 'from-developer-accent/20 to-blue-500/20' : 'from-author-accent/20 to-purple-500/20'}`} />
                                <div className="absolute inset-0 rounded-tr-[3rem] rounded-bl-[3rem] overflow-hidden transition-all duration-500">
                                    <Image
                                        src={persona === 'developer' ? "/developer-profile.jpeg" : "/author-profile.jpeg"}
                                        alt="Nirankush Patil"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col items-center md:items-start text-center md:text-left">
                                <span className="text-gray-500 text-xs font-crossten uppercase tracking-wider mb-2">A Web Developer</span>
                                <h2 className="text-3xl md:text-4xl font-khand font-bold leading-tight mb-2">
                                    Nirankush <br /> Patil.
                                </h2>
                                <p className="text-gray-400 text-sm font-crossten">
                                    I am a Technical Lead based in India.
                                </p>
                            </div>

                            <div className="absolute bottom-8 right-8">
                                <ArrowRight className="w-6 h-6 text-white/30 group-hover:text-white transition-colors" />
                            </div>
                        </GridCard>
                    </div>

                    {/* 2. Marquee Strip & Right Column Top ( spans 2 cols ) */}
                    <div className="lg:col-span-2 flex flex-col gap-6">

                        {/* Marquee Strip */}
                        <div className="bg-[#111] border border-white/5 rounded-full py-3 px-6 overflow-hidden">
                            <Marquee
                                items={["LATEST WORK AND FEATURED", " • ", "LATEST WORK AND FEATURED", " • "]}
                                duration={20}
                                textClassName="text-[10px] md:text-xs font-crossten uppercase tracking-widest text-gray-500 opacity-100 font-normal"
                                className="py-0"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6 flex-grow">
                            {/* Credentials Card */}
                            <GridCard href="/experience" className="flex flex-col items-start justify-center">
                                <div className="mb-auto w-full flex justify-center opacity-80 pt-4">
                                    <Signature dark={true} className="w-32 md:w-40" />
                                </div>
                                <div>
                                    <span className="text-gray-500 text-[10px] uppercase tracking-widest block mb-1">More About Me</span>
                                    <h3 className="text-xl font-bold text-white">Credentials</h3>
                                </div>
                            </GridCard>

                            {/* Experience Card */}
                            <GridCard href="#work" className="flex flex-col items-start justify-center !p-6">
                                <div className="mb-auto w-full relative h-[80px] rounded-lg overflow-hidden bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                                    {/* Project Thumbnail */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-khand font-bold text-white/20">CAREER</div>
                                </div>
                                <div className="mt-6">
                                    <span className="text-gray-500 text-[10px] uppercase tracking-widest block mb-1">Journey</span>
                                    <h3 className="text-xl font-bold text-white">Experience</h3>
                                </div>
                            </GridCard>
                        </div>
                    </div>

                    {/* Row 2 */}

                    {/* 3. Blog/GFonts Card */}
                    <GridCard href="https://niraankush.blogspot.com/" className="flex flex-col items-center justify-center text-center">
                        <div className="mb-8 relative">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
                                <Layers size={32} />
                            </div>
                        </div>
                        <div className="w-full text-left">
                            <span className="text-gray-500 text-[10px] uppercase tracking-widest block mb-1">Blog</span>
                            <h3 className="text-xl font-bold text-white">Insights</h3>
                        </div>
                    </GridCard>

                    {/* 4. Service Icons ( spans 2 cols ) */}
                    <div className="lg:col-span-2">
                        <GridCard href="#arsenal" className="flex flex-col justify-between">
                            <div className="flex items-center justify-between px-4 md:px-12 mt-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all duration-300">
                                    <Camera size={20} />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all duration-300">
                                    <Layout size={20} />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all duration-300">
                                    <Code2 size={20} />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white hover:text-black transition-all duration-300">
                                    <Cpu size={20} />
                                </div>
                            </div>

                            <div className="mt-8">
                                <span className="text-gray-500 text-[10px] uppercase tracking-widest block mb-1">Expertise</span>
                                <h3 className="text-xl font-bold text-white">Technical Arsenal</h3>
                            </div>
                        </GridCard>
                    </div>

                    {/* 5. Profiles/Socials */}
                    <GridCard className="flex flex-col justify-between">
                        <div className="bg-[#1a1a1a] rounded-[20px] p-1 border border-white/5 flex items-center justify-between gap-1 w-full max-w-[140px] mx-auto mt-4">
                            <a href="https://www.linkedin.com/in/webdevankush/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#222] flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-white/50">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://github.com/ErAnkushPatil" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#222] flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-white/50">
                                <Github size={18} />
                            </a>
                        </div>

                        <div className="mt-8">
                            <span className="text-gray-500 text-[10px] uppercase tracking-widest block mb-1">Stay with me</span>
                            <h3 className="text-xl font-bold text-white">Profiles</h3>
                        </div>
                    </GridCard>

                    {/* Row 3 */}

                    {/* 6. Stats ( spans 2 cols ) */}
                    <div className="lg:col-span-2">
                        <GridCard className="!p-0 flex flex-col md:flex-row items-center justify-center divide-y md:divide-y-0 md:divide-x divide-white/5 h-full">
                            <div className="flex-1 h-full flex flex-col items-center justify-center p-6 text-center">
                                <h3 className="text-3xl font-bold text-white mb-2">
                                    <CountUpStats value={10} suffix="" />
                                </h3>
                                <span className="text-gray-500 text-[10px] uppercase tracking-widest">Years <br />Experience</span>
                            </div>
                            <div className="flex-1 h-full flex flex-col items-center justify-center p-6 text-center">
                                <h3 className="text-3xl font-bold text-white mb-2">
                                    <CountUpStats value={50} suffix="+" />
                                </h3>
                                <span className="text-gray-500 text-[10px] uppercase tracking-widest">Clients <br />Worldwide</span>
                            </div>
                            <div className="flex-1 h-full flex flex-col items-center justify-center p-6 text-center">
                                <h3 className="text-3xl font-bold text-white mb-2">
                                    <CountUpStats value={210} suffix="+" />
                                </h3>
                                <span className="text-gray-500 text-[10px] uppercase tracking-widest">Total <br />Projects</span>
                            </div>
                        </GridCard>
                    </div>

                    {/* 7. Let's Work Together CTA ( spans 2 cols ) */}
                    <div className="lg:col-span-2">
                        <GridCard href="#contact" className="flex items-end !p-10 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-10 opacity-20">
                                {/* Decorative Icon */}
                                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${accentColor}`}>
                                    <path d="M30 0L33 27L60 30L33 33L30 60L27 33L0 30L27 27L30 0Z" fill="currentColor" />
                                </svg>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-khand font-bold text-white relative z-10">
                                Let&apos;s <br />
                                work <span className={`${accentColor}`}>together.</span>
                            </h2>
                        </GridCard>
                    </div>

                </div>
            </div>
        </section>
    );
}
