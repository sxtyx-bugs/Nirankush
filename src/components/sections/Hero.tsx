'use client';

import { usePersona } from '@/context/PersonaContext';
import { AnimatedHeading } from '@/components/ui/AnimatedHeading';
import { Button } from '@/components/ui/Button';
import { Signature } from '@/components/ui/Signature';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

import { GridPattern } from '@/components/ui/GridPattern';
import { cn } from '@/lib/utils'; // Assuming cn utility is available for conditional classNames

export function Hero() {
    const { persona } = usePersona();

    return (
        <section className="relative w-full h-screen min-h-[700px] flex flex-col items-center justify-center text-center px-4 overflow-hidden perspective-1000">

            {/* Grid Pattern Background */}
            <GridPattern
                width={50}
                height={50}
                x={-1}
                y={-1}
                strokeDasharray={"4 2"}
                className={cn(
                    "opacity-[0.15] absolute inset-0 h-full w-full",
                    persona === 'developer' ? "stroke-gray-400" : "stroke-gray-300"
                )}
                squares={[
                    [4, 4], [5, 1], [8, 2], [6, 6], [12, 12], [2, 10], [15, 5]
                ]}
            />

            {/* Dynamic Background Accent - Lando Norris style often has large, abstract shapes */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={persona}
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 1.1, rotate: 5 }}
                    transition={{ duration: 1.2, ease: "circOut" }}
                    className={`absolute inset-0 z-0 bg-gradient-to-br from-white via-transparent to-${persona === 'developer' ? 'developer-accent' : 'author-accent'} pointer-events-none rounded-[50%] blur-3xl opacity-20 transform translate-y-1/4`}
                />
            </AnimatePresence>

            <div className="z-10 max-w-5xl space-y-8 relative">

                {/* Headline Container */}
                <AnimatePresence mode="wait">
                    {persona === 'developer' ? (
                        <motion.div
                            key="developer-headline"
                            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col items-center"
                        >
                            <AnimatedHeading
                                text="Nirankush"
                                as="h1"
                                className="text-7xl md:text-9xl lg:text-[10rem] leading-none text-developer-accent mb-2 font-khand drop-shadow-sm"
                                enableUnderline
                                staggerType="char"
                            />
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="text-xl md:text-3xl text-gray-700 font-inter font-light tracking-wide mt-6"
                            >
                                Full-Stack Developer • Systems Thinker
                            </motion.p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="author-headline"
                            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            exit={{ opacity: 0, y: -50, filter: 'blur(10px)' }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col items-center"
                        >
                            {/* Reordered: Headline -> Signature -> Subtext */}
                            <AnimatedHeading
                                text="लेखक. विचारवंत. निर्माता."
                                as="h1"
                                className="text-6xl md:text-8xl lg:text-[9rem] leading-none text-author-accent mb-4 font-khand drop-shadow-sm"
                                enableUnderline
                                staggerType="word"
                            />

                            {/* Signature Integration */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.2, duration: 1 }}
                                className="mt-6 mb-2"
                            >
                                <Signature className="w-64 md:w-80 opacity-80" />
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5 }}
                                className="text-lg md:text-2xl text-gray-600 font-khand italic mt-4"
                            >
                                (Writer. Thinker. Creator.)
                            </motion.p>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                    className="mt-16"
                >
                    <Button
                        variant={persona === 'developer' ? 'developer' : 'author'}
                        size="lg"
                        onClick={() => {
                            const targetId = persona === 'developer' ? 'work' : 'books';
                            document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="rounded-full text-lg px-10 py-7 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
                    >
                        {persona === 'developer' ? 'View Projects' : 'Explore Books'}
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400"
            >
                <ArrowDown size={32} />
            </motion.div>
        </section>
    );
}
