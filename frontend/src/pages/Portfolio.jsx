import React from "react";
import "../index.css";
import epicodeimg from "../assets/epicode.png";

export default function Portfolio() {
  return (
    <div className="bg-pink-50 pt-14 font-cormorant-sc min-h-screen flex flex-col items-center justify-start px-4">
      {/* Titolo */}
      <h1 className="text-5xl font-bold font-cormorant-sc text-black mb-8 mt-6 pt-2">
        Scopri il Mio Mondo Digitale
      </h1>

      {/* Layout per paragrafo e card */}
      <div className="flex flex-col md:flex-row justify-between w-full md:w-4/5 lg:w-3/4">
        {/* Paragrafo a sinistra */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 flex items-center justify-center">
          <p className="text-xl font-bold text-black md:mr-12 text-right">
            Benvenuto nel mio portfolio! 🚀 <br />
            Qui puoi esplorare le mie competenze e i miei progetti in ambito
            tecnologico. 💻 <br />
            Dai un’occhiata al mio GitHub per scoprire il codice che ho
            sviluppato 👨‍💻,
            <br /> visita il mio LinkedIn per conoscere il mio percorso
            professionale 💼,
            <br /> e scopri la mia formazione su Epicode 🎓.
            <br /> Che tu sia alla ricerca di collaborazioni o ispirazione, sei
            nel posto giusto! 🌍
            <br />
            <br />
            ✉️ Scrivimi ➤ montinifrancesca993@gmail.com <br />
            📞 Contattami ➤ +39 3894767812
          </p>
        </div>

        {/* Card a destra */}
        <div className="w-full md:w-1/2 flex flex-col items-center gap-6">
          {/* GitHub */}
          <a
            href="https://github.com/Francesca993/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-beige-100 shadow-lg w-52 h-32 p-4 flex flex-col items-center justify-center transform hover:-translate-y-2 hover:scale-105 transition duration-500 ease-in-out"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              className="w-16 h-16 mb-2"
            />
            <p className="text-lg font-semibold text-black">GitHub</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/francesca-montini-19b90929a/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-beige-100 shadow-lg w-52 h-32 p-4 flex flex-col items-center justify-center transform hover:-translate-y-2 hover:scale-105 transition duration-500 ease-in-out"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="w-16 h-16 mb-2"
            />
            <p className="text-lg font-semibold text-black">LinkedIn</p>
          </a>

          {/* Epicode Platform */}
          <a
            href="https://talent.epicode.com/talent/e0fdbcf6-2914-4383-8558-62666a53b481"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-beige-100 shadow-lg w-52 h-32 p-4 flex flex-col items-center justify-center transform hover:-translate-y-2 hover:scale-105 transition duration-500 ease-in-out"
          >
            <img src={epicodeimg} alt="Epicode" className="w-16 h-16 mb-2" />
            <p className="text-lg font-semibold text-black">Epicode</p>
          </a>
        </div>
      </div>
    </div>
  );
}
