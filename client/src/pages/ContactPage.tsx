import { Heading } from "../components/Heading";
import { FaEnvelopeOpenText, FaCopy} from "react-icons/fa6";

export function ContactPage() {
  const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText("pharaohnutz@gmail.com");
        alert("Jolene's email copied to your clipboard");
      } catch (err) {
        alert("Failed to copy to clipboard");
      }
    }
  
  return (
    <section>
      <Heading text="Contact Jolene" />
      <div className="space-y-6">
        <p>
          Looking for your <span className="emphasis-text">next hire</span>? Let me demonstrate how I'm the candidate for you.
        </p>
        <p>Wanting to collaborate? Let's start a conversation!</p>
        <p>Either way reach out, <i>I promise I don't bite!</i></p>
        <p>Click the icon to directly message me, or copy my address:</p>
        <div className="flex items-center justify-between outline">
          <a href="mailto:pharaohnutz@gmail.com" className="text-purple-500 ">
            <FaEnvelopeOpenText className="my-6" size="24" title="Email direct from your device" />
          </a>
          <div className="flex items-center gap-6 text-purple-500">
            <p title="I'm quite attached to this email that relates to my early love of Ancient Egyptian history.">pharaohnutz@gmail.com</p>
            <button onClick={handleCopy}>
              <FaCopy size="24" title="copy the email" />
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
}
