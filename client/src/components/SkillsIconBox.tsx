import { Skills } from "../types/types";
import { SkillsIcon } from "./SkillsIcon";

export function SkillsIconBox({ skills }: Skills) {
  return (
    <article className="mt-10">
      <h2 className="font-bold">My Main Tech</h2>
      <ul className="flex gap-4 mx-auto mt-6">
        <SkillsIcon skills={skills} />
      </ul>
    </article>
  )
}