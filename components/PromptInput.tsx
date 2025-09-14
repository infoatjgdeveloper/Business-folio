import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { CpuChipIcon, ShieldLockIcon, DatabaseIcon, CommandLineIcon, ArrowRightIcon, CheckIcon } from './Icons';

const PlatformPage: React.FC = () => {
    type Feature = 'core' | 'data' | 'safety' | 'tools';
    const [activeFeature, setActiveFeature] = useState<Feature>('core');

    const features = {
        core: {
            icon: CpuChipIcon,
            title: "The Cognitive Core",
            subtitle: "Our family of state-of-the-art models.",
            description: "At the heart of LLM is a suite of models engineered for excellence. Each one is purpose-built to deliver the optimal balance of performance, speed, and cost for any task, from complex multi-step reasoning to instantaneous chat.",
            points: [
                { name: "LLM Pro", detail: "Our most powerful model, excelling at creative tasks, complex instructions, and multi-turn dialogue." },
                { name: "LLM Flash", detail: "Optimized for extreme speed and efficiency, perfect for high-throughput, low-latency applications." },
                { name: "LLM Vision", detail: "A multimodal powerhouse that understands and analyzes images, charts, and video to unlock visual insights." }
            ]
        },
        data: {
            icon: DatabaseIcon,
            title: "The Data Engine",
            subtitle: "Fueling intelligence with superior data.",
            description: "Better data makes better models. Our proprietary Data Engine is our most significant competitive advantage, combining a massive, diverse dataset with sophisticated filtering, synthesis, and continuous learning loops to keep our models at the cutting edge.",
            points: [
                { name: "Proprietary Datasets", detail: "Access to unique, high-quality data sources unavailable to other model providers." },
                { name: "Synthetic Data Generation", detail: "We create high-quality, targeted data to teach our models specialized skills and improve reasoning." },
                { name: "Real-time Web Ingestion", detail: "Our models can be grounded with up-to-the-minute information from across the web for timely, relevant answers." }
            ]
        },
        safety: {
            icon: ShieldLockIcon,
            title: "The Safety Fabric",
            subtitle: "Principled AI, built-in from the start.",
            description: "We believe trust is non-negotiable. Our platform features a multi-layered safety system woven into the entire model lifecycle, from pre-training to deployment, to ensure outputs are helpful, harmless, and aligned with human values.",
            points: [
                { name: "Constitutional AI", detail: "Models are trained with a set of core principles, allowing them to self-correct and refuse harmful requests." },
                { name: "Scalable Oversight", detail: "Combining human feedback with AI-assisted review to ensure safety and alignment at an unprecedented scale." },
                { name: "Red Teaming & Audits", detail: "Continuous adversarial testing and third-party audits to proactively identify and mitigate risks." }
            ]
        },
        tools: {
            icon: CommandLineIcon,
            title: "The Developer Toolkit",
            subtitle: "Go from idea to production, faster.",
            description: "We provide a comprehensive suite of tools designed to make building with AI intuitive, efficient, and powerful. Our developer-first platform gives you the control and flexibility you need to create truly differentiated applications.",
            points: [
                { name: "Unified API", detail: "A clean, robust, and well-documented API for accessing all our models and platform features." },
                { name: "Advanced Fine-Tuning", detail: "Powerful tools to adapt our base models to your specific data and use case for maximum performance." },
                { name: "Agentic Frameworks", detail: "Build sophisticated, autonomous agents that can reason, plan, and execute multi-step tasks." }
            ]
        }
    };

    const currentFeature = features[activeFeature];
    const FeatureButton: React.FC<{ featureName: Feature; children: React.ReactNode }> = ({ featureName, children }) => (
        <button
            onClick={() => setActiveFeature(featureName)}
            className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${activeFeature === featureName ? 'bg-primary/10 ring-2 ring-primary' : 'hover:bg-surface'}`}
        >
            {children}
        </button>
    );

    const workflowSteps = [
        { title: "Data Curation & Synthesis", description: "Our Data Engine processes trillions of tokens from proprietary and public sources, creating a clean, diverse, and high-quality dataset." },
        { title: "Continuous Pre-Training", description: "Models are trained on our custom-built, highly efficient infrastructure, constantly learning from new data." },
        { title: "Alignment & Fine-Tuning", description: "Using techniques like Constitutional AI and RLHF, models are aligned to be helpful, harmless, and honest." },
        { title: "Optimized Inference", description: "Our vertically integrated stack ensures models are served with maximum speed and cost-efficiency at a global scale." },
    ];

    return (
        <div className="w-full">
            <AnimatedSection type="zoom-in" className="text-center min-h-[60vh] flex flex-col justify-center items-center px-4 py-20 md:py-32">
                <p className="font-semibold text-primary">The Platform</p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl mx-auto gradient-text hero-title py-4">
                    The LLM Ecosystem.
                </h1>
                <p className="mt-6 text-lg md:text-xl text-on-background/80 max-w-3xl mx-auto">
                    More than just a model. We provide an end-to-end, vertically integrated platform for building production-grade AI applications with unparalleled performance, safety, and control.
                </p>
            </AnimatedSection>

            <div className="py-20 md:py-32 px-4 section-divider">
                <AnimatedSection type="fade-in-up" className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Explore the Platform</h2>
                        <p className="mt-4 text-lg text-on-surface/80">Click to discover the four pillars of our technological advantage.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <div className="md:col-span-4 space-y-4">
                            {Object.entries(features).map(([key, { icon: Icon, title, subtitle }]) => (
                                <FeatureButton key={key} featureName={key as Feature}>
                                    <div className="flex items-start gap-4">
                                        <Icon className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-bold text-lg">{title}</h3>
                                            <p className="text-sm text-on-surface/70">{subtitle}</p>
                                        </div>
                                    </div>
                                </FeatureButton>
                            ))}
                        </div>
                        <div className="md:col-span-8">
                            <div className="card-bright p-8 lg:p-12 h-full">
                                <currentFeature.icon className="w-12 h-12 text-primary mb-4" />
                                <h3 className="text-3xl font-bold tracking-tight">{currentFeature.title}</h3>
                                <p className="mt-4 text-lg text-on-surface/80">{currentFeature.description}</p>
                                <ul className="mt-6 space-y-4">
                                    {currentFeature.points.map(point => (
                                        <li key={point.name} className="flex items-start gap-3">
                                            <CheckIcon className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                                            <div>
                                                <h4 className="font-semibold text-on-surface">{point.name}</h4>
                                                <p className="text-on-surface/70">{point.detail}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
            
            <div className="py-20 md:py-32 px-4 section-divider">
                <AnimatedSection type="fade-in-up" className="max-w-7xl mx-auto">
                     <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">How It Works</h2>
                        <p className="mt-4 text-lg text-on-surface/80 max-w-3xl mx-auto">Our vertically integrated pipeline, from data to inference, is the key to our performance.</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
                        {workflowSteps.map((step, index) => (
                            <React.Fragment key={step.title}>
                               <div className="flex flex-col items-center text-center max-w-xs">
                                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary text-primary font-bold text-2xl mb-4">{index + 1}</div>
                                    <h3 className="font-semibold">{step.title}</h3>
                                    <p className="text-sm text-on-surface/70 mt-1">{step.description}</p>
                               </div>
                               {index < workflowSteps.length - 1 && (
                                   <div className="w-full h-px md:h-auto md:w-auto flex-grow bg-border md:bg-transparent mx-4">
                                        <ArrowRightIcon className="hidden md:block w-12 h-12 text-border" />
                                   </div>
                               )}
                           </React.Fragment>
                        ))}
                    </div>
                </AnimatedSection>
            </div>

            {/* <div className="py-20 md:py-32 px-4 section-divider">
                <AnimatedSection type="zoom-in" className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to Build?</h2>
                    <p className="mt-4 text-lg text-on-background/80">
                        Explore our documentation, experiment with our API, and see how easy it is to integrate the world's most advanced AI into your workflow.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="btn-primary">
                            Read the Docs
                        </button>
                        <button className="btn-secondary">
                            Contact Sales
                        </button>
                    </div>
                </AnimatedSection>
            </div> */}
        </div>
    );
};

export default PlatformPage;