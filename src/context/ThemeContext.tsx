// src/context/ThemeContext.tsx
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { ThemeMode } from "@/types";

type ThemeContextType = {
    theme: ThemeMode;
    resolvedTheme: "light" | "dark";
    setTheme: (theme: ThemeMode) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<ThemeMode>(
        () => (localStorage.getItem("theme") as ThemeMode) || "light"
    );
    const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const updateSystemTheme = () => setSystemTheme(media.matches ? "dark" : "light");

        updateSystemTheme();
        media.addEventListener("change", updateSystemTheme);
        return () => media.removeEventListener("change", updateSystemTheme);
    }, []);

    const resolvedTheme = theme === "system" ? systemTheme : theme;

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
    }, [theme, resolvedTheme]);

    return (
        <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useThemeContext must be used within a ThemeProvider");
    return context;
};
