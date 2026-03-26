'use client';

import { usePersona } from '@/context/PersonaContext';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';
import React from 'react';

interface AnimatedHeadingProps {
    text: string;
    className?: string;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    enableUnderline?: boolean;
    staggerType?: 'char' | 'word';
}

export function AnimatedHeading({ text, className, as: Component = 'h1', enableUnderline = false, staggerType = 'char' }: AnimatedHeadingProps) {
    const { persona } = usePersona();

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.015, // Extremely fast stagger
                delayChildren: 0.05, // Almost no delay
            },
        },
    };

    const child: Variants = {
        hidden: {
            y: "110%",
        },
        visible: {
            y: 0,
            transition: {
                type: "spring",
                damping: 30, // Higher damping = less bounce = faster settlement
                stiffness: 300, // Very high stiffness = extremely fast snappy movement
            },
        },
    };

    const items = staggerType === 'char' ? text.split("") : text.split(" ");
    const separator = staggerType === 'char' ? "" : " ";

    return (
        <div className="relative inline-block">
            <Component
                className={cn(
                    "font-bold tracking-tight",
                    className
                )}
            >
                <motion.span
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px 0px 100px 0px" }} // Triggers slightly before scrolling into view
                    className="inline-block"
                >
                    {items.map((item, index) => (
                        <span key={index} className="inline-block overflow-hidden align-bottom">
                            <motion.span
                                variants={child}
                                className="inline-block whitespace-pre"
                            >
                                {item}{index < items.length - 1 ? separator : ""}
                            </motion.span>
                        </span>
                    ))}
                </motion.span>
            </Component>

            {enableUnderline && (
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
                    className={cn(
                        "absolute -bottom-2 left-0 w-full h-1 origin-left rounded-full",
                        persona === 'developer' ? "bg-developer-accent" : "bg-author-accent"
                    )}
                />
            )}
        </div>
    );
}
