'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { usePersona } from '@/context/PersonaContext';

interface DecryptedTextProps {
    text: string;
    className?: string;
    speed?: number;
    maxIterations?: number;
    revealDirection?: 'start' | 'end' | 'center';
    useOriginalCharsOnly?: boolean;
    characters?: string;
    animateOn?: 'view' | 'hover';
}

export function DecryptedText({
    text,
    className,
    speed = 50,
    maxIterations = 10,
    revealDirection = 'start',
    useOriginalCharsOnly = false,
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
    animateOn = 'view'
}: DecryptedTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);
    const { persona } = usePersona();

    const containerRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.5 });

    useEffect(() => {
        if (animateOn === 'view' && isInView) {
            scramble();
        }
    }, [isInView, animateOn]);

    const scramble = () => {
        if (isScrambling) return;
        setIsScrambling(true);

        const length = text.length;
        let iteration = 0;

        const interval = setInterval(() => {
            setDisplayText((prev) => {
                return text
                    .split('')
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return characters[Math.floor(Math.random() * characters.length)];
                    })
                    .join('');
            });

            if (iteration >= length) {
                clearInterval(interval);
                setIsScrambling(false);
            }

            iteration += 1 / (maxIterations / length);
        }, speed);
    };

    return (
        <span
            ref={containerRef}
            className={cn("inline-block", className)}
            onMouseEnter={animateOn === 'hover' ? scramble : undefined}
        >
            {displayText}
        </span>
    );
}
