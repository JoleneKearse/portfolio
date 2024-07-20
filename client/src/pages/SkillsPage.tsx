import { Heading } from "../components/Heading";
import { SkillsIconBox } from "../components/SkillsIconBox";
import { SkillTimeline } from "../components/SkillTimeline";
import { Icon } from "../types/types";

export function SkillsPage() {
  const mainSkills: Icon[] = [
    { img: 'React', alt: 'React' },
    { img: 'JavaScript', alt: 'JavaScript' },
    { img: 'TypeScript', alt: 'TypeScript' },
    { img: 'Tailwind', alt: 'Tailwind' },
    { img: 'Git', alt: 'Git' },
    { img: 'Vite', alt: 'Vite' },
    { img: 'HTML5', alt: 'HTML5' },
    { img: 'CSS3', alt: 'CSS3' },
    { img: 'Linux', alt: 'Linux' },
  ];
  
  return (
    <main>
      <Heading />
      <p className="mt-10">What can I do for you?</p>
      <p className="mt-6">I'm highly experienced in Frontend Technologies.</p>
      <SkillsIconBox skills={mainSkills} />
      <SkillTimeline />
    </main>
  )
}