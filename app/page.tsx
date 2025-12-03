import { ArrowRight } from "lucide-react";
import BannerDinamico from "@/components/BannerDinamico";
import SponsorsBanner from "@/components/SponsorsBanner";
import CTASection from "@/components/CTASection";
import PreguntasFrecuentes from "@/components/PreguntasFrecuentes";
import ComoFunciona  from "@/components/ComoFunciona";

import { supabase } from '@/lib/supabase'
import Buscador from '@/components/Buscador'

export default async function Home() {
  
  const { data: canchasRaw } = await supabase
    .from('canchas')
    .select('deporte')


  const deportesUnicos = Array.from(new Set(canchasRaw?.map(item => item.deporte)))

  return (
    <main className="min-h-screen bg-white">
      <div className="relative w-full min-h-[600px] flex flex-col justify-center items-center pb-20 md:pb-0">
        
  
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0">
          <h1 className="text-5xl md:text-6xl font-black text-emerald-600 leading-tight mb-4 text-left">
            Reserva tu cancha <br />
            <span className="text-emerald-500">al instante</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-lg mb-8 font-medium text-left mx-auto md:mx-0">
            Explorá las canchas disponibles en tu ciudad y en tiempo real.
          </p>
        </div>


        <div className="relative mt-10 md:absolute md:mt-0 md:-bottom-8 w-[95%] max-w-6xl z-20">
        
            <Buscador deportesDisponibles={deportesUnicos} />
        </div>
        
      </div>

      <div className="h-32 bg-slate-50"></div>
      
      <ComoFunciona />
      
      <BannerDinamico />
      
   
      
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 pb-0 justify-center">
        <div className="hover-3d">
          <figure className="w-60 rounded-2xl overflow-hidden shadow-lg">
            <img src="/img/argentina.jpg" alt="Argentina" className="w-full h-auto object-cover" />
          </figure>
        </div>
        <div className="hover-3d">
          <figure className="w-60 rounded-2xl overflow-hidden shadow-lg">
            <img src="/img/uruguay.jpg" alt="Uruguay" className="w-full h-auto object-cover" />
          </figure>
        </div>
        <div className="hover-3d">
          <figure className="w-60 rounded-2xl overflow-hidden shadow-lg">
            <img src="/img/chile.jpg" alt="Chile" className="w-full h-auto object-cover" />
          </figure>
        </div>
      </div>

     
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 md:pt-0 mt-20 mb-20">
        <button className="group w-full max-w-md flex items-center justify-between border-2 border-emerald-500 text-emerald-600 bg-white px-6 py-3 rounded-2xl font-bold hover:bg-emerald-50 transition shadow-sm">
          <span>Quiero que llegue a mi país</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* ----------------------------------------------------------------------- */}

      <SponsorsBanner />

      {/* ----------------------------------------------------------------------- */}

      <CTASection />
      
      {/* ----------------------------------------------------------------------- */}

      <BannerDinamico />

      {/* ----------------------------------------------------------------------- */}

      <PreguntasFrecuentes />

      {/* ----------------------------------------------------------------------- */}

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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </main>
  );
}