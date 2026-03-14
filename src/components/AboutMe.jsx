import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import profilePhoto from '../assets/jose_alvarez_photo.jpg';

export default function AboutMe() {
  return (
    <section id="sobre-mi" className="py-24 px-4 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 relative">
          <div className="aspect-square bg-[#171717] rounded-3xl overflow-hidden border border-white/10 relative z-10 group">
            <img
              src={profilePhoto}
              alt="Jay - Especialista en Marketing e IA"
              className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-4xl font-black uppercase">Jay.</h3>
              <p className="text-[#ff5e13] font-bold">Ingeniero en IA & Estratega Digital</p>
            </div>
          </div>

          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#ff5e13] rounded-3xl z-0"></div>
        </div>

        <div className="md:w-1/2 space-y-8">
          <h2 className="text-5xl font-black tracking-tighter uppercase">
            La Ingeniería detrás <br /> de las <span className="text-[#ff5e13]">Ventas.</span>
          </h2>
          <p className="text-xl text-neutral-400">
            No soy solo un marketer. Mi formación en Ingeniería de Inteligencia Artificial me permite crear arquitecturas de ventas que las agencias tradicionales no pueden igualar.
          </p>
          <ul className="space-y-4">
            {[
              'Soluciones técnicas complejas aplicadas a tu negocio.',
              'Enfoque 100% basado en datos y retorno de inversión (ROI).',
              'Integración nativa de IA en todos los procesos creativos y analíticos.'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-4 bg-[#121212] p-4 rounded-xl border border-white/5">
                <CheckCircle2 className="text-[#ff5e13] shrink-0" size={24} />
                <span className="font-medium text-neutral-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
