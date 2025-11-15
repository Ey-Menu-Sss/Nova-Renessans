import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);

    const languages = [
        { code: "uz", label: "UZ" },
        { code: "ru", label: "RU" },
        { code: "en", label: "EN" },
    ];

    const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

    const selectLang = (code) => {
        i18n.changeLanguage(code);
        setOpen(false);
    };

    return (
        <div className="relative inline-block">
            <button onClick={() => setOpen(!open)} className="bg-white text-black rounded-[8px] w-[37px] h-[29px] text-[18px] " >
                {currentLang.label}
            </button>


            {/* Меню */}
            {open && (
                <div className="absolute bg-white border rounded-md shadow-md mt-2 w-full">
                    {languages.map(lang => (
                        <button
                            key={lang.code}
                            onClick={() => selectLang(lang.code)}
                            className="block w-full text-left px-2 hover:bg-gray-100"
                        >
                            {lang.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
