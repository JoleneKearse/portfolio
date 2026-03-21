import imageLookup from "../utils/imageLookup";

type SkillsIconProps = {
  skills?: string[] | null;
};

export function SkillsIcon({ skills }: SkillsIconProps) {
  const normalizedSkills = Array.isArray(skills) ? skills : [];

  return (
    <>
      {normalizedSkills.map((skill, index) => {
        const icon = imageLookup[skill as keyof typeof imageLookup];

        if (!icon) {
          return null;
        }

        return (
          <li key={index}>
            <img src={icon} alt={skill} title={skill} className="w-8" />
          </li>
        );
      })}
    </>
  );
}
