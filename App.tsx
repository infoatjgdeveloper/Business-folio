
import React, { useState } from 'react';
import Footer from './components/UserMenu';
import HomePage from './components/WelcomeScreen';
import ResearchPage from './components/ChatMessage';
import PlatformPage from './components/PromptInput';
import SolutionsPage from './components/modals/AuthModal';
import InvestorsPage from './components/modals/SettingsModal';
import Header from './components/Sidebar';
import BrightParticleBackground from './components/ParticleBackground';
import CompanyPage from './components/CompanyPage';

export type Page = 'home' | 'research' | 'api' | 'business' | 'investors' | 'company';

const App: React.FC = () => {
    const [activePage, setActivePage] = useState<Page>('home');

    const renderPage = () => {
        switch (activePage) {
            case 'home':
                return <HomePage setActivePage={setActivePage} />;
            case 'research':
                return <ResearchPage />;
            case 'api':
                return <PlatformPage />;
            case 'business':
                return <SolutionsPage />;
            case 'investors':
                return <InvestorsPage />;
            case 'company':
                return <CompanyPage />;
            default:
                return <HomePage setActivePage={setActivePage} />;
        }
    };

    return (
        <div className="text-on-background font-sans relative isolate">
            <BrightParticleBackground />
            <div className="relative z-10 flex flex-col min-h-screen">
                <Header activePage={activePage} setActivePage={setActivePage} />
                <main className="flex-grow w-full">
                    {renderPage()}
                </main>
                <Footer setActivePage={setActivePage} />
            </div>
        </div>
    );
};

export default App;
