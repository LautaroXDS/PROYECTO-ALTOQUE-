import { Save, MapPin, Phone, Mail, Clock, CreditCard, Building, Upload } from "lucide-react";

export default function ConfiguracionPage() {
  return (
    <div className="space-y-8 pb-10">
      
      {/* --- ENCABEZADO --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Configuración del Club</h1>
          <p className="text-slate-500 text-sm">Administrá la información pública y operativa de tu negocio.</p>
        </div>
        
        <button className="btn btn-emerald-600 text-white shadow-md">
          <Save size={18} />
          Guardar Cambios
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* --- TARJETA 1: PERFIL DEL CLUB --- */}
        <div className="card bg-white shadow-sm border border-slate-200">
          <div className="card-body">
            <h2 className="card-title text-slate-700 flex items-center gap-2 border-b border-slate-100 pb-3 mb-4">
              <Building className="text-emerald-500" size={20} />
              Información General
            </h2>

            {/* Logo Upload */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-slate-100 flex items-center justify-center border-2 border-dashed border-slate-300 text-slate-400">
                <img 
                  src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover rounded-full" 
                  alt="Logo Club" 
                />
              </div>
              <div>
                <button className="btn btn-sm btn-outline gap-2 normal-case">
                  <Upload size={14} /> Subir Logo
                </button>
                <p className="text-xs text-slate-400 mt-1">Recomendado: 500x500px (PNG/JPG)</p>
              </div>
            </div>

            {/* Formulario */}
            <div className="space-y-4">
              <div className="form-control w-full">
                <label className="label"><span className="label-text font-medium text-slate-600">Nombre del Club</span></label>
                <input type="text" placeholder="Ej: El Monumentalito" className="input input-bordered w-full" defaultValue="El Monumentalito" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="form-control w-full">
                    <label className="label"><span className="label-text font-medium text-slate-600 flex items-center gap-1"><Phone size={14}/> Teléfono / WhatsApp</span></label>
                    <input type="text" placeholder="+54 11..." className="input input-bordered w-full" />
                 </div>
                 <div className="form-control w-full">
                    <label className="label"><span className="label-text font-medium text-slate-600 flex items-center gap-1"><Mail size={14}/> Email de Contacto</span></label>
                    <input type="text" placeholder="club@email.com" className="input input-bordered w-full" />
                 </div>
              </div>

              <div className="form-control w-full">
                <label className="label"><span className="label-text font-medium text-slate-600 flex items-center gap-1"><MapPin size={14}/> Dirección Completa</span></label>
                <input type="text" placeholder="Calle Falsa 123, Buenos Aires" className="input input-bordered w-full" />
              </div>
              
              <div className="form-control w-full">
                <label className="label"><span className="label-text font-medium text-slate-600">Link de Google Maps</span></label>
                <input type="text" placeholder="https://maps.app.goo.gl/..." className="input input-bordered w-full text-sm text-blue-500" />
              </div>
            </div>

          </div>
        </div>

        {/* --- TARJETA 2: DATOS DE COBRO --- */}
        <div className="space-y-8">
            <div className="card bg-white shadow-sm border border-slate-200">
                <div className="card-body">
                    <h2 className="card-title text-slate-700 flex items-center gap-2 border-b border-slate-100 pb-3 mb-4">
                    <CreditCard className="text-emerald-500" size={20} />
                    Métodos de Cobro
                    </h2>
                    
                    <div className="alert bg-blue-50 border-blue-100 text-blue-800 text-sm mb-4">
                        ℹ️ Estos datos se mostrarán al cliente cuando tenga que pagar una seña.
                    </div>

                    <div className="form-control w-full mb-4">
                        <label className="label"><span className="label-text font-medium text-slate-600">Alias (MercadoPago / Banco)</span></label>
                        <div className="relative">
                            <input type="text" placeholder="club.futbol.mp" className="input input-bordered w-full pl-10 font-bold tracking-wider text-slate-700" />
                            <span className="absolute left-3 top-3 text-emerald-600 font-bold">$</span>
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text font-medium text-slate-600">CBU / CVU</span></label>
                        <input type="text" placeholder="0000003123123..." className="input input-bordered w-full" />
                    </div>
                </div>
            </div>

            {/* --- TARJETA 3: HORARIOS --- */}
            <div className="card bg-white shadow-sm border border-slate-200">
                <div className="card-body">
                    <h2 className="card-title text-slate-700 flex items-center gap-2 border-b border-slate-100 pb-3 mb-4">
                        <Clock className="text-emerald-500" size={20} />
                        Horarios de Apertura
                    </h2>

                    {/* Lista simple de días */}
                    <div className="space-y-3">
                        {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"].map((dia) => (
                            <div key={dia} className="flex items-center justify-between group">
                                <div className="flex items-center gap-3 w-32">
                                    <input type="checkbox" className="toggle toggle-success toggle-sm" defaultChecked />
                                    <span className="text-sm font-medium text-slate-600">{dia}</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <input type="time" className="input input-bordered input-sm w-24" defaultValue="16:00" />
                                    <span className="text-slate-400">a</span>
                                    <input type="time" className="input input-bordered input-sm w-24" defaultValue="23:00" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}