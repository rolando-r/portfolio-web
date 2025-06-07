import { useEffect, useState } from "react";
import { NavigationLinks } from "./NavigationLinks";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeIcon } from "./ThemeSelector/ThemeIcon";
import { ThemeModal } from "./ThemeSelector/ThemeModal";
import { useThemeContext } from "@/context/ThemeContext";

export const Navbar = () => {
    const { theme, setTheme } = useThemeContext();
    const [showThemeModal, setShowThemeModal] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleThemeChange = (newTheme: typeof theme) => {
        setTheme(newTheme);
        setShowThemeModal(false);
    };

    return (
        <nav
            className={`
                fixed top-0 left-0 w-full flex justify-center
                transition-colors duration-300 ease-in-out p-2
            `}
            style={{ zIndex: 1000 }}
        >
            <div
                className={`
                    flex flex-nowrap items-center pl-6 sm:pl-8 md:pl-10 px-4 py-2
                    space-x-2 sm:space-x-4 rounded-full
                    transition-all duration-300 ease-in-out transform
                    text-xs sm:text-sm md:text-base
                    ${scrolled
                        ? "backdrop-blur-md bg-white/70 dark:bg-gray-800/70 text-zinc-800 dark:text-zinc-100 shadow-md"
                        : "bg-zinc-100 text-zinc-800 dark:bg-gray-900 dark:text-zinc-100"
                    }
                `}
            >
                <NavigationLinks />
                <div className="flex items-center space-x-2 sm:space-x-5 font-semibold relative">
                    <LanguageToggle />
                    <button onClick={() => setShowThemeModal(prev => !prev)}>
                        <ThemeIcon theme={theme} />
                    </button>
                    <div className="absolute top-0 right-0 pointer-events-auto">
                        {showThemeModal && <ThemeModal onSelect={handleThemeChange} />}
                    </div>
                </div>
            </div>
        </nav>
    );
};
