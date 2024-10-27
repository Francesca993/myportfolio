// src/components/Skills.jsx
import React from "react";

// Importa le immagini
import htmlIcon from "../../assets/cv/html.png";
import cssIcon from "../../assets/cv/css.png";
import jsIcon from "../../assets/cv/js.png";
import reactIcon from "../../assets/cv/react.png";
import nodeIcon from "../../assets/cv/node.png";
import expressIcon from "../../assets/cv/express.png";
import mongoIcon from "../../assets/cv/mongo.png";
import cIcon from "../../assets/cv/c.png";
import tailwindIcon from "../../assets/cv/tailwind.png";

// Array di oggetti con nome e icona
const skills = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "React", icon: reactIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "Express", icon: expressIcon },
  { name: "MongoDB", icon: mongoIcon },
  { name: "C", icon: cIcon },
  { name: "Tailwind", icon: tailwindIcon },
];

const Skills = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 p-8">
      {skills.map((skill) => (
        <div key={skill.name} className="flex flex-col items-center space-y-2">
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-16 h-16 object-contain transform transition duration-500 hover:scale-110 animate-float"
          />
          <span className="text-sm font-medium text-gray-700">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
