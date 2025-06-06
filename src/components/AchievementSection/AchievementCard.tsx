import { useTranslation } from 'react-i18next';

type Props = {
    titleKey: string;
    descriptionKey: string;
    image: string;
}

export const AchievementCard = ({ titleKey, descriptionKey, image }: Props) => {
    const { t } = useTranslation();
    return (
        <div className='max-w-xs bg-white dark:bg-gray-900 shadow-md rounded-2x1 p-4 text-center'>
            <img src={image} alt={t(titleKey)} className='w-16 h-16 mx-auto mb-4'/>
            <h3 className='text-lg font-semibold text-blue-600'>{t(titleKey)}</h3>
            <p className='text-sm text-gray-600 mt-2'>{t(descriptionKey)}</p>
        </div>
    )
}