import React from 'react';
import { Lightbulb, Code2, Rocket } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      id: "01",
      title: "De la Idea a los Datos",
      description: "Entendemos tu visión, analizamos el mercado y diseñamos la arquitectura técnica de tu producto o sistema.",
      icon: <Lightbulb size={32} className="text-[#ff5e13]" />
    },
    {
      id: "02",
      title: "Desarrollo e IA",
      description: "Construimos el producto integrando Inteligencia Artificial desde el núcleo para multiplicar capacidades y reducir costos.",
      icon: <Code2 size={32} className="text-[#ff5e13]" />
    },
    {
      id: "03",
      title: "Lanzamiento y Aceleración",
      description: "Puesta en marcha con automatizaciones operativas y campañas de Ads predictivas para escalar y dominar tu nicho.",
      icon: <Rocket size={32} className="text-[#ff5e13]" />
    }
  ];

  return (
    <section id="proceso" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#ff5e13] rounded-full blur-[150px] opacity-5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase text-white">
            Nuestro <span className="text-[#ff5e13]">Proceso</span>
          </h2>
          <p className="text-xl text-neutral-400 font-medium max-w-3xl mx-auto">
            Metodología probada para transformar ideas en productos altamente rentables de forma ágil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="bg-[#121212] border border-white/10 rounded-[2rem] p-10 hover:border-[#ff5e13]/50 transition-colors duration-300 relative group">
              <div className="absolute top-6 right-8 text-6xl font-black text-white/5 group-hover:text-[#ff5e13]/10 transition-colors duration-300 select-none">
                {step.id}
              </div>
              <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border border-white/5">
                {step.icon}
              </div>
              <h3 className="text-2xl font-black text-white uppercase mb-4">{step.title}</h3>
              <p className="text-neutral-400 font-medium leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
