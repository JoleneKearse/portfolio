import imageLookup from "../utils/imageLookup";

type SkillsIconProps = {
  skills: string[];
};

export function SkillsIcon({ skills }: SkillsIconProps) {
  return (
    <>
      {skills.map((skill, index) => (
        <li key={index}>
          <img
            src={imageLookup[skill as keyof typeof imageLookup]}
            alt={skill}
            title={skill}
            className="w-8"
          />
        </li>
      ))}
    </>
  );
}
