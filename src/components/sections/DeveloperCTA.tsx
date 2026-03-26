'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { ScrollText } from '@/components/ui/ScrollText';

export function DeveloperCTA() {
    return (
        <section className="relative h-[80vh] min-h-[600px] bg-[#0a0a0a] text-white overflow-hidden flex flex-col justify-end">
            {/* Background Image / Placeholder */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10" />
                <div className="w-full h-full bg-gray-900 flex items-center justify-center relative">
                    {/* Placeholder for the person's image */}
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-luminosity hover:grayscale-0 transition-all duration-700 desaturate-100"></div>
                </div>
            </div>

            <div className="relative z-20 max-w-[1400px] mx-auto w-full px-6 md:px-12 pb-24 text-center">
                <div className="mb-8">
                    <ScrollText as="h2" className="text-5xl md:text-8xl font-khand font-bold leading-none justify-center text-white">
                        Let&apos;s Bring Your
                    </ScrollText>
                    <ScrollText as="h2" className="text-5xl md:text-8xl font-khand font-bold leading-none justify-center text-developer-accent">
                        Vision to Life
                    </ScrollText>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-developer-accent hover:text-white transition-all duration-300"
                    >
                        Start a Project
                        <ArrowUpRight size={20} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
