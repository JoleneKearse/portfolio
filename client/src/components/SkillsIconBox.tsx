import { Skills } from "../types/types";
import { SkillsIcon } from "./SkillsIcon";

export function SkillsIconBox({ skills }: Skills) {
  return (
    <article className="mt-20">
      

      <ul className="flex gap-4 my-20">
        <SkillsIcon skills={skills} />
      </ul>
    </article>
  );
}
