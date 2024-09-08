import { FormEvent, useEffect, useState } from "react";
import { getProjects, deleteProject } from "../services/projectActions";
import { Project } from "../types/types";

export function DeleteProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  const handleDelete = async (e: FormEvent) => {
    e.preventDefault();
    if (selectedProject && selectedProject.id) {
      const { error } = await deleteProject(selectedProject.id);
    if (error) {
      console.log("Error deleting project:", error);
      alert(`Error deleting project: ${error.message}`);
    } else {
      alert(`Project ${selectedProject.title} deleted successfully`);
      console.log("Project deleted successfully");
      setProjects(projects.filter((project) => project.id !== selectedProject.id));
      setSelectedProject(null);
    }
    }
  }

  return (
    <>
      <h2 className="leading-12 bg-gradient-to-br from-pink-600 via-purple-500 to-purple-400 bg-clip-text pb-2 font-alegreya text-4xl font-extrabold text-neutral-alpha subpixel-antialiased">
        Delete Project{" "}
        <span>
          <a
            href="https://github.com/JoleneKearse?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto ml-10 inline w-full text-center font-alegreya text-2xl font-extrabold text-purple-500 hover:text-purple-400"
          >
            Go to repos
          </a>
        </span>
      </h2>
      <p className="mt-6">
        You are so awesome! You added a freaking fantastic full-stack project
        and you're ready to remove a placeholder project.
      </p>

      <form onSubmit={handleDelete} className="space-y-8 font-roboto-mono py-10">
        <select
          id="projectToDelete"
          className="mx-auto block w-2/5 border-none bg-purple-800 p-2 outline-none hover:shadow-inner hover:shadow-xl hover:shadow-purple-500"
          onChange={(e) => {
            const selectedProjectId = e.target.value;
            const selectedProject = projects.find(
              (project) => project.id === selectedProjectId,
            );
            setSelectedProject(selectedProject!);
          }}
          required
        >
          <option value="">Select a project to delete</option>
          {projects.map((project) => {
            return (
              <option key={project.id} value={project.id}>
                {project.title}
              </option>
            );
          })}
        </select>
        <button
          className="mx-auto block rounded-2xl bg-gradient-to-br from-pink-600 via-purple-500 to-purple-400 px-4 py-2 font-semibold text-purple-950 hover:bg-gradient-to-tr"
          type="submit"
        >
          Delete Project
        </button>
      </form>
    </>
  );
}
