import { Heading } from "../components/Heading";
import { ProjectCard } from "../components/ProjectCard";

import { projects } from "../data/projects";
import { Project } from "../types/types";

export function ProjectsPage() {
  return (
    <section className="space-y-6">
      <Heading text="Jolene's Projects" />
      <p>
        These are placemark projects, but I'll get my full-stack ones up soon!
      </p>
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-2">
      {projects.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
      </div>
    </section>
  );
}
