import { NavLink } from "react-router-dom";

import { IntroHeading } from "../components/IntroHeading";
import Jolene from "/jolene.webp";

export function HomePage() {
  return (
    <section className="flex flex-col gap-20">
      <IntroHeading />
      <div className="md:justify-evenly md:flex md:gap-12">
        <div className="w-2/3 mx-auto bg-center bg-no-repeat bg-cover rounded-t-none bg-code md:bg-right-top">
          <img
            src={Jolene}
            alt="Jolene Kearse, Frontend Engineer"
            className="w-40 mr-20 h-42"
          />
        </div>
        <div className="mt-20 space-y-6 text-balance md:mt-0 md:flex md:flex-col md:justify-center md:gap-4">
          <p>I'm a Frontend Developer based in Canada specializing in <span className="tech-text">React</span>, <span className="tech-text">JavaScript</span>, and <span className="tech-text">TypeScript</span> looking for a remote role.</p>
          <p>Thank you for checking out my portfolio.  I'll show you that I'm a <span className="emphasis-text">Frontend <span className="tech-text font-extrabold -ml-1">+</span> Developer</span>!</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="">My <NavLink to="/skills" className="underline underline-offset-4 emphasis-text">Skills</NavLink> showcase how I can best help you...</p>
        <p>And my <NavLink to="/projects" className="underline underline-offset-4 emphasis-text">Projects</NavLink> demonstrate that I really know my stuff.</p>
        </div>
    </section>
  );
}
