'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface SignatureProps {
    className?: string;
    src?: string; // defaulting to /signature.png
    dark?: boolean;
}

export function Signature({ className, src = '/signature.png', dark = false }: SignatureProps) {
    const [imageError, setImageError] = useState(false);

    return (
        <div className={cn("relative inline-block overflow-hidden", className)}>
            <motion.div
                initial={{ x: '-100%' }}
                whileInView={{ x: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                className="absolute inset-0 z-10 bg-white/0" // If we used a mask approach, we'd need a mask-image. 
            // Lando Norris signature effect often involves stroke animation (SVG) or mask reveal.
            // Simple mask reveal:
            />

            {/* Mask Reveal */}
            <motion.div
                initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
                whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="relative"
            >
                {!imageError ? (
                    <Image
                        src={src}
                        alt="Signature of Nirankush"
                        width={300}
                        height={150}
                        className={cn("object-contain filter brightness-0 transition-opacity duration-300", dark && "invert", imageError ? "opacity-0" : "opacity-100")}
                        style={{ mixBlendMode: dark ? 'screen' : 'multiply' }}
                        onError={() => setImageError(true)}
                        unoptimized // Important for local SVGs sometimes to avoid optimization errors
                    />
                ) : (
                    <span className="font-khand text-6xl text-author-accent">Nirankush</span> // Fallback
                )}
            </motion.div>
        </div>
    );
}
