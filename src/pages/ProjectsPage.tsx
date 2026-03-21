import { useEffect, useState } from "react";

import { Heading } from "../components/Heading";
import { ProjectCard } from "../components/ProjectCard";

import { Project } from "../types/types";
import { getProjects } from "../services/projectActions";
import { projects as fallbackProjects } from "../data/projects";

export function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();

        if (!data.length) {
          setProjects([...fallbackProjects].reverse());
          setUsingFallback(true);
          return;
        }

        setProjects([...data].reverse());
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="to-indigo-600 mt-32 aspect-square h-32 w-32 animate-spin rounded-full bg-gradient-to-bl from-pink-400 via-purple-400 p-3 drop-shadow-2xl md:h-48 md:w-48">
          <div className="background-blur-md h-full w-full rounded-full bg-purple-950"></div>
        </div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <section className="space-y-6">
      <Heading text="Jolene's Projects" />
      {usingFallback && (
        <p className="rounded-xl bg-purple-900 px-4 py-3 text-purple-300">
          Couldn&apos;t load projects from Supabase right now, so these are
          local fallback projects.
        </p>
      )}
      <ul className="flex flex-col md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-2">
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}
