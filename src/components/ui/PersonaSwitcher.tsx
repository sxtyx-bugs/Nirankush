'use client';

import { usePersona } from '@/context/PersonaContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Feather } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRef } from 'react';
import { flushSync } from 'react-dom';

export function PersonaSwitcher({ className }: { className?: string }) {
    const { persona, togglePersona } = usePersona();
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleToggle = async () => {
        // Fallback if View Transitions API is not supported
        if (!document.startViewTransition) {
            togglePersona();
            return;
        }

        const button = buttonRef.current;
        if (!button) return;

        // Visual animation of the theme switch using View Transitions
        await document.startViewTransition(() => {
            flushSync(() => {
                togglePersona();
            });
        }).ready;

        // Calculate coordinates for the circle spread
        const { top, left, width, height } = button.getBoundingClientRect();
        const x = left + width / 2;
        const y = top + height / 2;
        const maxRadius = Math.hypot(
            Math.max(left, window.innerWidth - left),
            Math.max(top, window.innerHeight - top)
        );

        // Animate the "New" view (the incoming theme) expanding from the button
        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${maxRadius}px at ${x}px ${y}px)`,
                ],
            },
            {
                duration: 500,
                easing: "ease-in-out",
                pseudoElement: "::view-transition-new(root)",
            }
        );
    };

    return (
        <>
            <button
                ref={buttonRef}
                onClick={handleToggle}
                className={cn(
                    "relative w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 overflow-hidden shadow-sm hover:shadow-md border active:scale-95 group",
                    persona === 'developer'
                        ? "bg-[#1a1a1a] border-white/10 hover:border-developer-accent/50"
                        : "bg-white border-stone-200 hover:border-author-accent/50",
                    className
                )}
                aria-label={persona === 'developer' ? "Switch to Author Mode" : "Switch to Developer Mode"}
            >
                {/* Background Glow Effect */}
                <div className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl",
                    persona === 'developer' ? "bg-developer-accent/10" : "bg-author-accent/10"
                )} />

                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={persona}
                        initial={{ y: -20, opacity: 0, rotate: -90 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        exit={{ y: 20, opacity: 0, rotate: 90 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="relative z-10"
                    >
                        {persona === 'developer' ? (
                            <Code2 className="w-5 h-5 text-developer-accent" />
                        ) : (
                            <Feather className="w-5 h-5 text-author-accent" />
                        )}
                    </motion.div>
                </AnimatePresence>
            </button>

            {/* Override default View Transition animation to allow manual control */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        ::view-transition-old(root),
                        ::view-transition-new(root) {
                            animation: none;
                            mix-blend-mode: normal;
                        }
                    `,
                }}
            />
        </>
    );
}
