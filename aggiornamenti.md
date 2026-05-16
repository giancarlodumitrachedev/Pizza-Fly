# Specifica di Aggiornamento: Pizza Fly Website

## 1. Modifiche Globali & Branding
- **Tipografia:** Sostituire il font attuale in tutta la pagina con un font che rispecchi maggiormente il branding del logo. L'obiettivo è mantenere un look moderno garantendo una brand identity coesa.
- **Layout Sezione Info:** Ridisegnare e rendere meno ingombrante la sezione "Vivi la Pizza come Mai Prima d'Ora" per alleggerire il layout.
- **Rimozioni:** Rimuovere completamente la sezione "Feste" dal layout della pagina.
- **Interattività CTA:** Assicurarsi che *ogni* pulsante all'interno del sito sia cablato e funzionante.

## 2. Risoluzione Bug (Fixes)
- **Bug di Rendering (Schermo Bianco):** Risolvere il problema relativo all'aggiornamento della pagina (refresh). Attualmente, ricaricando, la pagina rimane bloccata sul background e i contenuti non vengono renderizzati. Verificare lo stato iniziale delle animazioni on-load.

## 3. Dati Aziendali & Integrazioni
- **Indirizzo:** Via Galileo Galilei, 27, 61122 Pesaro PU.
- **Telefono:** +39 329 128 6550.
- **Instagram:** Collegare i pulsanti social a `https://www.instagram.com/pizzaflypesaro/`
- **Google Reviews:** Formattare e collegare correttamente il tasto "Recensisci su Google" affinché punti a: `https://www.google.com/maps/place/Pizzeria+Fly/@43.8994595,12.9190783,17z/data=!3m1!4b1!4m6!3m5!1s0x132d19a760793875:0x8302b3c8943f4f9f!8m2!3d43.8994557!4d12.9216586!16s%2Fg%2F11nc3q57vy?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D`

## 4. Header & Navigazione
- **Branding Header:** Rimuovere il testo "Pizza Fly" affiancato al logo nell'header. Il logo deve apparire da solo.
- **Pulizia Navigazione:**
  - Rimuovere il link "Feste".
  - Rimuovere la voce "Menu" (vedi sezione dedicata a Glovo).
  - Rimuovere l'icona del Carrello (Shopping Cart).
  - Rimuovere l'icona della Ricerca.
- **Creazione Pagine:** La voce "Galleria" attualmente è un link interrotto. È necessario creare una nuova pagina dedicata alla Galleria fotografica.

## 5. Nuova Struttura (Integrazione Glovo)
- **Sezione Delivery:** Avendo rimosso la voce "Menu" dall'header, progettare una nuova sezione ben visibile all'interno del sito principale. Questa sezione deve:
  - Segnalare chiaramente che Pizza Fly utilizza Glovo come servizio principale per il menu e le consegne.
  - Includere il logo di Glovo.
  - Prevedere dei blocchi `<PlaceholderImage />` per inserire successivamente delle foto collegate al servizio.
  - Includere il link diretto all'app/sito di Glovo.

## 6. Ottimizzazione Mobile
- **Animazione Hamburger:** Aggiungere una transizione visiva fluida (CSS/Framer Motion) per l'apertura e chiusura del menu hamburger.
- **Layout Footer Mobile:** Modificare l'ordine degli elementi nel layout mobile in modo che il blocco "Iscriviti ora" si posizioni *sotto* la colonna "Il Nostro Menu".