import { Skills } from "../types/types";
import { SkillsIcon } from "./SkillsIcon";

export function SkillsIconBox({ skills }: Skills) {
  return (
    <article className="">
      <ul className="flex flex-wrap gap-4 my-6">
        <SkillsIcon skills={skills} />
      </ul>
    </article>
  );
}
