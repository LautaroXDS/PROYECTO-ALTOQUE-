import { MapPin, Trophy, Calendar, Clock } from "lucide-react";
import BannerDinamico from "@/components/BannerDinamico";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full min-h-[600px] flex flex-col justify-center items-center pb-20 md:pb-0">
        {/*SECCION RESERVA TU CANCHA*/}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0">
          <h1 className="text-5xl md:text-6xl font-black text-emerald-600 leading-tight mb-4 text-left">
            Reserva tu cancha <br />
            <span className="text-emerald-500">al instante</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-lg mb-8 font-medium text-left mx-auto md:mx-0">
            Explorá las canchas disponibles en tu ciudad y en tiempo real.
          </p>
        </div>

        {/*---------------------------------------------------------------------------------------------------------------------------*/}

        {/*SECCION BUSCAR*/}
        <div className="relative mt-10 md:absolute md:mt-0 md:-bottom-8 w-[95%] max-w-6xl z-20">
          <div className="bg-white rounded-3xl md:rounded-full shadow-2xl p-4 md:p-2 flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-gray-200 border border-gray-100">
            {/* Input: Ciudad */}
            <div className="flex-1 px-4 py-3 w-full hover:bg-gray-50 rounded-lg md:rounded-l-full transition cursor-pointer">
              <div className="flex items-center gap-3 mb-1">
                <MapPin className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-bold text-gray-700">
                  Ubicación
                </span>
              </div>
              <input
                type="text"
                placeholder="Buscar Ciudad"
                className="w-full bg-transparent outline-none text-gray-600 placeholder-gray-400"
              />
            </div>

            {/* Input: Deporte */}
            <div className="flex-1 px-4 py-3 w-full hover:bg-gray-50 transition cursor-pointer">
              <div className="flex items-center gap-3 mb-1">
                <Trophy className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-bold text-gray-700">Deporte</span>
              </div>
              <select className="w-full outline-none text-gray-600 appearance-none cursor-pointer bg-white">
                <option>Elige deporte</option>
                <option>Fútbol</option>
                <option>Padel</option>
                <option>Tenis</option>
              </select>
            </div>

            {/* Input: Fecha */}
            <div className="flex-1 px-4 py-3 w-full hover:bg-gray-50 transition cursor-pointer">
              <div className="flex items-center gap-3 mb-1">
                <Calendar className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-bold text-gray-700">Fecha</span>
              </div>
              <p className="text-gray-600 text-sm">Mañana 30/11</p>
            </div>

            {/* Input: Hora */}
            <div className="flex-1 px-4 py-3 w-full hover:bg-gray-50 transition cursor-pointer">
              <div className="flex items-center gap-3 mb-1">
                <Clock className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-bold text-gray-700">Horario</span>
              </div>
              <p className="text-gray-600 text-sm">19:00hs</p>
            </div>

            {/* Botón Buscar */}
            <div className="p-2 w-full md:w-auto mt-2 md:mt-0">
              <button className="w-full md:w-auto bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-xl md:rounded-full transition shadow-md">
                Buscar canchas
              </button>
            </div>
          </div>
        </div>
      </div>
      ;{}
      <div className="h-32 bg-slate-50"></div>
      {/*---------------------------------------------------------------------------------------------------------------------------*/}
      {/* Implementacion banner */}
      <BannerDinamico />
      {/*---------------------------------------------------------------------------------------------------------------------------*/}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0 mt-20">
        <h1 className="text-5xl md:text-6xl font-black text-emerald-600 leading-tight mb-4 text-left">
          Ponemos la Tecnología al servicio <br />
          <span className="text-emerald-600">del DEPORTE en América</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-lg mb-8 font-medium text-left mx-auto md:mx-0">
          Estamos presentes en{" "}
          <span className="text-emerald-600">
            Argentina, Perú, Chile, EE.UU, Uruguay, Panamá , México, Colombia y
            Costa Rica.
          </span>
        </p>
      </div>
      {/*---------------------------------------------------------------------------------------------------------------------------*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 pb-0 justify-center  "> {/*Arreglar centrado banderas*/}

        <div className="hover-3d ">
          <figure className="w-60 rounded-2xl">
            <img src="/img/argentina.jpg" alt="Tailwind CSS 3D card" />
          </figure>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="hover-3d ">
          <figure className="w-60 rounded-2xl">
            <img src="/img/uruguay.jpg" alt="Tailwind CSS 3D hover" className="shadow-neutral-950"/>
          </figure>

          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div className="hover-3d">
          <figure className="w-60 rounded-2xl">
            <img src="/img/chile.jpg" alt="Tailwind CSS 3D hover" />
          </figure>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-0 md:pt-0 mt-20">
        <button className="btn btn-outline btn-success text-2xl border-2 rounded">Quiero que llegue a mi pais <span></span></button>
      </div>

      

    </main>
  );
}
