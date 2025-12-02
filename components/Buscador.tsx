'use client' // <--- ESTO ES OBLIGATORIO PARA QUE EL BOTÓN FUNCIONE
import { useState } from 'react'
import { useRouter } from 'next/navigation' 
import { MapPin, Trophy, Calendar } from 'lucide-react'

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
    <div className="bg-white rounded-3xl md:rounded-full shadow-2xl p-4 md:p-2 flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-100">
      
  
      <div className="flex-1 px-4 py-3 w-full hover:bg-gray-50 rounded-lg md:rounded-l-full transition cursor-pointer">
        <div className="flex items-center gap-3 mb-1">
          <MapPin className="w-5 h-5 text-emerald-500" />
          <span className="text-sm font-bold text-gray-700">Ubicación</span>
        </div>
        <input
          type="text"
          placeholder="Buscar Ciudad"
          className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400 text-sm"
          onChange={(e) => setUbicacion(e.target.value)}
        />
      </div>

 
      <div className="flex-1 px-4 py-3 w-full hover:bg-gray-50 transition cursor-pointer">
        <div className="flex items-center gap-3 mb-1">
          <Trophy className="w-5 h-5 text-emerald-500" />
          <span className="text-sm font-bold text-gray-700">Deporte</span>
        </div>
        <select 
          className="w-full outline-none text-gray-600 appearance-none cursor-pointer bg-transparent text-sm capitalize"
          onChange={(e) => setDeporte(e.target.value)}
        >
          <option value="">Cualquier deporte</option>
          {deportesDisponibles.map((dep) => (
            <option key={dep} value={dep}>
              {dep.charAt(0).toUpperCase() + dep.slice(1)}
            </option>
          ))}
        </select>
      </div>

    
      <div className="flex-1 px-4 py-3 w-full hover:bg-gray-50 transition cursor-pointer">
        <div className="flex items-center gap-3 mb-1">
          <Calendar className="w-5 h-5 text-emerald-500" />
          <span className="text-sm font-bold text-gray-700">Fecha</span>
        </div>
        <input 
            type="date"
            className="w-full bg-transparent outline-none text-gray-600 text-sm"
            onChange={(e) => setFecha(e.target.value)}
        />
      </div>

      <div className="p-2 w-full md:w-auto mt-2 md:mt-0">
        <button 
          onClick={handleBuscar} 
          className="w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl md:rounded-full transition shadow-md"
        >
          Buscar canchas
        </button>
      </div>
    </div>
  )
}