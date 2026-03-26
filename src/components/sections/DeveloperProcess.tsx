import { ScrollText } from '@/components/ui/ScrollText';

const steps = [
    {
        id: "01",
        title: "Brand Identity & Strategy",
        description: "From logo design to full brand systems, I create cohesive identities that reflect your vision and resonate with your audience."
    },
    {
        id: "02",
        title: "UI/UX Design & Digital Experiences",
        description: "I design intuitive, user-centered digital experiences that enhance engagement and bring brands to life online."
    },
    {
        id: "03",
        title: "Fast Integration",
        description: "With a strong design system, I quickly define the aesthetic, structure, and consistency across all touchpoints."
    }
];

export function DeveloperProcess() {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#0a0a0a] text-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="mb-16 md:mb-24 flex items-end justify-between">
                    <h2 className="text-4xl md:text-6xl font-khand font-bold leading-tight max-w-lg">
                        <ScrollText>Design Solutions That Elevate Your Brand</ScrollText>
                    </h2>
                    <div className="hidden md:block max-w-sm mb-4">
                        <ScrollText className="text-gray-400 font-manrope text-sm">
                            From strategy to execution, I provide tailored design services that help brands stand out and create meaningful connections.
                        </ScrollText>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="group relative border-t border-white/10 pt-8 pb-16 transition-colors hover:border-developer-accent">
                            <span className="text-developer-accent font-khand text-5xl font-bold mb-8 block opacity-50 group-hover:opacity-100 transition-opacity">
                                {step.id}
                            </span>
                            <h3 className="text-2xl font-bold font-manrope mb-4 group-hover:text-developer-accent transition-colors">
                                {step.title}
                            </h3>
                            <div className="text-gray-500 font-manrope text-sm leading-relaxed group-hover:text-gray-300 transition-colors relative min-h-[4em]">
                                <ScrollText>{step.description}</ScrollText>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
