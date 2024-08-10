import { NavLink } from "react-router-dom";
import { Heading } from "../components/Heading";
import emily from "/emily-404.png";

export const NotFoundPage = () => {
  return (
    <>
      <Heading text="Uh oh... " />
      <img
        src={emily}
        className="mb-20"
        alt="My dearly departed love bird who just loved to get on my keyboard in code in a language only she understood - and would break whatever language I was currently coding in."
      />
      <div className="mt-20 space-y-6 text-balance md:mt-0 md:flex md:flex-col md:justify-center md:gap-4">
        <p>Emily must have been in my codebase again!</p>
        <p>She always broke my code, but don't despair. Check out these links:</p>
        <ul className="mt-20 space-y-6 text-balance md:mt-0 md:flex md:flex-col md:justify-center md:gap-4">
          <li>
            Go back to{" "}
            <NavLink
              to="/"
              className="emphasis-text underline underline-offset-4"
            >
              Home
            </NavLink>{" "}
            to learn a little bit about this crazy person with a bird on her 404
            page.
          </li>
          <li>
            Peruse a brief recap of the{" "}
            <NavLink
              to="/skills"
              className="emphasis-text underline underline-offset-4"
            >
              Skills
            </NavLink>{" "}
            that I bring to the table.
          </li>
          <li>
            Take a gander at my{" "}
            <NavLink
              to="/projects"
              className="underfline emphasis-text underline-offset-4"
            >
              Projects
            </NavLink>
            .
          </li>
          <li>
            Ready to meet? Visit my{" "}
            <NavLink
              to="/contact"
              className="emphasis-text underline underline-offset-4"
            >
              Contact
            </NavLink>{" "}
            page.
          </li>
        </ul>
      </div>
    </>
  );
};
