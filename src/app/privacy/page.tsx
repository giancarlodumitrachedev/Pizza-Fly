"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            
            <div className="prose prose-slate max-w-none prose-headings:font-serif prose-p:font-sans">
              <p className="text-lg text-slate-600 mb-8">
                Ultimo aggiornamento: Maggio 2026
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Introduzione</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Benvenuti su Pizza Fly. Rispettiamo la vostra privacy e ci impegniamo a proteggere i vostri dati personali. 
                Questa informativa sulla privacy illustra come raccogliamo, utilizziamo e proteggiamo le informazioni che 
                ci fornite quando utilizzate il nostro sito web.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Dati Raccolti</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Raccogliamo solo le informazioni necessarie per elaborare i vostri ordini e fornirvi la migliore esperienza possibile. 
                Questo può includere:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li>Nome e Cognome</li>
                <li>Indirizzo di consegna (gestito tramite i nostri partner come Glovo)</li>
                <li>Indirizzo email (per la newsletter)</li>
                <li>Numero di telefono (per comunicazioni urgenti o ordini speciali)</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Utilizzo dei Dati</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Le informazioni raccolte vengono utilizzate esclusivamente per:
              </p>
              <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
                <li>Gestire ed evadere i vostri ordini</li>
                <li>Rispondere alle vostre richieste di supporto</li>
                <li>Inviarvi comunicazioni promozionali (solo se iscritti alla newsletter)</li>
                <li>Migliorare il nostro sito web e i nostri servizi</li>
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Condivisione dei Dati</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Non vendiamo, scambiamo o altrimenti trasferiamo a terzi le vostre informazioni personali. 
                Questo non include i partner fidati (come Glovo) che ci assistono nella gestione del sito web, 
                nella conduzione della nostra attività o nel servizio agli utenti, purché tali parti accettino di mantenere queste informazioni riservate.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">5. I Vostri Diritti</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                In conformità con il GDPR, avete il diritto di accedere, rettificare, cancellare o limitare l'elaborazione 
                dei vostri dati personali. Per esercitare questi diritti, vi preghiamo di contattarci.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Contatti</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Per qualsiasi domanda riguardante questa Privacy Policy, potete contattarci a:<br />
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
