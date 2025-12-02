"use client"; // <--- IMPORTANTE: Ahora usamos interactividad (useState), así que va esto.

import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, Clock, Filter, Plus } from "lucide-react";
// 1. IMPORTAMOS LAS HERRAMIENTAS DE FECHA
import { format, addDays, subDays, isToday } from "date-fns";
import { es } from "date-fns/locale"; // Importamos el idioma Español

export default function AgendaPage() {

    // 2. ESTADO: Guardamos la fecha actual (Empieza siendo "Hoy")
    const [fechaActual, setFechaActual] = useState(new Date());

    // Funciones para viajar en el tiempo
    const irAlDiaAnterior = () => setFechaActual(subDays(fechaActual, 1));
    const irAlDiaSiguiente = () => setFechaActual(addDays(fechaActual, 1));

    // MODIFICAR CON INFO DE LA BASE DE DATOSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
    const horas = ["16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"];
    const canchas = [
        { id: 1, nombre: "Cancha 1 (F5)", deporte: "futbol" },
        { id: 2, nombre: "Cancha 2 (F7)", deporte: "futbol" },
        { id: 3, nombre: "Central (Padel)", deporte: "padel" },
        { id: 4, nombre: "Muro (Padel)", deporte: "padel" },
    ];

    return (
        <div className="space-y-6">

            {/* Encabezado... (Igual que antes) */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Agenda de Turnos</h1>
                    <p className="text-slate-500 text-sm">Gestioná la disponibilidad del día</p>
                </div>
                <div className="flex gap-2">
                    <button className="btn btn-outline btn-sm"><Filter size={16} /> Filtros</button>
                    <button className="btn btn-primary btn-sm text-white"><Plus size={16} /> Nuevo Turno</button>
                </div>
            </div>

            {/* --- 3. BARRA DE NAVEGACIÓN DE FECHAS ACTIVA --- */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex justify-between items-center">

                {/* Botón Atrás */}
                <button onClick={irAlDiaAnterior} className="btn btn-ghost btn-circle btn-sm hover:bg-slate-100">
                    <ChevronLeft size={20} />
                </button>

                <div className="flex items-center gap-3">
                    <Calendar className="text-emerald-500" />

                    {/* FECHA DINÁMICA FORMATEADA */}
                    {/* Ejemplo resultado: "Lunes, 2 de diciembre" */}
                    <span className="text-lg font-bold text-slate-700 capitalize">
                        {isToday(fechaActual) ? "Hoy, " : ""}
                        {format(fechaActual, "EEEE d 'de' MMMM", { locale: es })}
                    </span>

                    {/* Badge que cambia si es Hoy o Futuro */}
                    {isToday(fechaActual) && (
                        <span className="badge badge-success badge-outline text-xs">Abierto Ahora</span>
                    )}
                </div>

                {/* Botón Siguiente */}
                <button onClick={irAlDiaSiguiente} className="btn btn-ghost btn-circle btn-sm hover:bg-slate-100">
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* --- GRILLA (Tabla) --- */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-x-auto">
                <table className="table w-full">
                    {/* ... (El resto de tu tabla sigue igual) ... */}
                    {/* Solo ten en cuenta que ahora 'reservas' debería filtrar por fechaActual también */}
                    <thead>
                        {/* Copia aquí el thead que ya tenías */}
                        <tr className="bg-slate-50 border-b border-slate-200">
                            <th className="w-20 text-center text-slate-400"><Clock size={18} className="mx-auto" /></th>
                            {canchas.map((cancha) => (
                                <th key={cancha.id} className="text-center min-w-160px">
                                    <div className="flex flex-col items-center py-2">
                                        <span className="font-bold text-slate-700 text-base">{cancha.nombre}</span>
                                        <span className={`badge badge-xs mt-1 ${cancha.deporte === 'futbol' ? 'badge-success' : 'badge-info'}`}>
                                            {cancha.deporte}
                                        </span>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Copia aquí el tbody que ya tenías */}
                        {horas.map((hora) => (
                            <tr key={hora} className="border-b border-slate-100 last:border-none hover:bg-slate-50/50">
                                <td className="text-center font-bold text-slate-500 bg-slate-50/30 border-r border-slate-100">{hora}</td>
                                {canchas.map((cancha) => (
                                    <td key={`${cancha.id}-${hora}`} className="p-1 h-24 align-top">
                                        {/* Aquí iría tu lógica de celdas libres/ocupadas */}
                                        <div className="w-full h-full rounded-lg border border-dashed border-slate-200 flex items-center justify-center text-slate-300 hover:bg-emerald-50 cursor-pointer">
                                            <Plus size={20} />
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}