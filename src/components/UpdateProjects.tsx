import { useEffect, useState } from "react";

import { ProjectForm } from "./ProjectForm";

import { Project, Mode } from "../types/types";
import { getProjects } from "../services/projectActions";

type UpdateProjectsProps = {
  mode: Mode;
}

export function UpdateProjects({ mode }: UpdateProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    }

    fetchProjects();
  }, [])

  return (
    <>
      <h2 className="text-4xl pb-2 subpixel-antialiased font-extrabold leading-12 text-neutral-alpha bg-gradient-to-br from-pink-600 via-purple-500 to-purple-400 bg-clip-text font-alegreya">Update Project <span><a
        href="https://github.com/JoleneKearse?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="inline ml-10 font-alegreya font-extrabold text-2xl text-purple-500 text-center w-full mx-auto hover:text-purple-400"
      >
        Go to repos
      </a></span></h2>
      <p className="mt-6">Make them say 'Wow!'  Explain the why you did it and how it helps make lives easier!</p>
      <select id="projectToUpdate" className="bg-purple-800 w-2/5 outline-none hover:shadow-inner hover:shadow-purple-500 border-none hover:shadow-xl p-2 block mx-auto"
      onChange={(e) => {
        const selectedProjectId = e.target.value;
        console.log(e.target.value);
        const selectedProject = projects.find((project) => project.id === selectedProjectId);
        setSelectedProject(selectedProject!);
      }}
      required>
        <option value="">Select a project to update</option>
        {projects.map((project) => {
          return <option key={project.id} value={project.id}>{project.title}</option>
        })}
      </select>
      {selectedProject && <ProjectForm selectedProject={selectedProject} mode={mode} />}
    </>
  )
}