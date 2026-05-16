# Specifica di Sviluppo Frontend: Pizzeria Landing Page (Ad-Optimized)

## 1. Stack Tecnologico & Vincoli Architetturali
- **Framework:** Next.js (App Router raccomandato per prestazioni ottimali).
- **Styling:** Tailwind CSS.
- **Animazioni:** Utilizzare `framer-motion` per gestire animazioni fluide legate allo scroll. Prediligere entrate in *fade-in* ed eleganti *slide-up* degli elementi testuali e delle card man mano che entrano nel viewport (`whileInView`).
- **Responsività (Cruciale per Campagne Ad):** 100% Mobile-first. Tutti i bottoni devono avere un'altezza minima di `44px` (touch target size ideale). Evitare assolutamente overflow orizzontali. Su mobile, converti i layout a griglia o zig-zag in layout a colonna singola per una lettura lineare e veloce. 
- **Lingua:** L'intero sito (Navigazione, hero, descrizioni, bottoni, footer) deve essere redatto rigorosamente in **ITALIANO**.
- **Gestione Immagini:** NESSUNA IMMAGINE O FOTO REALE. Implementa un componente React `<PlaceholderImage />` altamente flessibile (es. un `div` con classe `bg-slate-200`, `border-2 border-dashed border-slate-400`, e il testo "Immagine" centrato tramite flexbox in `text-slate-500 font-semibold`). Applica questo componente al posto di tutte le pizze, sfondi e ritratti presenti nelle referenze.

---

## 2. Struttura del Layout (Ordine Sezioni Top-to-Bottom)

### 2.1 Header & Navigazione (`hero.jpg`)
- **Top Navbar:** Sfondo bianco, `sticky top-0 z-50`. 
- **Sinistra:** Logo circolare (usa un placeholder).
- **Centro (Desktop):** Link di navigazione: *Home, Chi Siamo, Menu, Galleria, Feste, Contatti*. Su mobile, nascondi e usa un Hamburger Menu.
- **Destra:** Icona ricerca e icona carrello (con badge notifica).

### 2.2 Hero Section (`hero.jpg`)
- **Layout:** Ampio container con bordi fortemente arrotondati e sfondo molto scuro (quasi nero).
- **Contenuto (Sinistra):** Titolo grande e d'impatto "BENVENUTO A PARK AND RIDE PIZZA". Paragrafo descrittivo sottostante.
- **Visual (Destra):** Grande `<PlaceholderImage />` per simulare la pizza, idealmente che "esce" leggermente dai bordi in basso.
- **CTA Primaria:** Immediatamente sotto il blocco scuro dell'hero, posiziona un largo bottone indipendente blu scuro con testo bianco "ORDINA ONLINE". Su mobile deve essere a larghezza intera (100%).

### 2.3 Social Proof & Recensioni (`sec1-reviews.png`)
- **Header della sezione:** A sinistra testo "Powered By Google" e "Park and Ride 4.5 [Stelle]". A destra bottone ovale blu "Recensiscici su Google".
- **Carosello Recensioni:** 3 card affiancate su desktop. Su mobile, implementa un container `flex overflow-x-auto snap-x` per farle scorrere orizzontalmente in modo fluido. Ogni card contiene una piccola `<PlaceholderImage />` circolare per l'avatar, Nome, stelle, e testo della recensione.

### 2.4 Valori & Features - Layout a Zig-Zag (`sec2-123-tall.jpg`)
- **Intestazione:** Titolo centrato "Vivi la Pizza come Mai Prima d'Ora".
- **Elementi della lista (Su desktop layout a zig-zag, su mobile colonna singola):**
  - **01. Pizza Napoletana Indimenticabile:** `<PlaceholderImage />` a sinistra, Testo a destra. (Includi un grande numero "01" sbiadito sullo sfondo).
  - **02. Niente Lievito, Solo Impasto Perfetto:** Testo a sinistra, `<PlaceholderImage />` a destra. (Numero "02" sbiadito).
  - **03. Assapora l'Arte della Pizza:** `<PlaceholderImage />` a sinistra, Testo a destra. (Numero "03" sbiadito).

### 2.5 Banner Eventi Speciali (`sec3-spevents.jpg`)
- **Layout:** Sezione full-width con sfondo blu navy profondo.
- **Contenuto (Sinistra):** Titolo "Ordini per Eventi Speciali". Testo descrittivo (avviso di 24 ore in anticipo). Bottone ghost (sfondo trasparente, bordo bianco) "CHIAMATA D'EMERGENZA ORA".
- **Visual (Destra):** Una massiccia `<PlaceholderImage />` allineata a destra che copre circa il 50% dell'altezza/larghezza della fascia.

### 2.6 Griglia Servizi/Eventi (`sec4-events.jpg`)
- **Layout Desktop:** Griglia asimmetrica (Bento Box style). 
- **Struttura Card:** Ogni blocco deve usare una `<PlaceholderImage />` che copre tutto lo spazio. In basso, applica un overlay gradiente (da nero a trasparente) per far risaltare il testo bianco.
- **Voci della Griglia:**
  1. *Feste di Compleanno* (Card grande, verticale a sinistra). Sottotitolo link "ACQUISTA ORA".
  2. *Eventi Aziendali* (Card larga, orizzontale in alto a destra). Sottotitolo link "ACQUISTA ORA".
  3. *Occasioni Speciali* (Card quadrata, in basso a centro). Sottotitolo link "ACQUISTA ORA".
  4. *Picnic* (Card quadrata, in basso a destra). Sottotitolo link "ACQUISTA ORA".
- **Layout Mobile:** Trasforma tutto in una singola colonna per facilitare lo scroll (`flex-col gap-4`).

### 2.7 Footer Completo (`footer.jpg`)
- **Top Info Bar:** Tre sezioni orizzontali divise da bordi sottili: "Chiama Ora", "Email", "Posizione".
- **Corpo Centrale (4 colonne su desktop, 1-2 su mobile):**
  1. **Info Ristorante:** Testo descrittivo del locale e icone social (Facebook, LinkedIn).
  2. **Link Rapidi:** Lista (es. *Chi Siamo, Menu, Galleria, Feste, Contattaci*).
  3. **Il Nostro Menu:** Lista (es. *Margherita, Quattro Formaggi, Diavola, ecc.*).
  4. **Iscriviti Ora:** Testo descrittivo, input box bianco per l'email, e grande bottone blu scuro "ISCRIVITI". Posiziona una mezza `<PlaceholderImage />` in basso a destra decorativa.
- **Bottom Bar:** Fascia azzurro/blu chiaro in basso con Copyright 2024 a sinistra, e link "Informativa sulla Privacy" e "Termini e Condizioni" a destra.