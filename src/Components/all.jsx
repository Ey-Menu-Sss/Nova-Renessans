import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import Partners from "./partners";
import CountUp from "./additional/CountUp";
import Cards from "../meta-data/cardsData";

const BOT_TOKEN = "8529319150:AAH7QpRm1DBHoL9V8i6d69X3V9UNqsR7tAA";
const CHAT_ID = "-1003451614735";

export default function All() {
  const {
    homeRef,
    aboutRef,
    certificatesRef,
    servicesRef,
    contactRef,
    portfolioRef,
  } = useOutletContext();
  const { t } = useTranslation();

  //  отправка к телеграму
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const company = e.target.company.value;
    const message = e.target.message.value;
    const file = e.target.file.files[0]; // <-- файл

    const text = `
        📩 *Yangi xabar!*
        👤 *Ism:* ${name}
        📧 *Email:* ${email}
        🏢 *Kompaniya:* ${company}
        💬 *Xabar:* ${message}
        `;

    try {
      const formData = new FormData();
      formData.append("chat_id", CHAT_ID);
      formData.append("caption", text);
      formData.append("parse_mode", "Markdown");

      if (file) {
        formData.append("document", file); // <-- отправляем любой файл
      }

      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendDocument`, {
        method: "POST",
        body: formData,
      });

      alert("✅ Xabaringiz muvaffaqiyatli yuborildi!");
      e.target.reset();
    } catch (error) {
      console.error("Xatolik:", error);
      alert("❌ Xabar yuborishda xatolik yuz berdi!");
    }
  };

  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div>
      <section id="hero" ref={homeRef} className="bg-[#163133] h-screen">
        <div className="relative flex flex-col md:flex-row justify-center md:justify-between space-y-2 items-start md:items-center h-full pt-[100px] max-w-[1300px] mx-auto px-[30px] md:px-5 lg:px-6 2xl:px-2 text-white bg-[url('/image/HopeImg.webp')] bg-cover bg-center bg-no-repeat md:bg-none before:absolute before:inset-0 before:bg-black/60 md:before:bg-transparent  before:z-0">
          <div className="relative z-10 space-y-[10px] md:space-y-[36px] flex flex-col justify-center items-start">
            <h1 className="max-w-[690px] text-[35px] md:text-[42px] xl:text-[49px] font-semibold leading-tight">
              {t("hero.title")}
            </h1>

            <p className="max-w-[710px] text-[20px] md:text-[24px] leading-snug">
              {t("hero.description")}
            </p>

            <button
              className="
                inline-flex items-center justify-center
                rounded-full px-6 py-2 text-xl
                border-2 border-transparent
                cursor-pointer
                bg-[#FAD28C] text-black
                transition-colors
                hover:border-[#FAD28C]
                hover:bg-[#163133]
                hover:text-[#FAD28C]
  "
            >
              {t("hero.cta")}
            </button>

            <div className="border-t border-[#FAD28C]/15 w-[335px] md:w-[600px] xl:w-[700px]"></div>

            <div className="flex w-[350px] md:w-[400px] gap-[36px] text-[#FAD28C]">
              <div className="space-y-[4px] md:space-y-[16px] flex flex-col justify-center items-center">
                <div className="flex items-center">
                  <CountUp
                    from={90}
                    to={100}
                    direction="up"
                    duration={1}
                    className="count-up-text font-semibold md:text-[38px] text-[34px]"
                  />
                  <span className="font-semibold md:text-[38px] text-[34px]">
                    +
                  </span>
                </div>
                <p className="md:text-[20px] text-[15px] leading-[1.1]">
                  {t("hero.clients")}
                </p>
              </div>

              <div className="space-y-[4px] md:space-y-[16px] flex flex-col justify-center items-center">
                <div className="flex items-center">
                  <CountUp
                    from={98}
                    to={99.9}
                    decimals={1}
                    duration={1.5}
                    className="font-semibold md:text-[38px] text-[34px]"
                  />
                  <span className="font-semibold md:text-[38px] text-[34px]">
                    %
                  </span>
                </div>
                <p className="md:text-[20px] text-[15px] leading-[1.1]">
                  {t("hero.uptime")}
                </p>
              </div>

              <div className="space-y-[4px] md:space-y-[16px] flex flex-col justify-center items-center">
                <div className="flex items-center space-x-2 font-semibold md:text-[38px] text-[34px]">
                  <CountUp from={16} to={24} duration={1.5} />
                  <span>/</span>
                  <CountUp from={6} to={7} duration={1.5} />
                </div>
                <p className="md:text-[20px] text-[15px] leading-[1.1]">
                  {t("hero.support")}
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 md:relative md:w-[512px] md:h-[700px] rounded-2xl md:overflow-visible">
            <img
              src="/image/HopeImg.webp"
              className="hidden md:block w-full h-[550px] md:h-[660px] xl:h-[670px]  object-cover rounded-4xl"
            />

            <div className="md:absolute md:left-[-60px] bottom-[60px] bg-white/5 backdrop-blur-md w-[166px] md:w-[214px] h-[147px] md:h-[222px] border border-[#E8E8E880] text-white p-4 rounded-xl flex items-center gap-3">
              <div className="flex flex-col justify-between items-start h-full">
                <div className="flex -space-x-2">
                  <img
                    src="/logo/part.svg"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="/logo/parf.svg"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                  <img
                    src="/logo/paro.svg"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                </div>
                <div className="space-y-5">
                  <p className="text-[31px] md:text-[49px] font-semibold">3+</p>
                  <p className="md:text-[18px] w-[148px] font-medium">
                    Business partners
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className=" ">
        <section id="partners" className=" ">
          <Partners />
        </section>

        <section
          ref={aboutRef}
          id="AboutUs"
          className="max-w-[1440px]  mx-auto space-y-[40px] my-[80px] px-[20px] md:px-4 lg:px-3 2xl:px-0 "
        >
          <div className="space-y-4 items-center justify-center flex flex-col text-center">
            <button className="rounded-full text-[#579094] font-medium border border-[#579094] flex w-[220px] h-[50px] md:h-[55px] text-center justify-center items-center">
              <li className="text-2xl  ml-4 "> {t("aboutSection.badge")}</li>
            </button>

            <h1 className=" font-semibold text-[28px] md:text-4xl w-[335px] md:w-[560px]">
              {t("aboutSection.title")}
            </h1>
            <p className="text-xl w-[335px] md:w-[600px] lg:w-[800px]">
              {t("aboutSection.subtitle")}
            </p>
            {/* <Link to="/aboutus" className="rounded-full bg-[#FAD28C] hover:bg-white hover:border-2 hover:border-[#FAD28C] hover:text-[#FAD28C]  flex gap-3 w-[137px] md:w-[147px] h-[52px] text-center justify-center items-center text-[18px]">
                            {t("portfolioSection.cta")}
                        </Link> */}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-[20px] xl:gap-[49px]">
            <div className="flex flex-col space-y-[30px] md:space-y-0 md:justify-between  md:h-[550px] w-[290px] md:w-[220px] xl:w-[260px]">
              <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left">
                <div className="hover:bg-[#fcf3e2] hover:rounded-2xl">
                  <img src="/icn/eosicn.png" className="w-[54px] h-[54px]" />
                </div>
                <div className="space-y-[8px] ">
                  <h1 className="font-medium text-xl">
                    {t("aboutSection.features.0.title")}
                  </h1>
                  <p className="text-lg">{t("aboutSection.features.0.body")}</p>
                </div>
              </div>

              <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left w-[270px]  md:w-[220px] xl:w-[260px]">
                <div className="hover:bg-[#fcf3e2] hover:rounded-2xl">
                  <img
                    src="/icn/monitorMobi.png"
                    className="w-[54px] h-[54px]"
                  />
                </div>
                <div className="space-y-[8px]">
                  <h1 className="font-medium text-xl">
                    <Trans i18nKey="aboutSection.features.1.title">
                      <br className="hidden md:block" />
                    </Trans>
                  </h1>
                  <p className="text-lg">
                    <Trans i18nKey="aboutSection.features.1.body">
                      <br className="hidden md:block" />
                    </Trans>
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-4xl group">
              <img
                src="/image/AboutImg.webp"
                className="h-[335px] md:h-[587px] w-[335px] md:w-[444px] rounded-2xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col space-y-[30px] md:space-y-0 md:justify-between md:h-[550px]">
              <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left   w-[290px] md:w-[220px] xl:w-[260px]">
                <img
                  src="/icn/calendarTime.png"
                  className="w-[54px] h-[54px]"
                />
                <div className="space-y-[8px]">
                  <h1 className="font-medium text-xl">
                    {" "}
                    {t("aboutSection.features.2.title")}{" "}
                  </h1>
                  <p className="text-lg">
                    {t("aboutSection.features.2.body")}{" "}
                  </p>
                </div>
              </div>

              <div className="space-y-[12px] flex flex-col items-center md:items-start text-center md:text-left  w-[270px] md:w-[220px] xl:w-[260px]">
                <img
                  src="/icn/mobileBrowser.png"
                  className="w-[54px] h-[54px]"
                />
                <div className="space-y-[8px]">
                  <h1 className="font-medium text-xl">
                    {t("aboutSection.features.3.title")}{" "}
                  </h1>
                  <p className="text-lg">{t("aboutSection.features.3.body")}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section ref={servicesRef} id="Services" className=" bg-[#F2F2F2] py-2">
          <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center space-y-[70px] my-[40px]  ">
            <div className="space-y-4 items-center justify-center flex flex-col text-center ">
              <button className="rounded-full text-[#579094] font-medium border border-[#579094] flex w-[220px] h-[50px] md:h-[55px] text-center justify-center items-center">
                <li className="text-2xl  ml-4 ">
                  {" "}
                  {t("servicesSection.badge")}
                </li>
              </button>
              <p className="font-semibold text-[28px] md:text-4xl w-[335px] md:w-[560px]">
                {t("servicesSection.description")}{" "}
              </p>
            </div>
            <Cards />
          </div>
        </section>

        <section ref={portfolioRef} id="Porfolio" className="flex items-center">
          <div className=" max-w-[1300px] mx-auto flex flex-col items-center justify-center my-[20px] md:my-[70px] space-y-2 md:space-y-4 px-[10px] md:px-2 lg:px-3 2xl:px-0">
            <button className="rounded-full text-[#579094] font-medium border border-[#579094] flex w-[220px] h-[50px] md:h-[55px] text-center justify-center items-center">
              <li className="text-2xl  ml-4 ">{t("portfolioSection.badge")}</li>
            </button>
            <h1 className="font-semibold text-[24px] md:text-4xl  text-center  md:w-[440px]">
              {t("portfolioSection.title")}
            </h1>
            <p className=" text-center text-[16px] md:text-xl w-[335px] md:w-[700px]">
              {t("portfolioSection.description")}
            </p>
            {/* <Link to="/portfolio" className="rounded-full bg-[#FAD28C] hover:bg-white hover:border-2 hover:border-[#FAD28C] hover:text-[#FAD28C] flex w-[137px] md:w-[147px] h-[52px] text-center justify-center items-center text-[18px]">
                            {t("portfolioSection.cta")}
                        </Link> */}

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
              <a
                href="https://logistx.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="group border border-[#0349A71A] hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden  ">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src="/image/LogistX.png"
                      className="w-[591px] sm:w-[681px] md:w-[695px] h-[200px] sm:h-[295px] md:h-[364px] rounded-xl transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-between items-center m-2">
                    <div className="flex flex-col items-start space-y-2">
                      <h1 className="font-bold text-2xl">
                        {t("portfolioSection.projects.0.title")}
                      </h1>
                      <p className="text-[#8D8D8D] text-base">
                        {t("portfolioSection.projects.0.body")}
                      </p>
                    </div>
                    <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
                  </div>
                </div>
              </a>

              <a
                href="https://bepulgps.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="group border border-[#0349A71A] hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden ">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src="/image/BepulGPS.png"
                      className="w-[591px] sm:w-[681px]  md:w-[695px] h-[200px] sm:h-[295px] md:h-[364px] rounded-xl transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-between items-center m-2">
                    <div className="flex flex-col items-start space-y-2">
                      <h1 className="font-bold text-2xl">
                        {t("portfolioSection.projects.1.title")}
                      </h1>
                      <p className="text-[#8D8D8D] text-base">
                        {t("portfolioSection.projects.1.body")}
                      </p>
                    </div>
                    <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
                  </div>
                </div>
              </a>

              <a
                href="https://xmed.uz/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="group border border-[#0349A71A] hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden hidden lg:block">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src="/image/Xmed.png"
                      className="w-[591px] sm:w-[681px]  md:w-[695px] h-[200px] sm:h-[295px] md:h-[364px] rounded-xl transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex justify-between items-center m-2">
                    <div className="flex flex-col items-start space-y-2">
                      <h1 className="font-bold text-2xl">
                        {t("portfolioSection.projects.2.title")}
                      </h1>
                      <p className="text-[#8D8D8D] text-base">
                        {t("portfolioSection.projects.2.body")}
                      </p>
                    </div>
                    <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section
          ref={contactRef}
          id="Contact"
          className="bg-[#F2F2F2] h-full flex flex-col justify-center items-center"
        >
          <div className="max-w-[1300px] mx-auto flex flex-col xl:flex-row items-center justify-center md:justify-between md:w-full py-8 px-[4px] space-y-[20px] xl:space-y-0">
            <div className="flex flex-col justify-between gap-[20px] md:gap-[60px] h-full ">
              <Header
                badge={t("contactSection.badge")}
                title={t("contactSection.title")}
                desc={t("contactSection.description")}
              />
              <div className="space-y-4 flex flex-col items-start w-full">
                {/* Location */}
                <a
                  href="https://www.google.com/maps/search/Tashkent+city+Mirabad+district+st.+Sarbon+32A/@41.3260143,69.254832,13z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white rounded-3xl flex items-center gap-4 px-6 py-4 hover:shadow-md transition-shadow"
                >
                  <img src="/icn/location.png" className="w-8 h-8" />
                  <p className="text-[#8D8D8D] font-medium text-sm md:text-lg">
                    Tashkent city Mirabad district st. Magtymguly
                  </p>
                </a>

                {/* Phone */}
                <a
                  href="tel:+998755565656"
                  className="w-full bg-white rounded-3xl flex items-center gap-4 px-6 py-4 hover:shadow-md transition-shadow"
                >
                  <img src="/icn/phone.png" className="w-8 h-8" />
                  <p className="text-[#8D8D8D] font-medium text-sm md:text-lg">
                    +998(75) 556-56-56
                  </p>
                </a>

                <a
                  href="https://info.tenzorsoft@gmail.com"
                  className="w-full bg-white rounded-3xl flex items-center gap-4 px-6 py-4 hover:shadow-md transition-shadow"
                >
                  <img src="/icn/email.png" className="w-8 h-8" />
                  <p className="text-[#8D8D8D] font-medium text-sm md:text-lg">
                    contact@techsolution.com
                  </p>
                </a>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="w-full max-w-xl space-y-4 rounded-3xl bg-white p-6 shadow-xl py-8"
            >
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <Input
                  label={t("contactSection.form.nameLabel")}
                  name="name"
                  placeholder={t("contactSection.form.namePlaceholder")}
                />
                <Input
                  label={t("contactSection.form.emailLabel")}
                  name="email"
                  placeholder={t("contactSection.form.emailPlaceholder")}
                />
              </div>
              <Input
                label={t("contactSection.form.companyLabel")}
                name="company"
                placeholder={t("contactSection.form.companyPlaceholder")}
              />
              <Textarea
                label={t("contactSection.form.messageLabel")}
                name="message"
                placeholder={t("contactSection.form.messagePlaceholder")}
              />

              <label className="flex cursor-pointer items-center gap-3 rounded-lg border p-3 text-gray-500">
                <img src="/icn/upload.png" className="h-5 w-5" />
                <span className="truncate">{fileName || "Выбрать файл"}</span>
                <input
                  type="file"
                  name="file"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </label>

              <button className="min-h-[52px] w-full rounded-full outline-[#579094] bg-[#579094] text-white transition hover:bg-white hover:text-[#579094]  hover:ring-[#579094]">
                {t("contactSection.submit")}
              </button>
            </form>
          </div>
        </section>
        <section
          ref={certificatesRef}
          id="Certificats"
          className="  space-y-[60px] md:space-y-5 my-[70px] px-[20px] md:px-2 lg:px-3 2xl:px-0"
        >
          <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center  space-y-3.5 mb-[60px]">
            <button className="rounded-full text-[#579094] font-medium border border-[#579094] flex w-[220px] h-[50px] md:h-[55px] text-center justify-center items-center">
              <li className="text-2xl  ml-4 ">
                {t("certificateSection.badge")}
              </li>
            </button>
            <h1 className=" font-bold text-[24px] md:text-4xl text-center">
              {t("certificateSection.title")}
            </h1>
            <p className="text-center text-[16px] md:text-xl w-[295px] md:w-[690px] ">
              {t("certificateSection.description")}
            </p>
          </div>

          <div className="flex justify-center items-center ">
            <img
              src="./image/itparkt.jpg"
              className="w-[400px] h-[300px] rounded-2xl border border-gray-300"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Header({ badge, title, desc }) {
  return (
    <div className="mx-auto max-w-xl space-y-4 text-center">
      <span className="inline-flex items-center justify-center gap-2 rounded-full border px-6 py-2 text-[#579094]">
        <span className="text-2xl leading-none">•</span>
        {badge}
      </span>

      <h2 className="text-3xl font-semibold">{title}</h2>
      {desc && <p className="text-lg text-gray-600">{desc}</p>}
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Input({ label, name, placeholder }) {
  const isHalf = ["name", "email"].includes(name);
  return (
    <div className={isHalf ? "flex-1" : "w-full"}>
      <label className="mb-2 block text-lg">{label}</label>
      <input
        name={name}
        required
        className="w-full rounded-lg border px-4 py-2 border-gray-300 focus:outline-none  focus:ring-2 focus:ring-[#579094]"
        placeholder={placeholder}
      />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Textarea({ label, name, placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-lg">{label}</label>
      <textarea
        name={name}
        rows={4}
        required
        className="w-full rounded-lg border px-4 py-2 border-gray-300 focus:outline-none  focus:ring-2 focus:ring-[#579094]"
        placeholder={placeholder}
      />
    </div>
  );
}
