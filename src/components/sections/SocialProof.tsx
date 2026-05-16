"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { PlaceholderImage } from '../ui/PlaceholderImage';

const reviews = [
  {
    id: 1,
    name: "Marco Rossi",
    text: "La migliore pizza d'asporto a Pesaro! Impasto leggerissimo e ingredienti di prima qualità. Consegna sempre puntuale.",
    rating: 5
  },
  {
    id: 2,
    name: "Giulia Bianchi",
    text: "Ormai è il nostro appuntamento fisso del sabato sera. La pizza è sempre calda e buonissima. Bravi!",
    rating: 5
  },
  {
    id: 3,
    name: "Luca Verdi",
    text: "Ottima scoperta! Pizza arrivata in perfetto orario, ben cotta e condita generosamente. Consigliatissima.",
    rating: 4
  }
];

export function SocialProof() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12"
        >
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Powered by</span>
              <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-bold tracking-tight text-slate-800">Google</span>
            </div>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Pizza Fly</h2>
              <div className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full">
                <span className="font-bold text-slate-900">4.8</span>
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              </div>
            </div>
          </div>
          
          <a 
            href="https://www.google.com/maps/place/Pizzeria+Fly/@43.8994595,12.9190783,17z/data=!3m1!4b1!4m6!3m5!1s0x132d19a760793875:0x8302b3c8943f4f9f!8m2!3d43.8994557!4d12.9216586!16s%2Fg%2F11nc3q57vy?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors bg-blue-100 text-blue-900 hover:bg-blue-200 h-11 px-6 w-full md:w-auto font-sans"
          >
            Recensiscici su Google
          </a>
        </motion.div>

        {/* Carousel */}
        <div className="relative -mx-4 md:mx-0 px-4 md:px-0">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 no-scrollbar">
            {reviews.map((review, index) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[85vw] md:min-w-[350px] flex-1 snap-center bg-slate-50 border border-slate-100 rounded-2xl p-6 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                    <PlaceholderImage text={review.name.charAt(0)} className="rounded-full !min-h-0 bg-blue-100 border-none text-blue-900 text-lg" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                    <div className="flex items-center gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600 leading-relaxed italic">
                  "{review.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
