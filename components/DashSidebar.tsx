import { LayoutDashboard, Calendar, Users, Activity, Settings, CreditCard, BarChart3 } from 'lucide-react';

interface SidebarProps {
    activeView: string;
    setActiveView: (view: string) => void;
}

export function Sidebar({ activeView, setActiveView }: SidebarProps) {
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'bookings', label: 'Bookings', icon: Calendar },
        { id: 'calendar', label: 'Calendar', icon: Calendar },
        { id: 'facilities', label: 'Facilities', icon: Activity },
        { id: 'settings', label: 'Settings', icon: Settings },
    ];

    return (
        <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                        <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-gray-900">SportsPlex</h2>
                        <p className="text-xs text-gray-500">Admin Dashboard</p>
                    </div>
                </div>
            </div>

            <nav className="flex-1 p-4">
                <ul className="space-y-1">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeView === item.id;

                        return (
                            <li key={item.id}>
                                <button
                                    onClick={() => setActiveView(item.id)}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                            ? 'bg-blue-50 text-blue-700'
                                            : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    <Icon className={`w-5 h-5 ${isActive ? 'text-blue-700' : 'text-gray-500'}`} />
                                    <span>{item.label}</span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="p-4 border-t border-gray-200">
                <div className=" from-blue-600 to-blue-700 rounded-lg p-4 text-white">
                    <p className="mb-2">Upgrade to Pro</p>
                    <p className="text-xs text-blue-100 mb-3">Get access to advanced analytics and unlimited bookings.</p>
                    <button className="w-full bg-white text-blue-700 px-4 py-2 rounded-lg text-sm hover:bg-blue-50 transition-colors">
                        Upgrade Now
                    </button>
                </div>
            </div>
        </div>
    );
}
