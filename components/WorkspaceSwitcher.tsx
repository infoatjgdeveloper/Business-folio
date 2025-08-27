import React from 'react';
import { SearchIcon } from './Icons';

const Header: React.FC = () => {
    return (
        <header className="flex-shrink-0 h-16 flex items-center justify-end px-4 md:px-8 border-b border-border">
            <div className="flex items-center space-x-4">
                <button className="text-on-surface/70 hover:text-on-surface transition-colors p-2 rounded-full hover:bg-surface">
                    <SearchIcon className="w-5 h-5" />
                    <span className="sr-only">Search</span>
                </button>
                <button className="bg-primary text-on-primary text-sm font-semibold px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                    Log in
                </button>
            </div>
        </header>
    );
};

export default Header;