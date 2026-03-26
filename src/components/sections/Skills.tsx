'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Layout, Server, Settings, Terminal, Cpu, Globe, Layers, Box } from 'lucide-react';
import { Magnetic } from '@/components/ui/Magnetic';
import { ScrollRevealParagraph } from '@/components/ui/ScrollRevealParagraph';

const skillCategories = [
    {
        id: 'frontend',
        title: "Frontend Engineering",
        icon: Layout,
        description: "Crafting responsive, accessible, and performant user interfaces.",
        skills: [
            { name: "React", level: 95 },
            { name: "Next.js", level: 90 },
            { name: "TypeScript", level: 90 },
            { name: "Tailwind CSS", level: 95 },
            { name: "Framer Motion", level: 85 },
            { name: "Three.js", level: 70 },
            { name: "Redux", level: 85 },
            { name: "HTML5/CSS3", level: 98 },
            { name: "WebGL", level: 60 }
        ]
    },
    {
        id: 'backend',
        title: "Backend Architecture",
        icon: Server,
        description: "Building robust, scalable server-side logic and APIs.",
        skills: [
            { name: "Node.js", level: 90 },
            { name: "Express", level: 90 },
            { name: "PostgreSQL", level: 85 },
            { name: "GraphQL", level: 80 },
            { name: "Prisma", level: 85 },
            { name: "Supabase", level: 80 },
            { name: "Redis", level: 75 },
            { name: "MongoDB", level: 80 },
            { name: "WebSockets", level: 70 }
        ]
    },
    {
        id: 'devops',
        title: "DevOps & Cloud",
        icon: Terminal,
        description: "Automating deployment pipelines and managing infrastructure.",
        skills: [
            { name: "AWS", level: 75 },
            { name: "Docker", level: 80 },
            { name: "Git / CI/CD", level: 90 },
            { name: "Vercel", level: 95 },
            { name: "Linux", level: 70 },
            { name: "Nginx", level: 65 },
            { name: "Terraform", level: 60 }
        ]
    },
    {
        id: 'architecture',
        title: "System Design",
        icon: Settings,
        description: "Planning scalable systems and ensuring code quality.",
        skills: [
            { name: "Microservices", level: 80 },
            { name: "System Design", level: 85 },
            { name: "Performance Opt.", level: 85 },
            { name: "Security", level: 80 },
            { name: "Testing (Jest/Cypress)", level: 80 },
            { name: "Clean Architecture", level: 90 }
        ]
    }
];

