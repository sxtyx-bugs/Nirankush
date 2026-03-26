"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { MoveUpRight as ArrowIcon } from "lucide-react";

export interface VisualItem {
  key: string;
  url: string;
  label: string;
}

export const authorPages: VisualItem[] = [
  {
    key: "who",
    url: "/Who.png", 
    label: "Who",
  },
  {
    key: "books",
    url: "/Books.png", // Changed to user's uploaded image
    label: "The Books",
  },
  {
    key: "philosophy",
    url: "/Philosophy.png", // Changed to user's uploaded image
    label: "Philosophy",
  },
  {
    key: "contact",
    url: "/Contact.png", // Changed to user's uploaded image
    label: "Contact",
  },
];

interface Props {
  activePage: string;
  onNavigate: (pageKey: string) => void;
}

export const AuthorNavbar: React.FC<Props> = ({ activePage, onNavigate }) => {
  const [focusedItem, setFocusedItem] = useState<VisualItem | null>(null);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { stiffness: 300, damping: 40 });
  const smoothY = useSpring(cursorY, { stiffness: 300, damping: 40 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <>
      <div className="hidden lg:flex fixed right-0 top-0 h-screen w-[350px] flex-col justify-center items-end pr-12 z-[100] pointer-events-none">
        <ul className="space-y-10 text-[10px] font-bold uppercase tracking-[0.25em] text-right w-full pointer-events-auto origin-right">
          {authorPages.map((item) => {
            const isActive = activePage === item.key;
            // The Contact section is now a light, creamy paper theme, so ONLY philosophy is dark.
            const isDarkBackground = activePage === 'philosophy';
            
            return (
              <li
                key={item.key}
                onMouseEnter={() => setFocusedItem(item)}
                onMouseLeave={() => setFocusedItem(null)}
                onClick={() => {
                   setFocusedItem(null);
                   onNavigate(item.key);
                }}
                className={`side-nav-item cursor-pointer transition-all duration-300 transform origin-right hover:scale-[1.1] ${
                  isDarkBackground 
                    ? (isActive ? "text-[#FCE116] scale-[1.05]" : "text-white/40 hover:text-white") 
                    : (isActive ? "text-[#1a1a1a] scale-[1.05]" : "text-[#1a1a1a]/40 hover:text-black")
                }`}
              >
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Floating Image Preview */}
      {focusedItem && (
        <motion.img
          src={focusedItem.url}
          alt={focusedItem.label}
          className="fixed z-[150] w-auto h-auto min-w-[200px] max-w-[25vw] max-h-[55vh] rounded-xl pointer-events-none shadow-[0_30px_60px_rgba(0,0,0,0.4)] filter contrast-[1.05] border-[6px] border-white hidden lg:block"
          style={{
            left: smoothX,
            top: smoothY,
            x: "calc(-100% - 30px)",
            y: "-50%",
          }}
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
    </>
  );
};
