'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import React, { useRef } from 'react';
import { cn } from '@/lib/utils';
import { usePersona } from '@/context/PersonaContext';

interface ScrollRevealParagraphProps {
    text: string;
    className?: string;
}

export function ScrollRevealParagraph({ text, className }: ScrollRevealParagraphProps) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 0.9", "start 0.75"], // Faster reveal
    });

    const words = text.split(" ");
    const { persona } = usePersona();

    return (
        <p
            ref={container}
            className={cn("flex flex-wrap leading-relaxed", className)}
        >
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]} persona={persona}>
                        {word}
                    </Word>
                );
            })}
        </p>
    );
}

const Word = ({ children, progress, range, persona }: any) => {
    const opacity = useTransform(progress, range, [0.1, 1]);
    const highlightColor = persona === 'developer' ? '#FB493D' : '#F8DC25'; // Use default hex if vars not avail in JS

    // Optional: distinct color shift for active word? 
    // For now just opacity from 0.1 to 1.

    return (
        <span className="relative mr-2 mt-1">
            <span className="absolute opacity-10">{children}</span>
            <motion.span style={{ opacity: opacity }} className="text-gray-900 dark:text-gray-100">
                {children}
            </motion.span>
        </span>
    );
};
