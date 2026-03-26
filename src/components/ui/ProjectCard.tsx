'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePersona } from '@/context/PersonaContext';

export interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string[];
    liveLink?: string;
    githubLink?: string;
    imageUrl?: string;
    className?: string;
}

export function ProjectCard({ title, description, techStack, liveLink, githubLink, imageUrl, className }: ProjectCardProps) {
    const { persona } = usePersona();

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(
                "group relative flex flex-col h-full transition-all duration-300",
                persona === 'developer' ? "bg-transparent" : "bg-white",
                className
            )}
        >
            {/* Image Container with magnetic-like scale effect */}
            <div className={`relative aspect-[4/3] w-full overflow-hidden rounded-md mb-6 ${persona === 'developer' ? 'bg-white/5' : 'bg-gray-100'}`}>
                <motion.div
                    className={`absolute inset-0 ${persona === 'developer' ? 'bg-white/10' : 'bg-gray-200'}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                >
                    {imageUrl ? (
                        <Image src={imageUrl} alt={title} fill className="object-cover" />
                    ) : (
                        // Generative abstract placeholder pattern
                        <div className={`w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] ${persona === 'developer' ? 'from-developer-accent to-gray-100' : 'from-author-accent to-gray-100'}`} />
                    )}
                </motion.div>

                {/* Overlay Action Button */}
                <div className="absolute top-4 right-4 z-10 translate-y-[-20px] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Link
                        href={liveLink || '#'}
                        target="_blank"
                        className={cn(
                            "flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg",
                            persona === 'developer' ? "text-developer-accent" : "text-author-accent"
                        )}
                    >
                        <ArrowUpRight size={20} className={`transition-transform duration-300 group-hover:rotate-45 ${persona === 'developer' ? 'text-[#0a0a0a]' : ''}`} />
                    </Link>
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-baseline mb-2">
                    <h3 className={`font-khand font-bold text-3xl group-hover:underline decoration-2 underline-offset-4 decoration-gray-200 ${persona === 'developer' ? 'text-white' : 'text-gray-900'}`}>
                        {title}
                    </h3>
                </div>

                <p className={`font-inter text-base mb-4 leading-relaxed line-clamp-2 ${persona === 'developer' ? 'text-gray-400' : 'text-gray-500'}`}>
                    {description}
                </p>

                <div className={`mt-auto pt-4 border-t flex flex-wrap gap-2 ${persona === 'developer' ? 'border-white/10' : 'border-gray-100'}`}>
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className={`px-2 py-1 text-xs font-medium uppercase tracking-wider rounded-sm ${persona === 'developer' ? 'bg-white/5 text-gray-300' : 'bg-gray-50 text-gray-500'}`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
