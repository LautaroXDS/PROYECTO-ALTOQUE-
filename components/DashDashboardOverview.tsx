import { Calendar, DollarSign, Users, TrendingUp } from 'lucide-react';

export function DashboardOverview() {
    const stats = [
        {
            label: 'Total Bookings',
            value: '156',
            change: '+12.5%',
            trend: 'up',
            icon: Calendar,
            color: 'blue',
        },
        {
            label: 'Revenue',
            value: '$24,580',
            change: '+18.2%',
            trend: 'up',
            icon: DollarSign,
            color: 'green',
        },
        {
            label: 'Active Members',
            value: '892',
            change: '+5.4%',
            trend: 'up',
            icon: Users,
            color: 'purple',
        },
        {
            label: 'Occupancy Rate',
            value: '78%',
            change: '+3.1%',
            trend: 'up',
            icon: TrendingUp,
            color: 'orange',
        },
    ];

    const colorClasses = {
        blue: 'bg-blue-50 text-blue-600',
        green: 'bg-green-50 text-green-600',
        purple: 'bg-purple-50 text-purple-600',
        orange: 'bg-orange-50 text-orange-600',
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
                const Icon = stat.icon;

                return (
                    <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                                <Icon className="w-6 h-6" />
                            </div>
                            <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs">
                                {stat.change}
                            </span>
                        </div>

                        <h3 className="text-gray-900 mb-1">{stat.value}</h3>
                        <p className="text-gray-600">{stat.label}</p>
                    </div>
                );
            })}
        </div>
    );
}
