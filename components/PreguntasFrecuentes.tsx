export default function PreguntasFrecuentes() {

    // 1. Aquí escribes tus preguntas y respuestas
    const preguntas = [
        {
            pregunta: "¿Cómo me registro para sacar un turno?",
            respuesta: "AGUS DOWN"
        },
        {
            pregunta: "No he recibido el correo electrónico con el enlace. ¿Qué hago?",
            respuesta: "AGUS DOWN"
        },
        {
            pregunta: "¿Cómo reservar un turno?",
            respuesta: "AGUS DOWN"
        },
        {
            pregunta: "¿La reserva es instantánea o necesito confirmación?",
            respuesta: "AGUS DOWN"
        },
        {
            pregunta: "¿Cómo sé si mi reserva está confirmada?",
            respuesta: "AGUS DOWN"
        },
        {
            pregunta: "¿Cuánto tiempo tengo para dar de baja una reserva?",
            respuesta: "AGUS DOWN"
        },
    ];

    return (
        <section className="relative bg-white py-20 overflow-hidden">

            {/* --- DECORACIÓN DE FONDO (Patrón Izquierda Abajo) --- */}
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 h-full w-1/3 hidden md:block pointer-events-none opacity-20">
                {/* SVG simple para simular las líneas diagonales de tu foto */}
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-full w-full fill-emerald-200">
                    <path d="M0 100 L50 100 L0 50 Z" />
                    <path d="M20 100 L70 100 L0 30 L0 50 Z" />
                </svg>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">

                {/* TÍTULO */}
                <h2 className="text-3xl font-bold text-center text-emerald-500 mb-12">
                    Preguntas frecuentes
                </h2>

                {/* --- LISTA DE PREGUNTAS (ACORDEÓN) --- */}
                <div className="flex flex-col gap-4">

                    {preguntas.map((item, index) => (
                        <div key={index} className="collapse collapse-arrow bg-white border border-gray-100 shadow-sm rounded-lg group">

                            {/* CAMBIO AQUÍ: Usamos 'checkbox' en vez de 'radio' */}
                            {/* Esto permite abrir y cerrar cada una individualmente haciendo clic */}
                            <input type="checkbox" />

                            <div className="collapse-title text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
                                {item.pregunta}
                            </div>

                            <div className="collapse-content text-gray-600 text-sm leading-relaxed">
                                <p className="pt-2 pb-4">{item.respuesta}</p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}