import { Heading } from "../components/Heading";
import { FaEnvelopeOpenText, FaCopy, FaLinkedin } from "react-icons/fa6";
import Jolene from "/jolene.webp";

export function ContactPage() {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("pharaohnutz@gmail.com");
      alert("Jolene's email copied to your clipboard");
    } catch (err) {
      alert("Failed to copy to clipboard");
    }
  };

  return (
    <section>
      <Heading text="Contact Jolene" />
      <div className="grid grid-cols-2 gap-6 font-normal mb-28">
        <div className="rounded-xl bg-purple-600 p-10">
          <p>
            Click the email icon to message me directly or the copy button if
            you're on a public device.
          </p>
          <div className="flex flex-col gap-2 justify-center items-center">
            <a href="mailto:pharaohnutz@gmail.com" className="text-purple-900">
              <FaEnvelopeOpenText
                className="my-6 hover:text-neutral-500"
                size="36"
                title="Email direct from your device"
              />
            </a>
            <div className="flex items-center gap-2 text-purple-900 hover:text-neutral-500">
              <p title="I'm quite attached to this email that relates to my early love of Ancient Egyptian history.">
                pharaohnutz@gmail.com
              </p>
              <button onClick={handleCopy}>
                <FaCopy size="24" title="copy the email" />
              </button>
            </div>
          </div>
        </div>
        <div className="space-between flex flex-col space-y-6 rounded-xl bg-pink-700 p-10">
          <p>Or connect / DM me on LinkedIn.</p>
          <p className="font-light">And check out my daily videos!</p>
          <a
            href="https://www.linkedin.com/in/jolene-kearse-2562ba218/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 text-center text-purple-900 hover:text-neutral-500 flex justify-center"
          >
            <FaLinkedin size="36" />
          </a>
        </div>
      </div>
      <div className="grid md:grid-cols-2">
        <div className="space-y-6">
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
