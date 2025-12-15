import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./additional/revial";

export const Certificates = () => {
    const [index, setIndex] = useState(0);
    const [perPage, setPerPage] = useState(4);

    const certificates = [
        "/image/itparkt.jpg",
        "/image/itparkt.jpg",
        "/image/itparkt.jpg",
        "/image/itparkt.jpg",
        "/image/itparkt.jpg",
        "/image/itparkt.jpg",
        "/image/itparkt.jpg",
        "/image/itparkt.jpg",
        "/image/itparkt.jpg",
        "/image/itparkt.jpg",
        "/image/itparkt.jpg",
        "/image/itparkt.jpg",
    ];

    // responsive
    useEffect(() => {
        const resize = () => {
            if (window.innerWidth < 640) setPerPage(1);
            else if (window.innerWidth < 1024) setPerPage(2);
            else setPerPage(4);
        };
        resize();
        window.addEventListener("resize", resize);
        return () => window.removeEventListener("resize", resize);
    }, []);

    const next = () =>
        setIndex((i) => (i >= certificates.length - perPage ? 0 : i + 1));

    const prev = () =>
        setIndex((i) => (i === 0 ? certificates.length - perPage : i - 1));

    return (
        <section id="certificates" className="relative">

            <Reveal delay={0.3}>
                <div className=" overflow-hidden">
                    <div className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${index * (100 / perPage)}%)` }}>
                        {certificates.map((src, i) => (
                            <div key={i} className="flex-shrink-0 px-3" style={{ width: `${80 / perPage}%` }}>
                                <div className="bg-white p-2 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all h-full group">
                                    <div className="aspect-[1.4/1] overflow-hidden rounded-lg relative">
                                        <img src={src} alt="certificate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>


            <Reveal delay={0.4}>
                <div className="flex items-center justify-center gap-6 mt-12">
                    <button onClick={prev} className="w-12 h-12 rounded-full flex items-center justify-center text-gray-300 hover:text-black hover:text-brand-blue hover:bg-brand-blue/10 transition" >
                        <ChevronLeft size={40} strokeWidth={1.5} />
                    </button>

                    <button onClick={next} className="w-12 h-12 rounded-full flex items-center justify-center text-gray-300 hover:text-black hover:text-brand-blue hover:bg-brand-blue/10 transition" >
                        <ChevronRight size={40} strokeWidth={1.5} />
                    </button>
                </div>
            </Reveal>

        </section>
    );
};
