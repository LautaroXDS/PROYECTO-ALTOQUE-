import { MapPin, Trophy, Calendar, Clock, ArrowRight } from "lucide-react";
import BannerDinamico from "@/components/BannerDinamico";
import SponsorsBanner from "@/components/SponsorsBanner";
import CTASection from "@/components/CTASection";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentes";

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
      ;{ }
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
      {/* Banderas de paises */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 pb-0 justify-center  ">
        {" "}
        {/*Arreglar centrado banderas*/}
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
            <img
              src="/img/uruguay.jpg"
              alt="Tailwind CSS 3D hover"
              className="shadow-neutral-950"
            />
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
      {/* Boton llegue a mi pais */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0 mt-20 mb-20">
        <button className="group w-full max-w-md flex items-center justify-between border-2 border-emerald-500 text-emerald-600 bg-white px-6 py-3 rounded-2xl font-bold hover:bg-emerald-50 transition shadow-sm">
          {/* Texto a la izquierda */}
          <span>Quiero que llegue a mi país</span>

          {/* Flecha a la derecha (se mueve al pasar el mouse) */}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      {/*---------------------------------------------------------------------------------------------------------------------------*/}

      <SponsorsBanner />

      {/*---------------------------------------------------------------------------------------------------------------------------*/}

      <CTASection />
      {/*---------------------------------------------------------------------------------------------------------------------------*/}

      <BannerDinamico />

      {/*---------------------------------------------------------------------------------------------------------------------------*/}

      <PreguntasFrecuentes />

      {/*---------------------------------------------------------------------------------------------------------------------------*/}


      <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </main>
  );
}
