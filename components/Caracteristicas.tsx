import { Calendar, Users, CreditCard, BarChart3, Clock, Smartphone } from "lucide-react";

const features = [
    {
        icon: Calendar,
        title: "Reservaciones Inteligentes",
        description: "Automatiza las reservas y gestiona la disponibilidad de tus canchas en tiempo real.",
        color: "bg-blue-100 text-blue-600",
    },
    {
        icon: Users,
        title: "Gestion de Clientes",
        description: "Amplia tu base de clientes con herramientas de marketing integradas.",
        color: "bg-purple-100 text-purple-600",
    },
    {
        icon: CreditCard,
        title: "Procesamiento de Pagos",
        description: "Acepta pagos seguros en línea y en el lugar con múltiples opciones de pago.",
        color: "bg-green-100 text-green-600",
    },
    {
        icon: BarChart3,
        title: "Análisis y Reportes",
        description: "Obtén insights detallados sobre el rendimiento de tu complejo deportivo.",
        color: "bg-orange-100 text-orange-600",
    },
    {
        icon: Clock,
        title: "Portal de Reservas 24/7",
        description: "Permite a tus clientes reservar canchas en cualquier momento desde cualquier dispositivo.",
        color: "bg-cyan-100 text-cyan-600",
    },
    {
        icon: Smartphone,
        title: "Aplicacion Móviles",
        description: "Gestiona tu complejo desde cualquier lugar con nuestras aplicaciones móviles intuitivas.",
        color: "bg-pink-100 text-pink-600",
    },
];

export function Caracteristicas() {
    return (
        <div id="features" className="py-24 px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl mb-4">
                        Todo lo que necesitas para gestionar tu complejo deportivo. 
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Desde reservas inteligentes hasta pagos seguros y análisis detallados, nuestra plataforma lo tiene todo.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
                        >
                            <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-5`}>
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
