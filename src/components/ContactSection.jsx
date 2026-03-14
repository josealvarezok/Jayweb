import React from 'react';
import { InlineWidget } from "react-calendly";
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contacto" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff5e13] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto bg-[#121212] border border-white/10 rounded-[3rem] p-10 md:p-16 relative z-10 shadow-2xl">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Columna Izquierda: Info de Contacto */}
          <div className="flex flex-col justify-center">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 uppercase">
              Domina <br /> <span className="text-[#ff5e13]">Tu Mercado.</span>
            </h2>
            <p className="text-xl text-neutral-400 font-medium mb-12">
              Agenda una auditoría gratuita de 15 minutos o contáctame directamente por los siguientes medios. Descubre exactamente cuánto tiempo y dinero puedes ahorrar con IA y publicidad inteligente.
            </p>

            <div className="space-y-8">
              {/* Teléfono / WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-4 rounded-full text-[#ff5e13]">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Teléfono / WhatsApp</h4>
                  <a href="https://wa.me/59892722226" target="_blank" rel="noreferrer" className="text-neutral-400 font-medium hover:text-white transition-colors">
                    +598 092 722 226
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-4 rounded-full text-[#ff5e13]">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Email</h4>
                  <a href="mailto:josealvarezzok@gmail.com" className="text-neutral-400 font-medium hover:text-white transition-colors">
                    josealvarezzok@gmail.com
                  </a>
                </div>
              </div>

              {/* Ubicación */}
              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-4 rounded-full text-[#ff5e13]">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Ubicación</h4>
                  <p className="text-neutral-400 font-medium">
                    Montevideo & Punta del Este
                  </p>
                </div>
              </div>

              {/* Redes Sociales */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <h4 className="text-white font-bold text-lg mb-4">Seguime</h4>
                <div className="flex gap-4">
                  <a href="https://instagram.com/jaymarketingdigital" target="_blank" rel="noreferrer" className="bg-white/5 p-4 rounded-full text-white hover:bg-[#ff5e13] hover:text-white transition-all duration-300">
                    <Instagram size={24} />
                  </a>
                  <a href="https://linkedin.com/in/josealvarezzok" target="_blank" rel="noreferrer" className="bg-white/5 p-4 rounded-full text-white hover:bg-[#ff5e13] hover:text-white transition-all duration-300">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Calendly */}
          <div className="w-full h-full overflow-hidden rounded-[2rem] border border-[#ff5e13]/20 shadow-2xl relative z-20 bg-[#1c1c1c]">
            <InlineWidget
              url="https://calendly.com/josealvarezzok/asesoria-gratuita-jay-marketing?hide_gdpr_banner=1&primary_color=ff5e13&background_color=1c1c1c&text_color=ffffff"
              styles={{ minWidth: "320px", height: "100%", minHeight: "750px" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
