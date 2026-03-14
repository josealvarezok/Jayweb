import React from 'react';
import googleLogo from '../assets/google-partner.png';
import metaLogo from '../assets/meta-partner.png';
import azureLogo from '../assets/microsoft-partner.png';
import awsLogo from '../assets/aws-partner.png';

const partners = [
  { name: 'Google Partner', logo: googleLogo, className: 'scale-[1.0]' },
  { name: 'Meta Business Partner', logo: metaLogo, className: 'scale-[1.6]' },
  { name: 'Azure Partner', logo: azureLogo, className: 'scale-[1.7]' },
  { name: 'AWS Partner', logo: awsLogo, className: 'scale-[1.6]' },
];

export default function PartnerBadges() {
  return (
    <section className="py-12 border-y border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-neutral-500 text-xs font-bold tracking-[0.2em] uppercase mb-10 text-center">
          Official Partners & Certifications
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-20 place-items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center gap-4 transition-all duration-500"
            >
              <div className="w-32 h-20 md:w-44 md:h-24 relative flex items-center justify-center">
                {/* 
                   Note: Professional agencies use grayscale logos that gain color on hover.
                */}
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className={`max-w-full max-h-full object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out ${partner.className}`}
                  onError={(e) => {
                    // Fallback if image not found during development
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback Placeholder (Generic) */}
                <div className="hidden absolute inset-0 text-[10px] items-center justify-center border border-white/10 rounded bg-white/5 text-neutral-500 text-center px-2">
                  {partner.name} <br /> Placeholder
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
