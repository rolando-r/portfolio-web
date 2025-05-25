import { useEffect, useState } from "react";
import { ThemeMode } from "@/types";

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

interface ThemeIconProps {
  theme: ThemeMode;
}

export const ThemeIcon = ({ theme }: ThemeIconProps) => {
  const [animating, setAnimating] = useState(false);
  const isDarkMode = theme === 'dark' || (theme === 'system' && prefersDark);

  useEffect(() => {
    setAnimating(true);
    const timeout = setTimeout(() => setAnimating(false), 200);
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
