'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { usePersona } from '@/context/PersonaContext';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
    const { persona } = usePersona();

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className={cn(
                            "fixed inset-4 md:inset-10 z-[70] rounded-xl overflow-hidden shadow-2xl flex flex-col border",
                            persona === 'developer' ? "bg-[#111] border-white/10" : "bg-white border-stone-200"
                        )}
                    >
                        {/* Header */}
                        <div className={cn(
                            "flex items-center justify-between px-6 py-4 border-b",
                            persona === 'developer' ? "bg-[#0a0a0a] border-white/10" : "bg-gray-50 border-gray-200"
                        )}>
                            <h2 className={cn(
                                "text-xl font-khand font-bold",
                                persona === 'developer' ? "text-white" : "text-gray-900"
                            )}>
                                Resume Preview
                            </h2>
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://drive.google.com/file/d/1Mtqm0x93hvj9F5qmMFDIZW-VRU_6oYrt/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={cn(
                                        "flex items-center gap-2 text-sm font-medium transition-colors",
                                        persona === 'developer' ? "text-gray-400 hover:text-developer-accent" : "text-gray-500 hover:text-author-accent"
                                    )}
                                >
                                    <ExternalLink size={16} />
                                    <span className="hidden sm:inline">Open in New Tab</span>
                                </a>
                                <button
                                    onClick={onClose}
                                    className={cn(
                                        "p-2 rounded-full transition-colors",
                                        persona === 'developer' ? "hover:bg-white/10 text-gray-400 hover:text-white" : "hover:bg-black/5 text-gray-500 hover:text-black"
                                    )}
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* Resume Iframe */}
                        <div className="flex-1 w-full bg-gray-100 relative">
                            {/* Loading Indicator could go here, but iframe handles loading usually */}
                            <iframe
                                src="https://drive.google.com/file/d/1Mtqm0x93hvj9F5qmMFDIZW-VRU_6oYrt/preview"
                                className="w-full h-full border-none"
                                title="Resume"
                                allow="autoplay"
                            />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
