"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import { SmartImage } from '../ui/SmartImage';

export function SpecialEvents() {
  return (
    <section className="relative w-full bg-blue-950 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center py-16 md:py-24 lg:py-0">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 lg:py-32 z-10 text-center lg:text-left pr-0 lg:pr-12"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Ordini per <span className="text-blue-300">Eventi Speciali</span>
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Stai organizzando una festa, un evento aziendale o un compleanno numeroso? 
              Richiediamo un preavviso di almeno 24 ore per grandi ordini, per garantirti la massima qualità e puntualità.
            </p>
            <a href="tel:+393291286550" className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-medium transition-colors border-2 border-white bg-transparent text-white hover:bg-white/10 h-14 px-8 gap-2 w-full sm:w-auto min-h-[44px]">
              <PhoneCall className="w-5 h-5" />
              CHIAMATA D&apos;EMERGENZA ORA
            </a>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 h-[300px] lg:h-auto lg:absolute lg:top-0 lg:bottom-0 lg:right-0 mt-12 lg:mt-0"
          >
            <SmartImage 
              src="events.jpg"
              alt="Evento Speciale"
              fallbackText="events.jpg" 
              className="w-full h-full object-cover rounded-xl lg:rounded-none lg:rounded-l-[4rem] bg-blue-900 border-none opacity-80" 
              unoptimized
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
