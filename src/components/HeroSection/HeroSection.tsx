import { useTranslation } from "react-i18next";
import { Avatar, ContactButton } from '.';
import { EmailIcon, GithubIcon, LinkedInIcon } from '../icons';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center text-center px-4 py-16">
      <Avatar />
      <div className="snake-button mb-4">
        <a
          href="https://www.linkedin.com/in/rolando-rodriguez-garcia/"
          className="snake-button-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("buttom")}
        </a>
      </div>

      <h1 className="text-4xl font-bold mb-2 text-zinc-800 dark:text-zinc-100">
        {t("greeting")}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-xl mb-6">
        {t("experienceYears")} <span className="font-bold text-blue-600">{t("perfil")}</span> {t("description")}
      </p>

      <div className="flex gap-4 flex-wrap">
        <ContactButton
          href="mailto:roolandoorg@gmail.com"
          icon={<EmailIcon />}
          label={t("contactMe")}
        />
        <ContactButton
          href="https://github.com/rolando-r"
          icon={<GithubIcon />}
          label="GitHub"
        />
        <ContactButton
          href="https://www.linkedin.com/in/rolando-rodriguez-garcia/"
          icon={<LinkedInIcon />}
          label="LinkedIn"
        />
      </div>
    </section>
  );
};
