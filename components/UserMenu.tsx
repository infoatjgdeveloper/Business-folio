

import React from 'react';
import { TwitterIcon, GitHubIcon, LinkedInIcon, JGDeveloperIcon } from './Icons';
import { Page } from '../App';

interface FooterProps {
    setActivePage: (page: Page) => void;
}

const MenuColumn: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
    <div className="space-y-4">
        <h3 className="font-semibold text-on-surface/60 text-xs tracking-wider uppercase">{title}</h3>
        <ul className="space-y-3">
            {children}
        </ul>
    </div>
);

const MenuLink: React.FC<{ onClick?: (e: React.MouseEvent) => void, href?: string, children: React.ReactNode }> = ({ onClick, href = "#", children }) => (
    <li>
        <a 
            href={href} 
            onClick={onClick}
            className="text-on-surface/80 hover:text-primary transition-colors text-sm"
        >
            {children}
        </a>
    </li>
);

const Footer: React.FC<FooterProps> = ({ setActivePage }) => {

    const handleLinkClick = (page: Page) => (e: React.MouseEvent) => {
        e.preventDefault();
        setActivePage(page);
        window.scrollTo(0, 0);
    };

    return (
        <footer className="w-full bg-surface border-t border-border mt-auto">
            <div className="max-w-7xl mx-auto px-8 py-16">
                 <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 text-sm">
                    <MenuColumn title="Platform">
                        <MenuLink onClick={handleLinkClick('api')}>API Overview</MenuLink>
                        <MenuLink onClick={handleLinkClick('api')}>Models</MenuLink>
                        <MenuLink onClick={handleLinkClick('api')}>Pricing</MenuLink>
                        <MenuLink onClick={handleLinkClick('api')}>SDKs & Tools</MenuLink>
                        <MenuLink onClick={handleLinkClick('api')}>Security</MenuLink>
                    </MenuColumn>
                    <MenuColumn title="Solutions">
                        <MenuLink onClick={handleLinkClick('business')}>By Industry</MenuLink>
                        <MenuLink onClick={handleLinkClick('business')}>By Use Case</MenuLink>
                        <MenuLink onClick={handleLinkClick('business')}>Case Studies</MenuLink>
                        <MenuLink onClick={handleLinkClick('business')}>Partnerships</MenuLink>
                    </MenuColumn>
                    <MenuColumn title="Company">
                        <MenuLink onClick={handleLinkClick('company')}>About Us</MenuLink>
                        <MenuLink>Careers</MenuLink>
                        <MenuLink>Blog</MenuLink>
                        <MenuLink>Contact Us</MenuLink>
                    </MenuColumn>
                    <MenuColumn title="Developers">
                        <MenuLink>Documentation</MenuLink>
                        <MenuLink>API Reference</MenuLink>
                        <MenuLink>Community Forum</MenuLink>
                        <MenuLink>Status</MenuLink>
                    </MenuColumn>
                    <MenuColumn title="Research">
                        <MenuLink onClick={handleLinkClick('research')}>Overview</MenuLink>
                        <MenuLink onClick={handleLinkClick('research')}>Safety & Ethics</MenuLink>
                    </MenuColumn>
                </div>
                 <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center text-xs text-on-surface/60">
                    <div className="flex items-center space-x-2 mb-4 md:mb-0">
                      <JGDeveloperIcon className="w-4 h-4" />
                      <span>JG Developer Pvt. Ltd.</span>
                    </div>
                    <div className="text-center mb-4 md:mb-0">
                        <span>&copy; {new Date().getFullYear()} JG Developer Private Limited. All Rights Reserved.</span>
                        <span className="block sm:inline sm:ml-2">In association with NG Enterprise.</span>
                    </div>
                    <div className="flex space-x-5">
                        <a href="#" aria-label="Twitter" className="hover:text-primary transition-colors"><TwitterIcon className="w-5 h-5" /></a>
                        <a href="#" aria-label="GitHub" className="hover:text-primary transition-colors"><GitHubIcon className="w-5 h-5" /></a>
                        <a href="#" aria-label="LinkedIn" className="hover:text-primary transition-colors"><LinkedInIcon className="w-5 h-5" /></a>
                    </div>
                 </div>
            </div>
        </footer>
    );
};

export default Footer;