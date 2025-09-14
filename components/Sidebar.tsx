import React, { useState, useEffect } from 'react';
import { JGDeveloperIcon } from './Icons';
import { Page } from '../App';
import logo from "../asset/logo.png";
import { MenuIcon, XIcon } from '@heroicons/react/outline'; // Install heroicons if not already

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const NavLink: React.FC<{ page: Page; activePage: Page; setActivePage: (page: Page) => void; children: React.ReactNode; }> = ({ page, activePage, setActivePage, children }) => (
  <button
    onClick={() => {
      setActivePage(page);
      window.scrollTo(0, 0);
    }}
    className={`relative px-3 py-2 text-sm font-medium transition-colors nav-link-hover-effect ${
      activePage === page 
        ? 'text-on-background active' 
        : 'text-on-background/70 hover:text-on-background'
    }`}
  >
    {children}
  </button>
);

const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  const navItems = {
    home: 'Home',
    research: 'Research',
    business: 'Solutions',
    // api: 'Platform',
    company: 'Company',
    investors: 'Investors',
    careers: 'Careers',
  };

  return (
    <header
      className={`
        sticky top-0 z-50 w-full backdrop-blur-lg animate-slide-down
        transition-all duration-300 ease-in-out
        ${isScrolled ? 'bg-surface/80 border-b border-border header-shadow-scrolled' : 'bg-transparent border-b-transparent'}
      `}
    >
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
        {/* Logo */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActivePage('home')}>
          <img src={logo} alt="JG Developer Logo" className="h-13 w-12" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {Object.entries(navItems).map(([page, title]) => (
            <NavLink key={page} page={page as Page} activePage={activePage} setActivePage={setActivePage}>
              {title}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? (
              <XIcon className="w-6 h-6 text-on-background" />
            ) : (
              <MenuIcon className="w-6 h-6 text-on-background" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-border px-4 py-4 space-y-2">
          {Object.entries(navItems).map(([page, title]) => (
            <NavLink
              key={page}
              page={page as Page}
              activePage={activePage}
              setActivePage={(p) => {
                setActivePage(p);
                setMenuOpen(false); // Close menu on click
              }}
            >
              {title}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
