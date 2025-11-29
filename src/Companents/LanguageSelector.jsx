import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
    const { i18n } = useTranslation();

    const languages = [
        { code: "uz", label: "UZ" },
        { code: "ru", label: "RU" },
        { code: "en", label: "EN" },
    ];

    const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

    const selectLang = (code) => {
        i18n.changeLanguage(code);
    };

    return (
        <>
            <div className="md:flex bg-white/5 rounded-full p-1 border border-white/10 backdrop-blur-sm">
                {languages.map(lang => (
                    <button key={lang.code} onClick={() => selectLang(lang.code)}
                        className={` px-4 py-2 rounded-full font-bold text-sm transition-all duration-300 
                        ${lang.code === currentLang.code
                                ? 'bg-[#FCDFAE] text-[#0F1A1A] shadow-sm'
                                : 'text-gray-200  hover:text-white hover:bg-white/5'
                            }`}>
                        {lang.label}
                    </button>
                ))}
            </div>
            {/* <div className="lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-white hover:text-brand-cream p-2 transition-colors focus:outline-none"
                    aria-label="Menu"
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div> */}
        </>




    );
}