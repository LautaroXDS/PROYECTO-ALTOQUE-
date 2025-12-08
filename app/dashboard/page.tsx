"use client";

import { useState } from "react";
import { Sidebar } from "@/components/DashSidebar";
import { Header } from "@/components/DashHeader";
import { DashboardOverview } from "@/components/DashDashboardOverview";
import { RevenueChart } from "@/components/DashRevenueChart";
import { FacilityStatus } from "@/components/DashFacilityStatus";
import { BookingsTable } from "@/components/DashBookingsTable";
import { CalendarView } from "@/components/DashCalendarView";

export default function DashboardPage() {
  // Estado para controlar qué vista se muestra (Dashboard, Bookings, Calendar, etc.)
  const [activeView, setActiveView] = useState("dashboard");

  // Función para renderizar el contenido central según el menú seleccionado
  const renderContent = () => {
    switch (activeView) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <DashboardOverview />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <RevenueChart />
              </div>
              <div>
                <FacilityStatus />
              </div>
            </div>
            <BookingsTable />
          </div>
        );
      case "bookings":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Reservas</h2>
            <BookingsTable showAll={true} />
          </div>
        );
      case "calendar":
        return (
          <div className="space-y-6">
            <CalendarView />
          </div>
        );
      case "facilities":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Estado de Canchas</h2>
            <FacilityStatus detailed={true} />
          </div>
        );
      default:
        return (
          <div className="p-10 text-center text-gray-500">
            Vista en construcción: {activeView}
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 w-full overflow-hidden">
      {/* 1. Sidebar Fijo a la izquierda */}
      <Sidebar activeView={activeView} setActiveView={setActiveView} />

      {/* 2. Área principal a la derecha */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Header Superior */}
        <Header />

        {/* Contenido Scrollable */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}