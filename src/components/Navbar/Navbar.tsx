import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";

type ThemeMode = "light" | "dark" | "system";
type Language = "en" | "es";

const getStored = <T extends string>(key: string, fallback: T): T => {
    const stored = localStorage.getItem(key);
    return (stored as T) || fallback;
};
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const ThemeIcon = ({ theme }: { theme: ThemeMode }) => {
    const [animating, setAnimating] = useState(false);
    const isDarkMode = theme === 'dark' || (theme === 'system' && prefersDark);

    useEffect(() => {
        setAnimating(true);
        const timeout = setTimeout(() => setAnimating(false), 200); // Duration of the animation
        return () => clearTimeout(timeout);
    }, [theme]);

    const iconSrc = `/icons/${theme}_mode.svg`;
    return (
        <img
            src={iconSrc}
            alt="Theme icon"
            className={`h-6 w-6 transition-transform duration-300 ease-out scale-100 hover:scale-110 
            ${animating ? 'animate-[var(--animate-icon-change)]' : ''}
            ${isDarkMode ? 'filter invert brightness-000 contrast-200' : ''}`}
        />
    );
};

const ThemeOption = ({ value, onClick }: { value: ThemeMode; onClick: () => void }) => (
    <button
        onClick={onClick}
        className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded w-full text-left"
    >
        {value.charAt(0).toUpperCase() + value.slice(1)}
    </button>
);

export const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState<Language>(() => {
        const storedLang = getStored("language", "en");
        i18n.changeLanguage(storedLang);
        return storedLang;
    });
    const [theme, setTheme] = useState<ThemeMode>(getStored("theme", "light"));
    const [showThemeModal, setShowThemeModal] = useState(false);

    useEffect(() => {
        localStorage.setItem("language", language);
        i18n.changeLanguage(language);
    }, [language]);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const html = document.documentElement;
        html.classList.toggle("dark", theme === "dark" || (theme === "system" && prefersDark));
    }, [theme]);

    const toggleLanguage = () => {
        const newLang = language === "en" ? "es" : "en";
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
    };

    const handleThemeChange = (newTheme: ThemeMode) => {
        setTheme(newTheme);
        setShowThemeModal(false);
    };

    return (
        <nav className="w-full flex items-center justify-center px-8 py-4 space-x-5 bg-zinc-100 text-zinc-800 dark:bg-gray-900 dark:text-zinc-100">
            <ul className="flex space-x-5 text-sm font-medium">
                {["experience", "projects", "about", "contact"].map(section => (
                    <li key={section}>
                        <a href={`#${section}`} className="hover:text-sky-600 dark:hover:text-sky-700 capitalize">
                            {t(section)}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex items-center space-x-4 text-sm font-semibold relative min-w-[100px]">
                <button onClick={toggleLanguage} className="hover:text-sky-600 dark:hover:text-sky-700 font-bold">
                    en/es
                </button>

                <button onClick={() => setShowThemeModal(prev => !prev)} className="flex items-center">
                    <ThemeIcon theme={theme} />
                </button>

                {showThemeModal && (
                    <div className="absolute top-10 right-0 shadow-lg rounded-lg p-5 z-50 w-32 animate-[var(--animate-fade-in-scale)] bg-zinc-100 text-zinc-800 dark:bg-slate-800 dark:text-zinc-100">
                        <ThemeOption value="light" onClick={() => handleThemeChange("light")} />
                        <ThemeOption value="dark" onClick={() => handleThemeChange("dark")} />
                        <ThemeOption value="system" onClick={() => handleThemeChange("system")} />
                    </div>
                )}
            </div>
        </nav>
    );
};
