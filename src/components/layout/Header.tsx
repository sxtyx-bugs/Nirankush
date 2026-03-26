'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PersonaSwitcher } from '@/components/ui/PersonaSwitcher';
import { usePersona } from '@/context/PersonaContext';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { NavBar } from "@/components/ui/NavBar";
import { User, Code, Briefcase, Mail, Menu, X, FileText, BookOpen, Feather, Search } from "lucide-react";
import { Button } from '@/components/ui/Button';
import { ResumeModal } from '@/components/ui/ResumeModal';
import { CommandModal } from '@/components/ui/CommandModal';

export function Header() {
    const { persona } = usePersona();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const [isCommandModalOpen, setIsCommandModalOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    const navItems = persona === 'developer'
        ? [
            { name: "About", url: "#about", icon: User },
            { name: "Work", url: "#work", icon: Briefcase },
            { name: "Arsenal", url: "#arsenal", icon: Code },
            { name: "Contact", url: "#contact", icon: Mail },
        ]
        : [
            { name: "About", url: "#about", icon: User },
            { name: "Books", url: "#books", icon: BookOpen },
            { name: "Philosophy", url: "#philosophy", icon: Feather },
            { name: "Contact", url: "#contact", icon: Mail },
        ];

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 py-6 pointer-events-none"
            >
                {/* Logo - Top Left */}
                <Link href="/" className="pointer-events-auto group relative z-10" onClick={() => setIsMobileMenuOpen(false)}>
                    <span className={cn(
                        "font-khand font-bold text-3xl md:text-4xl tracking-tight transition-colors duration-300 drop-shadow-md",
                        persona === 'developer' ? "text-white" : "text-author-accent"
                    )}>
                        Nirankush
                    </span>
                </Link>

                {/* Navbar - Centered Floating Pill */}
                {persona !== 'author' && (
                    <div className="absolute left-1/2 top-6 -translate-x-1/2 pointer-events-auto hidden md:block">
                        <NavBar items={navItems} />
                    </div>
                )}

                {/* Right Actions - Resume & Persona Switcher */}
                <div className="flex items-center gap-4 pointer-events-auto relative z-10">

                    {/* Search / Command Palette Button */}
                    <button
                        onClick={() => setIsCommandModalOpen(true)}
                        className={cn(
                            "p-3 rounded-full backdrop-blur-md border shadow-lg transition-all active:scale-95 hover:scale-105",
                            persona === 'developer'
                                ? "bg-black/20 border-white/10 text-white hover:bg-white/10"
                                : "bg-[#1a1a1a] border-black/10 text-[#F5F2F0] hover:bg-black"
                        )}
                        aria-label="Open command palette"
                    >
                        <Search size={18} />
                    </button>

                    {/* Resume Button */}
                    <Button
                        onClick={() => setIsResumeOpen(true)}
                        variant="ghost"
                        size="sm"
                        className={cn(
                            "hidden md:inline-flex gap-2 transition-all rounded-full px-5 py-2.5 backdrop-blur-md border hover:scale-105 active:scale-95 shadow-lg",
                            persona === 'developer'
                                ? "bg-black/20 border-white/10 text-gray-200 hover:bg-white/10 hover:text-white"
                                : "bg-[#1a1a1a] border-black/10 text-[#F5F2F0] hover:bg-black hover:text-white"
                        )}
                    >
                        <FileText size={16} />
                        <span className="font-manrope font-medium text-sm">Resume</span>
                    </Button>

                    <PersonaSwitcher className={cn(
                        "rounded-full backdrop-blur-md border shadow-lg hover:scale-105 active:scale-95",
                        persona === 'developer'
                            ? "bg-black/20 border-white/10 hover:bg-white/5"
                            : "bg-[#1a1a1a] border-black/10 hover:bg-black"
                    )} />

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={cn(
                            "md:hidden p-3 rounded-full backdrop-blur-md border shadow-lg transition-all active:scale-95",
                            persona === 'developer'
                                ? "bg-black/20 border-white/10 text-white"
                                : "bg-white/30 border-black/5 text-black"
                        )}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className={cn(
                            "fixed inset-0 z-40 md:hidden pt-24 px-6 pb-6 flex flex-col",
                            persona === 'developer' ? "bg-[#0a0a0a] text-white" : "bg-[#fdfbf7] text-black"
                        )}
                    >
                        <nav className="flex flex-col gap-6 text-center mt-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.url}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={cn(
                                        "text-2xl font-khand font-bold py-2 border-b transition-colors",
                                        persona === 'developer'
                                            ? "border-white/10 hover:text-developer-accent"
                                            : "border-black/5 hover:text-author-accent"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            {/* Mobile Resume Button */}
                            <div className="mt-4 w-full">
                                <Button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsResumeOpen(true);
                                    }}
                                    variant="outline"
                                    className={cn(
                                        "w-full gap-2 py-6 text-lg",
                                        persona === 'developer'
                                            ? "border-developer-accent text-developer-accent hover:bg-developer-accent hover:text-white"
                                            : "border-author-accent text-author-accent hover:bg-author-accent hover:text-white"
                                    )}
                                >
                                    <FileText size={18} />
                                    View Resume
                                </Button>
                            </div>
                        </nav>

                        <div className="mt-auto text-center opacity-50 text-sm font-manrope">
                            &copy; {new Date().getFullYear()} Nirankush Patil
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Resume Modal */}
            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />

            {/* Command Palette Modal */}
            <CommandModal isOpen={isCommandModalOpen} onClose={() => setIsCommandModalOpen(false)} />
        </>
    );
}
