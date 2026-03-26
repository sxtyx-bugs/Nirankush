"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MoveUpRight as ArrowIcon } from "lucide-react";
import Image from "next/image";

export interface VisualItem {
  key: string;
  url: string;
  label: string;
}

export const authorPages: VisualItem[] = [
  {
    key: "who",
    url: "/author-profile.jpeg", // Replace with a screenshot of WHO page ideally
    label: "Who",
  },
  {
    key: "books",
    url: "/sahyadinashi.jpg",
    label: "The Books",
  },
  {
    key: "philosophy",
    url: "/chandra.jpg",
    label: "Philosophy",
  },
  {
    key: "contact",
    url: "/parkhandale.jpg",
    label: "Contact",
  },
];

interface Props {
    onNavigate: (pageKey: string) => void;
}

export const AuthorMenu: React.FC<Props> = ({ onNavigate }) => {
  const [focusedItem, setFocusedItem] = useState<VisualItem | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 300, damping: 40 });
  const smoothY = useSpring(cursorY, { stiffness: 300, damping: 40 });

  useEffect(() => {
    const updateScreen = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    updateScreen();
    window.addEventListener("resize", updateScreen);
    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  const onMouseTrack = (e: React.MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };

  const onHoverActivate = (item: VisualItem) => {
    setFocusedItem(item);
  };

  const onHoverDeactivate = () => {
    setFocusedItem(null);
  };

  return (
    <div
      className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col justify-center"
      onMouseMove={onMouseTrack}
      onMouseLeave={onHoverDeactivate}
    >
      {/* Nirankush branding for the menu */}
      <div className="absolute top-10 left-10 hidden md:block">
         <span className="font-manrope font-bold text-xs uppercase tracking-[0.3em] text-stone-400">Nirankush Patil</span>
      </div>

      <div className="w-full max-w-5xl mx-auto px-6 z-10 flex flex-col gap-4">
        {authorPages.map((item) => (
          <div
            key={item.key}
            className="p-4 md:p-8 cursor-pointer relative sm:flex items-center justify-between border-y border-stone-100 group transition-colors hover:bg-stone-50"
            onMouseEnter={() => onHoverActivate(item)}
            onClick={() => onNavigate(item.key)}
          >
            {!isLargeScreen && (
              <img
                src={item.url}
                className="w-full h-32 object-cover rounded-md mb-4"
                alt={item.label}
              />
            )}
            <h2
              className={`font-playfair uppercase md:text-7xl sm:text-5xl text-3xl font-black py-4 md:py-6 leading-[100%] relative transition-colors duration-500 flex-1 ${
                focusedItem?.key === item.key
                  ? "mix-blend-difference z-20 text-stone-400 drop-shadow-md"
                  : "text-[#1a1a1a]"
              }`}
            >
              {item.label}
            </h2>
            <button
              className={`sm:block hidden p-4 rounded-full transition-all duration-300 ease-out ${
                focusedItem?.key === item.key
                  ? "mix-blend-difference z-20 bg-white text-black scale-110"
                  : "bg-stone-100 text-stone-400"
              }`}
            >
              <ArrowIcon className="w-8 h-8" />
            </button>
            <div
              className={`h-[2px] bg-[#FCE116] absolute bottom-0 left-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                focusedItem?.key === item.key ? "w-full" : "w-0"
              }`}
            />
          </div>
        ))}
      </div>

      {isLargeScreen && focusedItem && (
        <motion.img
          src={focusedItem.url}
          alt={focusedItem.label}
          className="fixed z-30 object-cover w-[350px] aspect-[4/5] rounded-xl pointer-events-none shadow-[0_30px_60px_rgba(0,0,0,0.3)] filter contrast-125"
          style={{
            left: smoothX,
            top: smoothY,
            x: "-50%",
            y: "-50%",
          }}
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </div>
  );
};
