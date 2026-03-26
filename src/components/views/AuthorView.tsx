"use client";

import { useState, useEffect } from "react";
import { About } from "@/components/sections/author/About";
import { Books } from "@/components/sections/author/Books";
import { Philosophy } from "@/components/sections/author/Philosophy";
import { Contact } from "@/components/sections/author/Contact";
import { Footer } from "@/components/layout/Footer";
import { AuthorNavbar } from "@/components/sections/author/AuthorNavbar";
import { ReactLenis } from 'lenis/react';
import { motion, AnimatePresence } from "framer-motion";

export function AuthorView() {
    // Default to the WHO page instead of a fullscreen menu
    const [activePage, setActivePage] = useState<string>('who');

    return (
        <ReactLenis root options={{ lerp: 0.05, syncTouch: true }}>
            <main className="bg-[#fcfaf7] min-h-screen font-sans relative overflow-hidden">
                {/* Paper Texture Overlay */}
                <div className="fixed inset-0 pointer-events-none opacity-40 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] z-[5] mix-blend-multiply" />

                {/* The Persistent Navigation Bar on every page */}
                <AuthorNavbar activePage={activePage} onNavigate={setActivePage} />

                <AnimatePresence mode="wait" onExitComplete={() => {
                    const lenis = (window as any).lenis; // Lenis globally attaches itself usually, or we just force native
                    if (lenis) lenis.scrollTo(0, { immediate: true });
                    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                }}>
                    {activePage === 'who' && (
                        <motion.div key="who" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease: "circOut" }} className="relative z-10 w-full">
                            <About />
                        </motion.div>
                    )}

                    {activePage === 'books' && (
                        <motion.div key="books" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease: "circOut" }} className="relative z-10 pt-16 bg-[#F7F5F0] min-h-screen w-full">
                            <Books />
                        </motion.div>
                    )}

                    {activePage === 'philosophy' && (
                        <motion.div key="philosophy" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease: "circOut" }} className="relative z-10 pt-16 bg-[#1a1a1a] text-stone-200 min-h-screen w-full">
                            <Philosophy />
                        </motion.div>
                    )}

                    {activePage === 'contact' && (
                        <motion.div key="contact" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.8, ease: "circOut" }} className="relative z-10 pt-12 bg-[#EAE8E4] min-h-screen flex flex-col w-full">
                            <Contact />
                            <Footer />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Mobile basic nav (since hover navbar is hidden on tiny screens) */}
                <div className="lg:hidden fixed bottom-6 left-6 right-6 z-50 bg-[#1a1a1a] text-white p-4 rounded-2xl flex justify-around shadow-2xl text-[10px] uppercase font-bold tracking-widest">
                    <button onClick={() => setActivePage('who')} className={activePage==='who'?'text-[#FCE116]':''}>Who</button>
                    <button onClick={() => setActivePage('books')} className={activePage==='books'?'text-[#FCE116]':''}>Books</button>
                    <button onClick={() => setActivePage('philosophy')} className={activePage==='philosophy'?'text-[#FCE116]':''}>Philosophy</button>
                    <button onClick={() => setActivePage('contact')} className={activePage==='contact'?'text-[#FCE116]':''}>Contact</button>
                </div>
            </main>
        </ReactLenis>
    );
}
