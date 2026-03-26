"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface TimelineItem {
    date: string; // Used for sorting or fallback
    formattedDate?: string; // Display text like "Sep 2025 - Present"
    title: string;
    description?: React.ReactNode;
    href?: string;
    icon?: React.ReactNode;
}

interface TimelineProps {
    items: TimelineItem[];
    initialCount?: number;
    className?: string;
    showMoreText?: string;
    showLessText?: string;
    dotClassName?: string;
    lineClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    dateClassName?: string;
    buttonVariant?: "default" | "outline" | "ghost" | "link";
    buttonSize?: "default" | "sm" | "lg";
    animationDuration?: number;
    animationDelay?: number;
    showAnimation?: boolean;
}

function DesktopTimelineEntry({
    item,
    dotClassName,
    lineClassName,
    titleClassName,
    descriptionClassName,
    dateClassName,
}: {
    item: TimelineItem;
    dotClassName?: string;
    lineClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    dateClassName?: string;
}) {
    return (
        <div
            className={cn(
                "group hidden grid-cols-9 items-start md:grid",
                !item.href && "pointer-events-none"
            )}
        >
            <dl className="col-span-2 relative">
                <dt className="sr-only">Date</dt>
                <dd
                    className={cn(
                        "text-base font-medium text-white/50 transition-all duration-500 group-hover:text-white text-right pr-6 font-mono uppercase tracking-widest mt-1",
                        dateClassName
                    )}
                >
                    <time dateTime={item.date}>
                        {item.formattedDate || new Date(item.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                        })}
                    </time>
                </dd>
            </dl>
            <div className="col-span-7 flex flex-col pb-16">
                <div className="relative pl-10 border-l border-white/10 ml-0 transition-colors duration-500 group-hover:border-white/30">

                    {/* Sleek Dot Element */}
                    <div
                        className={cn(
                            "absolute -left-[5px] top-[0.4rem] h-[9px] w-[9px] rounded-full bg-white/20 transition-all duration-500 group-hover:bg-white group-hover:scale-[1.5] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]",
                            dotClassName
                        )}
                    />

                    {/* Content */}
                    <div className="transition-all duration-500 group-hover:-translate-x-1 group-hover:translate-x-2">
                        <h3
                            className={cn(
                                "text-2xl md:text-3xl font-bold tracking-tight text-white/80 group-hover:text-white transition-colors duration-500 mb-4 font-khand",
                                titleClassName
                            )}
                        >
                            {item.title}
                        </h3>
                        {item.description && (
                            <div
                                className={cn(
                                    "text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-500",
                                    descriptionClassName
                                )}
                            >
                                {item.description}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function MobileTimelineEntry({
    item,
    dotClassName,
    lineClassName,
    titleClassName,
    descriptionClassName,
    dateClassName,
}: {
    item: TimelineItem;
    dotClassName?: string;
    lineClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    dateClassName?: string;
}) {
    return (
        <div
            className={cn(
                "flex gap-x-6 py-6 transition-all duration-500 md:hidden group",
                !item.href && "pointer-events-none"
            )}
        >
            <div className="relative flex flex-col items-center">
                <div className={cn("flex-1 w-[1px] bg-white/10 min-h-[60px] group-hover:bg-white/30 transition-colors duration-500", lineClassName)} />
                <div
                    className={cn(
                        "absolute top-2 h-[9px] w-[9px] rounded-full bg-white/20 transition-all duration-500 group-hover:bg-white group-hover:scale-[1.5] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]",
                        dotClassName
                    )}
                />
            </div>
            <div className="flex-1 pb-4 transition-all duration-500 group-hover:translate-x-2">
                <dl>
                    <dt className="sr-only">Date</dt>
                    <dd
                        className={cn(
                            "text-xs font-medium text-white/50 font-mono uppercase tracking-widest mb-3",
                            dateClassName
                        )}
                    >
                        <time dateTime={item.date}>
                            {item.formattedDate || new Date(item.date).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                            })}
                        </time>
                    </dd>
                </dl>
                <h3
                    className={cn(
                        "text-xl font-bold tracking-tight text-white/80 group-hover:text-white transition-colors duration-500 font-khand mb-3",
                        titleClassName
                    )}
                >
                    {item.title}
                </h3>
                {item.description && (
                    <div
                        className={cn(
                            "text-sm text-gray-500 group-hover:text-gray-300 transition-colors duration-500",
                            descriptionClassName
                        )}
                    >
                        {item.description}
                    </div>
                )}
            </div>
        </div>
    );
}

export function Timeline({
    items,
    initialCount = 5,
    className,
    showMoreText = "Show More",
    showLessText = "Show Less",
    dotClassName,
    lineClassName,
    titleClassName,
    descriptionClassName,
    dateClassName,
    buttonVariant = "ghost",
    buttonSize = "sm",
    animationDuration = 0.3,
    animationDelay = 0.1,
    showAnimation = true,
}: TimelineProps) {
    const [showAll, setShowAll] = useState(false);

    // We assume items are already sorted if they have complex formatted dates, or we allow caller to sort.
    // The user's original code forced a Sort. I'll make it safe.
    const sortedItems = [...items]; // Don't enforce sort if dates are strings like "Present" which might parse weirdly.

    const initialItems = sortedItems.slice(0, initialCount);
    const remainingItems = sortedItems.slice(initialCount);

    return (
        <div className={cn("mx-auto max-w-4xl", className)}>
            <ul className="">
                {initialItems.map((item, index) => (
                    <motion.li
                        key={index}
                        initial={showAnimation ? { opacity: 0, y: 20 } : false}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: animationDuration,
                            delay: index * animationDelay,
                        }}
                    >
                        <DesktopTimelineEntry
                            item={item}
                            dotClassName={dotClassName}
                            lineClassName={lineClassName}
                            titleClassName={titleClassName}
                            descriptionClassName={descriptionClassName}
                            dateClassName={dateClassName}
                        />
                        <MobileTimelineEntry
                            item={item}
                            dotClassName={dotClassName}
                            lineClassName={lineClassName}
                            titleClassName={titleClassName}
                            descriptionClassName={descriptionClassName}
                            dateClassName={dateClassName}
                        />
                    </motion.li>
                ))}
                <AnimatePresence>
                    {showAll &&
                        remainingItems.map((item, index) => (
                            <motion.li
                                key={index + initialCount}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{
                                    duration: animationDuration,
                                    delay: index * animationDelay,
                                }}
                            >
                                <DesktopTimelineEntry
                                    item={item}
                                    dotClassName={dotClassName}
                                    lineClassName={lineClassName}
                                    titleClassName={titleClassName}
                                    descriptionClassName={descriptionClassName}
                                    dateClassName={dateClassName}
                                />
                                <MobileTimelineEntry
                                    item={item}
                                    dotClassName={dotClassName}
                                    lineClassName={lineClassName}
                                    titleClassName={titleClassName}
                                    descriptionClassName={descriptionClassName}
                                    dateClassName={dateClassName}
                                />
                            </motion.li>
                        ))}
                </AnimatePresence>
            </ul>

            {remainingItems.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-8 flex justify-center"
                >
                    <Button
                        variant={buttonVariant}
                        size={buttonSize}
                        className="gap-2 text-white border-white/10 hover:bg-white/5"
                        onClick={() => setShowAll(!showAll)}
                    >
                        {showAll ? showLessText : showMoreText}
                        <motion.div
                            animate={{ rotate: showAll ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ChevronDown className="h-4 w-4" />
                        </motion.div>
                    </Button>
                </motion.div>
            )}
        </div>
    );
}
