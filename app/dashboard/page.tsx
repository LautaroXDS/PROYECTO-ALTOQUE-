'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/DashSidebar';
import { Header } from '@/components/DashHeader';
import { DashboardOverview } from '@/components/DashDashboardOverview';
import { BookingsTable } from '@/components/DashBookingsTable';
import { RevenueChart } from '@/components/DashRevenueChart';
import { FacilityStatus } from '@/components/DashFacilityStatus';
import { CalendarView } from '@/components/DashCalendarView';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-6 py-8">
            {activeView === 'dashboard' && (
              <>
                <div className="mb-8">
                  <h1 className="text-gray-900 mb-2">Dashboard Overview</h1>
                  <p className="text-gray-600">Welcome back! Here's what's happening with your sports complex today.</p>
                </div>
                
                <DashboardOverview />
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                  <div className="lg:col-span-2">
                    <RevenueChart />
                  </div>
                  <div>
                    <FacilityStatus />
                  </div>
                </div>
                
                <div className="mt-6">
                  <BookingsTable />
                </div>
              </>
            )}
            
            {activeView === 'bookings' && (
              <>
                <div className="mb-8">
                  <h1 className="text-gray-900 mb-2">Bookings</h1>
                  <p className="text-gray-600">Manage all your facility bookings in one place.</p>
                </div>
                <BookingsTable showAll={true} />
              </>
            )}
            
            {activeView === 'calendar' && (
              <>
                <div className="mb-8">
                  <h1 className="text-gray-900 mb-2">Calendar</h1>
                  <p className="text-gray-600">View all bookings in calendar format.</p>
                </div>
                <CalendarView />
              </>
            )}
            
            {activeView === 'facilities' && (
              <>
                <div className="mb-8">
                  <h1 className="text-gray-900 mb-2">Facilities</h1>
                  <p className="text-gray-600">Manage your sports facilities and their availability.</p>
                </div>
                <FacilityStatus detailed={true} />
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
