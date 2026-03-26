'use client';

import { animate, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface CountUpStatsProps {
    value: number;
    suffix?: string;
    duration?: number;
    className?: string;
}

export function CountUpStats({ value, suffix = "", duration = 2, className }: CountUpStatsProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView && ref.current) {
            const controls = animate(0, value, {
                duration,
                onUpdate: (latest) => {
                    if (ref.current) {
                        ref.current.textContent = Math.round(latest).toString() + suffix;
                    }
                },
            });

            return () => controls.stop();
        }
    }, [inView, value, suffix, duration]);

    return <span ref={ref} className={className}>0</span>;
}
