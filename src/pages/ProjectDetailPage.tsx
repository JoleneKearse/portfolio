import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Heading } from "../components/Heading";
import { SkillsIconBox } from "../components/SkillsIconBox";
import { FaCode } from "react-icons/fa6";
import { FaMobileScreen } from "react-icons/fa6";
import { FaFileVideo } from "react-icons/fa6";
import { FaRegCircleXmark } from "react-icons/fa6";
import { Project } from "../types/types";
import { getProjectId } from "../services/projectActions";
// import changeTheLuminosity from "../assets/change-the-luminosity.mp4";

export function ProjectDetailPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (projectId) {
        const data = await getProjectId(projectId);
        setProject(data);
      }
    };

    fetchProject();
  }, [projectId]);

  // console.log(project.video)

  if (!project) {
    return <div>Project not found!</div>;
  }

  return (
    <>
      <Heading text={project.title} />
      <article className="z-1 relative space-y-20">
        <img src={project.img} alt={project.imgAlt} title={project.imgAlt} />

        <div className="space-y-8">
          <h2 className="font-alegreya text-3xl text-neutral-600">The why</h2>
          <p>{project.why}</p>
        </div>

        <div className="space-y-8">
          <h2 className="font-alegreya text-3xl text-neutral-600">The tech</h2>
          <SkillsIconBox skills={project.techUsed} />
        </div>

        {project.challenges && (
          <div className="space-y-8">
            <h2 className="font-alegreya text-3xl text-neutral-600">
              The challenges
            </h2>
            <p>{project.challenges}</p>
          </div>
        )}

        <div className="space-y-8">
          <h2 className="font-alegreya text-3xl text-neutral-600">The links</h2>
          <div className="flex flex-wrap justify-between gap-4 text-neutral-400">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 hover:text-neutral-600"
            >
              See the code
              <FaCode className="mt-1" />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 hover:text-neutral-600"
            >
              Visit the site
              <FaMobileScreen className="mt-1" />
            </a>
            {project.video && <button
              onClick={() => {
                setIsModalOpen(!isModalOpen);
                console.log(project.video);
              }}
              className="flex gap-2 hover:text-neutral-600"
            >
              Walk through
              <FaFileVideo className="mt-1" />
            </button>}
          </div>
        </div>
        {isModalOpen && (
          <div className="top-50 absolute bottom-0 left-0 right-0 bg-purple-950 outline">
            <button
              className="left-0"
              onClick={() => setIsModalOpen(!isModalOpen)}
            >
              <FaRegCircleXmark size={32} />
            </button>
            <video src={project.video} controls width="100%"></video>
          </div>
        )}
      </article>
    </>
  );
}
