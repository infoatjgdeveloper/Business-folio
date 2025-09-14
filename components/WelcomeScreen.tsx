



import React, { useRef } from 'react';
import { Page } from '../App';
import { CpuChipIcon, ServerStackIcon, ShieldLockIcon, BeakerIcon, CheckIcon, BoltIcon, EyeIcon, ArrowLeftIcon, ArrowRightIcon, GlobeAltIcon, CodeBracketIcon, ChartBarIcon } from './Icons';
import AnimatedSection from './AnimatedSection';

interface HomePageProps {
    setActivePage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setActivePage }) => {
    
    const models = [
        {
            icon: CpuChipIcon,
            title: "LLM Pro v1.2.1",
            description: "Our flagship generative super brain. The ultimate combination of performance and capability, designed for complex reasoning.",
            features: ["State-of-the-art reasoning", "Multi-million token context", "Highest factual accuracy"],
        },
        {
            icon: BoltIcon,
            title: "LLM Flash v2.1.0",
            description: "Optimized for speed and efficiency. Ideal for high-throughput, low-latency applications like real-time conversation.",
            features: ["Industry-leading latency", "Cost-effective at scale", "Perfect for chat & summarization"],
        },
        {
            icon: EyeIcon,
            title: "LLM Vision v1.5.0",
            description: "A powerful multimodal model that understands and analyzes images, charts, and video to unlock visual insights.",
            features: ["Advanced image analysis", "Chart & graph interpretation", "Video content understanding"],
        },
        {
            icon: CodeBracketIcon,
            title: "CodeScribe Agent v0.9.3",
            description: "Your AI pair programmer. Generates, explains, and debugs code across dozens of languages with high fidelity.",
            features: ["Multi-language support", "Full repository awareness", "Automated test generation"],
        },
        {
            icon: ChartBarIcon,
            title: "MarketPulse Agent v1.1.5",
            description: "Analyzes financial markets, reports, and news in real-time to provide strategic business intelligence and forecasts.",
            features: ["Real-time data ingestion", "Sentiment analysis", "Financial modeling"],
        },
        {
            icon: ServerStackIcon,
            title: "DataWeaver Agent v0.8.0",
            description: "An expert in data transformation. Cleans, structures, and migrates complex datasets, writing ETL scripts on the fly.",
            features: ["Schema inference", "Automated data cleaning", "SQL & NoSQL compatible"],
        },
        {
            icon: BeakerIcon,
            title: "BioSynergist Agent v0.5.2",
            description: "Accelerates scientific discovery by parsing research papers, interpreting experimental data, and hypothesizing connections.",
            features: ["Understands biomedical data", "Hypothesis generation", "Literature review automation"],
        },
        {
            icon: ShieldLockIcon,
            title: "Guardian Agent v1.4.0",
            description: "A security-focused agent that audits code for vulnerabilities, analyzes network traffic, and drafts compliance reports.",
            features: ["Security vulnerability scanning", "Compliance automation (SOC 2, GDPR)", "Threat modeling"],
        },
        {
            icon: GlobeAltIcon,
            title: "Polyglot Agent v1.0.0",
            description: "Provides highly accurate, context-aware translation and localization for over 100 languages, preserving nuance and tone.",
            features: ["100+ languages supported", "Cultural context awareness", "Real-time document translation"],
        }
    ];

    const useCases = [
        { title: "Autonomous Content Creation", description: "Generate high-quality articles, marketing copy, and reports in minutes." },
        { title: "Intelligent Customer Support", description: "Power chatbots that resolve complex queries with empathy and accuracy." },
        { title: "Developer Productivity", description: "Accelerate development cycles with advanced code generation and debugging." },
        { title: "Scientific Discovery", description: "Analyze research papers and datasets to uncover novel insights and hypotheses." },
        { title: "Strategic Business Analysis", description: "Summarize financial documents and market trends to inform critical decisions." },
        { title: "Creative Brainstorming", description: "Act as an inexhaustible partner for creative ideation and problem-solving." },
        { title: "Personalized Education", description: "Create tailored learning paths and tutoring experiences for students of all ages." },
        { title: "Automated Legal Assistance", description: "Draft contracts, summarize case law, and perform legal research with incredible speed." },
        { title: "Advanced Medical Scribe", description: "Transcribe patient interactions and automatically update medical records in real-time." },
    ];
    

    const handleLinkClick = (page: Page) => (e: React.MouseEvent) => {
        e.preventDefault();
        setActivePage(page);
        window.scrollTo(0,0);
    }

    return (
        <div className="w-full">
            <div>
                <AnimatedSection type="zoom-in" className="text-center min-h-[70vh] flex flex-col justify-center items-center px-4 py-20 md:py-32">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter max-w-5xl mx-auto gradient-text hero-title py-4">
                       JG Developer
                    </h1>
                     <div className="mt-6 max-w-4xl mx-auto">
                        {/* <p className="text-base md:text-lg text-on-background/80">
                            From JG Developer,
                        </p> */}
                        <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight gradient-text">
                            Aimed Towards The Future.
                        </h2>
                        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-on-background/80">
                            Our generative super brain AI is designed to solve complex challenges for <span className="block mt-1 text-xl md:text-2xl font-medium gradient-text">everything and for everyday.</span>
                        </p>
                    </div>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button onClick={handleLinkClick('business')} className="btn-primary">
                            Explore Solutions
                        </button>
                        <button onClick={handleLinkClick('api')} className="btn-secondary">
                            View Platform
                        </button>
                    </div>
                </AnimatedSection>
            </div>
            
            <div className="py-20 md:py-32 px-4 section-divider">
                 <AnimatedSection type="fade-in-up" className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">A Model For Every Need</h2>
                        <p className="mt-4 text-lg text-on-surface/80 max-w-3xl mx-auto">Our suite of models and specialized agents provides the perfect balance of power, speed, and capability for any task.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                         {models.map(model => (
                            <div key={model.title} className="colorful-card p-8 flex flex-col">
                                <model.icon className="w-10 h-10 text-primary mb-4" />
                                <h3 className="text-2xl font-bold">{model.title}</h3>
                                <p className="mt-2 text-on-surface/80 flex-grow">{model.description}</p>
                                <ul className="mt-6 space-y-3 text-on-surface">
                                    {model.features.map(feature => (
                                        <li key={feature} className="flex items-center gap-3 text-sm"><CheckIcon className="w-5 h-5 text-primary flex-shrink-0" /> {feature}</li>
                                    ))}
                                </ul>
                            </div>
                         ))}
                    </div>
                </AnimatedSection>
            </div>

            <div className="py-20 md:py-32 px-4 section-divider">
                <AnimatedSection type="fade-in-up" className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Transforming Industries, One Query at a Time</h2>
                    <p className="mt-4 text-lg text-on-background/80 max-w-3xl mx-auto">Our models are designed to be versatile tools that drive real-world value across a multitude of applications.</p>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {useCases.map(useCase => (
                            <div key={useCase.title} className="colorful-card p-6 text-left">
                                <h3 className="font-semibold text-lg">{useCase.title}</h3>
                                <p className="mt-1 text-on-surface/70 text-sm">{useCase.description}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
            
             <div className="py-20 md:py-32 px-4 section-divider">
                <AnimatedSection type="zoom-in" className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to build?</h2>
                    <p className="mt-4 text-lg text-on-surface/80">
                        Explore our platform, dive into the documentation, and see how easy it is to integrate the world's most advanced AI into your workflow.
                    </p>
                    <div className="mt-8">
                        <button onClick={handleLinkClick('api')} className="btn-primary">Get Started with the API</button>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default HomePage;