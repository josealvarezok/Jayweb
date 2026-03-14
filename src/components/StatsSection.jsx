import React from 'react';

const stats = [
  { label: 'Sistemas IA Desplegados', value: '25+' },
  { label: 'Inversión Gestionada', value: '$1.2M+' },
  { label: 'Horas Ahorradas / Mes', value: '1,500+' },
  { label: 'Casos de Éxito', value: '40+' },
];

export default function StatsSection() {
  return (
    <section className="py-20 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-6xl font-black text-white mb-2 group-hover:text-[#ff5e13] transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-neutral-500 font-bold uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
