// src/components/Education.jsx
import React from "react";

const educationData = [
  {
    id: 1,
    institution: "Roma Luiss",
    course: "Ecole 42",
    duration: "16 Settembre - 11 Ottobre 2024",
    description:
      "Selezione intensiva per l'accademia di programmazione di École 42, caratterizzato da quattro settimane immersive in cui vengono valutate le competenze tecniche e la capacità di apprendere e risolvere problemi in modo autonomo e collaborativo.",
  },
  {
    id: 2,
    institution: "Epicode",
    course: "Full Stack Web Developer",
    duration: "Gennaio 2024 - Settembre 2024",
    description:
      "Percorso intensivo di formazione nello sviluppo front-end e back-end con tecnologie come HTML, CSS, JavaScript, React, Node.js, Express e MongoDB.",
  },
  {
    id: 3,
    institution: "Istituto superiore Lucio Cappannari",
    course:
      "Istituto d'istruzione superiore per i servizi Alberghieri e della Ristorazione",
    duration: "2008 | 2012",
    description:
      "Diploma d’istruzione superiore perito dei servizi alberghieri e della ristorazione. Votazione: 87/100",
  },
];

export default function Education() {
  return (
    <div className="max-w-4xl mx-auto p-4 font-cormorant-sc">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Colonna Sinistra - Lingue e Informazioni Extra */}
        <div className="flex-1 p-4 bg-white shadow-pink-lg rounded-lg flex flex-col justify-evenly">
          {/* Soft Skils */}
          <div className="mb-1">
            <h3 className="text-2xl mb-2 font-bold text-black-600">
              {" "}
              Soft Skills
            </h3>
            <ul className="space-y-2">
              <li className="font-cormorant-unicase bg-rosa-50 p-2 rounded-lg text-pink-800 font-semibold">
                Precisione e attenzione ai dettagli
              </li>
              <li className="font-cormorant-unicase bg-rosa-50 p-2 rounded-lg text-pink-800 font-semibold">
                Determinazione e perseveranza
              </li>
              <li className="font-cormorant-unicase bg-rosa-50 p-2 rounded-lg text-pink-800 font-semibold">
                Creatività
              </li>
              <li className="font-cormorant-unicase bg-rosa-50 p-2 rounded-lg text-pink-800 font-semibold">
                Apprendimento rapido e pratico
              </li>
              <li className="font-cormorant-unicase bg-rosa-50 p-2 rounded-lg text-pink-800 font-semibold">
                Realismo e praticità
              </li>
            </ul>
          </div>
          {/* Lingue */}
          <div>
            <h3 className="text-2xl font-bold text-black-600">Lingue</h3>
            <ul className="mt-2 space-y-2">
              <li className="text-md text-gray-800">Italiano - Madrelingua</li>
              <li className="text-md text-gray-800">Inglese - B1</li>
              <li className="text-md text-gray-800">Spagnolo - A1</li>
            </ul>
          </div>
          {/* Informazioni Extra */}
          <div>
            <h3 className="text-xl font-bold text-black-600">
              Informazioni Extra
            </h3>
            <ul className="mt-2 space-y-2">
              <li className="text-md text-gray-800">Patente C</li>
              <li className="text-md text-gray-800">Automunita</li>
            </ul>
          </div>
        </div>

        {/* Colonna Destra - Formazione */}
        <div className="flex-2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 mt-3">
            Formazione
          </h2>
          {educationData.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-white shadow-pink-lg rounded-lg"
            >
              <h3 className="text-2xl font-bold">{item.institution}</h3>
              <p className="text-lg italic text-gray-700">{item.course}</p>
              <p className="text-sm text-gray-600 mb-2">{item.duration}</p>
              <p className="text-md text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
