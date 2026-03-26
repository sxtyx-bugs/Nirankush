'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        author: "Alice Cooper",
        role: "CEO, Innovate Inc.",
        content: "Nirankush transformed our online presence. His attention to detail and ability to execute complex ideas is unmatched. The redesign led to a 40% increase in conversions.",
        avatar: "https://i.pravatar.cc/100?img=1"
    },
    {
        author: "James Miller",
        role: "Marketing Manager",
        content: "Working with Nirankush was a breeze. He understood our brand vision instantly and elevated it beyond our expectations. A true professional.",
        avatar: "https://i.pravatar.cc/100?img=2"
    },
    {
        author: "Sarah Davis",
        role: "Founder, StartUp Labs",
        content: "The best developer we've worked with. The system architecture he designed is robust and scalable. Highly recommended for any serious project.",
        avatar: "https://i.pravatar.cc/100?img=3"
    }
];

export function DeveloperTestimonials() {
    return (
        <section className="py-32 px-6 md:px-12 bg-[#050505] text-white overflow-hidden relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="mb-20 md:mb-32 flex flex-col items-center text-center gap-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl lg:text-7xl font-khand font-bold leading-tight"
                    >
                        Trusted by Brands, <br />
                        <span className="text-white/30">Loved by Clients.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 font-crossten text-lg max-w-2xl"
                    >
                        Great engineering goes beyond code—it creates impact. Hear from partners who have experienced the power of thoughtful system design firsthand.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white/[0.01] backdrop-blur-xl p-10 rounded-[2rem] border border-white/[0.05] hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 group relative flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-8 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                                {[...Array(5)].map((_, starIndex) => (
                                    <svg key={starIndex} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-white">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                    </svg>
                                ))}
                            </div>

                            <blockquote className="text-gray-300 font-manrope text-[15px] font-medium leading-[1.8] mb-12 relative z-10 transition-colors duration-500 group-hover:text-white">
                                "{t.content}"
                            </blockquote>

                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10 flex-shrink-0">
                                    <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center font-bold text-sm text-white">
                                        {t.author[0]}
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-white font-crossten font-bold text-sm tracking-wide">{t.author}</div>
                                    <div className="text-gray-500 text-[10px] uppercase tracking-wider font-crossten mt-1">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
