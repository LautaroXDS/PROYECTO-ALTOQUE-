import { Search, CalendarCheck, Smile } from "lucide-react";

export default function ComoFunciona() {
    const pasos = [
        {
            icono: Search,
            titulo: "1. Buscá",
            desc: "Encontrá tu cancha favorita filtrando por deporte, ubicación y horario.",
            color: "bg-blue-100 text-blue-600"
        },
        {
            icono: CalendarCheck,
            titulo: "2. Reservá",
            desc: "Elegí tu turno en tiempo real. Sin llamadas ni esperas molestas.",
            color: "bg-emerald-100 text-emerald-600"
        },
        {
            icono: Smile,
            titulo: "3. Jugá",
            desc: "Presentate en el club y disfrutá del partido. ¡Así de simple!",
            color: "bg-orange-100 text-orange-600"
        }
    ];

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-800 mb-4">
                        Tu partido, <span className="text-emerald-500">al toque</span>
                    </h2>
                    <p className="text-lg text-slate-500">Reservar nunca fue tan fácil. Hacelo en 3 pasos.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

                    {/* Línea conectora (Solo visible en PC) */}
                    <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-200 via-emerald-200 to-orange-200 -z-10 border-t-2 border-dashed border-slate-300"></div>

                    {pasos.map((paso, index) => {
                        const Icono = paso.icono;
                        return (
                            <div key={index} className="flex flex-col items-center text-center group">

                                {/* Círculo del Ícono con efecto Hover */}
                                <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 bg-white border-4 border-white ${paso.color.replace('bg-', 'bg-opacity-20 ')}`}>
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${paso.color}`}>
                                        <Icono size={32} />
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-700 mb-3">{paso.titulo}</h3>
                                <p className="text-slate-500 leading-relaxed max-w-xs">{paso.desc}</p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </section>
    );
}