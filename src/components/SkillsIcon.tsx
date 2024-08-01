import imageLookup from "../utils/imageLookup";
import { Icon } from "../types/types";

type SkillsIconProps = {
  skills: Icon[];
};

export function SkillsIcon({ skills }: SkillsIconProps) {
  return (
    <>
      {skills.map((skill, index) => (
        <li key={index}>
          <img
            src={imageLookup[skill.img as keyof typeof imageLookup]}
            alt={skill.alt}
            title={skill.alt}
            className="w-8"
          />
        </li>
      ))}
    </>
  );
}
