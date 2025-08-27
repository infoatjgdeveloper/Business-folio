import React from 'react';
import { ChartBarIcon, CheckIcon, CpuChipIcon, ServerStackIcon } from '../Icons';
import AnimatedSection from '../AnimatedSection';

const InvestorsPage: React.FC = () => {
    
    const useOfFunds = [
        { area: "Research & Development", percentage: 40, description: "Expand research into next-gen architectures and AI safety." },
        { area: "Compute Infrastructure", percentage: 30, description: "Build out our custom compute to support exponential growth." },
        { area: "Go-to-Market Expansion", percentage: 20, description: "Scale enterprise sales and solutions teams in key global markets." },
        { area: "Talent Acquisition", percentage: 10, description: "Recruit world-class talent in AI research, engineering, and product." }
    ];

    return (
        <div className="w-full">
            <AnimatedSection type="zoom-in" className="text-center min-h-[60vh] flex flex-col justify-center items-center px-4 py-20 md:py-32">
                <p className="text-primary font-semibold">Investor Relations</p>
                <h1 className="mt-2 text-5xl md:text-7xl font-bold tracking-tighter max-w-5xl mx-auto gradient-text hero-title py-4">
                   Investing in the Foundational Layer of Intelligence.
                </h1>
                <p className="mt-6 text-lg md:text-xl text-on-background/80 max-w-3xl mx-auto">
                    We are building a generational company at the nexus of enterprise software and artificial intelligence. We offer a unique opportunity to invest in the core technology that will redefine every industry for the next decade.
                </p>
            </AnimatedSection>
            
            <div className="py-20 md:py-32 px-4 section-divider">
                 <AnimatedSection type="fade-in-up" className="max-w-7xl mx-auto">
                     <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">The Dual-Engine Advantage</h2>
                        <p className="mt-4 text-lg text-on-surface/80 max-w-3xl mx-auto">Our unique business model combines the stability of a mature enterprise with the velocity of a market-defining startup.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 items-stretch">
                        <div className="colorful-card p-8 flex flex-col">
                            <ServerStackIcon className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-2xl font-bold">Engine 1: Enterprise Services</h3>
                            <p className="text-on-surface/80 mt-2 mb-4 flex-grow">A profitable, decade-old division providing bespoke software solutions to a loyal enterprise client base. This engine provides stability, cash flow, and a built-in distribution channel for our AI.</p>
                            <div className="mt-auto pt-4 border-t border-border">
                                <p className="text-4xl font-bold">$15M+ <span className="text-lg font-medium text-on-surface/70">ARR</span></p>
                                <p className="text-sm text-on-surface/70">10+ Years of Profitability</p>
                            </div>
                        </div>
                         <div className="colorful-card p-8 flex flex-col">
                            <CpuChipIcon className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-2xl font-bold">Engine 2: IntelligentLLM Platform</h3>
                            <p className="text-on-surface/80 mt-2 mb-4 flex-grow">Our high-growth, state-of-the-art AI platform, built on a proprietary technology stack. This engine targets the multi-trillion dollar AI market and is powered by the insights and access from Engine 1.</p>
                             <div className="mt-auto pt-4 border-t border-border">
                                <p className="text-4xl font-bold">300%+ <span className="text-lg font-medium text-on-surface/70">YoY Growth</span></p>
                                <p className="text-sm text-on-surface/70">Massive Total Addressable Market</p>
                            </div>
                        </div>
                    </div>
                 </AnimatedSection>
            </div>
            
            <div className="py-20 md:py-32 px-4 section-divider">
                <AnimatedSection type="fade-in-up" className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Defensible Position</h2>
                        <p className="mt-4 text-lg text-on-surface/80 max-w-3xl mx-auto">We are uniquely positioned against both hyperscalers and smaller startups.</p>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                           <p className="text-lg text-on-surface/80">While hyperscalers offer general-purpose models, they lack deep industry specialization and the agility to co-create solutions. Boutique AI firms have specialization but lack our scale, proprietary data engine, and infrastructure. We occupy a unique and defensible space: <span className="text-primary font-semibold">enterprise-grade, specialized AI at scale</span>.</p>
                           <ul className="space-y-2">
                                <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" /> <span><span className="font-semibold">Vertical Integration:</span> Superior performance and cost-efficiency.</span></li>
                                <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" /> <span><span className="font-semibold">Enterprise DNA:</span> A decade of solving real business problems.</span></li>
                                <li className="flex items-start gap-3"><CheckIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" /> <span><span className="font-semibold">Hybrid Business Model:</span> Stable, profitable services arm de-risks R&D.</span></li>
                           </ul>
                        </div>
                        <div className="relative border-2 border-border p-4 rounded-xl aspect-square">
                            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[2px] bg-border/70"></div>
                            <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-border/70"></div>
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm font-medium text-on-surface/70">Scale</span>
                            <span className="absolute top-1/2 -left-12 -translate-y-1/2 rotate-[-90deg] text-sm font-medium text-on-surface/70">Specialization</span>
                            
                            <div className="absolute top-[10%] left-[10%] text-center p-2 rounded-lg bg-surface">
                                <p className="font-semibold">AI Startups</p>
                                <p className="text-xs">High Specialization, Low Scale</p>
                            </div>
                             <div className="absolute top-[10%] right-[5%] text-center p-2 rounded-lg bg-gradient-to-br from-gradient-from to-gradient-to text-white shadow-lg">
                                <p className="font-bold">JG Developer</p>
                                <p className="text-xs">High Specialization, High Scale</p>
                            </div>
                             <div className="absolute bottom-[10%] left-[10%] text-center p-2 rounded-lg bg-surface">
                                <p className="font-semibold">Commodity APIs</p>
                                <p className="text-xs">Low Specialization, Low Scale</p>
                            </div>
                             <div className="absolute bottom-[10%] right-[10%] text-center p-2 rounded-lg bg-surface">
                                <p className="font-semibold">Hyperscalers</p>
                                <p className="text-xs">Low Specialization, High Scale</p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>

            <div className="py-20 md:py-32 px-4 section-divider">
                <AnimatedSection type="fade-in-up" className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Strategic Allocation of Capital</h2>
                        <p className="mt-4 text-lg text-on-background/80 max-w-3xl mx-auto">Series B funding will be deployed to accelerate growth and solidify our market leadership across four key areas.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {useOfFunds.map(item => (
                             <div key={item.area} className="card-bright border p-6">
                                <p className="text-3xl font-bold gradient-text">{item.percentage}%</p>
                                <h3 className="mt-2 font-semibold text-lg">{item.area}</h3>
                                <p className="mt-2 text-sm text-on-surface/80">{item.description}</p>
                                <div className="w-full bg-secondary-container rounded-full h-2.5 mt-4">
                                    <div className="bg-gradient-to-r from-gradient-from to-gradient-to h-2.5 rounded-full" style={{width: `${item.percentage}%`}}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
            
             <div className="py-20 md:py-32 px-4 section-divider">
                <AnimatedSection type="zoom-in" className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Join Us in Building the Future.</h2>
                    <p className="mt-4 text-lg text-on-background/80">
                        We are engaging with accredited investors and strategic partners for our Series B financing round. To request our investor deck and begin a conversation, please reach out to our investor relations team.
                    </p>
                    <div className="mt-8">
                        <a href="#" className="btn-primary">Contact Investor Relations</a>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default InvestorsPage;
