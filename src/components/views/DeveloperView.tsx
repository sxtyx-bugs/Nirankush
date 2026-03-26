'use client';

import { ReactLenis } from 'lenis/react';
import { HeroScroll } from '@/components/sections/HeroScroll';
import { DeveloperTestimonials } from "@/components/sections/DeveloperTestimonials";

import { Marquee } from "@/components/ui/Marquee";
import { LenisScrollSection } from '@/components/sections/LenisScrollSection';
import { motion } from 'framer-motion';
import { Footer } from '@/components/layout/Footer';
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";

const devSkills = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "System Design", "Architecture", "Performance", "Accessibility", "PostgreSQL", "GraphQL", "AWS"];

export function DeveloperView() {
    return (
        <ReactLenis root>
            <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-orange-500 selection:text-white pb-0">

                {/* 1. Hero & Intro - Sticky Card 1 - Hero needs to be just normal flow or sticky? User asked for scroll animation to rest of pages. HeroScroll already has internal scroll. Let's keep HeroScroll separate or as first sticky card. Let's try separate first for smoothness then cards start. */}
                <div className="relative z-0">
                    <HeroScroll />
                </div>

                {/* 2. Experience & Tech Stack - Tall content, disable sticky to allow full scroll */}
                <LenisScrollSection className="bg-[#0f0f0f] text-white pt-24 pb-24" sticky={false}>
                    <Experience />
                </LenisScrollSection>

                {/* 3. Skills & Expertise - Portfolio Standard */}
                <Skills />

                {/* 4. Testimonials - Tall content, disable sticky */}
                <LenisScrollSection className="bg-[#0a0a0a] text-white border-t border-white/5 pt-24 pb-24" sticky={false}>
                    <DeveloperTestimonials />
                </LenisScrollSection>

                {/* 5. Footer - Standard Flow */}
                <div className="bg-black text-white border-t border-white/10 relative z-10">
                    <Footer />
                </div>

            </div>
        </ReactLenis>
    );
}
