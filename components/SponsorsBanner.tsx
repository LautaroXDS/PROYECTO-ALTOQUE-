"use client";

export default function SponsorsBanner() {

    // Lista de tus logos
    const logos = [
        { id: 1, src: "/img/nuevez.png", alt: "Green FC" },
        { id: 2, src: "/img/astralis.png", alt: "Grun FC" },
        { id: 3, src: "/img/colon.png", alt: "Al Cubo" },
        { id: 4, src: "/img/river.png", alt: "CCBA" },

        { id: 5, src: "/img/navi.png", alt: "Green FC" },
        { id: 6, src: "/img/real.png", alt: "Grun FC" },
    ];

    return (
        <div className="relative w-full bg-emerald-500 pt-5 pb-10 overflow-hidden">

            {/* --- FONDO DECORATIVO (Patrón Geométrico) --- */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%,transparent_100%)] bg-[length:40px_40px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* TÍTULO */}
                <h3 className="text-center text-white text-xl md:text-2xl font-bold mb-10 drop-shadow-sm underline decoration-white/70">
                    Confían en nosotros
                </h3>

                
                <div className="relative w-full overflow-hidden">

                    <div className="flex items-center gap-0 animate-infinite-scroll w-max">

                        {/* GRUPO 1 DE LOGOS */}
                        {logos.map((logo, index) => (
                            <div key={`original-${index}`} className="flex items-center justify-center w-42 md:w-55">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-30 md:h-36 w-auto object-contain opacity-90 hover:opacity-100 transition"
                                />
                            </div>
                        ))}

                        
                        {logos.map((logo, index) => (
                            <div key={`copia-${index}`} className="flex items-center justify-center w-42 md:w-55">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-30 md:h-36 w-auto object-contain opacity-90 hover:opacity-100 transition"
                                />
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </div>
    );
}