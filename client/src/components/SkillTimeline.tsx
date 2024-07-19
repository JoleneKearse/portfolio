import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../SkillTimeline.css";

export function SkillTimeline() {
  const skills = [
    { year: 2019, skill: "Picked up HTML and CSS" },
    { year: 2020, skill: "Learned JavaScript" },
    { year: 2021, skill: "Started with React" },
    { year: 2022, skill: "Mastered React and began with TypeScript" },
    {
      year: 2023,
      skill: "Dived into backend development with Node.js and Express",
    },
  ];
  return (
    <div className="flex flex-col items-center mx-auto my-8 rounded-lg bg-stars max-w-prose">
      <TransitionGroup>
        {skills.map((item, index) => (
          <CSSTransition key={index} timeout={500} classNames="fade">
            <div className="flex items-center object-cover w-4/5 p-4 mx-auto my-4 transition-transform duration-300 ease-in-out border border-gray-300 rounded hover:bg-purple-900 hover:scale-105 text-neutral-200">
              <div className="mr-4 font-bold">{item.year}</div>
              <div className="">{item.skill}</div>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
