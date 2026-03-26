'use client';

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePersona } from "@/context/PersonaContext";

export interface NavItem {
    name: string;
    url: string;
    icon: LucideIcon;
}

interface NavBarProps {
    items: NavItem[];
    className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
    const [activeTab, setActiveTab] = useState(items[0].name);
    const [isMobile, setIsMobile] = useState(false);
    const { persona } = usePersona();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // ScrollSpy Logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = items.map(item => document.querySelector(item.url));
            const scrollPosition = window.scrollY + 200; // Offset for better detection

            let currentSection = "";
            sections.forEach(section => {
                if (section instanceof HTMLElement) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        // Extract ID from URL (e.g., #about -> about) but finding the item name
                        const matchedItem = items.find(item => item.url === `#${section.id}`);
                        if (matchedItem) currentSection = matchedItem.name;
                    }
                }
            });

            if (currentSection) {
                setActiveTab(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [items]);


    const glassClass = persona === 'developer'
        ? "bg-black/30 border-white/10 text-gray-300"
        : "bg-[#1a1a1a]/95 border-black/10 text-stone-300 shadow-2xl backdrop-blur-md";

    const activeItemClass = persona === 'developer'
        ? "text-white"
        : "text-[#1a1a1a] font-bold";

    return (
        <div className={cn("z-50", className)}>
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={cn(
                    "flex items-center gap-1 p-1.5 rounded-full border backdrop-blur-xl transition-all duration-500 shadow-xl",
                    glassClass
                )}
            >
                {items.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.name;

                    return (
                        <div key={item.name} className="relative group/nav flex">
                            <Link
                                href={item.url}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector(item.url)?.scrollIntoView({ behavior: 'smooth' });
                                    setActiveTab(item.name);
                                }}
                                className={cn(
                                    "relative cursor-pointer text-sm font-medium px-4 py-2 rounded-full transition-colors duration-300 flex items-center gap-2 z-10 overflow-hidden",
                                    isActive ? activeItemClass : (persona === 'developer' ? "hover:bg-white/5 text-gray-400" : "hover:text-[#F5F2F0] hover:bg-white/10"),
                                    "font-manrope"
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className={cn(
                                            "absolute inset-0 rounded-full -z-10",
                                            persona === 'developer'
                                                ? "bg-white/10 ring-1 ring-white/5"
                                                : "bg-[#FCE116] ring-1 ring-black/5"
                                        )}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <span className="hidden md:inline">{item.name}</span>
                                <span className="md:hidden">
                                    <Icon size={18} strokeWidth={2.5} className={cn(isActive && persona !== 'developer' && "text-[#1a1a1a]")} />
                                </span>
                            </Link>
                            
                            {/* Hover Preview Panel for Contact */}
                            {item.name === 'Contact' && (
                                <div className="absolute top-[140%] left-1/2 -translate-x-1/2 w-56 h-36 rounded-2xl overflow-hidden pointer-events-none opacity-0 group-hover/nav:opacity-100 transition-all duration-400 shadow-[0_20px_40px_rgba(0,0,0,0.3)] border-4 border-[#FCE116] origin-top scale-90 group-hover/nav:scale-100 z-50 translate-y-4 group-hover/nav:translate-y-0">
                                    <div className="absolute inset-0 bg-black/10 z-10" />
                                    <img src="/Contact.png" alt="Contact Preview" className="w-full h-full object-cover" />
                                    <div className="absolute bottom-2 left-0 w-full text-center z-20">
                                        <span className="font-crossten font-bold uppercase tracking-widest text-[10px] bg-[#1a1a1a] text-white px-3 py-1 rounded-full shadow-lg">Let's Connect</span>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}
