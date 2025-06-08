import { useTranslation, Trans } from "react-i18next";
import ExperienceCard from "./ExperienceCard";
import { PortfolioIcon } from "../icons";

export const WorkExperience = () => {
  const { t } = useTranslation();
  const experiences = t("workExperience.jobs", { returnObjects: true });

  return (
    <section id="experience" className="py-10 px-4 max-w-screen-lg mx-auto">
      <h2 className="flex items-center text-2xl font-bold mb-2 text-zinc-800 dark:text-zinc-100 pb-5">
        <PortfolioIcon className="w-7 h-8 mr-2" />
        {t("workExperience.title")}
      </h2>
      <div>
        {Array.isArray(experiences) &&
          experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              index={index}
              title={exp.title}
              company={exp.company}
              date={exp.date}
            />
          ))}
      </div>
    </section>
  );
};