import React, { useState } from 'react';
import AnimatedSection from '../AnimatedSection';
import { ServerStackIcon, ShieldLockIcon, CheckIcon, CpuChipIcon, ChartBarIcon, BeakerIcon, CodeBracketIcon } from '../Icons';

const SolutionsPage: React.FC = () => {
    
    type Industry = 'finance' | 'healthcare' | 'retail' | 'tech';
    const [activeIndustry, setActiveIndustry] = useState<Industry>('finance');

    const solutionsByIndustry = {
        finance: {
            icon: ChartBarIcon,
            title: "Financial Services",
            description: "Navigate market complexity, automate compliance, and deliver hyper-personalized client services with AI that understands the language of finance.",
            useCases: [
                { name: "Autonomous Risk Analysis", detail: "Continuously monitor portfolios and market data to identify, assess, and mitigate risks in real time." },
                { name: "Generative Financial Reports", detail: "Automate the creation of detailed market summaries, earnings call transcripts, and client-facing reports." },
                { name: "AI-Powered Wealth Management", detail: "Create bespoke financial plans and investment strategies tailored to individual client goals and risk profiles." }
            ]
        },
        healthcare: {
            icon: BeakerIcon,
            title: "Healthcare & Life Sciences",
            description: "Accelerate discovery, streamline administrative tasks, and empower clinicians with AI built on a foundation of security and compliance.",
            useCases: [
                { name: "Drug Discovery Acceleration", detail: "Analyze millions of research papers and clinical trials to identify novel drug targets and hypotheses." },
                { name: "AI-Assisted Diagnostics", detail: "Augment radiologists and pathologists by analyzing medical imaging to detect anomalies and patterns." },
                { name: "Automated Clinical Documentation", detail: "Reduce administrative burden by automatically generating clinical notes and summaries from patient interactions." }
            ]
        },
        retail: {
            icon: ServerStackIcon,
            title: "Retail & E-commerce",
            description: "From supply chain to customer service, transform your operations with AI that predicts trends, optimizes logistics, and personalizes every interaction.",
            useCases: [
                { name: "Hyper-Personalized Recommendations", detail: "Go beyond simple suggestions to create entire shopping journeys tailored to individual customer tastes." },
                { name: "Intelligent Supply Chain", detail: "Forecast demand with greater accuracy, optimize inventory levels, and proactively manage logistics disruptions." },
                { name: "Next-Gen Customer Support", detail: "Deploy AI agents that can handle complex queries, process returns, and even provide product expertise." }
            ]
        },
        tech: {
            icon: CodeBracketIcon,
            title: "Technology & Software",
            description: "Supercharge your development lifecycle, enhance user support, and build smarter products with our powerful, developer-first AI platform.",
            useCases: [
                { name: "Autonomous Code Generation", detail: "Accelerate development by generating high-quality, repository-aware code, from boilerplate to complex algorithms." },
                { name: "Intelligent DevOps & CI/CD", detail: "Automate test generation, identify performance bottlenecks, and summarize build failures to increase velocity." },
                { name: "Smarter In-Product Experiences", detail: "Embed AI tutors, proactive support agents, and intelligent onboarding directly into your applications." }
            ]
        }
    };

    const partnershipProcess = [
        { step: 1, title: "Discover & Strategize", description: "We work with you to deeply understand your unique challenges, data landscape, and security requirements to co-create a clear roadmap for success." },
        { step: 2, title: "Build & Integrate", description: "Our experts fine-tune our models on your data and securely integrate them into your existing workflows and systems for maximum impact and minimal disruption." },
        { step: 3, title: "Scale & Optimize", description: "We provide ongoing support, proactive performance monitoring, and model updates to ensure your AI solution continuously evolves and delivers increasing value." },
    ];
    
    const trustPillars = [
        { icon: ShieldLockIcon, title: "Data Privacy & Isolation", description: "Your data is never used for general model training. Full stop. Single-tenant and on-premise options provide maximum control." },
        { icon: CheckIcon, title: "Compliance-Ready", description: "Our platform is SOC 2 Type II certified and designed to help you meet stringent requirements like GDPR and HIPAA." },
        { icon: CpuChipIcon, title: "Robust & Reliable", description: "Built on a resilient, globally distributed infrastructure for high availability and consistent performance." }
    ];

    const currentSolution = solutionsByIndustry[activeIndustry];
    const IndustryButton: React.FC<{ industry: Industry, icon: React.FC<{ className?: string }>, title: string }> = ({ industry, icon: Icon, title }) => (
        <button
            onClick={() => setActiveIndustry(industry)}
            className={`flex-1 p-4 rounded-t-lg transition-all text-center border-b-4 ${activeIndustry === industry ? 'border-primary bg-primary/5' : 'border-transparent hover:bg-surface'}`}
        >
            <Icon className={`w-8 h-8 mx-auto mb-2 ${activeIndustry === industry ? 'text-primary' : 'text-on-surface/70'}`} />
            <span className="font-semibold">{title}</span>
        </button>
    );

    return (
        <div className="w-full">
            <AnimatedSection type="zoom-in" className="text-center min-h-[60vh] flex flex-col justify-center items-center px-4 py-20 md:py-32">
                <p className="text-primary font-semibold">Enterprise Solutions</p>
                <h1 className="mt-2 text-5xl md:text-7xl font-bold tracking-tighter max-w-5xl mx-auto gradient-text hero-title py-4">
                   From Insight to Impact. Instantly.
                </h1>
                <p className="mt-6 text-lg md:text-xl text-on-background/80 max-w-3xl mx-auto">
                    We partner with industry leaders to deploy secure, specialized AI solutions that solve critical challenges, unlock new efficiencies, and create lasting competitive advantage.
                </p>
            </AnimatedSection>
            
            <div className="py-20 md:py-32 px-4 section-divider">
                <AnimatedSection type="fade-in-up" className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">AI for Every Industry</h2>
                        <p className="mt-4 text-lg text-on-surface/80 max-w-3xl mx-auto">Discover how our platform is tailored to meet the unique demands of your sector.</p>
                    </div>
                    <div className="flex flex-col md:flex-row border-b border-border">
                        {Object.entries(solutionsByIndustry).map(([key, { icon, title }]) => (
                            <IndustryButton key={key} industry={key as Industry} icon={icon} title={title} />
                        ))}
                    </div>
                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface p-8 rounded-b-lg">
                        <div className="lg:col-span-5">
                            <h3 className="text-3xl font-bold tracking-tight text-primary">{currentSolution.title}</h3>
                            <p className="mt-4 text-lg text-on-surface/80">{currentSolution.description}</p>
                        </div>
                        <div className="lg:col-span-7 space-y-4">
                             {currentSolution.useCases.map(useCase => (
                                <div key={useCase.name} className="p-4 rounded-lg bg-background">
                                    <h4 className="font-semibold">{useCase.name}</h4>
                                    <p className="text-sm text-on-surface/70">{useCase.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
            
            <div className="py-20 md:py-32 px-4 section-divider">
                 <AnimatedSection type="fade-in-up" className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Your Partnership Journey</h2>
                        <p className="mt-4 text-lg text-on-surface/80 max-w-3xl mx-auto">We provide a structured, collaborative path from initial concept to enterprise-wide impact.</p>
                    </div>
                    <div className="relative grid md:grid-cols-3 gap-8">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 hidden md:block"></div>
                        {partnershipProcess.map((item, index) => (
                            <div key={item.step} className="relative card-bright p-8 z-10">
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-lg">{item.step}</div>
                                <h3 className="mt-6 text-xl font-bold text-center">{item.title}</h3>
                                <p className="mt-3 text-on-surface/80 text-center">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
            
             <div className="py-20 md:py-32 px-4 section-divider">
                <AnimatedSection type="fade-in-up" className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Trust Fabric</h2>
                        <p className="mt-4 text-lg text-on-surface/80 max-w-3xl mx-auto">Our commitment to security, privacy, and reliability is woven into every solution we deliver.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {trustPillars.map(pillar => (
                            <div key={pillar.title} className="text-center card-bright p-8">
                                <pillar.icon className="w-10 h-10 text-primary mb-4 mx-auto" />
                                <h3 className="font-semibold text-xl">{pillar.title}</h3>
                                <p className="mt-2 text-on-surface/80">{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>

             <div className="py-20 md:py-32 px-4 section-divider">
                <AnimatedSection type="zoom-in" className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Start Your Transformation.</h2>
                    <p className="mt-4 text-lg text-on-background/80">
                        Contact our solutions team to learn how we can help you leverage AI to solve your most critical business challenges with the confidence of enterprise-grade security.
                    </p>
                    <div className="mt-8">
                        <a href="#" className="btn-primary">Contact Sales</a>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default SolutionsPage;
