import React from 'react';

export default function Navigation() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 px-4 flex justify-center">
      <nav className="bg-[#171717]/80 backdrop-blur-md border border-white/10 text-white px-6 py-3 rounded-full flex justify-between items-center w-full max-w-4xl shadow-2xl">
        <div className="text-xl font-black tracking-tighter">
          JAY<span className="text-[#ff5e13]">.</span>
        </div>
        <div className="hidden md:flex space-x-5 text-sm font-medium">
          <a href="#servicios" className="hover:text-[#ff5e13] transition text-neutral-300">Servicios</a>
          <a href="#proceso" className="hover:text-[#ff5e13] transition text-neutral-300">Proceso</a>
          <a href="#casos-de-exito" className="hover:text-[#ff5e13] transition text-neutral-300">Casos de Éxito</a>
          <a href="#sobre-mi" className="hover:text-[#ff5e13] transition text-neutral-300">Sobre mí</a>
          <a href="#faq" className="hover:text-[#ff5e13] transition text-neutral-300">FAQ</a>
        </div>
        <a href="#contacto" className="bg-[#ff5e13] hover:bg-white hover:text-black text-white px-5 py-2 rounded-full font-bold text-sm transition-all duration-300">
          Agendar
        </a>
      </nav>
    </div>
  );
}
