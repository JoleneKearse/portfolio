import { Heading } from "../components/Heading";
import { SkillTimeline } from "../components/SkillTimeline";

export function SkillsPage() {
  return (
    <main>
      <Heading />
      <p className="mt-10">What can I do for you?</p>
      <p className="mt-6">I'm highly experienced in Frontend Technologies.</p>
      <SkillTimeline />
    </main>
  )
}