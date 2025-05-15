import { useState, useEffect } from 'react';

const getStored = <T extends string>(key: string, fallback: T): T => {
    const stored = localStorage.getItem(key);
    return (stored as T) || fallback;
};

const ThemeIcon = ({ theme }: { theme: "light" | "dark" | "system" }) => {
    const [animating, setAnimating] = useState(false);

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
            className={`h-6 w-6 transition-transform duration-300 ease-out scale-100 hover:scale-110 ${
                animating ? 'animate-[var(--animate-icon-change)]' : ''
            }`}
        />
    );
};

const ThemeOption = ({
    value,
    onClick,
}: {
    value: "light" | "dark" | "system";
    onClick: () => void;
}) => (
    <button
        onClick={onClick}
        className="px-4 py-2 hover:bg-gray-100 rounded w-full text-left"
    >
        {value.charAt(0).toUpperCase() + value.slice(1)}
    </button>
);

export const Navbar = () => {
    const [language, setLanguage] = useState<"en" | "es">(getStored("language", "en"));
    const [theme, setTheme] = useState<"light" | "dark" | "system">(getStored("theme", "light"));
    const [showThemeModal, setShowThemeModal] = useState(false);

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    useEffect(() => {
        localStorage.setItem("theme", theme);

        const html = document.documentElement;
        if (theme === "dark") {
            html.classList.add("dark");
        } else if (theme === "light") {
            html.classList.remove("dark");
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            html.classList.toggle("dark", prefersDark);
        }
    }, [theme]);

    const toggleLanguage = () => {
        setLanguage(lang => (lang === "es" ? "en" : "es"));
    };

    const handleThemeChange = (newTheme: "light" | "dark" | "system") => {
        setTheme(newTheme);
        setShowThemeModal(false);
    };

    return (
        <nav className="w-full flex items-center justify-center px-8 py-4 space-x-5">
            <ul className="flex space-x-5 text-sm font-medium">
                {["experience", "projects", "about", "contact"].map(section => (
                    <li key={section}>
                        <a href={`#${section}`} className="hover:text-sky-600 capitalize">
                            {section}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex items-center space-x-4 text-sm font-semibold relative min-w-[100px]">
                <button onClick={toggleLanguage} className="hover:text-sky-600 font-bold" data-lang={language}>
                    en/es
                </button>

                <button onClick={() => setShowThemeModal(prev => !prev)} className="flex items-center">
                    <ThemeIcon theme={theme} />
                </button>

                {showThemeModal && (
                    <div className="absolute top-10 right-0 bg-white white:bg-gray-800 shadow-lg rounded-lg p-5 z-50 w-32 animate-[var(--animate-fade-in-scale)]">
                        <ThemeOption value="light" onClick={() => handleThemeChange("light")} />
                        <ThemeOption value="dark" onClick={() => handleThemeChange("dark")} />
                        <ThemeOption value="system" onClick={() => handleThemeChange("system")} />
                    </div>
                )}
            </div>
        </nav>
    );
};
