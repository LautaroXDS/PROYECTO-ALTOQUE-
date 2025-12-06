import { Search, Bell, Settings, ChevronDown } from 'lucide-react';

export function Header() {
    return (
        <header className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex-1 max-w-xl">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search bookings, customers, facilities..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-4 ml-6">
                    <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>

                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                        <Settings className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                        <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                            alt="User"
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <div className="hidden md:block">
                            <p className="text-gray-900">John Mitchell</p>
                            <p className="text-xs text-gray-500">Admin</p>
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-500" />
                    </div>
                </div>
            </div>
        </header>
    );
}
