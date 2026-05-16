"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SmartImage } from '@/components/ui/SmartImage';

const galleryItems = [
  { id: 1, label: "Margherita D.O.P.", aspect: "aspect-square" },
  { id: 2, label: "Pizza al Taglio", aspect: "aspect-[4/3]" },
  { id: 3, label: "Il Forno", aspect: "aspect-[3/4]" },
  { id: 5, label: "Kebab Speciale", aspect: "aspect-[3/4]" },
  { id: 6, label: "Ingredienti Freschi", aspect: "aspect-[4/3]" },
  { id: 7, label: "Diavola Piccante", aspect: "aspect-square" },
  { id: 8, label: "Il Locale", aspect: "aspect-[4/3]" },
  { id: 9, label: "Impasto a Mano", aspect: "aspect-[3/4]" },
  { id: 10, label: "Consegna Glovo", aspect: "aspect-square" },
];

export default function GalleriaPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Hero banner */}
        <section className="bg-slate-900 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
            >
              La Nostra <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">Galleria</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-lg mt-4 max-w-2xl mx-auto font-sans"
            >
              Scopri le nostre creazioni, il nostro locale e la passione che mettiamo in ogni pizza.
            </motion.p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="break-inside-avoid"
                >
                  <div className={`${item.aspect} group cursor-pointer relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300`}>
                    <SmartImage 
                      src={`gallery/${String(item.id).padStart(2, '0')}.jpg`}
                      alt={item.label}
                      fallbackText={`gallery/${String(item.id).padStart(2, '0')}.jpg`} 
                      className="w-full h-full rounded-2xl border-none bg-slate-100 transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-semibold text-lg">{item.label}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
