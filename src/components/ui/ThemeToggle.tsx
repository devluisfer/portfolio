'use client';

import { useTheme } from '@/hooks/useTheme';

export default function ThemeToggle() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 overflow-hidden theme-transition group"
            aria-label="Toggle theme"
        >
            <div className={`absolute inset-0 flex items-center justify-center transform ${isDark ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'} transition-transform duration-500 ease-in-out`}>
                <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            </div>
            <div className={`absolute inset-0 flex items-center justify-center transform ${isDark ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} transition-transform duration-500 ease-in-out`}>
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            </div>
        </button>
    );
}