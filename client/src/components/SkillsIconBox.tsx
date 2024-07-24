import { Skills } from "../types/types";
import { SkillsIcon } from "./SkillsIcon";

export function SkillsIconBox({ skills }: Skills) {
  return (
    <article className="mt-6">
      <ul className="flex flex-wrap gap-4 my-20">
        <SkillsIcon skills={skills} />
      </ul>
    </article>
  );
}
