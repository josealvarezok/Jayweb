import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const [chars, setChars] = useState(0);
  const text1 = "Tú traes la idea, ";
  const text2 = "Yo me encargo";
  const text3 = " del resto.";
  const totalChars = text1.length + text2.length + text3.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setChars(prev => {
        if (prev >= totalChars) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 50); // Velocidad de escritura un poco mas rapida por texto largo
    return () => clearInterval(interval);
  }, []);

  const getPart = (text, startIdx) => {
    const charsAvailable = Math.max(0, chars - startIdx);
    return text.slice(0, charsAvailable);
  };

  return (
    <section className="pt-40 pb-16 px-4 max-w-7xl mx-auto flex flex-col items-center text-center relative">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff5e13] rounded-full blur-[180px] opacity-10 pointer-events-none"></div>

      <div className="flex items-center gap-3 mb-6 bg-white/5 backdrop-blur-md border border-white/10 px-5 py-2 rounded-full text-white font-medium text-sm md:text-base tracking-wide shadow-2xl">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        Disponible para nuevos proyectos
      </div>

      <h1 className="grid text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1] uppercase mb-8 text-white max-w-5xl">
        <span className="col-start-1 row-start-1 opacity-0 pointer-events-none select-none">
          Tú traes la idea, <br /> Yo me encargo del resto.
        </span>

        <span className="col-start-1 row-start-1">
          {getPart(text1, 0)}
          <br className="hidden md:block" />
          <span className="text-[#ff5e13]">{getPart(text2, text1.length)}</span>
          {getPart(text3, text1.length + text2.length)}
          <span className="animate-pulse text-[#ff5e13] font-light ml-2">|</span>
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl font-medium mb-12 relative z-10">
        Construimos tu producto y multiplicamos tus resultados usando <strong className="text-white">Datos, IA y Automatizaciones</strong>. Tú te enfocas en liderar, nosotros en ejecutar.
      </p>
      <a href="#contacto" className="group relative z-10 inline-flex items-center justify-center gap-4 bg-[#ff5e13] text-white px-10 py-5 rounded-full font-bold text-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_40px_-10px_#ff5e13]">
        <span className="relative z-10 group-hover:text-black transition-colors duration-300">Agendar Auditoría Gratuita</span>
        <ArrowRight className="relative z-10 group-hover:translate-x-2 group-hover:text-black transition-all duration-300" size={24} />
        <div className="absolute inset-0 bg-white transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
      </a>
    </section>
  );
}
