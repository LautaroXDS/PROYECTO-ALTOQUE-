"use client";

import { useState, useEffect } from "react";

export default function MarketingBanner() {
  
  // 1. Frases que van a rotar (Edítalas a tu gusto)
  const mensajes = [
    "¡El software de gestión de complejos deportivos Nº 1 en LATAM!",
    "Llegá a más clientes y ocupá tus espacios libres automáticamente.",
    "Olvidate de las señas: Cobrá online con MercadoPago.",
    "Gestioná tu club desde cualquier lugar con nuestra App."
  ];

  const [indice, setIndice] = useState(0);

  // 2. Lógica del Reloj (5 segundos)
  useEffect(() => {
    const reloj = setInterval(() => {
      setIndice((prev) => (prev + 1) % mensajes.length);
    }, 5000); 

    return () => clearInterval(reloj);
  }, []);

  return (
    // CONTENEDOR PRINCIPAL (La franja verde)
    <div className="relative w-full bg-emerald-500 overflow-hidden py-8 md:py-10 shadow-lg">
      
      {/* --- FONDO CON PATRÓN (Decoración visual tipo tu foto) --- */}
      {/* Usamos un degradado y opacidad para simular las formas geométricas */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%,transparent_100%)] bg-[length:40px_40px]"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white rounded-full opacity-20 blur-2xl"></div>
      </div>

      {/* --- TEXTO QUE ROTA --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <p 
            key={indice} 
            className="text-white text-xl md:text-2xl font-bold tracking-wide animate-fade-in-up"
        >
          {mensajes[indice]}
        </p>
      </div>
      
    </div>
  );
}