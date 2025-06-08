import { useTranslation, Trans } from 'react-i18next';

type Props = {
    titleKey: string;
    descriptionKey: string;
    image?: string;
    imageLight?: string;
    imageDark?: string;
    theme: "light" | "dark";
};


export const AchievementCard = ({ titleKey, descriptionKey, image, imageLight, imageDark, theme }: Props) => {
    const { t } = useTranslation();
    const selectedImage = image ?? (theme === "dark" ? imageDark : imageLight);

    return (
        <div className='max-w-xs p-4 text-center'>
            {selectedImage && (
                <img
                    src={selectedImage}
                    alt={t(titleKey)}
                    className='w-22 h-22 mx-auto mb-4 rounded-sm object-contain'
                />
            )}
            <h3 className='text-lg font-bold text-blue-600'>{t(titleKey)}</h3>
            <p className='text-sm text-gray-600 dark:text-zinc-100 mt-2'>
                <Trans
                    i18nKey={descriptionKey}
                    components={{ blue: <span className="text-blue-600 font-semibold" /> }}
                />
            </p>
        </div>
    )
}