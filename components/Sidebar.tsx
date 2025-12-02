"use client"; // <--- OBLIGATORIO: Para poder leer la URL del navegador

import Link from "next/link";
import { usePathname } from "next/navigation"; // <--- El gancho mágico
import { LayoutDashboard, CalendarDays, Settings, LogOut, Map } from "lucide-react";

export default function Sidebar() {

    const pathname = usePathname(); // Aquí guardamos la ruta actual (ej: "/dashboard/agenda")

    // Definimos los links en una lista para no repetir código
    const menuItems = [
        { name: "Resumen", href: "/dashboard", icon: LayoutDashboard },
        { name: "Agenda / Turnos", href: "/dashboard/agenda", icon: CalendarDays },
        { name: "Mis Canchas", href: "/dashboard/canchas", icon: Map },
        { name: "Configuración", href: "/dashboard/configuracion", icon: Settings },
    ];

    return (
        <aside className="w-64 bg-slate-900 text-white flex flex-col fixed h-full z-10">

            {/* Logo */}
            <div className="p-6 border-b border-slate-800">
                <h1 className="text-2xl font-black text-emerald-500 tracking-tighter">
                    AlToque <span className="text-white text-xs font-normal opacity-50">ADMIN</span>
                </h1>
            </div>

            {/* Menú */}
            <nav className="flex-1 p-4 space-y-2">

                {menuItems.map((item) => {
                    const Icono = item.icon;
                    // Preguntamos: ¿La URL actual es igual a la de este botón?
                    const estActivo = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition font-medium ${estActivo
                                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/20"  // Estilo ACTIVO
                                    : "text-slate-400 hover:text-white hover:bg-slate-800"         // Estilo INACTIVO
                                }`}
                        >
                            <Icono size={20} />
                            {item.name}
                        </Link>
                    );
                })}

            </nav>

            {/* Botón Salir */}
            <div className="p-4 border-t border-slate-800">
                <button className="flex items-center gap-3 px-4 py-3 w-full text-red-400 hover:bg-red-900/20 rounded-lg transition font-medium">
                    <LogOut size={20} />
                    Cerrar Sesión
                </button>
            </div>

        </aside>
    );
}