import { useTranslation } from "react-i18next";

function Porfolio() {
  const { t } = useTranslation();
  return (

    <div className='space-y-[30px] mb-10'>
      <div className='h-[99px] bg-[#163133]'>

      </div>
     <div className='flex items-center justify-center'>
       <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 ">
        <div className="group w-[335px] md:w-[467px] h-[614px]  md:h-[858px] border border-gray-50 shadow-lg hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden  ">
          <div className="overflow-hidden rounded-xl">
            <img src="/image/portfolioone.png" className="w-[335px] md:w-[427px] h-[480px] md:h-[726px] rounded-xl transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="flex justify-between items-center m-2">
            <div className="flex flex-col items-start space-y-2">
              <h1 className="font-bold text-[24px]">
                {t("portfolioSection.projects.0.title")}
              </h1>
              <p className="text-[#D7D7D7] text-[20px]">
                Website
              </p>
            </div>
            <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
          </div>
        </div>

        <div className="group w-[335px] md:w-[467px] h-[614px]  md:h-[858px] border border-gray-50 shadow-lg hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden  ">
          <div className="overflow-hidden rounded-xl">
            <img src="/image/portfoliotwo.png" className="w-[427px] h-[480px] md:h-[726px] rounded-xl transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="flex justify-between items-center m-2">
            <div className="flex flex-col items-start space-y-2">
              <h1 className="font-bold text-[24px]">
                {t("portfolioSection.projects.0.title")}
              </h1>
              <p className="text-[#D7D7D7] text-[20px]">
                Website
              </p>
            </div>
            <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
          </div>
        </div>

        <div className="group w-[335px] md:w-[467px] h-[614px] md:h-[858px] border border-gray-50 shadow-lg hover:shadow-xl hover:shadow-gray-300 rounded-2xl p-4 bg-white space-y-[20px] overflow-hidden  ">
          <div className="overflow-hidden rounded-xl">
            <img src="/image/portfoliothre.png" className="w-[427px] h-[480px] md:h-[726px] rounded-xl transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div className="flex justify-between items-center m-2">
            <div className="flex flex-col items-start space-y-2">
              <h1 className="font-bold text-[24px]">
                {t("portfolioSection.projects.0.title")}
              </h1>
              <p className="text-[#D7D7D7] text-[20px]">
                Website
              </p>
            </div>
            <i className="bi bi-arrow-up-right text-[#8D8D8D] text-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[45deg] group-hover:text-[#0349A7]"></i>
          </div>
        </div>

      </div>
     </div>
    </div>
  )
}

export default Porfolio