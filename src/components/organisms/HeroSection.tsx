import { useTranslation } from "react-i18next";

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center text-center px-4 py-16">
      <img
        src="/photo.webp"
        alt="Rolando"
        className="rounded-full w-32 h-32 object-cover mb-4"
      />
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
      <h1 className="text-4xl font-bold mb-2 text-zinc-800 dark:text-zinc-100">{t("greeting")}</h1>
      <p className="text-gray-600 dark:text-gray-300 max-w-xl mb-6">
        {t("experience")} <span className="font-bold text-blue-600">{t("perfil")}</span> {t("description")}
      </p>
      <div className="flex gap-4 flex-wrap">
        {/* Email button */}
        <a
          href="mailto:roolandoorg@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          role="link"
          className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition 
         bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 
         dark:text-white text-md hover:bg-zinc-900 
         hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 
         dark:hover:text-gray-800 group max-w-fit focus:outline-none focus-visible:outline-none 
         focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
        >
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
            <path d="M3 6l9 6l9 -6" />
            <path d="M15 18h6" />
            <path d="M18 15l3 3l-3 3" />
          </svg>
          {t("contactMe")}
        </a>
        {/* Github button */}
        <a
          href="https://github.com/rolando-r"
          target="_blank"
          rel="noopener noreferrer"
          role="link"
          className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition 
         bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 
         dark:text-white text-md hover:bg-zinc-900 
         hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 
         dark:hover:text-gray-800 group max-w-fit focus:outline-none focus-visible:outline-none 
         focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
        >
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59
              .4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49
              -2.01.37-2.53-.49-2.69-.94
              -.09-.23-.48-.94-.82-1.13
              -.28-.15-.68-.52-.01-.53
              .63-.01 1.08.58 1.23.82
              .72 1.21 1.87.87 2.33.66
              .07-.52.28-.87.51-1.07
              -1.78-.2-3.64-.89-3.64-3.95
              0-.87.31-1.59.82-2.15
              -.08-.2-.36-1.02.08-2.12
              0 0 .67-.21 2.2.82
              .64-.18 1.32-.27 2-.27
              .68 0 1.36.09 2 .27
              1.53-1.04 2.2-.82 2.2-.82
              .44 1.1.16 1.92.08 2.12
              .51.56.82 1.27.82 2.15
              0 3.07-1.87 3.75-3.65 3.95
              .29.25.54.73.54 1.48
              0 1.07-.01 1.93-.01 2.2
              0 .21.15.46.55.38
              A8.013 8.013 0 0 0 16 8
              c0-4.42-3.58-8-8-8z"
            />
          </svg>
          GitHub
        </a>
        {/* LinkedIn button */}
        <a
          href="https://www.linkedin.com/in/rolando-rodriguez-garcia/"
          target="_blank"
          rel="noopener noreferrer"
          role="link"
          className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition 
         bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 
         dark:text-white text-md hover:bg-zinc-900 
         hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 
         dark:hover:text-gray-800 group max-w-fit focus:outline-none focus-visible:outline-none 
         focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
        >
          <svg
            className="size-4"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M8 11l0 5" />
            <path d="M8 8l0 .01" />
            <path d="M12 16l0 -5" />
            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
          </svg>
          LinkedIn
        </a>

      </div>
    </section>
  );
};
