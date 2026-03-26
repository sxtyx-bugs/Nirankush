'use client';

import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ScrollTextProps {
    children: string; // The text content
    className?: string; // Additional classes for styling (font, color, etc.)
    as?: any; // The HTML tag to render (h1, h2, p, span, etc.)
    containerOffset?: any; // To override the default scroll offset if needed
}

export const ScrollText = ({
    children,
    className,
    as: Component = 'p',
    containerOffset = ['start 0.9', 'start 0.75'] // Much faster reveal
}: ScrollTextProps) => {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: containerOffset,
    });

    const words = children.split(' ');

    return (
        <Component ref={container} className={cn("flex flex-wrap gap-x-[0.25em]", className)}>
            {words.map((word, i) => {
                // Calculate the start and end point for each word's opacity transition
                // changing [0, 1] to slightly tighter range so words don't stay transparent too long
                const step = 1 / words.length;
                const start = i * step;
                const end = start + step;

                return (
                    <ScrollWord key={i} progress={scrollYProgress} range={[start, end]}>
                        {word}
                    </ScrollWord>
                );
            })}
        </Component>
    );
};

interface ScrollWordProps {
    children: React.ReactNode;
    progress: any;
    range: [number, number];
}

const ScrollWord = ({ children, progress, range }: ScrollWordProps) => {
    const opacity = useTransform(progress, range, [0.15, 1]);

    return (
        <span className="relative">
            <span className="absolute opacity-15 select-none">{children}</span>
            <motion.span style={{ opacity: opacity }}>
                {children}
            </motion.span>
        </span>
    );
};
