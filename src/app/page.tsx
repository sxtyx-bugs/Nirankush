'use client';

import { usePersona } from "@/context/PersonaContext";
import { DeveloperView } from "@/components/views/DeveloperView";
import { AuthorView } from "@/components/views/AuthorView";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  const { persona } = usePersona();

  useEffect(() => {
    // Reset window scroll position instantly upon persona toggle to prevent loading bottom-page elements unexpectedly
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });

    // Secondary fallback for certain smooth scroll physics library delays (Lenis interpolation)
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [persona]);

  return (
    <main className="min-h-screen">
      <AnimatePresence mode="wait">
        {persona === 'developer' ? (
          <motion.div
            key="developer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DeveloperView />
          </motion.div>
        ) : (
          <motion.div
            key="author"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AuthorView />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
