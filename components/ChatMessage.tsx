

import React from 'react';
import AnimatedSection from './AnimatedSection';
import { CpuChipIcon, ShieldLockIcon, GlobeAltIcon, BookOpenIcon, BeakerIcon, EyeIcon, ServerStackIcon } from './Icons';

const ResearchPage: React.FC = () => {
    
    const researchPillars = [
        {
            icon: GlobeAltIcon,
            title: "Generative World Models",
            description: "Training agents in sophisticated simulations to build a deeper, causal understanding of the world, enabling robust planning and reasoning."
        },
        {
            icon: CpuChipIcon,
            title: "Next-Gen Cognitive Architectures",
            description: "Moving beyond the transformer with novel architectures that incorporate dedicated memory, reasoning modules, and lifelong learning capabilities."
        },
        {
            icon: ShieldLockIcon,
            title: "Scalable Oversight & Alignment",
            description: "Pioneering new techniques for AI safety, including Constitutional AI and scalable supervision, to ensure our models are helpful, harmless, and honest."
        },
        {
            icon: BookOpenIcon,
            title: "Extreme-Context Reasoning",
            description: "Pushing the boundaries of long-context understanding to enable models to reason over entire codebases, financial filings, or libraries of research."
        }
    ];

    const futureDirections = [
        {
            icon: CpuChipIcon,
            title: "Deep Neural Intelligence",
            description: "Our foundational research is focused on developing novel neural network architectures that move beyond current paradigms to achieve true deep learning and intelligence."
        },
        {
            icon: EyeIcon,
            title: "The intelligentLLM Brain",
            description: "The culmination of our research will be the launch of intelligentLLM, a generative super brain capable of complex reasoning, continuous learning, and autonomous task execution."
        },
        {
            icon: ServerStackIcon,
            title: "Continuous Evolution",
            description: "The launch is just the beginning. We are committed to a roadmap of perpetual improvement, constantly adding new features and enhancing model capabilities based on real-world interaction."
        },
        {
            icon: GlobeAltIcon,
            title: "The Universal Platform",
            description: "Our ultimate vision is to create a single, unified platform that seamlessly integrates into every aspect of daily life, becoming the one-stop solution for 'everyday everything'."
        }
    ];

    return (
        <div className="w-full">
            <section>
                <AnimatedSection type="zoom-in" className="text-center min-h-[60vh] flex flex-col justify-center items-center px-4 py-20 md:py-32">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl mx-auto gradient-text hero-title py-4">
                        Engineering the Principles of Intelligence.
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-on-background/80 max-w-3xl mx-auto">
                        We are a dedicated research lab on a mission to make fundamental breakthroughs in artificial intelligence. Our work aims to build safe, general-purpose AI that can accelerate human progress.
                    </p>
                </AnimatedSection>
            </section>
            
            <section className="py-20 md:py-32 px-4 section-divider">
                <AnimatedSection type="fade-in-up" className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Core Research Pillars</h2>
                        <p className="mt-4 text-lg text-on-surface/80 max-w-3xl mx-auto">Our research is structured around four key pillars aimed at solving the grand challenges of AI.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {researchPillars.map((pillar) => (
                             <div key={pillar.title} className="card-bright p-8 text-center">
                                <pillar.icon className="w-12 h-12 text-primary mx-auto mb-5" />
                                <h3 className="text-xl font-bold">{pillar.title}</h3>
                                <p className="mt-2 text-on-surface/80">{pillar.description}</p>
                             </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>

            <section className="py-20 md:py-32 px-4 section-divider">
                <AnimatedSection type="fade-in-up" className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Future Horizons</h2>
                        <p className="mt-4 text-lg text-on-surface/80 max-w-3xl mx-auto">Our current work is the foundation for an ambitious roadmap, aimed at creating a truly universal intelligence.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {futureDirections.map((pillar) => (
                             <div key={pillar.title} className="card-bright p-8 text-center">
                                <pillar.icon className="w-12 h-12 text-primary mx-auto mb-5" />
                                <h3 className="text-xl font-bold">{pillar.title}</h3>
                                <p className="mt-2 text-on-surface/80">{pillar.description}</p>
                             </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>

            <section className="py-20 md:py-32 px-4 section-divider">
                <AnimatedSection type="zoom-in" className="text-center max-w-4xl mx-auto">
                    <BeakerIcon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Join Our Research Team</h2>
                    <p className="mt-4 text-lg text-on-background/80">
                        We are always looking for curious and driven researchers to join us in solving the most challenging problems in AI. If you are passionate about building the future, explore our open roles.
                    </p>
                     <div className="mt-8">
                        <a href="#" className="btn-secondary">View Research Careers</a>
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
};

export default ResearchPage;