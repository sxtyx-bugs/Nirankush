'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { BookOpen } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export interface BookCardProps {
    title: string;
    theme: string;
    year: string;
    publisher: string;
    coverUrl?: string; // WebP, 400x600px
    purchaseLink?: string;
    className?: string;
}

export function BookCard({ title, theme, year, publisher, coverUrl, purchaseLink, className }: BookCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className={cn("group h-full", className)}
        >
            <SpotlightCard className="flex flex-col h-full bg-white/80 backdrop-blur-md border-gray-200/60 hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[2/3] max-w-[160px] mx-auto mt-8 mb-4 bg-gray-50 rounded-sm shadow-md overflow-hidden transform transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2 origin-bottom">
                    {coverUrl ? (
                        <Image src={coverUrl} alt={title} fill className="object-cover" />
                    ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 gap-2 bg-gradient-to-br from-gray-50 to-gray-100">
                            <BookOpen size={32} className="opacity-40" />
                            <span className="text-[10px] uppercase tracking-widest opacity-40 font-khand">No Cover</span>
                        </div>
                    )}

                    {/* Glossy Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                <div className="p-6 text-center flex-grow flex flex-col justify-between">
                    <div>
                        <h3 className="font-khand font-bold text-2xl text-gray-900 mb-2 leading-tight group-hover:text-author-accent transition-colors">{title}</h3>
                        <p className="text-gray-500 font-inter text-sm mb-4 italic leading-relaxed">{theme}</p>
                    </div>

                    <div className="mt-4">
                        <div className="text-xs text-gray-400 font-inter mb-4 space-y-1">
                            <p>Published: {year}</p>
                            <p>{publisher}</p>
                        </div>

                        {purchaseLink && (
                            <Link href={purchaseLink} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 border border-gray-200 hover:border-author-accent text-gray-600 hover:text-author-accent font-medium text-xs uppercase tracking-widest rounded-full transition-all duration-300 hover:bg-author-accent/5">
                                Get Copy
                            </Link>
                        )}
                    </div>
                </div>
            </SpotlightCard>
        </motion.div>
    );
}
