import { useEffect } from 'react';

export const useTheme = () => {
    useEffect(() => {
        const root = window.document.documentElement;
        if (root.classList.contains('dark')) {
            root.classList.remove('dark');
        }
    }, []);
};