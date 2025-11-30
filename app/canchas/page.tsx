import { supabase } from '../../lib/supabase'

interface Cancha {
  id: number
  nombre: string
  deporte: string
  formato: string
  superficie: string
  precio_hora: number
  caracteristicas: string[] | null
  
  complejos: {
    nombre: string
    direccion: string
  } | null
}

export default async function Home() {
  
  // --- 🔴 COMENTAMOS LA PARTE QUE FALLA (SUPABASE) ---
  /*
  const { data: canchas, error } = await supabase
    .from('canchas')
    .select(`
      *,
      complejos (
        nombre,
        direccion
      )
    `)
  */

  // --- 🟢 AGREGAMOS DATOS FALSOS PARA VER EL DISEÑO ---
  const error = null; // Fingimos que no hay error
  
  const canchas = [
    {
      id: 1,
      nombre: "Cancha 1",
      deporte: "futbol",
      formato: "F5",
      superficie: "Sintético",
      precio_hora: 35000,
      caracteristicas: ["Techada", "Iluminación"],
      complejos: { nombre: "El Monumentalito", direccion: "Calle Falsa 123" }
    },
    {
      id: 2,
      nombre: "Cancha 2",
      deporte: "futbol",
      formato: "F7",
      superficie: "Césped",
      precio_hora: 42000,
      caracteristicas: ["Iluminación"],
      complejos: { nombre: "El Monumentalito", direccion: "Calle Falsa 123" }
    },
    {
      id: 3,
      nombre: "Court Central",
      deporte: "padel",
      formato: "Dobles",
      superficie: "Cemento",
      precio_hora: 28000,
      caracteristicas: ["Blindex"],
      complejos: { nombre: "El Monumentalito", direccion: "Calle Falsa 123" }
    }
  ];
  // ----------------------------------------------------

  if (error) {
    console.error("Error trayendo canchas:", error)
    return <div className="p-10 text-red-500">Error cargando las canchas. Revisá la consola.</div>
  }

  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-black text-gray-900 mb-2">
          AlToque ⚡
        </h1>
        <p className="text-gray-500">Reservá tu cancha en segundos</p>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {canchas?.map((cancha: any) => (
          <div 
            key={cancha.id} 
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100"
          >
            {/* Cabecera de Color según Deporte */}
            <div className={`h-24 flex items-center justify-center ${
              cancha.deporte === 'futbol' ? 'bg-emerald-500' : 'bg-blue-500'
            }`}>
              <span className="text-white font-bold text-3xl uppercase tracking-widest opacity-20">
                {cancha.deporte}
              </span>
            </div>

            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 leading-tight">
                    {cancha.nombre}
                  </h2>
                  <p className="text-sm text-gray-500 font-medium">
                    📍 {cancha.complejos?.nombre || "Complejo Desconocido"}
                  </p>
                </div>
                <div className="text-right">
                  <span className="block text-lg font-bold text-slate-900">
                    ${cancha.precio_hora.toLocaleString('es-AR')}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 mb-6">
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium uppercase">
                  {cancha.formato}
                </span>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md font-medium uppercase">
                  {cancha.superficie}
                </span>
                {cancha.caracteristicas?.map((car: string, i: number) => (
                   <span key={i} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md font-medium capitalize">
                     {car}
                   </span>
                ))}
              </div>

              <button className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition active:scale-95">
                Reservar Ahora
              </button>

              
            </div>
          </div>
        ))}
        
        {canchas?.length === 0 && (
          <p className="col-span-3 text-center text-gray-400">
            No se encontraron canchas disponibles.
          </p>
        )}

      </div>
    </main>
  )
}