import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-pink-50 text - black-800 py-6 mt-auto">
      <div className="max-w-7xl mx-auto text-center">
        {/* Icone dei social media */}
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.facebook.com/francesca.montini2?locale=it_IT"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="h-6 w-6 hover:text-pink-600"
            />
          </a>
          <a
            href="https://www.instagram.com/franci.wanderlust/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="h-6 w-6 hover:text-pink-600"
            />
          </a>
        </div>

        {/* Messaggio di copyright */}
        <p className="text-sm text-pink-800 ">
          &copy; {new Date().getFullYear()} Francesca Montini. Tutti i diritti
          riservati.
        </p>
      </div>
    </footer>
  );
}
