import React from 'react';
import AnimatedSection from './AnimatedSection';
import { 
  CpuChipIcon, 
  ServerStackIcon, 
  CodeBracketIcon, 
  MapPinIcon,

  GlobeAltIcon
} from './Icons';

const CareerPage: React.FC = () => {

  const jobOpenings = [
    {
      title: "AI/ML Interns",
      description: "Work on applied machine learning projects with mentorship. Gain hands-on experience with data preprocessing, model training, and evaluation.",
      type: "Internship"
    },
    {
      title: "AI/ML Senior Developers",
      description: "Design and deploy advanced AI/ML models in production. Collaborate with teams to deliver scalable solutions using deep learning, NLP, or computer vision.",
      type: "Full-Time"
    },
    {
      title: "Software Development Interns",
      description: "Assist in building robust, user-friendly applications. Exposure to full-stack development with modern tools and frameworks.",
      type: "Internship"
    },
    {
      title: "DevOps Engineers",
      description: "Build and maintain CI/CD pipelines for seamless deployments. Ensure system reliability, scalability, and security.",
      type: "Full-Time"
    },
    {
      title: "MLOps Engineers",
      description: "Develop infrastructure for training, deploying, and monitoring ML models. Automate workflows and optimize ML pipelines.",
      type: "Full-Time"
    },
  ];

  const benefits = [
    { icon: GlobeAltIcon, title: "100% Remote", desc: "Work from anywhere in the world." },
    { icon: CpuChipIcon, title: "Cutting-Edge Projects", desc: "Solve real-world challenges in AI, ML, and cloud." },
    { icon: CpuChipIcon, title: "Continuous Learning", desc: "Grow with mentorship, R&D, and leadership support." },
    { icon: ServerStackIcon, title: "Flexible Hours", desc: "Focus on results, not just clock-in times." },
  ];

  const locations = [
    { name: "Ahmedabad, Gujarat, India", role: "Headquarters" }
  ];

  return (
    <div className="w-auto">
      {/* Hero Section */}
      <AnimatedSection type="zoom-in" className="text-center min-h-[60vh] flex flex-col justify-center items-center px-4 py-20 md:py-32">
        <p className="font-semibold text-primary">Join Our Team</p>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl mx-auto gradient-text hero-title py-4">
          Careers at JG Developer
        </h1>
        <p className="mt-6 text-lg md:text-xl text-on-background/80 max-w-3xl mx-auto">
          At JG Developer, we’re building the future with innovation, collaboration, and global impact. Work remotely, grow your career, and solve real-world challenges with us.
        </p>
      </AnimatedSection>

      {/* Job Openings */}
      <section className="py-20 md:py-32 px-4 section-divider">
        <AnimatedSection type="fade-in-up" className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Current Openings</h2>
            <p className="mt-4 text-lg text-on-surface/80 max-w-2xl mx-auto">
              Explore our remote opportunities and be part of something impactful.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job) => (
              <div key={job.title} className="card-bright p-8 text-left flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-3">{job.title}</h3>
                  <p className="text-on-surface/80 mb-4">{job.description}</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">{job.type}</span>
                  <a href="mailto:careersatjgdeveloper@gmail.com?subject=Application - {job.title}" className="btn-primary text-sm">
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 px-4 section-divider">
        <AnimatedSection type="fade-in-up" className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Why Work With Us?</h2>
            <p className="mt-4 text-lg text-on-surface/80 max-w-2xl mx-auto">We offer a flexible, innovative, and supportive environment where you can thrive.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="card-bright p-6 text-center">
                <b.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg">{b.title}</h3>
                <p className="text-sm text-on-surface/80">{b.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Global Presence */}
      <section className="py-20 md:py-32 px-4 section-divider">
        <AnimatedSection type="fade-in-up" className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Our Global Presence</h2>
            <p className="mt-4 text-lg text-on-surface/80 max-w-2xl mx-auto">Strategically located to attract top talent and serve our clients worldwide.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-8">
            {locations.map((loc) => (
              <div key={loc.name} className="card-bright p-6 text-center align-center">
                <MapPinIcon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg">{loc.name}</h3>
                <p className="text-sm text-primary font-medium">{loc.role}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 vision-section">
        <AnimatedSection type="zoom-in" className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Define the Future With Us</h2>
          <p className="mt-4 text-lg text-on-background/80">
            We’re seeking pioneers, dreamers, and builders. If you’re driven to solve the most important challenges of our time, your journey starts here.
          </p>
          <div className="mt-8">
            <a href="mailto:careersatjgdeveloper@gmail.com" className="btn-primary">Apply Today</a>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default CareerPage;
