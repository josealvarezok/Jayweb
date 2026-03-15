import React from 'react';
import { Code2, Bot, Zap, Target, ArrowUpRight, CheckCircle } from 'lucide-react';

const pillars = [
  {
    id: "01",
    icon: <Code2 size={40} className="text-[#ff5e13]" />,
    title: "Desarrollo de Producto",
    tagline: "Del concepto al producto en producción.",
    description: "Construimos la plataforma central de tu idea. Desde aplicaciones SaaS y web hasta sistemas ERP/WMS a medida, diseñamos arquitecturas que escalan junto a tu negocio.",
    capabilities: [
      "Aplicaciones Web y Portales Empresariales",
      "E-commerce de Alto Rendimiento",
      "Sistemas ERP / WMS / CRM a Medida",
      "Integraciones API y arquitectura Microservicios",
    ],
    accent: "orange", // border and highlights
    result: "Producto sólido, listo para el mercado."
  },
  {
    id: "02",
    icon: <Target size={40} className="text-black" />,
    title: "Growth & Performance",
    tagline: "Convertimos inversión en demanda constante.",
    description: "Todo el arsenal de captación en un solo lugar: campañas predictivas con IA, contenido de alto impacto y creatividades que convierten para dominar tu nicho.",
    capabilities: [
      "Meta & Google Ads con optimización por IA",
      "Contenido y creatividades generadas con IA",
      "Social Media y Growth Hacking",
      "Campañas de Influencers de alto ROI",
    ],
    accent: "filled",
    result: "Demanda constante y ventas en piloto automático."
  },
  {
    id: "03",
    icon: <Bot size={40} className="text-[#ff5e13]" />,
    title: "Sistemas e IA",
    tagline: "Automatiza. Escala. Domina.",
    description: "Reemplazamos tareas manuales con agentes autónomos de Inteligencia Artificial. Desde calificación de leads hasta la gestión interna completa de tu empresa, 24/7.",
    capabilities: [
      "Agentes de Ventas y Atención IA (24/7)",
      "Automatización de procesos internos (RPA)",
      "Integración de IA en sistemas existentes",
      "Capacitación y mentoría en IA para equipos",
    ],
    accent: "orange",
    result: "Costos operativos reducidos. Equipo enfocado en crecer."
  }
];

export default function ServicesGrid() {
  return (
    <section id="servicios" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 uppercase text-white">
          Nuestras <span className="text-[#ff5e13]">Soluciones</span>
        </h2>
        <p className="text-xl text-neutral-400 font-medium max-w-2xl">
          Tres pilares end-to-end. Construimos, automatizamos y escalamos tu negocio de principio a fin.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {pillars.map((pillar, index) => (
          <div
            key={index}
            className={`group relative rounded-[2rem] p-10 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${pillar.accent === 'filled'
                ? 'bg-[#ff5e13] text-black'
                : 'bg-[#121212] border border-white/10 hover:border-[#ff5e13]/50 text-white'
              }`}
          >
            {/* BG Number */}
            <div className={`absolute bottom-6 right-8 text-8xl font-black select-none pointer-events-none transition-all duration-300 ${pillar.accent === 'filled' ? 'text-black/10' : 'text-white/5 group-hover:text-[#ff5e13]/10'
              }`}>
              {pillar.id}
            </div>

            <div className="relative z-10">
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${pillar.accent === 'filled' ? 'bg-black/15' : 'bg-white/5 border border-white/10'
                }`}>
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className={`text-3xl font-black uppercase mb-2 ${pillar.accent === 'filled' ? 'text-black' : 'text-white'}`}>
                {pillar.title}
              </h3>
              <p className={`text-sm font-bold uppercase tracking-widest mb-5 ${pillar.accent === 'filled' ? 'text-black/60' : 'text-[#ff5e13]'}`}>
                {pillar.tagline}
              </p>
              <p className={`font-medium leading-relaxed mb-8 ${pillar.accent === 'filled' ? 'text-black/80' : 'text-neutral-400'}`}>
                {pillar.description}
              </p>

              {/* Capabilities */}
              <ul className="space-y-3 mb-8">
                {pillar.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className={`shrink-0 mt-0.5 ${pillar.accent === 'filled' ? 'text-black' : 'text-[#ff5e13]'}`}
                    />
                    <span className={`text-sm font-medium ${pillar.accent === 'filled' ? 'text-black/80' : 'text-neutral-300'}`}>
                      {cap}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Result Footer */}
            <div className={`relative z-10 flex items-center justify-between border-t pt-5 ${pillar.accent === 'filled' ? 'border-black/20' : 'border-white/10'
              }`}>
              <span className={`text-sm font-bold ${pillar.accent === 'filled' ? 'text-black/70' : 'text-neutral-400'}`}>
                {pillar.result}
              </span>
              <a
                href="#contacto"
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${pillar.accent === 'filled'
                    ? 'bg-black text-white hover:bg-white hover:text-black'
                    : 'bg-white/5 text-white group-hover:bg-[#ff5e13] group-hover:text-white'
                  }`}
              >
                <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
