"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Bike, Clock, MapPin, Pizza } from 'lucide-react';
import { SmartImage } from '../ui/SmartImage';
import { Button } from '../ui/Button';

const GLOVO_LINK = "https://glovoapp.com/it/it/pesaro/stores/pizza-fly-pes";

export function GlovoDelivery() {
  return (
    <section id="delivery" className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider font-sans">Consegna con</span>
            <Image 
              src="/Glovo_Logo.png" 
              alt="Glovo" 
              width={100} 
              height={36} 
              className="object-contain"
            />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">
            Il Nostro Menu, <span className="text-emerald-600">a Casa Tua</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-sans">
            Ordina le nostre pizze, kebab e specialità direttamente su Glovo. Consegna rapida in tutta Pesaro.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-slate-900 rounded-2xl md:rounded-3xl overflow-hidden"
        >
          <div className="flex flex-col lg:flex-row">
            
            {/* Left: Custom Graphic (Abstract Delivery) */}
            <div className="lg:w-1/2 min-h-[300px] md:min-h-[400px] bg-slate-800 relative overflow-hidden flex items-center justify-center p-8">
              {/* Glowing Background Blobs */}
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-[80px] mix-blend-screen animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] mix-blend-screen animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-[80px] mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }}></div>

              {/* Dotted Route Line SVG */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <path d="M50 350 Q 150 300 200 200 T 350 50" stroke="#10b981" strokeWidth="4" strokeDasharray="10 10" />
              </svg>

              {/* Floating Icons */}
              <div className="relative z-10 w-full max-w-sm aspect-square">
                {/* Store Point */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="absolute bottom-10 left-10 w-16 h-16 bg-slate-900 rounded-2xl border-2 border-slate-700 flex items-center justify-center shadow-2xl"
                >
                  <Pizza className="w-8 h-8 text-amber-400" />
                </motion.div>

                {/* Home Point */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.4 }}
                  className="absolute top-10 right-10 w-16 h-16 bg-emerald-500 rounded-full border-4 border-slate-900 flex items-center justify-center shadow-2xl shadow-emerald-500/50"
                >
                  <MapPin className="w-8 h-8 text-white" />
                  <div className="absolute -bottom-2 w-3 h-3 bg-white rounded-full animate-ping"></div>
                </motion.div>

                {/* Bike Moving */}
                <motion.div 
                  initial={{ opacity: 0, x: -20, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-slate-900 rounded-2xl border-2 border-slate-700 flex items-center justify-center shadow-2xl shadow-black/50 z-20"
                >
                  <Bike className="w-10 h-10 text-emerald-400" />
                  
                  {/* Speed lines */}
                  <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-6 h-[2px] bg-emerald-500/50 rounded-full"></div>
                  <div className="absolute top-[40%] -translate-y-1/2 -left-6 w-4 h-[2px] bg-emerald-500/30 rounded-full"></div>
                  <div className="absolute top-[60%] -translate-y-1/2 -left-3 w-3 h-[2px] bg-emerald-500/40 rounded-full"></div>
                </motion.div>

                {/* Floating tags */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="absolute top-1/4 left-0 bg-slate-800 border border-slate-700 px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
                >
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span className="text-white text-sm font-semibold">In arrivo...</span>
                </motion.div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="lg:w-1/2 p-6 md:p-10 lg:p-14 flex flex-col justify-center gap-6">
              <div className="flex items-center gap-3">
                <Image 
                  src="/Glovo_Logo.png" 
                  alt="Glovo" 
                  width={120} 
                  height={42} 
                  className="object-contain brightness-0 invert"
                />
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full font-sans border border-emerald-400/20">Partner Ufficiale</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Ordina con Pochi Tap
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                    <Bike className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-sm font-sans">Consegna veloce</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-sm font-sans">Traccia l&apos;ordine</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-sm font-sans">Tutta Pesaro</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Button 
                  href={GLOVO_LINK} 
                  className="bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 gap-2"
                  size="lg"
                >
                  Ordina su Glovo <ExternalLink className="w-4 h-4" />
                </Button>
                <a 
                  href={GLOVO_LINK}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-slate-400 font-medium hover:text-white transition-colors min-h-[44px] px-4 font-sans text-sm"
                >
                  Vedi il menu completo →
                </a>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
