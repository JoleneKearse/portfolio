import { Heading } from "../components/Heading";

export function ContactPage() {
  return (
    <section>
      <Heading text="Contact Jolene" />
      <div className="space-y-6">
        <p>
          Looking for your <span className="emphasis-text">next hire</span>? I'm
          more than happy to discuss how I am the candidate for you.
        </p>
        <p>Wanting to collaborate? Let's open a discussion!</p>
        <p>Either way reach out, I promise I don't bite!</p>
      </div>
      <form className="flex flex-col gap-6 my-20">
        <input
          type="text"
          className="px-4 py-2 bg-purple-800 border-2 border-purple-800 rounded-lg focus:outline-none focus:border-purple-400 focus:border-1 placeholder:text-purple-500"
          placeholder="Awesome Sauce"
        />
        <input
          type="email"
          className="p-4 border-2 border-gray-400 rounded-md focus:outline-none focus:border-purple-500"
          placeholder="Email"
        />
        <textarea
          className="h-32 p-4 border-2 border-gray-400 rounded-md focus:outline-none focus:border-purple-500"
          placeholder="Message"
        />
        <button
          type="submit"
          className="px-12 py-3 text-white bg-purple-500 rounded-md hover:bg-purple-400"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
