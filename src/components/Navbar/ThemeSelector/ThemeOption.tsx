interface ThemeOptionProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const ThemeOption = ({ onClick, children }: ThemeOptionProps) => (
  <button
    onClick={onClick}
    className="px-4 py-2 hover:bg-gray-200/80 dark:hover:bg-gray-700/80 rounded w-full text-left"
  >
    {children}
  </button>
);