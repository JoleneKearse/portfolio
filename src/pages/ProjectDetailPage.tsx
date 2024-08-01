import { useParams } from "react-router-dom";
import { useState } from "react";
import { projects } from "../data/projects";

import { Heading } from "../components/Heading";
import { SkillsIconBox } from "../components/SkillsIconBox";
import { FaCode } from "react-icons/fa6";
import { FaMobileScreen } from "react-icons/fa6";
import { FaFileVideo } from "react-icons/fa6";
import { FaRegCircleXmark } from "react-icons/fa6";
// import changeTheLuminosity from "../assets/change-the-luminosity.mp4";

export function ProjectDetailPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <>
      <Heading text={project.title} />
      <article className="relative space-y-6">
        <img src={project.img} alt={project.imgAlt} title={project.imgAlt} />

        <h2 className="font-alegreya text-3xl text-neutral-600">The why</h2>
        <p>{project.why}</p>

        <h2 className="font-alegreya text-3xl text-neutral-600">The tech</h2>
        <SkillsIconBox skills={project.techUsed} />

        <h2 className="font-alegreya text-3xl text-neutral-600">
          The challenges
        </h2>
        <p>{project.challenges}</p>

        <h2 className="font-alegreya text-3xl text-neutral-600">The links</h2>
        <div className="flex flex-wrap justify-between gap-4 text-neutral-400">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 hover:text-neutral-600"
          >
            See the code
            <FaCode />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 hover:text-neutral-600"
          >
            Visit the site
            <FaMobileScreen />
          </a>
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className="flex gap-2 hover:text-neutral-600"
          >
            Walk through
            <FaFileVideo />
          </button>
        </div>
        {isModalOpen && (
          <div className="absolute top-50 bottom-0 left-0 right-0 bg-purple-950 outline">
            <button className="left-0" onClick={() => setIsModalOpen(!isModalOpen)}><FaRegCircleXmark size={32} /></button>
            <video src={project.video} controls width="100%"></video>
          </div>
        )}
      </article>
    </>
  );
}
