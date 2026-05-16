"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PlaceholderImage } from '../ui/PlaceholderImage';

const GLOVO_LINK = "https://glovoapp.com/it/it/pesaro/stores/pizza-fly-pes";

const services = [
  {
    id: "birthday",
    title: "Feste di Compleanno",
    className: "md:col-span-1 md:row-span-2 h-[300px] md:h-auto",
    delay: 0.1
  },
  {
    id: "corporate",
    title: "Eventi Aziendali",
    className: "md:col-span-2 md:row-span-1 h-[250px]",
    delay: 0.2
  },
  {
    id: "special",
    title: "Occasioni Speciali",
    className: "md:col-span-1 md:row-span-1 h-[250px]",
    delay: 0.3
  },
  {
    id: "picnic",
    title: "Picnic",
    className: "md:col-span-1 md:row-span-1 h-[250px]",
    delay: 0.4
  }
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Perfetta per <span className="text-blue-900">Ogni Occasione</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl">
            Qualsiasi sia il tuo evento, la pizza è sempre la scelta giusta. Scopri i nostri servizi dedicati.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 min-h-[600px]">
          {services.map((service) => (
            <motion.a
              href={GLOVO_LINK}
              key={service.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              className={`group relative rounded-3xl overflow-hidden block ${service.className}`}
            >
              <PlaceholderImage 
                text={service.title} 
                className="absolute inset-0 w-full h-full rounded-none border-none bg-slate-200 transition-transform duration-700 group-hover:scale-105" 
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <div className="flex items-center gap-2 text-blue-300 font-semibold group-hover:text-white transition-colors">
                  ACQUISTA ORA <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
