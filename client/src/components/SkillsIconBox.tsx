import { Skills } from "../types/types";
import { SkillsIcon } from "./SkillsIcon";

export function SkillsIconBox({ skills }: Skills) {
  return (
    <article className="mt-20">
      <h2 className="text-2xl font-bold text-purple-500">
        Tech I'll be an immediate help in
      </h2>
      <p className="mt-20">
        I'll show you the technologies I have wide experience in and will be
        able to jump in right away.
      </p>
      {/* HTML */}
      <p className="mt-6">
        I use semantic{" "}
        <span className="font-semibold tracking-widest font-alegreya text-neutral-600">
          HTML
        </span>
        , and{" "}
        <span className="font-semibold tracking-widest font-alegreya text-neutral-600">
          JSX
        </span>
        , to create{" "}
        <span className="font-semibold tracking-wider text-neutral-400">
          accessible
        </span>{" "}
        experiences ensuring everyone can use your service / product.
      </p>
      {/* CSS */}
      <p className="mt-6">
        I love creating engaging designs using{" "}
        <span className="font-semibold tracking-widest font-alegreya text-neutral-600">
          CSS
        </span>
        . Not only does this bring out the artist in me, but I have an air-tight
        foundation - I can even center a div!
      </p>
      <p className="mt-6">
        I'm able to quickly switch{" "}
        <span className="font-semibold tracking-wider text-neutral-400">
          CSS / UI
        </span>{" "}
        libraries on demand.
      </p>
      <p className="mt-6">I'm able to jump right in, whatever your team uses, including:</p>
      <ul className="px-10 mt-6">
        <li>Tailwind CSS</li>
        <li>BootStrap</li>
        <li>Chakra UI</li>
      </ul>
      {/* GIT */}
      <p className="mt-6">I regularly use <span className="font-semibold tracking-widest font-alegreya text-neutral-600">
          Git
        </span> and <span className="font-semibold tracking-widest font-alegreya text-neutral-600">
          Github
        </span> for version control, teamwork & organizing a project.</p>
        {/* FRAMEWORKS */}
        

      <ul className="flex gap-4 my-20">
        <SkillsIcon skills={skills} />
      </ul>
    </article>
  );
}
