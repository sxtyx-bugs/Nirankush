'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Globe, Palette, Rocket, Smartphone, Sparkles, Terminal } from 'lucide-react';
import Link from 'next/link';

export function DeveloperServices() {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white relative overflow-hidden">
            {/* Background Gradient Mesh */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-developer-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-start space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-manrope uppercase tracking-widest text-developer-accent">
                        <Sparkles size={12} />
                        <span>Creative Developer</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-khand font-bold leading-[0.9] tracking-tight">
                        <span className="block text-white">Crafting</span>
                        <span className="block text-white/40">Meaningful Brands</span>
                        <span className="block text-white">& Intuitive</span>
                        <span className="block text-developer-accent">Digital Experiences</span>
                    </h2>

                    <div className="max-w-lg space-y-6">
                        <p className="text-gray-400 font-manrope text-lg leading-relaxed">
                            I&apos;m <span className="text-white font-semibold">Nirankush</span>, a Full-Stack Developer & Systems Thinker based in India.
                            I bridge the gap between <span className="text-white/80">design</span> and <span className="text-white/80">engineering</span> to build products that look great and perform flawlessly.
                        </p>

                        <p className="text-gray-500 font-manrope text-sm leading-relaxed">
                            With a strategic approach and a keen eye for detail, I help businesses stand out and connect with their audience through scalable, high-performance web solutions.
                        </p>
                    </div>

                    <Link href="#work" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300">
                        <span className="font-manrope font-bold text-sm uppercase tracking-wider">See my works</span>
                        <div className="w-8 h-8 rounded-full bg-developer-accent group-hover:bg-red-500 flex items-center justify-center transition-colors">
                            <ArrowUpRight size={16} className="text-white" />
                        </div>
                    </Link>
                </motion.div>

                {/* Right Visual - Orbiting System */}
                <div className="relative h-[600px] w-full flex items-center justify-center">

                    {/* Central Anchor */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="relative z-20 text-center"
                    >
                        <div className="relative group cursor-pointer">
                            <div className="absolute inset-0 bg-developer-accent/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                            <div className="relative w-40 h-40 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 p-6 rounded-full flex flex-col items-center justify-center gap-3 group-hover:scale-105 transition-transform duration-300 shadow-2xl shadow-black/50 overflow-hidden">
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
                                <div className="p-3 bg-developer-accent/10 rounded-full text-developer-accent mb-1 group-hover:bg-developer-accent group-hover:text-white transition-colors duration-300 relative z-10">
                                    <Rocket size={24} />
                                </div>
                                <span className="font-khand font-bold text-xl leading-none text-white relative z-10">Let&apos;s<br />Collaborate</span>
                            </div>

                            <Link href="#contact" className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap px-6 py-2 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                Get In Touch
                            </Link>
                        </div>
                    </motion.div>

                    {/* Orbiting Planets */}
                    <OrbitItem icon={<Code2 size={24} />} label="Development" angle={0} radius={140} delay={0} />
                    <OrbitItem icon={<Palette size={24} />} label="UI/UX Design" angle={72} radius={180} delay={0.2} />
                    <OrbitItem icon={<Smartphone size={24} />} label="Mobile Apps" angle={144} radius={140} delay={0.4} />
                    <OrbitItem icon={<Globe size={24} />} label="SEO & Web" angle={216} radius={180} delay={0.6} />
                    <OrbitItem icon={<Terminal size={24} />} label="System Arch" angle={288} radius={140} delay={0.8} />

                    {/* Passive Orbits Lines */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                        <div className="w-[280px] h-[280px] border border-white rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="w-[360px] h-[360px] border border-white rounded-full animate-[spin_30s_linear_infinite_reverse]" />
                    </div>

                </div>

            </div>
        </section>
    );
}

function OrbitItem({ icon, label, angle, radius, delay }: { icon: React.ReactNode, label: string, angle: number, radius: number, delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay, duration: 0.5 }}
            className="absolute top-1/2 left-1/2 z-10"
            style={{
                marginLeft: `calc(${Math.cos(angle * Math.PI / 180) * radius}px)`,
                marginTop: `calc(${Math.sin(angle * Math.PI / 180) * radius}px)`,
                transform: 'translate(-50%, -50%)'
            }}
        >
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
                className="relative group"
            >
                <div className="w-16 h-16 bg-[#1a1a1a]/80 backdrop-blur-md border border-white/5 rounded-2xl flex items-center justify-center text-white/60 group-hover:text-developer-accent group-hover:border-developer-accent/50 transition-all duration-300 shadow-lg group-hover:shadow-developer-accent/20">
                    {icon}
                </div>

                {/* Tooltip Label */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                    <span className="text-[10px] font-manrope uppercase tracking-widest text-white/60 bg-black/80 px-2 py-1 rounded">
                        {label}
                    </span>
                </div>
            </motion.div>
        </motion.div>
    );
}
