import ThemeToggle from '../ui/ThemeToggle';
import LanguageToggle from '../ui/LanguageToggle';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <nav className="flex items-center space-x-6">
                    <a href="/" className="text-lg font-semibold theme-transition">
                        Portfolio
                    </a>
                </nav>
                <div className="flex items-center space-x-4">
                    <ThemeToggle />
                    <LanguageToggle />
                </div>
            </div>
        </header>
    );
}