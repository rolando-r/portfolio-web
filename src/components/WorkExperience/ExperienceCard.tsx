import { FC } from "react";

interface ExperienceCardProps {
  title: string;
  company: string;
  date: string;
  description: string;
  isLast?: boolean;
}

const ExperienceCard: FC<ExperienceCardProps> = ({
  title,
  company,
  date,
  description,
  isLast = false,
}) => {
  return (
    <div className="flex relative">
      {!isLast && (
        <div className="absolute left-2 top-2 w-px h-full bg-gray-300 z-0" />
      )}

      <div className="relative z-10 flex flex-col items-center mr-4 pl-2">
        <div className="w-2 h-2 bg-blue-600 rounded-full mt-7 -ml-1" />
      </div>

      <div className="pb-8 flex flex-col lg:flex-row w-full gap-2 lg:gap-6">
        <div className="w-full lg:w-64">
          <h3 className="text-xl text-blue-600 font-bold">{title}</h3>
          <p className="text-zinc-800 dark:text-zinc-300 font-bold">{company}</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-50 font-medium">{date}</p>
        </div>
        <div className="flex-1">
          <p className="mt-2 text-zinc-800 dark:text-zinc-100">{description}</p>
        </div>
      </div>
    </div>



  );
};

export default ExperienceCard;