export function Skills() {
    const [activeCategory, setActiveCategory] = useState(skillCategories[0]);
    const activeIndex = skillCategories.findIndex(c => c.id === activeCategory.id);

    return (
        <section id="arsenal" className="py-24 md:py-32 px-6 md:px-12 bg-[#050505] text-white relative min-h-screen flex flex-col justify-center">

            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-developer-accent/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto w-full relative z-10">

                <div className="mb-16 text-center md:text-left">
                    <h2 className="text-5xl md:text-7xl font-khand font-bold mb-6 tracking-tight">
                        <span className="text-developer-accent">/</span> Technical Arsenal
                    </h2>
                    <ScrollRevealParagraph
                        text="A curated set of technologies and tools I use to build scalable, high-performance digital solutions."
                        className="text-gray-400 font-crossten max-w-2xl text-lg md:text-xl mx-auto md:mx-0"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Category List */}
                    <div className="lg:col-span-5 flex flex-col gap-2 relative z-20">
                        {skillCategories.map((category, index) => (
                            <div
                                key={category.id}
                                onMouseEnter={() => setActiveCategory(category)}
                                className="relative group cursor-pointer border-b border-white/10"
                            >
                                <motion.div
                                    className={`py-6 md:py-8 flex items-center justify-between transition-all duration-300 ${activeCategory.id === category.id ? 'opacity-100 pl-4 text-white' : 'opacity-40 hover:opacity-70 text-gray-500'}`}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className={`font-crossten text-xs font-bold uppercase tracking-widest ${activeCategory.id === category.id ? 'text-developer-accent' : 'text-gray-500'}`}>0{index + 1}</span>
                                        <h3 className={`font-khand font-bold text-3xl md:text-5xl transition-colors`}>
                                            {category.title}
                                        </h3>
                                    </div>
                                    <motion.div
                                        animate={{ rotate: activeCategory.id === category.id ? -180 : 0, opacity: activeCategory.id === category.id ? 1 : 0.5 }}
                                        className={activeCategory.id === category.id ? "text-developer-accent" : "text-white/20"}
                                    >
                                        <Code2 size={24} />
                                    </motion.div>
                                </motion.div>

                                {/* Active Indicator Bar */}
                                {activeCategory.id === category.id && (
                                    <motion.div
                                        layoutId="activeBar"
                                        className="absolute bottom-0 left-0 w-full h-[2px] bg-developer-accent"
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Cut Design Folder Card */}
                    <div className="lg:col-span-7 h-[500px] flex flex-col justify-center relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="w-full h-full relative"
                                style={{ filter: "drop-shadow(0px 20px 40px rgba(0,0,0,0.8))" }}
                            >
                                {/* The Cut Design Folder Mask */}
                                <div 
                                    className="w-full h-full bg-[#0c0c0c] flex flex-col overflow-hidden relative"
                                    style={{
                                        clipPath: "polygon(0 0, calc(45% - 20px) 0, calc(45% + 15px) 56px, 100% 56px, 100% 100%, 0 100%)",
                                        borderRadius: "24px"
                                    }}
                                >
                                    {/* Static Border Highlight inside clip-path */}
                                    <div className="absolute inset-0 border border-white/5 rounded-[24px] pointer-events-none" />
                                    
                                    {/* Tab Label */}
                                    <div className="absolute top-0 left-0 h-[56px] w-[50%] px-8 flex items-center bg-white/5 border-b border-white/5">
                                        <span className="font-khand text-developer-accent font-bold tracking-[0.2em] text-sm">
                                            0{activeIndex + 1} // {activeCategory.title.split(' ')[0].toUpperCase()}
                                        </span>
                                    </div>

                                    {/* Main Content Area */}
                                    <div className="pt-28 px-8 md:px-12 pb-10 h-full flex flex-col">
                                        
                                        {/* Category Title & Icon */}
                                        <div className="flex items-center gap-4 mb-6 relative z-10">
                                            <activeCategory.icon className="w-10 h-10 text-developer-accent" />
                                            <h3 className="text-3xl md:text-5xl font-khand font-bold text-white tracking-wide">
                                                {activeCategory.title}
                                            </h3>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-400 font-crossten text-base md:text-lg mb-10 leading-relaxed max-w-[90%] relative z-10">
                                            {activeCategory.description}
                                        </p>

                                        {/* Skill Pills (Image 1 Style) */}
                                        <div className="flex flex-wrap gap-3 md:gap-4 relative z-10 mt-auto">
                                            {activeCategory.skills.map((skill, idx) => (
                                                <Magnetic key={skill.name}>
                                                    <div className="inline-block">
                                                        <motion.div
                                                            initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                                            animate={{ opacity: 1, scale: 1, y: 0 }}
                                                            transition={{ delay: idx * 0.05, type: "spring", stiffness: 200, damping: 20 }}
                                                            whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)" }}
                                                            className="px-5 py-3 md:px-6 md:py-3.5 bg-black/60 border border-white/10 rounded-full cursor-pointer backdrop-blur-md shadow-lg transition-colors"
                                                        >
                                                            <span className="relative z-10 font-crossten font-bold text-xs md:text-sm text-gray-300 hover:text-white transition-colors tracking-wide">
                                                                {skill.name}
                                                            </span>
                                                        </motion.div>
                                                    </div>
                                                </Magnetic>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}

// Decorative Icon
function CodepenIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="12" y1="2" x2="12" y2="22"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
    )
}
