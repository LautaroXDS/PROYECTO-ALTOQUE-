import { MapPin, Star, Clock, TrendingUp } from "lucide-react";

const fields = [
    {
        name: "Premier Sports Arena",
        location: "Downtown, Los Angeles",
        image: "https://images.unsplash.com/photo-1641029185333-7ed62a19d5f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmaWVsZCUyMGFlcmlhbHxlbnwxfHx8fDE3NjQ4MjEyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.9,
        reviews: 234,
        price: "$80/hr",
        type: "Outdoor • 11v11",
    },
    {
        name: "Elite Indoor Complex",
        location: "West Side, Chicago",
        image: "https://images.unsplash.com/photo-1712325485668-6b6830ba814e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBzb2NjZXIlMjBmaWVsZHxlbnwxfHx8fDE3NjQ4OTQ2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.8,
        reviews: 189,
        price: "$120/hr",
        type: "Indoor • 7v7",
    },
    {
        name: "Greenfield Soccer Park",
        location: "North District, Miami",
        image: "https://images.unsplash.com/photo-1556816213-00d1ffaa2f78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHN0YWRpdW0lMjBncmFzc3xlbnwxfHx8fDE3NjQ4OTQ2NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.7,
        reviews: 156,
        price: "$60/hr",
        type: "Outdoor • 5v5",
    },
    {
        name: "Victory Sports Center",
        location: "East Bay, San Francisco",
        image: "https://images.unsplash.com/photo-1600463405301-c570cb64ea3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBnb2FsJTIwbmV0fGVufDF8fHx8MTc2NDg0OTUxNnww&ixlib=rb-4.1.0&q=80&w=1080",
        rating: 4.9,
        reviews: 201,
        price: "$95/hr",
        type: "Indoor • 11v11",
    },
];

export function CanchasTendencias() {
    return (
        <div className="py-24 px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="w-6 h-6 text-blue-600" />
                            <span className="text-blue-600">Trending Now</span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl">
                            Most Popular Soccer Fields
                        </h2>
                    </div>
                    <button className="hidden md:block px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                        View All Fields
                    </button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {fields.map((field, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={field.image}
                                    alt={field.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute top-3 right-3 px-3 py-1 bg-white rounded-full text-sm flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span>{field.rating}</span>
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="text-xl mb-2">{field.name}</h3>
                                <div className="flex items-center gap-2 text-gray-600 mb-3">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm">{field.location}</span>
                                </div>
                                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                                    <span>{field.type}</span>
                                    <span className="text-gray-400">•</span>
                                    <span>{field.reviews} reviews</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-2xl text-blue-600">{field.price}</span>
                                    </div>
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <button className="px-6 py-3 border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                        View All Fields
                    </button>
                </div>
            </div>
        </div>
    );
}
