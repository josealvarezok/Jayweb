import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      question: "¿Cuánto tiempo toma ver resultados?",
      answer: "Depende del punto de partida, pero típicamente nuestros clientes ven un aumento en ROAS o ahorros de tiempo operativos en los primeros 30 a 45 días tras implementar nuestros agentes y automatizaciones."
    },
    {
      question: "¿Necesito saber de programación o inteligencia artificial?",
      answer: "Absolutamente no. Nuestra propuesta es \"Tú traes la idea, nosotros nos encargamos del resto\". Entregamos sistemas llaves en mano y capacitamos a tu equipo en cómo utilizarlos."
    },
    {
      question: "¿Trabajan solo para empresas grandes o también startups?",
      answer: "Trabajamos con empresas que ya tienen tracción y buscan escalar (ahorrar costos o multiplicar ventas) y también con startups fondeadas que necesitan lanzar productos sólidos rápidamente."
    },
    {
      question: "¿Cuáles son los costos asociados a las plataformas de Ads o IA?",
      answer: "Nuestros honorarios por servicio son independientes del presupuesto de pauta o costos de servidores (API de OpenAI, AWS, Meta Ads). En la auditoría gratuita te daremos un estimado transparente de esos costos."
    },
    {
      question: "¿Qué pasa si mis procesos actuales son un caos?",
      answer: "Esa es nuestra especialidad. Antes de automatizar o escalar, realizamos una auditoría profunda para ordenar la casa y diseñar arquitecturas limpias y eficientes."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-24 px-4 relative max-w-4xl mx-auto">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#ff5e13] rounded-full blur-[150px] opacity-10 pointer-events-none -translate-x-1/2"></div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase text-white">
          Preguntas <span className="text-[#ff5e13]">Frecuentes</span>
        </h2>
        <p className="text-xl text-neutral-400 font-medium">
          Todo lo que necesitas saber antes de empezar.
        </p>
      </div>

      <div className="space-y-4 relative z-10">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-[#1c1c1c] border-[#ff5e13]/50 shadow-lg' : 'bg-[#121212] border-white/10 hover:border-white/30'}`}
          >
            <button 
              className="w-full px-6 py-6 flex justify-between items-center text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg md:text-xl font-bold text-white pr-8">
                {faq.question}
              </h3>
              <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-[#ff5e13] text-white' : 'bg-white/5 text-[#ff5e13]'}`}>
                {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-neutral-400 font-medium leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
