import { Plus, Edit2, Zap, Shield } from "lucide-react";

export default function MisCanchasPage() {

    // MODIFICAR CON LA BASE DE DATOSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
    const canchas = [
        {
            id: 1,
            nombre: "Cancha 1",
            deporte: "Futbol",
            tipo: "F5",
            superficie: "Sintético",
            precio: 35000,
            estado: "activa", // activa | mantenimiento
            imagen: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2070&auto=format&fit=crop",
            features: ["Techada", "Iluminación LED"]
        },
        {
            id: 2,
            nombre: "Cancha de padel",
            deporte: "Padel",
            tipo: "Dobles",
            superficie: "Alfombra",
            precio: 28000,
            estado: "activa",
            imagen: "https://images.unsplash.com/photo-1626248316972-277121669460?q=80&w=2070&auto=format&fit=crop",
            features: ["Blindex", "Outdoor"]
        },
        {
            id: 3,
            nombre: "Cancha 3 - El Potrero",
            deporte: "Futbol",
            tipo: "F7",
            superficie: "Césped Natural",
            precio: 42000,
            estado: "mantenimiento", // Esta aparecerá diferente
            imagen: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2070&auto=format&fit=crop",
            features: ["Iluminación"]
        },
    ];

    return (
        <div className="space-y-8">

            {/* --- ENCABEZADO --- */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Mis Canchas</h1>
                    <p className="text-slate-500 text-sm">Administrá los precios y características de tus espacios.</p>
                </div>

                <button className="btn btn-emerald-600 text-white hover:bg-emerald-700 shadow-md border-none">
                    <Plus size={20} />
                    Agregar Cancha
                </button>
            </div>

            {/* --- GRILLA DE TARJETAS --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {canchas.map((cancha) => (
                    <div key={cancha.id} className="card bg-white shadow-sm border border-slate-200 hover:shadow-md transition duration-300 overflow-hidden group">

                        {/* 1. FOTO DE LA CANCHA */}
                        <figure className="relative h-48 w-full">
                            <img
                                src={cancha.imagen}
                                alt={cancha.nombre}
                                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                            />
                            {/* Badge de Deporte Flotante */}
                            <div className="absolute top-3 left-3">
                                <span className={`badge border-none text-white font-bold py-3 ${cancha.deporte === 'Futbol' ? 'bg-emerald-500' : 'bg-blue-500'
                                    }`}>
                                    {cancha.deporte} {cancha.tipo}
                                </span>
                            </div>

                            {/* Overlay si está en mantenimiento */}
                            {cancha.estado === 'mantenimiento' && (
                                <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center backdrop-blur-[2px]">
                                    <span className="badge badge-error gap-2 py-3 px-4 font-bold text-white">
                                        <Shield size={16} /> En Reparación
                                    </span>
                                </div>
                            )}
                        </figure>

                        {/* 2. DETALLES */}
                        <div className="card-body p-5">

                            <div className="flex justify-between items-start">
                                <h2 className="card-title text-slate-800 text-lg">{cancha.nombre}</h2>
                                <div className="dropdown dropdown-end">
                                    <button tabIndex={0} className="btn btn-square btn-ghost btn-sm text-slate-400">
                                        <Edit2 size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Características (Tags) */}
                            <div className="flex flex-wrap gap-2 mt-2">
                                <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-md font-medium border border-slate-200">
                                    {cancha.superficie}
                                </span>
                                {cancha.features.map((feat, i) => (
                                    <span key={i} className="text-xs bg-emerald-50 text-emerald-600 px-2 py-1 rounded-md font-medium border border-emerald-100 flex items-center gap-1">
                                        <Zap size={10} /> {feat}
                                    </span>
                                ))}
                            </div>

                            <div className="divider my-2"></div>

                            {/* 3. PIE DE TARJETA (Precio y Estado) */}
                            <div className="flex items-center justify-between mt-auto">
                                <div>
                                    <p className="text-xs text-slate-400 font-medium">Precio Hora</p>
                                    <p className="text-xl font-black text-slate-700">${cancha.precio.toLocaleString('es-AR')}</p>
                                </div>

                                {/* Interruptor de Estado */}
                                <div className="form-control">
                                    <label className="label cursor-pointer flex flex-col gap-1 items-center">
                                        <span className="label-text text-[10px] uppercase font-bold text-slate-400">
                                            {cancha.estado === 'activa' ? 'Online' : 'Offline'}
                                        </span>
                                        <input
                                            type="checkbox"
                                            className="toggle toggle-success toggle-sm"
                                            checked={cancha.estado === 'activa'}
                                            readOnly // Solo lectura por ahora
                                        />
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}

                {/* --- TARJETA "AGREGAR NUEVA" (Placeholder) --- */}
                <button className="card bg-slate-50 border-2 border-dashed border-slate-300 flex items-center justify-center min-h-[350px] hover:border-emerald-400 hover:bg-emerald-50/30 transition group cursor-pointer text-slate-400 hover:text-emerald-600">
                    <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center group-hover:bg-emerald-100 transition">
                            <Plus size={32} />
                        </div>
                        <span className="font-bold text-lg">Crear Nueva Cancha</span>
                    </div>
                </button>

            </div>
        </div>
    );
}