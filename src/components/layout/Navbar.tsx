"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';

const GLOVO_LINK = "https://glovoapp.com/it/it/pesaro/stores/pizza-fly-pes";

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Chi Siamo', href: '/#features' },
  { name: 'Galleria', href: '/galleria' },
  { name: 'Contatti', href: '/#footer' },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* Left: Logo only (no text) */}
        <div className="flex-shrink-0 flex items-center">
          <Link 
            href="/" 
            className="flex items-center"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <div className="relative w-14 h-14 rounded-full overflow-hidden border border-slate-200">
              <Image 
                src="/logo.png" 
                alt="Pizza Fly Logo" 
                fill
                className="object-cover"
              />
            </div>
          </Link>
        </div>

        {/* Center: Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-900 transition-colors font-sans"
              onClick={(e) => {
                if (link.href === '/' && window.location.pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: CTA + mobile toggle */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button href={GLOVO_LINK} className="hidden md:flex ml-2" size="sm">
            Ordina Ora
          </Button>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-lg overflow-hidden z-50"
          >
            <div className="p-4 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link 
                    href={link.href}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      if (link.href === '/' && window.location.pathname === '/') {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="text-lg font-medium text-slate-800 hover:text-blue-900 p-2 border-b border-slate-50 block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Button href={GLOVO_LINK} className="w-full mt-4 justify-center">
                ORDINA ONLINE
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
