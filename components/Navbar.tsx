import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm z-50 relative"> {/* z-50 para que quede siempre arriba */}
      
      {/* --- IZQUIERDA (Menú Móvil + Logo) --- */}
      <div className="navbar-start">
        
        {/* Dropdown del Menú Hamburguesa */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          
          {/* --- CAMBIO 1: Agregamos las opciones extra aquí para móvil --- */}
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/canchas">Canchas</Link></li>
            <li><Link href="/funcionalidades">Funcionalidades</Link></li>
            {/* Divisor */}
            <li className="menu-title">Cuenta</li> 
            <li><Link href="/login">Soy Dueño</Link></li>
          </ul>
        </div>
        
        {/* LOGO */}
        <Link href="/" className="btn btn-ghost text-xl font-bold text-emerald-600 px-2">
            {/* Asegúrate de que el logo tenga un tamaño fijo y pequeño en móvil */}
            <img src="/img/Logo.png" alt="Logo" className="h-8 w-auto" />
        </Link>
      </div>

      {/* --- CENTRO (Menú Desktop) --- */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-gray-600">
          <li><Link href="/" className="hover:text-emerald-600">Inicio</Link></li>
          <li><Link href="/canchas" className="hover:text-emerald-600">Canchas</Link></li>
          <li><Link href="/funcionalidades" className="hover:text-emerald-600">Funcionalidades</Link></li>
        </ul>
      </div>

      {/* --- DERECHA (Botones) --- */}
      <div className="navbar-end gap-2">
        
        {/* CAMBIO 2: Ocultamos "Soy Dueño" en pantallas chicas (hidden) y lo mostramos en medianas (md:flex) */}
        <Link href="/login" className="hidden md:flex btn btn-outline btn-success btn-sm">
            Soy Dueño
        </Link>

        {/* Este botón queda visible siempre, pero podemos achicarlo un poco si quieres */}
        <Link href="/login" className="btn btn-primary btn-sm text-white text-xs sm:text-sm">
            Ingresar
        </Link>
      </div>
      
    </div>
  );
}