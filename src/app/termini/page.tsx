"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function TerminiPage() {
  return (
    <>
      <Navbar />
      <main className="flex-grow bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8">
              Termini e Condizioni
            </h1>
            
            <div className="prose prose-slate max-w-none prose-headings:font-serif prose-p:font-sans">
              <p className="text-lg text-slate-600 mb-8">
                Ultimo aggiornamento: Maggio 2026
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Accettazione dei Termini</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Accedendo e utilizzando il sito web di Pizza Fly, accetti di essere vincolato dai presenti Termini e Condizioni 
                e da tutte le leggi e i regolamenti applicabili. Se non accetti questi termini, sei pregato di non utilizzare il nostro sito.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Servizi Offerti</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Pizza Fly offre servizi di ristorazione, in particolare pizzeria d'asporto e consegna a domicilio tramite 
                piattaforme partner come Glovo. I prezzi e la disponibilità dei prodotti possono variare e sono soggetti a modifiche senza preavviso.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Ordini e Pagamenti</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Gli ordini online vengono elaborati tramite la piattaforma Glovo. I termini di pagamento, consegna, rimborsi 
                o cancellazioni sono regolati dalle politiche specifiche di Glovo. Vi invitiamo a consultare i loro termini 
                durante la fase di checkout.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Eventi Speciali e Grandi Ordini</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Per ordini di grandi dimensioni, eventi o feste, richiediamo un preavviso di almeno 24 ore. In caso di 
                richieste particolari, consigliamo di contattarci direttamente telefonicamente per garantire la massima qualità e puntualità.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Proprietà Intellettuale</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Tutti i contenuti presenti su questo sito (loghi, immagini, testi) sono di proprietà esclusiva di Pizza Fly 
                e sono protetti dalle leggi sul copyright. Nessun contenuto può essere riprodotto senza autorizzazione scritta.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Modifiche ai Termini</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Pizza Fly si riserva il diritto di modificare o rivedere i presenti Termini e Condizioni in qualsiasi momento. 
                Utilizzando il sito, accetti di essere vincolato alla versione corrente dei Termini.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Contatti</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Per qualsiasi domanda riguardante i nostri Termini e Condizioni, contattateci a:<br />
                <strong>Email:</strong> info@pizzaflypesaro.it<br />
                <strong>Indirizzo:</strong> Via Galileo Galilei, 27, 61122 Pesaro PU
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
