# 🌐 My Portfolio Website

Benvenuti nel repository del mio sito portfolio! 🚀 Questo progetto è stato costruito per presentare il mio lavoro e condividere le mie esperienze di vita da nomade 🌍. Utilizza una combinazione di **Vite + React** per il front-end e un backend con funzionalità di autenticazione 🔐 e gestione dei file 🗃️.

---

## 📋 Struttura del Progetto

### 🖥️ Frontend

- **Tecnologie**: Vite ⚡, React ⚛️, Tailwind CSS 🎨
- **Pagine principali**:
  - **Home** 🏠: Una panoramica dei miei progetti e competenze.
  - **About** 👤: Dove racconto di me, con un riassunto del mio curriculum 📜.
  - **Portfolio** 💼: Una sezione che include link ai miei progetti e profili professionali 📎.
  - **Blog** ✍️: Uno spazio per raccontare la mia vita da nomade e condividere esperienze e pensieri. Restate sintonizzati! 🚐🌄

### 🛠️ Backend

- **Autenticazione** 🔐: Una rotta di autenticazione per consentirmi di accedere come **Admin** e gestire i contenuti.
- **Gestione dei file** 📂: Caricamento di immagini e file con **Multer**, perfetto per arricchire i post con foto e documenti.

---

## 📂 Funzionalità Principali

- **Vite + React**: Configurato con Vite per una rapida compilazione del progetto e un’esperienza di sviluppo fluida.
- **Tailwind CSS**: Stile modulare e personalizzabile, per un design fresco e responsive su tutti i dispositivi 📱💻.
- **Autenticazione Admin**: Login sicuro per permettermi di gestire i post e aggiungere contenuti facilmente 🔏.
- **Caricamento File con Multer**: Gestione intuitiva di immagini e file da associare ai post e racconti 🌄.

---

## 🗂️ Struttura delle Cartelle

📁 my-portfolio-website
├── backend
│ ├── 📁 controllers # Logica dei controller per autenticazione e gestione dei post
│ │ ├── authController.js
│ │ └── postControllers.js
│ ├── 📁 middlewares # Middleware per autenticazione e sicurezza
│ │ └── authMiddleware.js
│ ├── 📁 model # Modelli per MongoDB
│ │ ├── Post.js
│ │ └── User.js
│ ├── 📁 routes # Definizione delle rotte per autenticazione e blog
│ │ ├── authRoutes.js
│ │ ├── blogPostRoutes.js
│ │ └── postRoutes.js
│ ├── 📁 uploads # Cartella per caricamenti dei file
│ ├── .env # Variabili di ambiente
│ ├── .gitignore # File e cartelle da ignorare in Git
│ ├── createAdminUser.js # Script per creare l'utente Admin
│ ├── package-lock.json
│ ├── package.json # Dipendenze del backend
│ └── server.js # File principale del server

├── frontend
│ ├── 📁 src # Codice sorgente del frontend
│ │ ├── 📁 assets # Risorse statiche (immagini, icone, ecc.)
│ │ │ ├── 📁 cv
│ │ │ │ ├── 1.png
│ │ │ │ ├── 2.png
│ │ │ │ ├── C.png
│ │ │ │ ├── css.png
│ │ │ │ ├── express.png
│ │ │ │ ├── html.png
│ │ │ │ ├── js.png
│ │ │ │ ├── mongo.png
│ │ │ │ ├── node.png
│ │ │ │ ├── react.png
│ │ │ │ └── tailwind.png
│ │ │ ├── epicode.png
│ │ │ ├── homeislanda.jpg
│ │ │ ├── IMG_camper.jpg
│ │ │ └── logo.png
│ │ ├── 📁 components # Componenti riutilizzabili di React
│ │ │ ├── Footer.jsx
│ │ │ └── Navbar.jsx
│ │ ├── 📁 pages # Pagine principali dell'app
│ │ │ ├── 📁 About
│ │ │ │ ├── About.jsx
│ │ │ │ ├── Education.jsx
│ │ │ │ ├── JumbotronAbout.jsx
│ │ │ │ ├── ResumeSection.jsx
│ │ │ │ └── Skills.jsx
│ │ │ ├── BlogPage.jsx
│ │ │ ├── CreatePostPage.jsx
│ │ │ ├── Homepage.jsx
│ │ │ ├── LoginPage.jsx
│ │ │ ├── Portfolio.jsx
│ │ │ └── PostDetailPage.jsx
│ │ ├── App.css
│ │ ├── App.jsx
│ │ ├── index.css
│ │ └── main.jsx  
│ ├── .gitignore
│ ├── eslint.config.js
│ ├── index.html
│ ├── package-lock.json
│ ├── package.json
│ ├── postcss.config.js
│ ├── README.md
│ ├── tailwind.config.js
│ └── vite.config.js

## 🚀 Deploy

Questo progetto sarà presto online! 🚀

---

Grazie per aver visitato il mio repository! 😄 Sentiti libero di esplorare il codice e, se hai suggerimenti, sarò felice di ascoltarli! 👂💡

---

🌟 _Created with Vite + React + Tailwind CSS + Multer_ 🌟
