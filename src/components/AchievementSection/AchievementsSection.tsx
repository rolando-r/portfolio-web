import { AchievementCard } from ".";
import { useTranslation } from 'react-i18next';
import { achievements } from '../../data/achievements';
import { AchievementIcon } from '../icons';

export const AchievementsSection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-10 px-4 max-w-screen-lg mx-auto">
            <h2 className="flex items-center text-2xl font-bold mb-2 text-zinc-800 dark:text-zinc-100 pb-5">
                <AchievementIcon className="w-7 h-8 mr-2" />
                {t("achievements.title")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
                {achievements.map((item, idx) => (
                    <AchievementCard key={idx} {...item} />
                ))}
            </div>
        </section>
    )
}