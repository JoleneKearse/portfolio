import { Skills } from "../types/types";
import { SkillsIcon } from "./SkillsIcon";

export function SkillsIconBox({ skills }: Skills) {
  return (
    <article>
      <ul className="flex flex-wrap gap-4 p-2 my-6 bg-purple-900">
        <SkillsIcon skills={skills} />
      </ul>
    </article>
  );
}
