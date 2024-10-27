import React from "react";
import "../index.css"; // Tailwind styles are imported here
import logo from "../assets/logo.png";
import imgprofilo from "../assets/IMG_camper.jpg";

export default function Homepage() {
  return (
    <div className="home">
      <div className="font-cormorant-sc min-h-screen bg-lilac-tr flex flex-col items-center justify-center mt-4">
        <h2 className="text-4xl font-bold text-gray-800 p-4">Hey, I'm</h2>
        <div className="mb-6">
          <img
            src={imgprofilo}
            alt="profile"
            className="rounded-full w-40 h-40 object-cover shadow-lg hover:shadow-2xl transition-shadow duration-500 transform hover:scale-105"
          />
        </div>

        <h1 className="md:text-4xl lg:text-4xl typing-text sm:text-2xl font-bold text-gray-800 hover:scale-110 ">
          Francesca Montini
        </h1>

        <p className="text-lg text-gray-600 mt-4 hover:scale-110">
          Web Developer & Digital Nomad
        </p>
        <div className="mb-6">
          <img src={logo} alt="logo" className="w-50 h-40 m-2" />
        </div>
      </div>
    </div>
  );
}
