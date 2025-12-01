import Link from "next/link";

export default function CTASection() {
    return (
        <section className="relative bg-white py-20 md:py-28 overflow-hidden">

            {/* --- FONDO DECORATIVO (Patrón Tech a la derecha) --- */}
            {/* Esto dibuja los puntitos y las líneas diagonales verdes suaves */}
            <div className="absolute top-0 right-0 h-full w-1/2 hidden md:block pointer-events-none">
                <svg
                    className="absolute right-0 top-0 h-full w-full text-emerald-50 opacity-50"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    {/* Patrón de Puntos */}
                    <pattern id="dots" x="0" y="0" width="0.1" height="0.1">
                        <circle cx="0.05" cy="0.05" r="0.015" className="fill-emerald-200" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#dots)" />

                    {/* Líneas Diagonales Decorativas */}
                    <path d="M50 100 L100 50 L100 100 Z" className="fill-emerald-100/50" />
                    <path d="M70 100 L100 70 L100 85 L85 100 Z" className="fill-emerald-200/50" />
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* --- COLUMNA IZQUIERDA (Texto) --- */}
                <div className="max-w-xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-600 leading-tight mb-6">
                        ¿Quieres probar <span className="text-orange-400">MI VERGA</span> en tu complejo deportivo?
                    </h2>

                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Te mostramos los beneficios de tener un canal online para gestionar tu club que permite a los usuarios reservar online.
                    </p>

                    <p className="text-lg text-gray-600 leading-relaxed">
                        Dejanos tus datos de contacto así podemos ponernos en contacto contigo.
                    </p>
                </div>

                {/* --- COLUMNA DERECHA (Botones) --- */}
                <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-end">

                    {/* Botón Sólido */}
                    <Link href="/funcionalidades" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-8 rounded-lg shadow-md transition text-center uppercase text-sm tracking-wide">
                        Ver Funcionalidades
                    </Link>

                    {/* Botón Borde (Outline) */}
                    <Link href="/precios" className="border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-50 font-bold py-4 px-8 rounded-lg transition text-center uppercase text-sm tracking-wide">
                        Ver Planes y Precios
                    </Link>

                </div>

            </div>
        </section>
    );
}