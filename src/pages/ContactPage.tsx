import { Heading } from "../components/Heading";
import { FaEnvelopeOpenText, FaLinkedin, FaGithub } from "react-icons/fa6";
import Jolene from "/jolene.webp";

export function ContactPage() {
  // const handleCopy = async () => {
  //   try {
  //     await navigator.clipboard.writeText("pharaohnutz@gmail.com");
  //     alert("Jolene's email copied to your clipboard");
  //   } catch (err) {
  //     alert("Failed to copy to clipboard");
  //   }
  // };

  return (
    <section>
      <Heading text="Contact Jolene" />
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-6">
          <a href="mailto:pharaohnutz@gmail.com">
            <FaEnvelopeOpenText
              className="text-purple-300 hover:text-neutral-600"
              size="72"
              title="Email Jolene"
            />
          </a>
          <p>Email me to get straight down the business!</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://www.linkedin.com/in/jolene-kearse-2562ba218/" target="_blank">
            <FaLinkedin
              size="72"
              title="View my LinkedIn profile"
              className="text-purple-300 hover:text-neutral-600"
            />
          </a>
          <p>Check out my posts or DM me on LinkedIn.</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://github.com/JoleneKearse" target="_blank">
            <FaGithub
              size="72"
              title="View my LinkedIn profile"
              className="text-purple-300 hover:text-neutral-600"
            />
          </a>
          <p>Explore my projects on Github.</p>
        </div>
      </div>

      <div className="my-28 grid md:grid-cols-2">
        <div className="mb-10 space-y-6 md:mb-0">
          <p>
            Looking for your <span className="emphasis-text">next hire</span>?
            I'm in your candidate! I'm all set to add value to your team. And
            I'll be there for the long-term.
          </p>
          <p>
            Do you have a project you'd like a little extra help with? I'm ready
            and willing to <span className="emphasis-text">freelance</span>.
            Let's get your idea out there lickety-split!
          </p>
          <p>
            Wanting to <span className="emphasis-text">collaborate</span>? I
            love working with other devs. Let's get those ideas rolling!
          </p>
          <p>
            Either way reach out, <i>I promise I don't bite!</i>
          </p>
        </div>

        <div className="mx-auto my-auto w-1/2 rounded-s-full bg-neutral-400 md:w-3/5">
          <img
            src={Jolene}
            alt="Jolene Kearse, Frontend and Software Engineer"
            className=""
          />
        </div>
      </div>
    </section>
  );
}
