import { FormEvent, useRef } from "react";

import { Project } from "../types/types";
import {
  addProject,
  handleFileUpload,
  updateProject,
} from "../services/projectActions";

type ProjectFormProps = {
  selectedProject?: Project;
  mode: "add" | "update";
};

export function ProjectForm({ selectedProject, mode }: ProjectFormProps) {
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

    // handle image and video uploads
    const imgFile = imgRef.current?.files?.[0];
    const videoFile = videoRef.current?.files?.[0];

    const imgPath = imgFile
      ? await handleFileUpload(imgFile, "jolene-kearse-projects-images")
      : "";

    const videoPath = videoFile
      ? await handleFileUpload(videoFile, "jolene-kearse-projects-videos")
      : "";

    const workingProject: Partial<Project> = {
      id: selectedProject?.id || undefined,
      title: titleRef.current!.value,
      img: imgPath || "",
      imgAlt: (imgAltRef.current?.value as string) || "",
      github: githubRef.current!.value,
      live: liveRef.current!.value,
      why: (whyRef.current?.value as string) || "",
      techUsed: [] as string[],
      video: videoPath || "",
      challenges: (challengesRef.current?.value as string) || "",
      user_id: "fabd38a7-9f69-4e2b-afb3-14df4d2d73b1",
    };

    // get the selected tech used
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
      workingProject.techUsed = selectedTech;
    }

    // add a project to the database
    if (mode === "add") {
      const { data, error } = await addProject(
        workingProject as Omit<Project, "id">,
      );

      if (error) {
        console.error("Error inserting project:", error);
      } else {
        console.log("Project inserted successfully:", data);
      }
    } else if (selectedProject?.id) {
      const { data, error } = await updateProject(
        workingProject,
        selectedProject.id,
      );
      if (error) {
        console.error("Error updating project:", error);
      } else {
        console.log("Project updated successfully:", data);
      }
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
        defaultValue={selectedProject?.title}
        placeholder="Title"
        required
      />
      <div className="flex gap-10 text-neutral-600">
        <label htmlFor="img">Image</label>
        {selectedProject?.img ? (
          <p>{selectedProject.img}</p>
        ) : (
          <input
            type="file"
            ref={imgRef}
            name="Image File"
            id="img"
            className="w-full rounded-lg border-none bg-purple-800 px-4 py-2 placeholder:text-neutral-600 hover:shadow-inner hover:shadow-xl hover:shadow-purple-500 focus:shadow-inner focus:shadow-xl focus:shadow-purple-400 focus:outline-none"
            accept="image/*"
          />
        )}
      </div>
      <input
        type="text"
        ref={imgAltRef}
        name=""
        id="imgAlt"
        className="w-full rounded-lg border-none bg-purple-800 px-4 py-2 placeholder:text-neutral-600 hover:shadow-inner hover:shadow-xl hover:shadow-purple-500 focus:shadow-inner focus:shadow-xl focus:shadow-purple-400 focus:outline-none"
        defaultValue={selectedProject?.imgAlt || ""}
        placeholder="Image ALT Text"
      />
      <div className="flex gap-10 text-neutral-600">
        <label htmlFor="video">Video</label>
        {selectedProject?.video ? (
          <p>{selectedProject.video}</p>
        ) : (
          <input
            type="file"
            ref={videoRef}
            name=""
            id="video"
            className="w-full rounded-lg border-none bg-purple-800 px-4 py-2 placeholder:text-neutral-600 hover:shadow-inner hover:shadow-xl hover:shadow-purple-500 focus:shadow-inner focus:shadow-xl focus:shadow-purple-400 focus:outline-none"
            accept="video/*"
            defaultValue={selectedProject?.video || ""}
          />
        )}
      </div>
      <input
        type="text"
        ref={githubRef}
        name=""
        id="github"
        className="w-full rounded-lg border-none bg-purple-800 px-4 py-2 placeholder:text-neutral-600 hover:shadow-inner hover:shadow-xl hover:shadow-purple-500 focus:shadow-inner focus:shadow-xl focus:shadow-purple-400 focus:outline-none"
        defaultValue={selectedProject?.github || ""}
        placeholder="Github"
        required
      />
      <input
        type="text"
        ref={liveRef}
        name=""
        id="live"
        className="w-full rounded-lg border-none bg-purple-800 px-4 py-2 placeholder:text-neutral-600 hover:shadow-inner hover:shadow-xl hover:shadow-purple-500 focus:shadow-inner focus:shadow-xl focus:shadow-purple-400 focus:outline-none"
        defaultValue={selectedProject?.live || ""}
        placeholder="Deployed Link"
        required
      />
      <textarea
        rows={5}
        ref={whyRef}
        id="description"
        spellCheck="true"
        className="w-full rounded-lg border-none bg-purple-800 px-4 py-2 placeholder:text-neutral-600 hover:shadow-inner hover:shadow-xl hover:shadow-purple-500 focus:shadow-inner focus:shadow-xl focus:shadow-purple-400 focus:outline-none"
        defaultValue={selectedProject?.why || ""}
        placeholder="What problems does the project solve?"
        required
      ></textarea>
      <textarea
        rows={5}
        ref={challengesRef}
        id="description"
        spellCheck="true"
        className="w-full rounded-lg border-none bg-purple-800 px-4 py-2 placeholder:text-neutral-600 hover:shadow-inner hover:shadow-xl hover:shadow-purple-500 focus:shadow-inner focus:shadow-xl focus:shadow-purple-400 focus:outline-none"
        defaultValue={selectedProject?.challenges || ""}
        placeholder="What challenges did you slay like a pro?"
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
        <option
          value="React"
          selected={selectedProject?.techUsed?.includes("React")}
        >
          React
        </option>
        <option
          value="JavaScript"
          selected={selectedProject?.techUsed?.includes("JavaScript")}
        >
          JavaScript
        </option>
        <option
          value="TypeScript"
          selected={selectedProject?.techUsed?.includes("TypeScript")}
        >
          TypeScript
        </option>
        <option
          value="Tailwind"
          selected={selectedProject?.techUsed?.includes("Tailwind")}
        >
          Tailwind
        </option>
        <option
          value="Node"
          selected={selectedProject?.techUsed?.includes("Node")}
        >
          Node
        </option>
        <option
          value="Express"
          selected={selectedProject?.techUsed?.includes("Express")}
        >
          Express
        </option>
        <option
          value="Firebase"
          selected={selectedProject?.techUsed?.includes("Firebase")}
        >
          Firebase
        </option>
        <option
          value="Illustrator"
          selected={selectedProject?.techUsed?.includes("Illustrator")}
        >
          Illustrator
        </option>
        <option
          value="Photoshop"
          selected={selectedProject?.techUsed?.includes("Photoshop")}
        >
          Photoshop
        </option>
        <option
          value="PostgreSQL"
          selected={selectedProject?.techUsed?.includes("PostgreSQL")}
        >
          PostgreSQL
        </option>
        <option
          value="Python"
          selected={selectedProject?.techUsed?.includes("Python")}
        >
          Python
        </option>
        <option
          value="Rust"
          selected={selectedProject?.techUsed?.includes("Rust")}
        >
          Rust
        </option>
        <option
          value="Vercel"
          selected={selectedProject?.techUsed?.includes("Vercel")}
        >
          Vercel
        </option>
        <option
          value="Supabase"
          selected={selectedProject?.techUsed?.includes("Supabase")}
        >
          Supabase
        </option>
        <option
          value="MongoDB"
          selected={selectedProject?.techUsed?.includes("MongoDB")}
        >
          MongoDB
        </option>
        <option
          value="Figma"
          selected={selectedProject?.techUsed?.includes("Figma")}
        >
          Figma
        </option>
        <option
          value="Git"
          selected={selectedProject?.techUsed?.includes("Git")}
        >
          Git
        </option>
        <option
          value="Vite"
          selected={selectedProject?.techUsed?.includes("Vite")}
        >
          Vite
        </option>
        <option
          value="CSS3"
          selected={selectedProject?.techUsed?.includes("CSS3")}
        >
          CSS
        </option>
        <option
          value="HTML5"
          selected={selectedProject?.techUsed?.includes("HTML5")}
        >
          HTML
        </option>
        <option
          value="Linux"
          selected={selectedProject?.techUsed?.includes("Linux")}
        >
          Linux
        </option>
      </select>
      <button
        className="mx-auto block rounded-2xl bg-gradient-to-br from-pink-600 via-purple-500 to-purple-400 px-4 py-2 font-semibold text-purple-950 hover:bg-gradient-to-tr"
        type="submit"
      >
        {mode === "add" ? "Add" : "Update"} Project
      </button>
    </form>
  );
}
