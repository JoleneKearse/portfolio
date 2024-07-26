import { NavLink } from "react-router-dom";

import { IntroHeading } from "../components/IntroHeading";
import Jolene from "/jolene.webp";

export function HomePage() {
  return (
    <main className="flex flex-col gap-20">
      <IntroHeading />
      <div className="md:justify-evenly md:flex md:gap-12">
        <div className="w-2/3 mx-auto bg-center bg-no-repeat bg-cover rounded-t-none bg-code md:bg-right-top">
          <img
            src={Jolene}
            alt="Jolene Kearse, Software Engineer"
            className="w-40 mr-20 h-42"
          />
        </div>
        <div className="mt-20 space-y-6 text-balance md:mt-0 md:flex md:flex-col md:justify-center md:gap-4">
          <p>I'm a Software Engineer based in Canada specializing in <span className="tech-text">React</span>, <span className="tech-text">JavaScript</span>, and <span className="tech-text">TypeScript</span>.</p>
          <p className="">Check out my <NavLink to="/skills" className="emphasis-text">Skills</NavLink> to see how I can best help you.</p>
          <p>Or explore my <NavLink to="/projects" className="emphasis-text">Projects</NavLink> to see I know my stuff.</p>
        </div>
      </div>
    </main>
  );
}
