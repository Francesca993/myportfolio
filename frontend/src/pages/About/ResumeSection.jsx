// src/components/ResumeSection.jsx
import React from "react";

const ResumeSection = () => {
  return (
    <div className="font-cormorant-unicase flex flex-col max-w-4xl mx-auto md:flex-row p-6 rounded-lg gap-8">
      {/* Colonna Sinistra */}
      <div className="flex-1 bg-white p-5 rounded-lg shadow-pink-lg max-w-xs mx-auto">
        {/* Bottone Portfolio */}
        <h2 className="text-xl font-bold mb-2 text-center text-black-600">
          Trovi i miei contatti qui!
        </h2>
        <div className="flex justify-center mb-6 mt-4">
          <a
            href="https://tuo-portfolio.com" // Sostituisci con il link del tuo portfolio
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-700 text-white font-semibold py-3 px-6 text-lg rounded shadow-md transform transition duration-300 hover:scale-105"
          >
            Visita il mio Portfolio
          </a>
        </div>

        {/* Interessi Personali */}
        <h2 className="text-xl font-bold mb-2 text-center text-black-600">
          Interessi
        </h2>
        <ul className="space-y-2">
          <li className="bg-rosa-50 p-2 rounded-lg text-pink-800 font-semibold">
            Tecnologia e innovazione
          </li>
          <li className="bg-rosa-50 p-2 rounded-lg text-pink-800 font-semibold">
            Van life e nomadismo digitale
          </li>
          <li className="bg-rosa-50 p-2 rounded-lg text-pink-800 font-semibold">
            Surf, trekking e vita all'aria aperta
          </li>
        </ul>
      </div>

      {/* Colonna Destra */}
      <div className="flex-1 bg-white p-4 rounded-lg shadow-pink-lg">
        <h2 className="text-2xl font-bold mb-2 text-black-600">
          Esperienze Lavorative
        </h2>
        <div className="space-y-4">
          <div className="relative pb-4 border-l-4 border-pink-600 pl-4">
            <h3 className="font-bold text-black-700">
              Addetta alle vendite specializzata
            </h3>
            <p className="text-sm text-gray-500">• 2020 - Presente</p>
            <p className="text-black-600 text-lg">Lidl Italia</p>
          </div>
          <div className="relative pb-4 border-l-4 border-pink-600 pl-4">
            <h3 className="font-bold text-black-700">Portalettere</h3>
            <p className="text-sm text-gray-500">• 2018 - 2019</p>
            <p className="text-black-600 text-lg">Poste Italiane</p>
          </div>
          <div className="relative pb-4 border-l-4 border-pink-600 pl-4">
            <h3 className="font-bold text-black-700">Cuoca</h3>
            <p className="text-sm text-gray-500">• 2012 - 2018</p>
            <p className="text-black-600">
              Ristorante Il Delfino |Hostaria da Besic
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
