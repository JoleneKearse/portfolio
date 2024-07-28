import { Project } from "../types/types";
import { SkillsIconBox } from "./SkillsIconBox";

type ProjectCardProps = {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <>
        <article
          key={project.id}
          className="flex flex-col justify-center p-10 my-10 space-y-6 text-center bg-purple-900 rounded-2xl hover:shadow-xl hover:shadow-inner hover:shadow-purple-500 md:my-6"
        >
          <h3 className="text-2xl text-purple-300">{project.title}</h3>
          <img
            src={project.img}
            alt={project.title}
            className="w-5/6 mx-auto md:w-2/5 hover:scale-105"
          />
          <div className="grid place-content-center">
            <SkillsIconBox skills={project.techUsed} />
          </div>
          <p>{project.description}</p>
          <div className="flex justify-between text-purple-400">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-400"
            >
              View Code
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-400"
            >
              Visit Site
            </a>
          </div>
        </article>
    </>
  );
}
