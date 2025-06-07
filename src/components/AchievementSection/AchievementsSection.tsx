import { AchievementCard } from ".";
import { useTranslation } from 'react-i18next';
import { achievements } from '../../data/achievements';
import { AchievementIcon } from '../icons';
import { useThemeContext } from '@/context/ThemeContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export const AchievementsSection = () => {
    const { t } = useTranslation();
    const { resolvedTheme } = useThemeContext();
    const [cardsPerView, setCardsPerView] = useState(2);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateCardsPerView = () => {
            setCardsPerView(window.innerWidth < 640 ? 1 : 2);
        };
        updateCardsPerView();
        window.addEventListener("resize", updateCardsPerView);
        return () => window.removeEventListener("resize", updateCardsPerView);
    }, []);

    const extended = [
        ...achievements.slice(-cardsPerView),
        ...achievements,
        ...achievements.slice(0, cardsPerView),
    ];

    const startIndex = cardsPerView;
    const totalSlides = extended.length;

    useEffect(() => {
        setCurrentIndex(startIndex);
    }, [cardsPerView]);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev - 1);
    };

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
        if (currentIndex >= achievements.length + cardsPerView) {
            setCurrentIndex(startIndex);
            sliderRef.current!.style.transition = 'none';
            sliderRef.current!.style.transform = `translateX(-${startIndex * (100 / totalSlides)}%)`;
            void sliderRef.current!.offsetHeight;
            sliderRef.current!.style.transition = '';
        }
        if (currentIndex <= 0) {
            const endIndex = achievements.length;
            setCurrentIndex(endIndex);
            sliderRef.current!.style.transition = 'none';
            sliderRef.current!.style.transform = `translateX(-${endIndex * (100 / totalSlides)}%)`;
            void sliderRef.current!.offsetHeight;
            sliderRef.current!.style.transition = '';
        }
    };

    return (
        <section className="py-10 px-4 max-w-screen-lg mx-auto relative">
            <h2 className="flex items-center text-2xl font-bold mb-2 text-zinc-800 dark:text-zinc-100 pb-5">
                <AchievementIcon className="w-7 h-8 mr-2" />
                {t("achievements.title")}
            </h2>

            <div className="relative w-full overflow-hidden">
                <div
                    ref={sliderRef}
                    className="flex transition-transform duration-500 ease-in-out items-center"
                    onTransitionEnd={handleTransitionEnd}
                    style={{
                        transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
                        width: `${(100 / cardsPerView) * totalSlides}%`,
                    }}
                >
                    {extended.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 flex justify-center px-4 box-border"
                            style={{ width: `${100 / totalSlides}%` }}
                        >
                            <div className="max-w-xs w-full">
                                <AchievementCard {...item} theme={resolvedTheme} />
                            </div>
                        </div>
                    ))}
                </div>


                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-full z-10"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-white hover:text-blue-600" />
                </button>

                <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-full z-10"
                >
                    <ChevronRight className="w-6 h-6 text-gray-700 dark:text-white hover:text-blue-600" />
                </button>
            </div>
        </section>
    );
};
