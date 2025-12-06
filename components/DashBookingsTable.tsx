import { MoreVertical, CheckCircle, Clock, XCircle } from 'lucide-react';

interface BookingsTableProps {
    showAll?: boolean;
}

export function BookingsTable({ showAll = false }: BookingsTableProps) {
    const bookings = [
        {
            id: 'BK-001',
            customer: 'Sarah Johnson',
            facility: 'Tennis Court 1',
            date: '2025-12-05',
            time: '10:00 AM - 11:00 AM',
            status: 'confirmed',
            amount: '$45',
        },
        {
            id: 'BK-002',
            customer: 'Mike Chen',
            facility: 'Basketball Court',
            date: '2025-12-05',
            time: '02:00 PM - 04:00 PM',
            status: 'confirmed',
            amount: '$80',
        },
        {
            id: 'BK-003',
            customer: 'Emily Rodriguez',
            facility: 'Swimming Pool',
            date: '2025-12-06',
            time: '09:00 AM - 10:00 AM',
            status: 'pending',
            amount: '$35',
        },
        {
            id: 'BK-004',
            customer: 'James Wilson',
            facility: 'Squash Court',
            date: '2025-12-06',
            time: '05:00 PM - 06:00 PM',
            status: 'confirmed',
            amount: '$40',
        },
        {
            id: 'BK-005',
            customer: 'Lisa Anderson',
            facility: 'Tennis Court 2',
            date: '2025-12-07',
            time: '03:00 PM - 04:00 PM',
            status: 'cancelled',
            amount: '$45',
        },
        {
            id: 'BK-006',
            customer: 'David Lee',
            facility: 'Badminton Court',
            date: '2025-12-07',
            time: '11:00 AM - 12:00 PM',
            status: 'confirmed',
            amount: '$30',
        },
    ];

    const displayedBookings = showAll ? bookings : bookings.slice(0, 5);

    const statusConfig = {
        confirmed: { icon: CheckCircle, color: 'text-green-600 bg-green-50', label: 'Confirmed' },
        pending: { icon: Clock, color: 'text-yellow-600 bg-yellow-50', label: 'Pending' },
        cancelled: { icon: XCircle, color: 'text-red-600 bg-red-50', label: 'Cancelled' },
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200">
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-gray-900 mb-1">Recent Bookings</h2>
                        <p className="text-gray-600">Manage and track all facility bookings</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        New Booking
                    </button>
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th className="px-6 py-3 text-left text-gray-700">Booking ID</th>
                            <th className="px-6 py-3 text-left text-gray-700">Customer</th>
                            <th className="px-6 py-3 text-left text-gray-700">Facility</th>
                            <th className="px-6 py-3 text-left text-gray-700">Date</th>
                            <th className="px-6 py-3 text-left text-gray-700">Time</th>
                            <th className="px-6 py-3 text-left text-gray-700">Status</th>
                            <th className="px-6 py-3 text-left text-gray-700">Amount</th>
                            <th className="px-6 py-3 text-left text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {displayedBookings.map((booking) => {
                            const StatusIcon = statusConfig[booking.status as keyof typeof statusConfig].icon;
                            const statusColor = statusConfig[booking.status as keyof typeof statusConfig].color;
                            const statusLabel = statusConfig[booking.status as keyof typeof statusConfig].label;

                            return (
                                <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-gray-900">{booking.id}</td>
                                    <td className="px-6 py-4 text-gray-900">{booking.customer}</td>
                                    <td className="px-6 py-4 text-gray-600">{booking.facility}</td>
                                    <td className="px-6 py-4 text-gray-600">{booking.date}</td>
                                    <td className="px-6 py-4 text-gray-600">{booking.time}</td>
                                    <td className="px-6 py-4">
                                        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${statusColor}`}>
                                            <StatusIcon className="w-4 h-4" />
                                            <span>{statusLabel}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-gray-900">{booking.amount}</td>
                                    <td className="px-6 py-4">
                                        <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors">
                                            <MoreVertical className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
