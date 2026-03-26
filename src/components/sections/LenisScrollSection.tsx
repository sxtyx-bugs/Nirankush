'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef, ReactNode } from 'react';

interface LenisScrollSectionProps {
    children?: ReactNode;
    className?: string; // Allow passing standard className if needed
    sticky?: boolean; // New prop to control if it behaves as a sticky card
    bgColor?: string; // Optional background color override
}

// Ensure the component handles children correctly
export const LenisScrollSection = forwardRef<HTMLElement, LenisScrollSectionProps>(({ children, className, sticky = true, bgColor = 'bg-[#0a0a0a]' }, ref) => {
    if (!sticky) {
        return (
            <section className={`relative w-full ${bgColor} ${className}`} ref={ref}>
                {children}
            </section>
        );
    }

    return (
        <section
            className={`relative min-h-screen w-full flex flex-col items-center sticky top-0 rounded-t-2xl shadow-2xl ${bgColor} ${className}`}
            ref={ref}
        >
            {/* Optional: Add the requested grid background texture here if desired for all sections, or keep it inside children */}
            <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20'></div>

            <div className="relative z-10 w-full">
                {children}
            </div>
        </section>
    );
});

LenisScrollSection.displayName = 'LenisScrollSection';
