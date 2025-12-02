import { supabase } from '@/lib/supabase'
import { DollarSign, Users, Calendar, TrendingUp, Clock, AlertCircle } from "lucide-react";

export default async function Home() {

    const { data: canchasRaw } = await supabase
        .from('canchas')
        .select('deporte')


    const stats = {
        ingresosHoy: 154000,
        turnosHoy: 12,
        pendientesCobro: 15000, // Señas que faltan pagar
        ocupacion: "85%"
    };

    const proximosTurnos = [
        { hora: "19:00", cancha: "Cancha 1 (F5)", cliente: "Grupo Nico", estado: "Confirmado" },
        { hora: "19:00", cancha: "Central Padel", cliente: "Matias G.", estado: "Debe Seña" },
        { hora: "20:00", cancha: "Cancha 2 (F7)", cliente: "Torneo", estado: "Confirmado" },
        { hora: "20:30", cancha: "Muro Padel", cliente: "Clase Profe", estado: "Confirmado" },
    ];

    const rendimientoSemanal = [
        { dia: "Lun", altura: "h-16", valor: "40%" },
        { dia: "Mar", altura: "h-24", valor: "60%" },
        { dia: "Mié", altura: "h-20", valor: "50%" },
        { dia: "Jue", altura: "h-32", valor: "80%" },
        { dia: "Vie", altura: "h-40", valor: "100%" }, // Hoy
        { dia: "Sáb", altura: "h-36", valor: "90%" },
        { dia: "Dom", altura: "h-28", valor: "70%" },
    ];

    const deportesUnicos = Array.from(new Set(canchasRaw?.map(item => item.deporte)))

    return (
        <main className="min-h-screen bg-white">


            <div className="space-y-8">

                {/* --- SALUDO --- */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-slate-800">Hola, El Monumentalito 👋</h1>
                        <p className="text-slate-500 font-medium mt-1">Aquí tienes el resumen de hoy, Viernes 2 de Dic.</p>
                    </div>
                    <div className="text-right hidden md:block">
                        <span className="badge badge-lg badge-primary badge-outline font-bold">Plan PRO</span>
                    </div>
                </div>

                {/* --- TARJETAS DE ESTADÍSTICAS (KPIs) --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                    {/* Card 1: Ingresos */}
                    <div className="stats shadow bg-white border border-slate-100">
                        <div className="stat">
                            <div className="stat-figure text-emerald-500">
                                <DollarSign size={32} />
                            </div>
                            <div className="stat-title font-medium">Ingresos Hoy</div>
                            <div className="stat-value text-emerald-600 text-3xl">${stats.ingresosHoy.toLocaleString()}</div>
                            <div className="stat-desc text-emerald-600 flex items-center gap-1 font-bold">
                                <TrendingUp size={14} /> 12% más que ayer
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Turnos */}
                    <div className="stats shadow bg-white border border-slate-100">
                        <div className="stat">
                            <div className="stat-figure text-blue-500">
                                <Calendar size={32} />
                            </div>
                            <div className="stat-title font-medium">Turnos Jugados</div>
                            <div className="stat-value text-slate-700 text-3xl">{stats.turnosHoy}</div>
                            <div className="stat-desc">4 cancelados</div>
                        </div>
                    </div>

                    {/* Card 3: Deuda (Importante) */}
                    <div className="stats shadow bg-white border border-slate-100">
                        <div className="stat">
                            <div className="stat-figure text-orange-500">
                                <AlertCircle size={32} />
                            </div>
                            <div className="stat-title font-medium">Falta Cobrar</div>
                            <div className="stat-value text-orange-500 text-3xl">${stats.pendientesCobro.toLocaleString()}</div>
                            <div className="stat-desc text-orange-600 font-medium">En señas pendientes</div>
                        </div>
                    </div>

                    {/* Card 4: Ocupación */}
                    <div className="stats shadow bg-white border border-slate-100">
                        <div className="stat">
                            <div className="stat-figure text-purple-500">
                                <Users size={32} />
                            </div>
                            <div className="stat-title font-medium">Ocupación</div>
                            <div className="stat-value text-slate-700 text-3xl">{stats.ocupacion}</div>
                            <div className="stat-desc">Casi lleno</div>
                        </div>
                    </div>

                </div>

                {/* --- SECCIÓN INFERIOR (Gráfico + Próximos Turnos) --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* COLUMNA IZQUIERDA: Rendimiento (Gráfico Simulado) */}
                    <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                        <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                            📊 Rendimiento Semanal (Reservas)
                        </h3>

                        {/* Gráfico de Barras con CSS puro (Tailwind) */}
                        <div className="h-64 flex items-end justify-between gap-2 md:gap-4 px-2">
                            {rendimientoSemanal.map((barra, i) => (
                                <div key={i} className="flex flex-col items-center gap-2 w-full group cursor-pointer">
                                    {/* Tooltip con valor al pasar el mouse */}
                                    <div className="opacity-0 group-hover:opacity-100 transition mb-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                                        {barra.valor}
                                    </div>
                                    {/* La Barra */}
                                    <div className={`w-full max-w-[40px] bg-emerald-100 rounded-t-lg group-hover:bg-emerald-400 transition-all duration-300 relative ${barra.altura}`}>
                                        {/* Barra de progreso visual (más oscura abajo) */}
                                        <div className="absolute bottom-0 left-0 w-full bg-emerald-500/20 h-1/3 rounded-b-sm"></div>
                                    </div>
                                    {/* Día */}
                                    <span className={`text-xs font-bold ${i === 4 ? 'text-emerald-600' : 'text-slate-400'}`}>
                                        {barra.dia}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* COLUMNA DERECHA: Próximos a Ingresar */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                                <Clock size={18} className="text-slate-400" /> Próximos
                            </h3>
                            <button className="text-xs text-emerald-600 font-bold hover:underline">Ver Agenda</button>
                        </div>

                        <div className="space-y-4">
                            {proximosTurnos.map((turno, i) => (
                                <div key={i} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-xl transition border border-transparent hover:border-slate-100">
                                    {/* Hora */}
                                    <div className="bg-slate-100 text-slate-600 font-bold px-3 py-2 rounded-lg text-sm">
                                        {turno.hora}
                                    </div>

                                    {/* Info */}
                                    <div className="flex-1">
                                        <h4 className="font-bold text-slate-700 text-sm">{turno.cliente}</h4>
                                        <p className="text-xs text-slate-500">{turno.cancha}</p>
                                    </div>

                                    {/* Estado (Puntito de color) */}
                                    <div className={`w-3 h-3 rounded-full ${turno.estado === 'Confirmado' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-orange-400 animate-pulse'
                                        }`} title={turno.estado}></div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100">
                            <button className="btn btn-block btn-outline btn-sm text-slate-500 font-normal">
                                Ver todos los turnos
                            </button>
                        </div>
                    </div>

                </div>

            </div>


        </main>
    );
}

