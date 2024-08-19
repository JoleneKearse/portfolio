import { FormEvent, useRef } from "react";
import { supabase } from "../services/supabaseClient";
import { Project } from "../types/types";

export function ProjectForm() {
  const titleRef = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLInputElement>(null);
  const imgAltRef = useRef<HTMLInputElement>(null);
  const githubRef = useRef<HTMLInputElement>(null);
  const liveRef = useRef<HTMLInputElement>(null);
  const whyRef = useRef<HTMLTextAreaElement>(null);
  const techUsedRef = useRef<HTMLSelectElement>(null);
  const videoRef = useRef<HTMLInputElement>(null);
  const challengesRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const newProject: Omit<Project, "id"> = {
      title: titleRef.current!.value,
      img: imgRef.current?.value as string || "",
      imgAlt: imgAltRef.current?.value as string || "",
      github: githubRef.current!.value,
      live: liveRef.current!.value,
      why: whyRef.current?.value as string || "",
      techUsed: [] as string[],
      video: videoRef.current?.value as string || "",
      challenges: challengesRef.current?.value as string || "",
    };

    if (techUsedRef !== null) {
      const selectedTech: string[] = [];
      if (techUsedRef.current) {
        for (let i = 0; i < techUsedRef.current.options.length; i++) {
          const option = techUsedRef.current.options[i];
          if (option.selected) {
            selectedTech.push(option.value);
          }
        }
      }
      newProject.techUsed = selectedTech;
    }

    const { data, error } = await supabase.from("projects").insert([newProject]);

    if (error) {
      console.error("Error inserting project:", error);
    } else {
      console.log("Project inserted successfully:", data);
    }
  };

  return (
    <form
      className="space-y-8 py-10 font-roboto-mono text-neutral-300"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        ref={titleRef}
        name=""
        id="title"
        className="w-full rounded-lg border-none bg-purple-800 px-4 py-2 placeholder:text-neutral-600 hover:shadow-inner hover:shadow-xl hover:shadow-purple-500 focus:shadow-inner focus:shadow-xl focus:shadow-purple-400 focus:outline-none"
        placeholder="Title"
        required
      />
      <input
        type="text"
        ref={imgRef}
        name=""
        id="img"
        className="w-full rounded-lg border-none bg-purple-800 px-4 py-2 placeholder:text-neutral-600 hover:shadow-inner hover:shadow-xl hover:shadow-purple-500 focus:shadow-inner focus:shadow-xl focus:shadow-purple-400 focus:outline-none"
        placeholder="Image"
        required
      />
      <input
        type="text"
        ref={imgAltRef}
        name=""
        id="imgAlt"
        className="w-full rounded-lg border-none bg-purple-800 px-4 py-2 placeholder:text-neutral-600 hover:shadow-inner hover:shadow-xl hover:shadow-purple-500 focus:shadow-inner focus:shadow-xl focus:shadow-purple-400 focus:outline-none"
        placeholder="Image Alt Text"
        required
      />
      <input
        type="text"
        ref={videoRef}
        name=""
        id="video"
        className="w-full rounded-lg border-none bg-purple-800 px-4 py-2 placeholder:text-neutral-600 hover:shadow-inner hover:shadow-xl hover:shadow-purple-500 focus:shadow-inner focus:shadow-xl focus:shadow-purple-400 focus:outline-none"
        placeholder="Video Link (Optional)"
      />
      <input
        type="text"
        ref={githubRef}
        name=""
        id="github"
        className="w-full rounded-lg border-none bg-purple-800 px-4 py-2 placeholder:text-neutral-600 hover:shadow-inner hover:shadow-xl hover:shadow-purple-500 focus:shadow-inner focus:shadow-xl focus:shadow-purple-400 focus:outline-none"
        placeholder="Github"
        required
      />
      <input
        type="text"
        ref={liveRef}
        name=""
        id="live"
        className="w-full rounded-lg border-none bg-purple-800 px-4 py-2 placeholder:text-neutral-600 hover:shadow-inner hover:shadow-xl hover:shadow-purple-500 focus:shadow-inner focus:shadow-xl focus:shadow-purple-400 focus:outline-none"
        placeholder="Deployed Link"
        required
      />
      <textarea
        rows={5}
        ref={whyRef}
        id="description"
        spellCheck="true"
        className="w-full rounded-lg border-none bg-purple-800 px-4 py-2 placeholder:text-neutral-600 hover:shadow-inner hover:shadow-xl hover:shadow-purple-500 focus:shadow-inner focus:shadow-xl focus:shadow-purple-400 focus:outline-none"
        placeholder="What problems does the project solve?"
        required
      ></textarea>
      <textarea
        rows={5}
        ref={challengesRef}
        id="description"
        spellCheck="true"
        className="w-full rounded-lg border-none bg-purple-800 px-4 py-2 placeholder:text-neutral-600 hover:shadow-inner hover:shadow-xl hover:shadow-purple-500 focus:shadow-inner focus:shadow-xl focus:shadow-purple-400 focus:outline-none"
        placeholder="What challenges did you slay like a pro?"
        required
      ></textarea>
      <select
        name=""
        ref={techUsedRef}
        id="techUsed"
        className="mx-auto block w-2/5 border-none bg-purple-800 p-2 outline-none hover:shadow-inner hover:shadow-xl hover:shadow-purple-500"
        multiple
        required
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
        className="mx-auto block rounded-2xl bg-gradient-to-br from-pink-600 via-purple-500 to-purple-400 px-4 py-2 font-semibold text-purple-950 hover:bg-gradient-to-tr"
        type="submit"
      >
        Add Project
      </button>
    </form>
  );
}
