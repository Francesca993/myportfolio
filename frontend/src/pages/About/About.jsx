import React from "react";
import JumbotronAbout from "./JumbotronAbout";
import Skills from "./Skills";
import Education from "./Education";
import ResumeSection from "./ResumeSection";

export default function About() {
  return (
    <div className="pt-14">
      <JumbotronAbout />
      <Skills />
      <Education />
      <ResumeSection />
    </div>
  );
}
