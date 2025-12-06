import { Activity } from 'lucide-react';

interface FacilityStatusProps {
    detailed?: boolean;
}

export function FacilityStatus({ detailed = false }: FacilityStatusProps) {
    const facilities = [
        { name: 'Tennis Court 1', status: 'occupied', occupancy: 85, nextAvailable: '2:00 PM' },
        { name: 'Tennis Court 2', status: 'available', occupancy: 45, nextAvailable: 'Now' },
        { name: 'Basketball Court', status: 'occupied', occupancy: 92, nextAvailable: '4:00 PM' },
        { name: 'Swimming Pool', status: 'available', occupancy: 38, nextAvailable: 'Now' },
        { name: 'Squash Court', status: 'occupied', occupancy: 78, nextAvailable: '3:30 PM' },
        { name: 'Badminton Court', status: 'available', occupancy: 52, nextAvailable: 'Now' },
        { name: 'Gym Area', status: 'occupied', occupancy: 88, nextAvailable: '5:00 PM' },
        { name: 'Yoga Studio', status: 'maintenance', occupancy: 0, nextAvailable: 'Tomorrow' },
    ];

    const displayedFacilities = detailed ? facilities : facilities.slice(0, 6);

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="mb-6">
                <h2 className="text-gray-900 mb-1">Facility Status</h2>
                <p className="text-gray-600">Real-time availability</p>
            </div>

            <div className="space-y-4">
                {displayedFacilities.map((facility, index) => {
                    const statusColors = {
                        occupied: 'bg-red-500',
                        available: 'bg-green-500',
                        maintenance: 'bg-yellow-500',
                    };

                    const statusTextColors = {
                        occupied: 'text-red-600',
                        available: 'text-green-600',
                        maintenance: 'text-yellow-600',
                    };

                    return (
                        <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 flex-1">
                                <div className={`w-2 h-2 rounded-full ${statusColors[facility.status as keyof typeof statusColors]}`}></div>
                                <div className="flex-1">
                                    <p className="text-gray-900">{facility.name}</p>
                                    <p className={`text-xs ${statusTextColors[facility.status as keyof typeof statusTextColors]}`}>
                                        {facility.status.charAt(0).toUpperCase() + facility.status.slice(1)}
                                    </p>
                                </div>
                            </div>

                            {detailed && (
                                <div className="text-right">
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className="w-24 bg-gray-200 rounded-full h-2">
                                            <div
                                                className="bg-blue-600 h-2 rounded-full"
                                                style={{ width: `${facility.occupancy}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-xs text-gray-600">{facility.occupancy}%</span>
                                    </div>
                                    <p className="text-xs text-gray-500">Next: {facility.nextAvailable}</p>
                                </div>
                            )}

                            {!detailed && (
                                <span className="text-xs text-gray-500">{facility.nextAvailable}</span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
