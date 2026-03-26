'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import ActionSearchBar from './ActionSearchBar';
import { usePersona } from '@/context/PersonaContext';
import { User, Code, Mail, FileText, BookOpen, Feather, Briefcase } from "lucide-react";
import { useRouter } from 'next/navigation';

export function CommandModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const { persona } = usePersona();
    const router = useRouter();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                if (isOpen) {
                    onClose();
                } else {
                    // It will be handled globally in Header or Layout to open, 
                    // but we can also just listen here to close it if it's already open.
                }
            }
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    const handleAction = (url: string) => {
        onClose();
        // Since we are using smooth scroll, let's just scroll to the element if it's a hash hash
        if (url.startsWith('#')) {
            document.querySelector(url)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            router.push(url);
        }
    };

    const devActions = [
        { id: "1", label: "About Me", icon: <User className="h-4 w-4 text-purple-500" />, description: "My background", short: "A", end: "Section", onClick: () => handleAction('#about') },
        { id: "2", label: "Work Experience", icon: <Briefcase className="h-4 w-4 text-developer-accent" />, description: "See my career journey", short: "W", end: "Section", onClick: () => handleAction('#work') },
        { id: "3", label: "Technical Arsenal", icon: <Code className="h-4 w-4 text-blue-500" />, description: "View my skills", short: "S", end: "Section", onClick: () => handleAction('#arsenal') },
        { id: "4", label: "Contact Me", icon: <Mail className="h-4 w-4 text-green-500" />, description: "Send an email", short: "C", end: "Action", onClick: () => handleAction('#contact') },
    ];

    const authorActions = [
        { id: "1", label: "About Author", icon: <User className="h-4 w-4 text-purple-500" />, description: "Author background", short: "A", end: "Section", onClick: () => handleAction('#about') },
        { id: "2", label: "Books", icon: <BookOpen className="h-4 w-4 text-author-accent" />, description: "Literary works", short: "B", end: "Section", onClick: () => handleAction('#books') },
        { id: "3", label: "Philosophy", icon: <Feather className="h-4 w-4 text-orange-500" />, description: "Writing philosophy", short: "P", end: "Section", onClick: () => handleAction('#philosophy') },
        { id: "4", label: "Contact", icon: <Mail className="h-4 w-4 text-green-500" />, description: "Get in touch", short: "C", end: "Action", onClick: () => handleAction('#contact') },
    ];

    const actions = persona === 'developer' ? devActions : authorActions;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-[100]"
                    >
                        <ActionSearchBar
                            actions={actions as any}
                            defaultOpen={true}
                            onClose={onClose}
                            onActionSelect={(action) => {
                                onClose();
                                if ((action as any).onClick) {
                                    (action as any).onClick();
                                }
                            }}
                        />
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
