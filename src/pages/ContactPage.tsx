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
      <div className="flex flex-col p-6 bg-gradient-to-br from-pink-600a via-purple-600a to-purple-400 rounded-2xl">
        <p className="font-thin">
          Click the email icon to message me directly or the copy button if
          you're on a public device.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:justify-between my-4 md:my-8">
          <a href="mailto:pharaohnutz@gmail.com">
            <FaEnvelopeOpenText
              className=" text-purple-300 hover:text-neutral-900"
              size="72"
              title="Email direct from your device"
            />
          </a>
          <div className="flex items-center gap-2 text-2xl text-purple-300 hover:text-neutral-900">
            <p title="I'm quite attached to this email that relates to my early love of Ancient Egyptian history.">
              pharaohnutz@gmail.com
            </p>
            <button onClick={handleCopy}>
              <FaCopy size="24" title="copy the email" />
            </button>
          </div>
        </div>
        <p className="col-span-2 font-thin">
          Or let's become LinkIn connections! Send a request and/or DM me.
        </p>
        <div className="flex justify-center">
          <FaLinkedin
            className="my-6 text-purple-300 hover:text-neutral-900 -mb-1"
            size="74"
            title="Email direct from your device"
          />
        </div>
      </div>
      <div className="my-28 grid md:grid-cols-2">
        <div className="space-y-6 mb-10 md:mb-0">
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
