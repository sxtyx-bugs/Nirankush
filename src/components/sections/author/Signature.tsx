"use client";

import { motion } from "framer-motion";
import { Signature } from "@/components/ui/Signature";

import { Highlighter } from "@/components/ui/highlighter";

export function SignatureSection() {
    return (
        <section id="signature" className="py-32 relative overflow-hidden bg-stone-100 flex items-center justify-center min-h-[50vh]">
            {/* Large Faint Background Signature */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                <span className="font-script text-[20vw] text-stone-900 whitespace-nowrap">Nirankush</span>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 text-center"
            >
                <div className="w-64 mx-auto mb-8 text-stone-800">
                    <Signature />
                </div>
                <p className="font-serif italic text-stone-600 text-xl">
                    "Always in pursuit of the <Highlighter action="underline" color="#d6d3d1">perfect sentence</Highlighter>."
                </p>
            </motion.div>
        </section>
    );
}
