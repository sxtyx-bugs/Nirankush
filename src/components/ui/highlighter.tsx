"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HighlighterProps {
    children: React.ReactNode;
    action: "underline" | "highlight";
    color?: string;
    className?: string;
}

export function Highlighter({
    children,
    action,
    color = "#FF9800",
    className,
}: HighlighterProps) {
    if (action === "underline") {
        return (
            <span className={cn("relative inline-block", className)}>
                {children}
                <motion.span
                    className="absolute -bottom-1 left-0 w-full h-[4px] rounded-full opacity-60"
                    style={{ backgroundColor: color }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                />
            </span>
        );
    }

    if (action === "highlight") {
        return (
            <span className={cn("relative inline-block px-1", className)}>
                <motion.span
                    className="absolute inset-0 rounded-md -z-10"
                    style={{ backgroundColor: color, opacity: 0.2, transformOrigin: "left" }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                />
                {children}
            </span>
        );
    }

    return <span>{children}</span>;
}
