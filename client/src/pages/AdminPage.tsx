import { Heading } from "../components/Heading";

export function AdminPage() {
  return (
    <>
      <Heading text="Update Projects" />
      <a
        href="https://github.com/JoleneKearse?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="font-alegreya font-extrabold text-2xl text-purple-500 text-center w-full mx-auto block hover:text-purple-400"
      >
        Repos
      </a>
      <form className="space-y-8 text-neutral-300 font-roboto-mono py-10">
        <input
          type="text"
          name=""
          id="title"
          className="bg-purple-800 py-2 px-4 rounded-lg w-full placeholder:text-neutral-600 hover:shadow-inner hover:shadow-purple-500 border-none hover:shadow-xl focus:shadow-inner focus:shadow-purple-400 focus:shadow-xl focus:outline-none"
          placeholder="Title"
        />
        <input
          type="text"
          name=""
          id="img"
          className="bg-purple-800 py-2 px-4 rounded-lg w-full placeholder:text-neutral-600 hover:shadow-inner hover:shadow-purple-500 border-none hover:shadow-xl focus:shadow-inner focus:shadow-purple-400 focus:shadow-xl focus:outline-none"
          placeholder="Image"
        />
        <input
          type="text"
          name=""
          id="video"
          className="bg-purple-800 py-2 px-4 rounded-lg w-full placeholder:text-neutral-600 hover:shadow-inner hover:shadow-purple-500 border-none hover:shadow-xl focus:shadow-inner focus:shadow-purple-400 focus:shadow-xl focus:outline-none"
          placeholder="Video Link"
        />
        <input
          type="text"
          name=""
          id="github"
          className="bg-purple-800 py-2 px-4 rounded-lg w-full placeholder:text-neutral-600 hover:shadow-inner hover:shadow-purple-500 border-none hover:shadow-xl focus:shadow-inner focus:shadow-purple-400 focus:shadow-xl focus:outline-none"
          placeholder="Github"
        />
        <input
          type="text"
          name=""
          id="live"
          className="bg-purple-800 py-2 px-4 rounded-lg w-full placeholder:text-neutral-600 hover:shadow-inner hover:shadow-purple-500 border-none hover:shadow-xl focus:shadow-inner focus:shadow-purple-400 focus:shadow-xl focus:outline-none"
          placeholder="Deployed Link"
        />
        <textarea
          rows={5}
          id="description"
          spellCheck="true"
          className="bg-purple-800 py-2 px-4 rounded-lg w-full placeholder:text-neutral-600 hover:shadow-inner hover:shadow-purple-500 border-none hover:shadow-xl focus:shadow-inner focus:shadow-purple-400 focus:shadow-xl focus:outline-none"
          placeholder="What problems does the project solve?"
        ></textarea>
        <select
          name=""
          id="techUsed"
          className="bg-purple-800 w-2/5 outline-none hover:shadow-inner hover:shadow-purple-500 border-none hover:shadow-xl p-2 block mx-auto"
          multiple
        >
          <option value="">techUsed</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
          <option value="Tailwind">Tailwind</option>
          <option value="Node">Node</option>
          <option value="Express">Express</option>
          <option value="Firebase">Firebase</option>
          <option value="Illustrator">Illustrator</option>
          <option value="Photoshop">Photoshop</option>
          <option value="PostgreSQL">PostgreSQL</option>
          <option value="Python">Python</option>
          <option value="Rust">Rust</option>
          <option value="Vercel">Vercel</option>
          <option value="Supabase">Supabase</option>
          <option value="MongoDB">MongoDB</option>
          <option value="Figma">Figma</option>
          <option value="Git">Git</option>
          <option value="Vite">Vite</option>
          <option value="CSS3">CSS</option>
          <option value="HTML5">HTML</option>
          <option value="Linux">Linux</option>
        </select>
        <button
          className="block mx-auto bg-gradient-to-br from-pink-600 via-purple-500 to-purple-400 py-2 px-4 rounded-2xl text-purple-950 font-semibold hover:bg-gradient-to-tr"
          type="button"
        >
          Add Project
        </button>
      </form>
    </>
  );
}
