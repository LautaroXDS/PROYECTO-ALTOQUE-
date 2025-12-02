import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { MapPin } from 'lucide-react'


export default async function ResultadosBusqueda({
  searchParams,
}: {
  searchParams: Promise<{ deporte?: string; ubicacion?: string }>
}) {
  

  const { deporte, ubicacion } = await searchParams

  let query = supabase
    .from('canchas')
    .select('*, complejos!inner(nombre, localidad, direccion)')

 
  if (deporte) {
    query = query.eq('deporte', deporte)
  }

  if (ubicacion) {

    query = query.ilike('complejos.localidad', `%${ubicacion}%`)
  }

  const { data: canchas, error } = await query

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      

      <div className="max-w-7xl mx-auto mb-8 flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold text-gray-900">Resultados de búsqueda</h1>
            <p className="text-gray-500">
                {deporte ? `Deporte: ${deporte}` : 'Todos los deportes'} 
                {ubicacion ? ` • Zona: ${ubicacion}` : ''}
            </p>
        </div>
        <Link href="/" className="text-emerald-600 font-bold hover:underline">
            ⬅ Nueva búsqueda
        </Link>
      </div>

 
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {canchas?.map((cancha: any) => (
          <div key={cancha.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100 group">
            
            <div className={`h-40 flex items-center justify-center ${
              cancha.deporte === 'futbol' ? 'bg-emerald-500' : 'bg-blue-500'
            }`}>
               <span className="text-white font-black text-4xl uppercase opacity-20 group-hover:scale-110 transition duration-500">
                 {cancha.deporte}
               </span>
            </div>

            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-900 mb-1">{cancha.nombre}</h2>
              
              <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                <MapPin className="w-4 h-4" />
                <span>{cancha.complejos?.localidad} • {cancha.complejos?.nombre}</span>
              </div>

              <div className="flex gap-2 mb-4">
                 <span className="px-2 py-1 bg-gray-100 text-xs font-bold uppercase rounded text-gray-600">
                    {cancha.formato}
                 </span>
                 <span className="px-2 py-1 bg-gray-100 text-xs font-bold uppercase rounded text-gray-600">
                    {cancha.superficie}
                 </span>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                <span className="text-2xl font-bold text-slate-900">
                    ${cancha.precio_hora.toLocaleString('es-AR')}
                </span>
                <Link 
                    href={`/cancha/${cancha.id}`}
                    className="bg-slate-900 text-white px-6 py-2 rounded-lg font-bold hover:bg-slate-700 transition"
                >
                    Ver cancha
                </Link>
              </div>
            </div>
          </div>
        ))}

        {canchas?.length === 0 && (
            <div className="col-span-3 text-center py-20">
                <p className="text-xl text-gray-400 font-medium">No encontramos canchas con esos filtros 😢</p>
                <Link href="/" className="text-emerald-500 font-bold mt-2 inline-block">Probar con otro filtro</Link>
            </div>
        )}

      </div>
    </main>
  )
}