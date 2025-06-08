import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export const NavigationLinks = () => {
    const { t } = useTranslation();
    const sections = ["about", "experience", "contact"];
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                })
            },
            {
                threshold: 0.6,
            }
        )

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        })

        return () => observer.disconnect();
    }, []);

    return (
        <ul className="flex flex-nowrap space-x-5 text-xs sm:text-sm font-medium whitespace-nowrap">
            {sections.map((section) => (
                <li key={section}>
                    <a 
                        href={`#${section}`} 
                        className={`capitalize transition-colors duration-300 ${
                            activeSection === section
                                ? "text-blue-600"
                                : "hover:text-blue-600"
                        }`}
                    >
                        {t(section)}
                    </a>
                </li>
            ))}
        </ul>
    )
}