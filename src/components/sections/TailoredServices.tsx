'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Box, Code2, Copy, Layers, Layout, Monitor, ShieldCheck, Zap } from 'lucide-react';
import { usePersona } from '@/context/PersonaContext';
import { ScrollText } from '@/components/ui/ScrollText';

const tailoredServices = [
    {
        id: "01",
        title: "Brand Strategy & Identity",
        tags: ["Development", "Brand Guidelines", "Analysis", "Rebranding"],
        icon: Layout
    },
    {
        id: "02",
        title: "Full-Stack Development",
        tags: ["React/Next.js", "Custom APIs", "Web Solutions", "Responsive"],
        icon: Code2
    },
    {
        id: "03",
        title: "Digital Marketing & SEO",
        tags: ["Email Marketing", "PPC", "SEO", "Social Media"],
        icon: Zap
    },
    {
        id: "04",
        title: "UI/UX & Interactive Design",
        tags: ["User Interface", "Wireframing", "Analysis", "App Design"],
        icon: Monitor
    }
];

export function TailoredServices() {
    const { persona } = usePersona();

    return (
        <section className="bg-[#050505] text-white py-32 px-6 md:px-12 relative overflow-hidden">

            {/* Background Texture/Noise could go here */}

            <div className="max-w-[1600px] mx-auto">
                <div className="mb-20 md:mb-32 flex flex-col md:flex-row items-end justify-between gap-12">
                    <h2 className="font-playfair italic text-6xl md:text-8xl leading-[0.9]">
                        <ScrollText as="span" className="block text-white/90">Services that</ScrollText>
                        <span className="font-khand not-italic font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200 block mt-2">
                            are tailored
                        </span>
                    </h2>

                    <div className="hidden md:flex flex-col items-end gap-4">
                        <p className="text-gray-400 text-right max-w-sm font-manrope text-sm leading-relaxed">
                            Bespoke digital solutions crafted to elevate your brand identity and user engagement.
                        </p>
                        <button onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center gap-4 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all text-sm font-manrope uppercase tracking-widest group backdrop-blur-sm">
                            <span className="text-white font-bold">View All Projects</span>
                            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                <ArrowRight size={14} />
                            </div>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tailoredServices.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="bg-[#0f0f0f] border border-white/5 hover:border-orange-500/50 rounded-3xl p-10 flex flex-col min-h-[460px] relative group overflow-hidden shadow-2xl shadow-black/50"
                        >
                            {/* Subtle Gradient Glow on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            <div className="flex justify-between items-start mb-auto">
                                <span className="font-khand text-xl text-white/20 group-hover:text-white/40 transition-colors">
                                    {service.id}
                                </span>
                                <motion.div
                                    className="p-3 bg-white/5 rounded-full text-gray-400 group-hover:text-orange-400 group-hover:bg-orange-500/10 transition-colors"
                                    whileHover={{ rotate: 15 }}
                                >
                                    <service.icon size={20} />
                                </motion.div>
                            </div>

                            <div className="mb-10 relative z-10">
                                <h3 className="font-manrope font-bold text-3xl text-white mb-2 leading-tight group-hover:text-orange-50 group-hover:translate-x-1 transition-all duration-300">
                                    {service.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                                {service.tags.map((tag, tIndex) => (
                                    <span
                                        key={tIndex}
                                        className="text-[11px] uppercase tracking-wider font-bold px-4 py-2 rounded-full border border-white/10 text-gray-500 bg-[#151515] group-hover:border-orange-500/20 group-hover:text-gray-300 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
