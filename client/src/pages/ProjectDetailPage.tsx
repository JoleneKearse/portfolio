import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

import { Heading } from "../components/Heading";

export function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <section>
      <Heading text={project.title} />
      <p>{project.description}</p>
    </section>
  )
}

