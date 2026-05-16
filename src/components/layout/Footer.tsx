"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '../ui/Button';
import { SmartImage } from '../ui/SmartImage';

const GLOVO_LINK = "https://glovoapp.com/it/it/pesaro/stores/pizza-fly-pes";
const INSTAGRAM_LINK = "https://www.instagram.com/pizzaflypesaro/";

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export function Footer() {
  return (
    <footer id="footer" className="bg-slate-50 border-t border-slate-200">
      {/* Top Info Bar */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 py-8">
          <a href="tel:+393291286550" className="flex flex-col items-center justify-center p-4 text-center gap-2 hover:bg-slate-100 rounded-xl transition-colors">
            <div className="bg-blue-100 p-3 rounded-full text-blue-900 mb-2">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg">Chiama Ora</h4>
            <p className="text-slate-600">+39 329 128 6550</p>
          </a>
          <a href="mailto:info@pizzaflypesaro.it" className="flex flex-col items-center justify-center p-4 text-center gap-2 hover:bg-slate-100 rounded-xl transition-colors">
            <div className="bg-blue-100 p-3 rounded-full text-blue-900 mb-2">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg">Email</h4>
            <p className="text-slate-600">info@pizzaflypesaro.it</p>
          </a>
          <a href="https://www.google.com/maps/place/Pizzeria+Fly/@43.8994595,12.9190783,17z" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4 text-center gap-2 hover:bg-slate-100 rounded-xl transition-colors">
            <div className="bg-blue-100 p-3 rounded-full text-blue-900 mb-2">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-lg">Posizione</h4>
            <p className="text-slate-600">Via Galileo Galilei, 27, 61122 Pesaro PU</p>
          </a>
        </div>
      </div>

      {/* Main Body */}
      <div className="bg-white py-16 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          {/* 
            Mobile order: Info (1) → Link Rapidi (2) → Menu (3) → Iscriviti (4)
            Desktop: normal 4-column grid 
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* 1. Info Ristorante - order-1 on mobile */}
            <div className="flex flex-col gap-6 order-1">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border border-slate-200">
                  <Image src="/logo.png" alt="Pizza Fly Logo" fill className="object-cover" />
                </div>
                <span className="font-bold text-2xl text-blue-900 font-serif">Pizza Fly</span>
              </Link>
              <p className="text-slate-600 leading-relaxed">
                La vera pizza d&apos;asporto a Pesaro. Ingredienti freschi, impasto a lunga lievitazione e tanta passione in ogni trancio.
              </p>
              <div className="flex gap-4">
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-900 hover:text-white transition-colors">
                  <InstagramIcon />
                </a>
              </div>
            </div>

            {/* 2. Link Rapidi - order-2 on mobile */}
            <div className="order-2">
              <h4 className="font-bold text-xl mb-6 relative inline-block">
                Link Rapidi
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-900 rounded-full"></span>
              </h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="#features" className="text-slate-600 hover:text-blue-900 transition-colors">Chi Siamo</Link></li>
                <li><Link href={GLOVO_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-900 transition-colors">Menu su Glovo</Link></li>
                <li><Link href="/galleria" className="text-slate-600 hover:text-blue-900 transition-colors">Galleria</Link></li>
                <li><Link href="#footer" className="text-slate-600 hover:text-blue-900 transition-colors">Contattaci</Link></li>
              </ul>
            </div>

            {/* 3. Il Nostro Menu - order-3 on mobile */}
            <div className="order-3">
              <h4 className="font-bold text-xl mb-6 relative inline-block">
                Il Nostro Menu
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-900 rounded-full"></span>
              </h4>
              <ul className="flex flex-col gap-4">
                <li><Link href={GLOVO_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-900 transition-colors">Margherita D.O.P.</Link></li>
                <li><Link href={GLOVO_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-900 transition-colors">Quattro Formaggi</Link></li>
                <li><Link href={GLOVO_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-900 transition-colors">Diavola Piccante</Link></li>
                <li><Link href={GLOVO_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-900 transition-colors">Ortolana Fresca</Link></li>
                <li><Link href={GLOVO_LINK} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-900 transition-colors font-semibold">Vedi tutto il menu →</Link></li>
              </ul>
            </div>

            {/* 4. Newsletter - order-4 on mobile (AFTER Menu) */}
            <div className="flex flex-col gap-6 relative order-4">
              <h4 className="font-bold text-xl relative inline-block">
                Iscriviti Ora
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-900 rounded-full"></span>
              </h4>
              <p className="text-slate-600 mt-2">
                Iscriviti per ricevere offerte esclusive e novità sul nostro menu.
              </p>
              <form className="flex flex-col gap-3 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="La tua email..." 
                  className="w-full h-12 px-4 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-900 bg-slate-50"
                  required
                />
                <Button className="w-full gap-2 h-12">
                  ISCRIVITI <Send className="w-4 h-4" />
                </Button>
              </form>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-20 z-0 pointer-events-none hidden lg:block rounded-full overflow-hidden">
                <SmartImage src="decor.png" alt="Decorazione" fallbackText="decor.png" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-100 py-6 border-t border-blue-200">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-900 text-sm font-medium">
            © 2026 Pizza Fly. Tutti i diritti riservati.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm font-medium text-blue-900">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/termini" className="hover:underline">Termini e Condizioni</Link>
            <span className="hidden sm:inline text-blue-300">|</span>
            <a href="https://www.luminadigital.it" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Powered by Lumina
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
