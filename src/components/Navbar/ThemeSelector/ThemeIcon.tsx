import { useEffect, useState } from "react";
import { ThemeMode } from "@/types";
import { LightIcon, DarkIcon, SystemIcon } from "../../icons";

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

  const IconComponent = {
    light: LightIcon,
    dark: DarkIcon,
    system: SystemIcon,
  }[theme];

  return (
  <div
    className={`transition-transform duration-300 ease-out
      ${animating ? 'animate-icon-change' : ''}
      hover:scale-110`}
  >
    <IconComponent
      className={`h-6 w-6 
        ${isDarkMode ? 'filter invert brightness-0 contrast-200' : ''}`}
    />
  </div>
);

};
