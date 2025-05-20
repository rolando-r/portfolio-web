import { useTranslation } from 'react-i18next'

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <p className="mt-4 bg-yellow-100 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-200 px-4 py-2 rounded-lg text-center font-medium shadow-sm">
            {t("footer")}
        </p>
    )
}