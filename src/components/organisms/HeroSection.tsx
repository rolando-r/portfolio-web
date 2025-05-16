import { useTranslation } from "react-i18next";

export const HeroSection = () => {
    const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center text-center px-4 py-16">
      <img
        src="/icons/photo.webp"
        alt="Rolando"
        className="rounded-full w-32 h-32 object-cover mb-4"
      />
      <span className="px-3 py-1 text-sm border border-green-400 text-green-500 rounded-full mb-4">
        {t("buttom")}
      </span>
      <h1 className="text-4xl font-bold mb-2">{t("greeting")}</h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-xl mb-6">
        {t("experience")} <span className="font-bold text-blue-600">{t("perfil")}</span> {t("description")}
      </p>
      <div className="flex gap-4 flex-wrap">
        <button className="border px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition">{t("contactMe")}</button>
        <button className="border px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <img src="/icons/linkedin.svg" className="w-4 h-4" />
          LinkedIn
        </button>
        <button className="border px-4 py-2 rounded-full flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <img src="/icons/github.svg" className="w-4 h-4" />
          GitHub
        </button>
      </div>
    </section>
  );
};
