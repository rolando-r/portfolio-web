import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export const LanguageToggle = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState<"en" | "es">(() => {
        const stored = localStorage.getItem("language") as "en" | "es";
        return stored || "en";
    });

    const toggleLanguage = () => {
        const newLang = language === "en" ? "es" : "en";
        setLanguage(newLang);
        i18n.changeLanguage(newLang);
        localStorage.setItem("language", newLang);
    };

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language, i18n]);

    return (
        <button 
            onClick={toggleLanguage}
            className="flex items-center justify-center h-4 w-12 rounded-full hover:text-blue-600 font-bold text-xs sm:text-sm transition-colors"
        >
            en/es
        </button>
    );
}