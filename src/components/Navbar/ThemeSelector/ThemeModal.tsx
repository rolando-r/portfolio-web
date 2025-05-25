import { useTranslation } from "react-i18next";
import { ThemeOption } from "./ThemeOption";
import { ThemeMode } from "@/types";

export const ThemeModal = ({
    onSelect,
}: {
    onSelect: (theme: ThemeMode) => void;
}) => {
  const { t } = useTranslation();

  return (
    <div className="absolute top-10 right-4 shadow-lg rounded-lg p-2 z-50 w-32 animate-[var(--animate-fade-in-scale)] bg-zinc-100/95 dark:bg-slate-800/95 text-zinc-800 dark:text-zinc-100 backdrop-blur-lg">
      {["light", "dark", "system"].map(mode => (
        <ThemeOption
          key={mode}
          onClick={() => onSelect(mode as ThemeMode)}
        >
          {t(`theme.${mode}`)}
        </ThemeOption>
      ))}
    </div>
  );
};