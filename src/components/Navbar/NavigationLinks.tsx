import { useTranslation } from "react-i18next";

export const NavigationLinks = () => {
    const { t } = useTranslation();
    const sections = ["experience", "projects", "about", "contact"];

    return (
        <ul className="flex space-x-5 text-sm font-medium">
            {sections.map((section) => (
                <li key={section}>
                    <a href={`#${section}`} className="hover:text-sky-600 dark:hover:text-sky-700 capitalize">
                        {t(section)}
                    </a>
                </li>
            ))}
        </ul>
    )
}