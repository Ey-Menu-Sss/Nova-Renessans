import { useTranslation } from "react-i18next";
import { useTheme } from "../contexts/ThemeProvider";
export default function PortfolioProjects() {
  const { t } = useTranslation();

  const { darkMode } = useTheme();
  const data = [
    {
      href: "https://logistx.uz",
      title: t("portfolioSection.projects.0.title"),
      body: t("portfolioSection.projects.0.body"),
      img: "/image/LogistX.png",
    },
    {
      href: "https://bepulgps.uz",
      title: t("portfolioSection.projects.1.title"),
      body: t("portfolioSection.projects.1.body"),
      img: "/image/BepulGPS.png",
    },
  ];
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
      {data.map((d) => {
        return (
          <a
            key={d.title}
            href={d.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div
              className={`group border border-[#0349A71A] hover:shadow-xl rounded-2xl p-4 space-y-[20px] overflow-hidden ${
                darkMode
                  ? "bg-gray-300 text-[#121212]"
                  : "bg-white hover:shadow-gray-300 "
              }`}
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={d.img}
                  className="w-[591px] sm:w-[681px] md:w-[695px] h-[200px] sm:h-[295px] md:h-[364px] rounded-xl transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-center m-2">
                <div className="flex flex-col items-start space-y-2">
                  <h1 className="font-bold text-2xl">{d.title}</h1>
                  <p className="text-[#8D8D8D] text-base">{d.body}</p>
                </div>
                <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
}
