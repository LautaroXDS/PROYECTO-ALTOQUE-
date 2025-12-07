import { Calendar, ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <div className="relative overflow-hidden bg-amber-600 from-blue-600 via-blue-700 to-indigo-800"> 

            {/* Hero Content */}
            <div className="relative z-10 px-6 py-20 lg:px-8 lg:py-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                <span className="text-sm">Trusted by 500+ Sports Facilities</span>
                            </div>
                            <h1 className="text-5xl lg:text-6xl mb-6">
                                Reserva al instante. Gestiona con facilidad.
                            </h1>
                            <p className="text-xl text-blue-100 mb-8">
                                La plataforma todo en uno para complejos deportivos que
                                desean optimizar reservas, pagos y administración.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 group">
                                    Contactar
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 rounded-lg hover:bg-white/20 transition-colors">
                                    NO SE
                                </button>
                            </div>
                            <div className="mt-12 flex items-center gap-8">
                                <div>
                                    <div className="text-3xl mb-1">10K+</div>
                                    <div className="text-blue-200 text-sm">Busquedas Mensuales</div>
                                </div>
                                <div className="w-px h-12 bg-white/20"></div>
                                <div>
                                    <div className="text-3xl mb-1">100%</div>
                                    <div className="text-blue-200 text-sm">Clientes satisfechos</div>
                                </div>
                                <div className="w-px h-12 bg-white/20"></div>
                                <div>
                                    <div className="text-3xl mb-1">24/7</div>
                                    <div className="text-blue-200 text-sm">Soporte</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative hidden lg:block">
                            <div className="absolute inset-0  from-blue-400/20 to-purple-400/20 rounded-2xl blur-3xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1758634025517-782312745372?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmYWNpbGl0eSUyMHRlbm5pcyUyMGNvdXJ0fGVufDF8fHx8MTc2NDg5NDEwN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                                alt="Sports Complex"
                                className="relative rounded-2xl shadow-2xl w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-40 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
}
