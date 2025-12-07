import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Michael Chen",
        role: "Owner, Elite Sports Complex",
        content: "CourtBook transformed how we manage our 12 tennis courts. Bookings are up 40% and no-shows are down dramatically. The automated reminders alone paid for the subscription.",
        rating: 5,
    },
    {
        name: "Sarah Johnson",
        role: "Manager, FitZone Gym & Courts",
        content: "We switched from manual booking to CourtBook and never looked back. Our staff saves hours every week, and our members love the convenience of online booking.",
        rating: 5,
    },
    {
        name: "David Martinez",
        role: "Director, Community Sports Center",
        content: "The analytics dashboard gives us insights we never had before. We optimized our pricing and increased revenue by 25% in the first quarter. Highly recommend!",
        rating: 5,
    },
];

export function Testimonios() {
    return (
        <div id="testimonials" className="py-24 px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl mb-4">
                        Loved by Sports Facility Owners
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Join hundreds of satisfied customers who transformed their booking management.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                &ldquo;{testimonial.content}&rdquo;
                            </p>
                            <div>
                                <div className="mb-1">{testimonial.name}</div>
                                <div className="text-sm text-gray-600">{testimonial.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
