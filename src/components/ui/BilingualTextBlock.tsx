'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { usePersona } from '@/context/PersonaContext';

interface BilingualTextBlockProps {
    marathi: string;
    english: string;
    className?: string;
    delay?: number;
}

export function BilingualTextBlock({ marathi, english, className, delay = 0.2 }: BilingualTextBlockProps) {
    const { persona } = usePersona();

    // Highlight author mode for Marathi, developer mode for English?
    // PRD implies bilingual but each has specific purpose.
    // Maybe just render them clearly.
    // Style:
    // Marathi: font-khand, slightly larger?
    // English: font-inter, standard?

    return (
        <div className={cn("space-y-4", className)}>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay, duration: 0.8, ease: "easeOut" }}
                className="font-khand text-lg md:text-xl text-gray-800 leading-relaxed"
            >
                {marathi}
            </motion.p>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.2, duration: 0.8, ease: "easeOut" }}
                className="font-inter text-base md:text-lg text-gray-600 leading-relaxed"
            >
                {english}
            </motion.p>
        </div>
    );
}
