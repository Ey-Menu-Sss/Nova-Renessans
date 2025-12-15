import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { i18n } = useTranslation();

  const languages = [
    { code: "uz", label: "UZ" },
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
  ];
  

  const activeIndex = languages.findIndex((l) => l.code === i18n.language);

  const currentIndex = activeIndex === -1 ? 0 : activeIndex;

  return (
    <div className="relative inline-flex rounded-full bg-white/5 p-1 backdrop-blur-sm border border-white/10">
      <span
        className="absolute top-1 bottom-1 left-1 rounded-full bg-[#FCDFAE] transition-transform duration-300 ease-out"
        style={{
          width: "50px",
          transform: `translateX(${currentIndex * 100}%)`,
        }}
      />

      {languages.map((lang) => {
        const isActive = lang.code === i18n.language;

        return (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`relative z-10 px-4 py-2 max-w-[50px] text-sm font-bold rounded-full cursor-pointer
              ${isActive
                ? "text-[#0F1A1A]"
                : "text-gray-200 hover:text-white"
              }
            `}
          >
            {lang.label}
          </button>
        );
      })}
    </div>
  );
}
