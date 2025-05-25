import { useTranslation } from 'react-i18next'

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className="mt-4 bg-zinc-200 dark:bg-gray-950 text-zinc-800 dark:text-zinc-100 px-4 py-3 rounded-lg shadow-sm text-sm">
            <div className="flex flex-wrap justify-center items-center gap-6 text-center">
                <span className="font-medium">{t("footer")}</span>
                <div className="flex gap-4">
                    <a
                        href="https://linkedin.com/in/rolando-rodriguez-garcia/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline font-medium"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:roolandoorg@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline font-medium"
                    >
                        {t("contact")}
                    </a>
                    <a
                        href="https://github.com/rolando-r"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline font-medium"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    )
}
