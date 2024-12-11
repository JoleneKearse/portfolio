import { useEffect, useState } from "react";

import { Heading } from "../components/Heading";
import { ProjectCard } from "../components/ProjectCard";

import { Project } from "../types/types";
import { getProjects } from "../services/projectActions";

export function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      console.log("fetched projects from ProjectsPage:", data);
      setProjects(data);
      setLoading(false);
    }

    fetchProjects();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="space-y-6">
      <Heading text="Jolene's Projects" />
      <p>
        These are placemark projects, but I'll get my full-stack ones up soon!
      </p>
      <ul className="flex flex-col md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-2">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}
