import { Link } from "react-router-dom";
import { Project } from "../types/types";
import { SkillsIconBox } from "./SkillsIconBox";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <>
      <li className="my-6 flex flex-col justify-center gap-6 rounded-2xl bg-purple-900 p-10 text-center hover:shadow-inner hover:shadow-xl hover:shadow-purple-500 md:grid md:grid-rows-[auto,auto,auto,auto]">
        <Link
          to={`/projects/${project.id}`}
          key={project.id}
          className="text-2xl text-purple-300"
        >
          <h3 className="text-2xl text-purple-300">{project.title}</h3>
        
        <img
          src={project.img}
          alt={project.title}
          className="mx-auto w-5/6 hover:scale-125 md:w-2/5"
        />
        <div className="grid place-content-center">
          <SkillsIconBox skills={project.techUsed} />
        </div>
        <p>{project.description}</p>
        
        </Link>
      </li>
    </>
  );
}
