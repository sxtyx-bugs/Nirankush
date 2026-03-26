'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function DigitalFuturesHero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-[#0a0a0a] text-white overflow-hidden px-4 pt-20">

            {/* Background Gradient Spotlights */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Bottom Glow Horizon */}
            <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-orange-500/10 to-transparent pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full relative z-10 text-center">

                {/* Rectangular Border / Viewfinder Effect */}
                <div className="absolute inset-0 border border-white/5 rounded-lg pointer-events-none hidden md:block">
                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-2 h-2 bg-orange-500 -translate-x-1 -translate-y-1" />
                    <div className="absolute top-0 right-0 w-2 h-2 bg-orange-500 translate-x-1 -translate-y-1" />
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-orange-500 -translate-x-1 translate-y-1" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-orange-500 translate-x-1 translate-y-1" />
                </div>

                {/* Content Container */}
                <div className="py-24 md:py-32 relative">

                    {/* Floating Pills */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="absolute top-10 left-4 md:left-20 px-4 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-xs uppercase tracking-wider font-bold hidden md:block"
                    >
                        Full Stack
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                        className="absolute top-20 right-4 md:right-32 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs uppercase tracking-wider font-bold hidden md:block"
                    >
                        Systems Expert
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="absolute bottom-10 right-1/4 px-4 py-1.5 rounded-full bg-[#E8FF8E]/10 border border-[#E8FF8E]/30 text-[#E8FF8E] text-xs uppercase tracking-wider font-bold hidden md:block"
                    >
                        Innovative
                    </motion.div>


                    {/* Main Heading */}
                    <h1 className="text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] font-bold tracking-tighter mb-8 font-khand">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400"
                        >
                            Architecting
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="block font-playfair italic text-white/90"
                        >
                            Digital futures
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 max-w-xl mx-auto text-sm md:text-base font-manrope leading-relaxed mb-10"
                    >
                        Transforming complex requirements into Reality. Crafting the Digital Future, One Line of Code at a Time. Shaping Scalable Systems, Today.
                    </motion.p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full mx-auto transition-all text-sm font-manrope uppercase tracking-widest"
                    >
                        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white group-hover:bg-orange-600 transition-colors">
                            <ArrowRight size={14} />
                        </div>
                        <span className="text-white">Start Building</span>
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
