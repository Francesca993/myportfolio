// src/components/Skills.jsx
import React from "react";

const skills = [
  { name: "HTML", icon: "./src/assets/cv/html.png" },
  { name: "CSS", icon: "./src/assets/cv/css.png" },
  { name: "JavaScript", icon: "./src/assets/cv/js.png" },
  { name: "React", icon: "/./src/assets/cv/react.png" },
  { name: "Node.js", icon: "./src/assets/cv/node.png" },
  { name: "Express", icon: "./src/assets/cv/express.png" },
  { name: "MongoDB", icon: "./src/assets/cv/mongo.png" },
  { name: "C", icon: "./src/assets/cv/c.png" },
  { name: "Tailwind", icon: "./src/assets/cv/tailwind.png" },
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
