'use client' // <--- ESTO ES OBLIGATORIO PARA QUE EL BOTÓN FUNCIONE
import { useState } from 'react'
import { useRouter } from 'next/navigation' 
import { Search, MapPin, Calendar, Users } from "lucide-react";

interface BuscadorProps {
  deportesDisponibles: string[]
}

export default function Buscador({ deportesDisponibles }: BuscadorProps) {
  const router = useRouter()
  

  const [ubicacion, setUbicacion] = useState('')
  const [deporte, setDeporte] = useState('')
  const [fecha, setFecha] = useState('')


  const handleBuscar = () => {
    console.log("Botón presionado") 

  
    const params = new URLSearchParams()
    
    if (deporte) params.set('deporte', deporte)
    if (ubicacion) params.set('ubicacion', ubicacion)
    
   
    router.push(`/canchas?${params.toString()}`)
  }

  return (
    <div className="py-16 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl mb-4">
            Encuentra tu cancha perfecta
          </h2>
          <p className="text-xl text-gray-600">
            Busca entre cientos de canchas disponibles en tu ciudad y reserva al instante.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
            <div className="grid md:grid-cols-4 gap-4">
              {/* Location */}
              <div className="relative">
                <label className="block text-sm text-gray-600 mb-2">Ciudad</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Ciudad/Localidad"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="relative">
                <label className="block text-sm text-gray-600 mb-2">Fecha</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Players */}
              <div className="relative">
                <label className="block text-sm text-gray-600 mb-2">Deporte</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none">
                    <option>Futbol 5</option>
                    <option>Futbol 7</option>
                    <option>Futbol 11</option>
                    <option>Padel</option>
                  </select>
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <Search className="w-5 h-5" />
                  Buscar
                </button>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-600 mr-2">Filtros populares:</span>
                <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
                  Bajo techo
                </button>
                <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
                  Cesped artificial
                </button>
                <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
                  Estacionamiento
                </button>
                <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">
                  Vestuarios
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}