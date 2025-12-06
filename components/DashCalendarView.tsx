import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function CalendarView() {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 11, 5)); // December 5, 2025

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const bookingsData = {
        '2025-12-05': [
            { facility: 'Tennis Court 1', time: '10:00 AM', customer: 'Sarah Johnson' },
            { facility: 'Basketball Court', time: '2:00 PM', customer: 'Mike Chen' },
        ],
        '2025-12-06': [
            { facility: 'Swimming Pool', time: '9:00 AM', customer: 'Emily Rodriguez' },
            { facility: 'Squash Court', time: '5:00 PM', customer: 'James Wilson' },
        ],
        '2025-12-07': [
            { facility: 'Tennis Court 2', time: '3:00 PM', customer: 'Lisa Anderson' },
            { facility: 'Badminton Court', time: '11:00 AM', customer: 'David Lee' },
        ],
        '2025-12-10': [
            { facility: 'Gym Area', time: '7:00 AM', customer: 'Tom Harris' },
        ],
        '2025-12-12': [
            { facility: 'Tennis Court 1', time: '4:00 PM', customer: 'Anna White' },
            { facility: 'Basketball Court', time: '6:00 PM', customer: 'Chris Brown' },
            { facility: 'Swimming Pool', time: '1:00 PM', customer: 'Rachel Green' },
        ],
    };

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDayOfWeek = firstDay.getDay();

        const days = [];
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push(null);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i);
        }
        return days;
    };

    const days = getDaysInMonth(currentDate);

    const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

    const previousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const formatDate = (day: number) => {
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const dayStr = String(day).padStart(2, '0');
        return `${year}-${month}-${dayStr}`;
    };

    const getBookingsForDay = (day: number) => {
        const dateKey = formatDate(day);
        return bookingsData[dateKey as keyof typeof bookingsData] || [];
    };

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-gray-900">{monthName}</h2>
                <div className="flex gap-2">
                    <button
                        onClick={previousMonth}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <button
                        onClick={nextMonth}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-2">
                {daysOfWeek.map((day) => (
                    <div key={day} className="text-center py-2 text-gray-600">
                        {day}
                    </div>
                ))}

                {days.map((day, index) => {
                    const bookings = day ? getBookingsForDay(day) : [];
                    const isToday = day === 5 && currentDate.getMonth() === 11;

                    return (
                        <div
                            key={index}
                            className={`min-h-24 p-2 border border-gray-200 rounded-lg ${day ? 'bg-white hover:bg-gray-50 cursor-pointer' : 'bg-gray-50'
                                } ${isToday ? 'ring-2 ring-blue-500' : ''}`}
                        >
                            {day && (
                                <>
                                    <div className={`text-sm mb-1 ${isToday ? 'text-blue-600' : 'text-gray-900'}`}>
                                        {day}
                                    </div>
                                    <div className="space-y-1">
                                        {bookings.slice(0, 2).map((booking, i) => (
                                            <div
                                                key={i}
                                                className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded truncate"
                                            >
                                                {booking.time}
                                            </div>
                                        ))}
                                        {bookings.length > 2 && (
                                            <div className="text-xs text-gray-500 px-2">
                                                +{bookings.length - 2} more
                                            </div>
                                        )}
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
