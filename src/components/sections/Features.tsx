"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SmartImage } from '../ui/SmartImage';

const features = [
  {
    id: "01",
    title: "Pizza Artigianale Indimenticabile",
    description: "Ogni nostra pizza è un'opera d'arte creata con passione e ingredienti selezionati. Dal pomodoro San Marzano D.O.P. alla vera mozzarella di bufala, portiamo sulla tua tavola solo il meglio della tradizione italiana.",
    imagePosition: "left" as const,
    image: "feature-01.jpg",
  },
  {
    id: "02",
    title: "Impasto Perfetto a Lunga Lievitazione",
    description: "Il segreto della nostra leggerezza è il tempo. Utilizziamo pochissimo lievito e lasciamo riposare l'impasto per almeno 48 ore. Il risultato? Una pizza incredibilmente digeribile, croccante fuori e morbida dentro.",
    imagePosition: "right" as const,
    image: "feature-02.jpg",
  },
  {
    id: "03",
    title: "Assapora l'Arte della Vera Pizza",
    description: "Non facciamo solo pizza, creiamo esperienze. I nostri pizzaioli lavorano ogni panetto a mano, garantendo quella consistenza unica che solo la vera lavorazione artigianale può dare.",
    imagePosition: "left" as const,
    image: "feature-03.jpg",
  }
];

export function Features() {
  return (
    <section id="features" className="py-12 md:py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Vivi la Pizza come <span className="text-blue-900">Mai Prima d&apos;Ora</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            Scopri cosa rende la nostra pizza così speciale ed amata in tutta Pesaro.
          </p>
        </motion.div>

        <div className="flex flex-col gap-10 md:gap-20">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className={`flex flex-col gap-6 lg:gap-14 items-center relative ${
                feature.imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
              }`}
            >
              {/* Background Number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8rem] md:text-[16rem] font-black text-slate-200/40 -z-10 pointer-events-none select-none leading-none">
                {feature.id}
              </div>

              {/* Image */}
              <motion.div 
                initial={{ opacity: 0, x: feature.imagePosition === 'left' ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="w-full lg:w-1/2 aspect-[4/3] relative z-10 rounded-2xl overflow-hidden"
              >
                <SmartImage 
                  src={feature.image}
                  alt={feature.title}
                  fallbackText={feature.image}
                  className="rounded-2xl shadow-lg"
                  unoptimized={feature.id === "03"}
                />
              </motion.div>

              {/* Text */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="w-full lg:w-1/2 flex flex-col justify-center relative z-10 text-center lg:text-left"
              >
                <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-blue-900 font-bold mb-3">
                  <span className="w-8 h-[2px] bg-blue-900"></span>
                  {feature.id}
                </div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-3 md:mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
