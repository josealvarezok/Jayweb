import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function SuccessStories() {
  const stories = [
    {
      name: "Andrés M.",
      role: "CEO, E-Commerce Deportivo",
      result: "+45% en ROAS",
      quote: "Traíamos la idea de escalar pero sin la data. Ellos armaron toda la infraestructura, y hoy en día nuestras ventas corren en piloto automático. El nivel de control que tenemos ahora no tiene precio.",
    },
    {
      name: "Valeria S.",
      role: "Directora, Clínica Estética",
      result: "-20hs operativas semanales",
      quote: "Nos saturábamos agendando citas. Jay implementó un agente IA que califica y agenda pacientes 24/7. Literalmente me devolvieron mi tiempo y aumentaron nuestra facturación.",
    },
    {
      name: "Martín P.",
      role: "Fundador, Startup B2B",
      result: "MVP lanzado en 4 semanas",
      quote: "Un equipo brutal. Solo le pasé la idea de mi SaaS y ellos construyeron todo, integraron IA y nos dejaron el funnel armado. Convertimos al primer mes.",
    }
  ];

  return (
    <section id="casos-de-exito" className="py-24 px-4 bg-[#0a0a0a] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase text-white">
            Casos de <span className="text-[#ff5e13]">Éxito</span>
          </h2>
          <p className="text-xl text-neutral-400 font-medium max-w-3xl mx-auto">
            No te fíes de nuestra palabra. Fíate de los resultados que hemos generado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div key={idx} className="bg-[#121212] border border-white/10 rounded-[2rem] p-10 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300">
              <div>
                <Quote className="text-[#ff5e13] mb-6 opacity-50" size={40} />
                <p className="text-lg text-neutral-300 font-medium mb-8 leading-relaxed italic">
                  "{story.quote}"
                </p>
              </div>
              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center gap-1 mb-2 text-[#ff5e13]">
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                  <Star size={18} fill="currentColor" />
                </div>
                <h4 className="text-white font-bold text-xl">{story.name}</h4>
                <p className="text-neutral-500 text-sm">{story.role}</p>
                <div className="mt-4 inline-block bg-[#ff5e13]/10 border border-[#ff5e13]/30 text-[#ff5e13] px-3 py-1 rounded-full text-sm font-bold">
                  {story.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
