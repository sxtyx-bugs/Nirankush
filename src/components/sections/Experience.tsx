'use client';

import { usePersona } from '@/context/PersonaContext';
import { Timeline, TimelineItem } from '@/components/ui/Timeline';
import { ScrollRevealParagraph } from '@/components/ui/ScrollRevealParagraph';
import { Briefcase, Calendar, Award, Star } from 'lucide-react';

const timelineItems: TimelineItem[] = [
    {
        date: "2025-09-01",
        formattedDate: "Sep 2025 - Present",
        title: "Technical Architect",
        description: (
            <div className="space-y-4">
                <div className="text-developer-accent font-crossten font-semibold text-lg">@ Globant</div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 font-mono uppercase tracking-wider">
                    <span>Pune, Maharashtra, India</span>
                </div>

                <div className="space-y-4 pt-2">
                    <div>
                        <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Briefcase size={12} className="text-developer-accent" /> Responsibilities
                        </h4>
                        <ul className="space-y-1">
                            {[
                                "Leading technical architecture for enterprise-scale applications.",
                                "Defining best practices and coding standards for cross-functional teams.",
                                "Strategizing cloud migration and microservices adoption."
                            ].map((res, i) => (
                                <li key={i} className="text-gray-400 font-crossten text-sm leading-relaxed pl-3 border-l-2 border-white/5">
                                    {res}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    {
        date: "2021-12-01",
        formattedDate: "Dec 2021 - Sep 2025",
        title: "Technical Lead",
        description: (
            <div className="space-y-4">
                <div className="text-developer-accent font-crossten font-semibold text-lg">@ Globant</div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 font-mono uppercase tracking-wider">
                    <span>Pune, Maharashtra, India</span>
                </div>

                <div className="space-y-4 pt-2">
                    <div>
                        <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Briefcase size={12} className="text-developer-accent" /> Responsibilities
                        </h4>
                        <ul className="space-y-1">
                            {[
                                "Managed team of 5+ developers to deliver CPQ product customizations.",
                                "Led requirement understanding, estimation, planning, and solution design.",
                                "Optimized UI/API performance and established Git processes.",
                                "Provided environment support and handled defect analysis & fixing.",
                                "Coordinated daily dev discussions and risk analysis.",
                                "Communicated effectively with stakeholders including QA, PO, Managers, and TAMs."
                            ].map((item, i) => (
                                <li key={i} className="text-gray-400 font-crossten text-sm leading-relaxed pl-3 border-l-2 border-white/5">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Star size={12} className="text-yellow-500" /> Key Impact
                        </h4>
                        <ul className="space-y-1">
                            {[
                                "Ensured zero issue reopening by enforcing strict quality adherence.",
                                "Created auto-restart solutions for microservices, improving high availability.",
                                "Empowered the team to work independently, resulting in 0% deadline failure.",
                                "Achieved 0% deployment timeline failures through improved stakeholder communication."
                            ].map((item, i) => (
                                <li key={i} className="text-gray-400 font-crossten text-sm leading-relaxed pl-3 border-l-2 border-white/5">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Award size={12} className="text-orange-400" /> Awards
                        </h4>
                        <ul className="space-y-1">
                            <li className="text-gray-400 font-crossten text-sm leading-relaxed pl-3 border-l-2 border-white/5 italic">
                                Awarded with Focused and Committed Award
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    {
        date: "2020-09-01",
        formattedDate: "Sep 2020 - Dec 2021",
        title: "Senior Software Developer",
        description: (
            <div className="space-y-4">
                <div className="text-developer-accent font-crossten font-semibold text-lg">@ Hansen Technologies</div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 font-mono uppercase tracking-wider">
                    <span>Pune, Maharashtra, India</span>
                </div>
                <div className="space-y-4 pt-2">
                    <div>
                        <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Briefcase size={12} className="text-developer-accent" /> Responsibilities
                        </h4>
                        <ul className="space-y-1">
                            {[
                                "Scaled Node.js applications horizontally and implemented microservices.",
                                "Enhanced AWS infrastructure and application security."
                            ].map((item, i) => (
                                <li key={i} className="text-gray-400 font-crossten text-sm leading-relaxed pl-3 border-l-2 border-white/5">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    {
        date: "2018-06-01",
        formattedDate: "Jun 2018 - Sep 2020",
        title: "Developer",
        description: (
            <div className="space-y-4">
                <div className="text-developer-accent font-crossten font-semibold text-lg">@ Hansen Technologies</div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 font-mono uppercase tracking-wider">
                    <span>Pune, Maharashtra, India</span>
                </div>
                <div className="space-y-4 pt-2">
                    <div>
                        <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Briefcase size={12} className="text-developer-accent" /> Responsibilities
                        </h4>
                        <ul className="space-y-1">
                            {[
                                "Developed front-end UI and back-end REST APIs from POC to Production.",
                                "Integrated CPQ product in CMS and built a reusable customer demo portal.",
                                "Designed solutions for energy domain clients, securing 'Simply Energy' as a client.",
                                "Collaborated on TMF catalyst shows with multi-vendor integrations.",
                                "Documented all deployment and installation processes."
                            ].map((item, i) => (
                                <li key={i} className="text-gray-400 font-crossten text-sm leading-relaxed pl-3 border-l-2 border-white/5">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Star size={12} className="text-yellow-500" /> Key Impact
                        </h4>
                        <ul className="space-y-1">
                            {[
                                "Reduced installation error rate by 95% through comprehensive documentation.",
                                "Eliminated technical dependency for demos, allowing sales teams to customize portals.",
                                "Improved UI quality by 95%, boosting sales demos and lead generation."
                            ].map((item, i) => (
                                <li key={i} className="text-gray-400 font-crossten text-sm leading-relaxed pl-3 border-l-2 border-white/5">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Award size={12} className="text-orange-400" /> Awards
                        </h4>
                        <ul className="space-y-1">
                            {[
                                "Member of winning team of Catalyst award for Outstanding Contribution to TMF Assets",
                                "Member of winning team of Hackathon",
                                "Awarded with Innovation Award, Focused and Committed Award, Dedication Award"
                            ].map((item, i) => (
                                <li key={i} className="text-gray-400 font-crossten text-sm leading-relaxed pl-3 border-l-2 border-white/5 italic">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    },
    {
        date: "2016-01-01",
        formattedDate: "Jan 2016 - Jun 2018",
        title: "Web Developer",
        description: (
            <div className="space-y-4">
                <div className="text-developer-accent font-crossten font-semibold text-lg">@ Script Lanes</div>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500 font-mono uppercase tracking-wider">
                    <span>Pune Area, India</span>
                </div>
                <div className="space-y-4 pt-2">
                    <div>
                        <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Briefcase size={12} className="text-developer-accent" /> Responsibilities
                        </h4>
                        <ul className="space-y-1">
                            {[
                                "Developed 5+ MEAN stack applications from scratch to deployment.",
                                "Implemented responsive designs using HTML5, CSS3, and Bootstrap.",
                                "Integrated third-party APIs (Google Maps, Payment Gateways, Social Login, DocuSign).",
                                "Built SEO-friendly applications and optimized performance."
                            ].map((item, i) => (
                                <li key={i} className="text-gray-400 font-crossten text-sm leading-relaxed pl-3 border-l-2 border-white/5">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Star size={12} className="text-yellow-500" /> Key Impact
                        </h4>
                        <ul className="space-y-1">
                            {[
                                "Increased search engine visibility through SEO optimization.",
                                "Improved page load times and website response significantly."
                            ].map((item, i) => (
                                <li key={i} className="text-gray-400 font-crossten text-sm leading-relaxed pl-3 border-l-2 border-white/5">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-gray-300 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Award size={12} className="text-orange-400" /> Awards
                        </h4>
                        <ul className="space-y-1">
                            <li className="text-gray-400 font-crossten text-sm leading-relaxed pl-3 border-l-2 border-white/5 italic">
                                Awarded multiple times as Employee of the Month
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
];

export function Experience() {
    const { persona } = usePersona();

    // Only show for developer persona for now
    if (persona !== 'developer') return null;

    return (
        <section id="work" className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white relative">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 md:pl-28">
                    <h2 className="text-4xl md:text-5xl font-khand font-bold mb-4">
                        <span className="text-developer-accent">/</span> Work Experience
                    </h2>
                    <ScrollRevealParagraph
                        text="A timeline of my professional journey, delivering value and innovation across different roles and organizations."
                        className="text-gray-400 font-crossten max-w-2xl text-lg"
                    />
                </div>

                <Timeline
                    items={timelineItems}
                    initialCount={2}
                    buttonVariant="outline"
                />
            </div>
        </section>
    );
}
