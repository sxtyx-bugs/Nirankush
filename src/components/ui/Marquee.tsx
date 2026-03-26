'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { usePersona } from '@/context/PersonaContext';

interface MarqueeProps {
    items: string[];
    direction?: 'left' | 'right';
    className?: string; // Container class
    textClassName?: string; // Text class
    duration?: number;
}

export function Marquee({ items, direction = 'left', className, textClassName, duration = 30 }: MarqueeProps) {
    const { persona } = usePersona();

    return (
        <div className={cn("overflow-hidden whitespace-nowrap flex", className)}>
            <motion.div
                className="flex gap-8"
                initial={{ x: direction === 'left' ? 0 : '-50%' }}
                animate={{ x: direction === 'left' ? '-50%' : 0 }}
                transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
            >
                {[...items, ...items, ...items, ...items].map((item, index) => (
                    <span
                        key={index}
                        className={cn(
                            "text-6xl md:text-8xl font-khand font-bold uppercase opacity-10",
                            persona === 'developer' ? "text-developer-accent" : "text-author-accent",
                            textClassName
                        )}
                    >
                        {item} {textClassName ? "" : "•"}
                    </span>
                ))}
            </motion.div>
        </div>
    );
}
