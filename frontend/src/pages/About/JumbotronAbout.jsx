import React from "react";

export default function JumbotronAbout() {
  return (
    <div className="max-w-4xl mx-auto p-4 font-cormorant-sc">
      {/* Sezione superiore */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-10 mt-5">
        {/* Modulo 1: Nome e descrizione */}
        <div className="flex-1 flex flex-col justify-center md:h-auto text-center md:text-left">
          <h1 className="font-whisper text-6xl text-right">
            Francesca Montini
          </h1>
          <p className="text-md mt-4 text-gray-700">
            🎓 Dopo aver completato un percorso <strong>formativo</strong>
            intensivo di <strong>6 mesi</strong> presso Epicode come
            <strong>Full Stack Web Developer</strong>, sono pronta a mettere in
            gioco le mie nuove <strong>competenze.</strong> Questo percorso mi
            ha fornito solide basi nello sviluppo
            <strong>front-end e back-end</strong>, permettendomi di lavorare con
            tecnologie come
            <strong>
              HTML, CSS, JavaScript, React, Node.js, Express e MongoDB.
            </strong>
            Il mio background professionale è nel settore della ristorazione e
            della GDO, dove ho sempre lavorato con
            <strong>precisione, dedizione </strong>e a stretto contatto con il
            pubblico. Sono abituata a ritmi intensi e a mantenere alta la
            <strong>qualità</strong> del lavoro in ogni situazione. Ora, carica
            di <strong>entusiasmo</strong>, sono alla ricerca di un'opportunità
            che mi permetta di crescere professionalmente, contribuire con idee
            fresche e sfruttare le nuove <strong>tecnologie.</strong>
          </p>
        </div>

        {/* Modulo 2: Foto */}
        <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-6 flex justify-center items-center">
          <img
            src="./src/assets/cv/1.png" // Inserisci il link alla tua immagine
            alt="Foto profilo"
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-96 lg:h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
