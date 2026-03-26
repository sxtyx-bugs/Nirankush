'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 seconds load
        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <motion.div
            suppressHydrationWarning
            initial={{ y: 0 }}
            animate={{ y: '-100%' }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1.8 }} // slide up after 1.8s
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black text-white"
        >
            <div suppressHydrationWarning className="flex flex-col items-center">
                <motion.h1
                    suppressHydrationWarning
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-khand font-bold tracking-tighter"
                >
                    Nirankush
                </motion.h1>
                <motion.div
                    suppressHydrationWarning
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                    className="w-48 h-1 bg-white mt-4 origin-left"
                />
            </div>
        </motion.div>
    );
}
