import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function RevenueChart() {
    const data = [
        { month: 'Jan', revenue: 12400, bookings: 45 },
        { month: 'Feb', revenue: 15200, bookings: 52 },
        { month: 'Mar', revenue: 18900, bookings: 61 },
        { month: 'Apr', revenue: 16700, bookings: 58 },
        { month: 'May', revenue: 21300, bookings: 68 },
        { month: 'Jun', revenue: 24200, bookings: 75 },
        { month: 'Jul', revenue: 28100, bookings: 82 },
        { month: 'Aug', revenue: 26800, bookings: 78 },
        { month: 'Sep', revenue: 23500, bookings: 71 },
        { month: 'Oct', revenue: 25900, bookings: 74 },
        { month: 'Nov', revenue: 27400, bookings: 79 },
        { month: 'Dec', revenue: 24580, bookings: 69 },
    ];

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="mb-6">
                <h2 className="text-gray-900 mb-1">Revenue Overview</h2>
                <p className="text-gray-600">Monthly revenue and booking trends</p>
            </div>

            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis
                        dataKey="month"
                        stroke="#9CA3AF"
                        style={{ fontSize: '12px' }}
                    />
                    <YAxis
                        stroke="#9CA3AF"
                        style={{ fontSize: '12px' }}
                        tickFormatter={(value) => `$${value / 1000}k`}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: '#1F2937',
                            border: 'none',
                            borderRadius: '8px',
                            color: '#fff'
                        }}
                        formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                    />
                    <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#3B82F6"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
