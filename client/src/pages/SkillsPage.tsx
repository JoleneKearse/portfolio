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
      <p className="mt-20">Psst, here's how I'll be an <span className="font-semibold tracking-wider text-neutral-400">asset</span> to you...</p>
      <p className="mt-6">Let me show you in <span className="font-semibold tracking-wider text-neutral-400">#</span> easy steps!</p>
      <SkillsIconBox skills={mainSkills} />
      <SkillTimeline />
    </main>
  )
}