


import React from 'react';
import AnimatedSection from './AnimatedSection';
import { 
    CpuChipIcon, 
    ServerStackIcon, 
    CodeBracketIcon, 
    GlobeAltIcon, 
    MapPinIcon, 
    ChatBubbleLeftRightIcon,
    KeyIcon,
    DatabaseIcon,
    EyeIcon,
    ShieldLockIcon,
    CommandLineIcon
} from './Icons';

const CompanyPage: React.FC = () => {

    const journeyMilestones = [
       
        {
            side: 'right',
            title: "2018-2020: Enterprise Expansion",
            description: "We deepen our enterprise capabilities, adding Cloud Computing and specialized SAP Solutions to our portfolio, helping large organizations modernize and streamline their operations."
        },
        {
            side: 'left',
            title: "2022: The AI Spark",
            description: "Pivoting towards the future, we begin developing specialized AI Agents, applying machine learning to solve specific business problems and automating complex workflows for our clients."
        },
        {
            side: 'right',
            title: "2024: Deep Learning Research",
            description: "Our dedicated research division is established, focusing on foundational models, deep learning, and neural network intelligence, laying the groundwork for our most ambitious project yet."
        },
        {
            side: 'left',
            title: "2025: LLM MVP",
            description: "The first Minimum Viable Product of LLM (The Brain) is launched, showcasing its core capabilities in understanding, reasoning, and task execution to early partners."
        },
        {
            side: 'right',
            title: "2026: The Public Launch",
            description: "LLM is officially launched to the public, marking a new era of accessible, powerful, and general-purpose AI designed for both enterprise and everyday use."
        },
        {
            side: 'left',
            title: "2028: Platform Evolution",
            description: "We plan to significantly enhance the platform with new features, improved models, and deeper integrations, pushing the boundaries of what's possible with AI."
        },
        {
            side: 'right',
            title: "2030: The One-Stop Platform",
            description: "Our vision culminates in LLM becoming the leading one-stop platform for 'everyday everything'—a single, intelligent layer for work, creativity, and productivity."
        }
    ];
    
    const coreServices = [
        { icon: CodeBracketIcon, title: "Software Development", description: "Building robust, scalable software tailored to your needs." },
        { icon: ServerStackIcon, title: "Cloud Computing", description: "Architecting and managing secure, high-performance cloud infrastructure." },
        { icon: EyeIcon, title: "Web Design", description: "Creating beautiful, intuitive, and high-performing web experiences." },
        { icon: CommandLineIcon, title: "Application Development", description: "Developing custom applications for mobile and desktop platforms."},
        { icon: KeyIcon, title: "SAP Solutions", description: "Implementing and customizing SAP systems to streamline enterprise operations." },
        { icon: CpuChipIcon, title: "AI Integration", description: "Leveraging our AI expertise to empower your business processes." }
    ];

    const platformFeatures = [
        { icon: ChatBubbleLeftRightIcon, title: "Unified Workspace", description: "Integrate your daily routine with features like meetings, video calls, and task management."},
        { icon: DatabaseIcon, title: "Knowledge Base", description: "Empower the AI with your own data for context-aware, personalized responses."},
        { icon: CpuChipIcon, title: "Continuous Learning", description: "An AI that evolves, learns, and generates novel insights from interactions and data."},
        { icon: ShieldLockIcon, title: "Multi-Layered Security", description: "Built on a foundation of enterprise-grade security to protect your sensitive information."}
    ];
    
    const locations = [
        { name: "Ahmedabad, Gujarat India", role: "Headquarters" },
        { name: "Chicago, IL, USA", role: "Branch Office" },
    ];


    return (
        <div className="w-full">
            <AnimatedSection type="zoom-in" className="text-center min-h-[60vh] flex flex-col justify-center items-center px-4 py-20 md:py-32">
                <p className="font-semibold text-primary">Our Story</p>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl mx-auto gradient-text hero-title py-4">
                    From Enterprise Solutions to Artificial Intelligence.
                </h1>
                <p className="mt-6 text-lg md:text-xl text-on-background/80 max-w-3xl mx-auto">
                    Since 2018, we've been building the future. What started as an enterprise-focused consultancy has evolved into a leading AI research company, culminating in our most ambitious projects.
                </p>
            </AnimatedSection>

            <section className="py-20 md:py-32 px-4 section-divider">
                <AnimatedSection type="fade-in-up" className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Journey</h2>
                        <p className="mt-4 text-lg text-on-surface/80 max-w-2xl mx-auto">A decade of innovation, driven by a commitment to solving complex challenges.</p>
                    </div>
                    <div className="roadmap-timeline">
                        {journeyMilestones.map((item, index) => (
                             <div key={index} className={`roadmap-container ${item.side}`}>
                                 <div className="roadmap-content card-bright">
                                     <h3 className="font-bold text-primary text-xl">{item.title}</h3>
                                     <p className="mt-2 text-on-surface/80 text-sm">{item.description}</p>
                                 </div>
                             </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>
            
            <section className="py-20 md:py-32 px-4 section-divider">
                <AnimatedSection type="fade-in-up" className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Foundational Expertise</h2>
                        <p className="mt-4 text-lg text-on-surface/80 max-w-2xl mx-auto">Our AI innovations are built on a decade of enterprise software experience.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreServices.map(item => (
                            <div key={item.title} className="card-bright p-8 text-center">
                                <item.icon className="w-12 h-12 text-primary mx-auto mb-5" />
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="mt-2 text-on-surface/80">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>
            
            <section className="py-20 md:py-32 px-4 section-divider">
                <AnimatedSection type="fade-in-up" className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Brain of AI</h2>
                         <p className="mt-6 text-lg text-on-background/80">
                           This is more than a model; it's a revolutionary cognitive platform. It represents the culmination of our research into deep, multi-layer learning architectures designed to emulate the principles of human cognition. At its core, it is capable of understanding complex instructions, thinking through problems, memorizing vast contexts, and deploying sophisticated solutions.
                            <br/><br/>
                           Unlike traditional models that rely solely on pre-defined data, this platform is engineered for continuous learning. It's like a nascent intelligence, capable of generating its own insights and adapting its knowledge base from every interaction, effectively learning without constant retraining. This allows it to tackle novel, unseen challenges and evolve its capabilities over time. It's designed to be the single, unified interface for all your work, seamlessly integrating into your daily routine to handle everything from simple tasks to multi-layered, complex projects.
                        </p>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         {platformFeatures.map(item => (
                             <div key={item.title} className="card-bright p-6">
                                <item.icon className="w-8 h-8 text-primary mb-3" />
                                <h4 className="font-bold text-lg">{item.title}</h4>
                                <p className="text-on-surface/80 text-sm">{item.description}</p>
                             </div>
                         ))}
                    </div>
                </AnimatedSection>
            </section>
            
            <section className="py-20 md:py-32 px-4 section-divider">
                <AnimatedSection type="fade-in-up" className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Global Presence</h2>
                        <p className="mt-4 text-lg text-on-surface/80 max-w-2xl mx-auto">Strategically located to serve our clients and attract top talent worldwide.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {locations.map(loc => (
                             <div key={loc.name} className="card-bright p-6 text-center">
                                <MapPinIcon className="w-10 h-10 text-primary mx-auto mb-4" />
                                <h3 className="font-semibold text-lg">{loc.name}</h3>
                                <p className="text-sm text-primary font-medium">{loc.role}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </section>
            
             <section className="py-20 md:py-32 px-4 vision-section">
                <AnimatedSection type="zoom-in" className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Define the Future With Us</h2>
                    <p className="mt-4 text-lg text-on-background/80">
                        We're seeking pioneers, dreamers, and builders. If you are driven to solve the most important challenges of our time, your journey starts here.
                    </p>
                     <div className="mt-8">
                        <a href="#" className="btn-primary">Explore Careers</a>
                    </div>
                </AnimatedSection>
            </section>
        </div>
    );
};

export default CompanyPage;