"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { SmartImage } from '../ui/SmartImage';
import { Pizza } from 'lucide-react';

const GLOVO_LINK = "https://glovoapp.com/it/it/pesaro/stores/pizza-fly-pes";

export function Hero() {
  return (
    <section id="top" className="relative pt-4 pb-12 px-4 md:px-6 container mx-auto">
      {/* Dark rounded container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden flex flex-col lg:flex-row relative z-10"
      >
        {/* Left Content */}
        <div className="flex-1 p-6 pt-8 md:p-16 flex flex-col justify-center gap-5 md:gap-6 z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-slate-800/50 text-blue-200 px-3 py-1.5 md:px-4 md:py-2 rounded-full w-fit backdrop-blur-sm border border-slate-700"
          >
            <Pizza className="w-4 h-4" />
            <span className="text-xs md:text-sm font-semibold tracking-wide uppercase font-sans">Pizzeria d&apos;Asporto a Pesaro</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight"
          >
            BENVENUTO <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">A PIZZA FLY</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-300 text-base md:text-xl max-w-xl leading-relaxed font-sans"
          >
            Assapora la vera pizza artigianale comodamente a casa tua.
            Ingredienti freschissimi, impasto leggero e consegna rapida in tutta Pesaro.
          </motion.p>
        </div>

        {/* Right Visual */}
        <div className="flex-1 relative min-h-[250px] md:min-h-[300px] lg:min-h-full flex items-end justify-center p-6 md:p-8 lg:p-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-xs md:max-w-md aspect-square lg:absolute lg:bottom-[-10%] lg:right-0 lg:w-[120%] lg:max-w-none z-30 rounded-full overflow-hidden"
          >
            <SmartImage
              src="hero-pizza.png"
              alt="Pizza Hero"
              fallbackText="hero.jpg"
              className="rounded-full shadow-2xl border-0 border-slate-800"
              priority
              unoptimized
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Primary CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex justify-center -mt-8 relative z-30 px-4"
      >
        <Button
          href={GLOVO_LINK}
          size="lg"
          className="w-full md:w-auto text-lg shadow-xl shadow-blue-900/20 border-4 border-white"
        >
          ORDINA ONLINE
        </Button>
      </motion.div>
    </section>
  );
}
