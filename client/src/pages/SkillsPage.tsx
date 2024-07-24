import { Heading } from "../components/Heading";
import { SkillsIconBox } from "../components/SkillsIconBox";
import { SkillTimeline } from "../components/SkillTimeline";
import { Icon } from "../types/types";

export function SkillsPage() {
  const mainSkills: Icon[] = [
    { img: "React", alt: "React" },
    { img: "JavaScript", alt: "JavaScript" },
    { img: "TypeScript", alt: "TypeScript" },
    { img: "Tailwind", alt: "Tailwind" },
    { img: "Git", alt: "Git" },
    { img: "Vite", alt: "Vite" },
    { img: "HTML5", alt: "HTML5" },
    { img: "CSS3", alt: "CSS3" },
    { img: "Linux", alt: "Linux" },
  ];
  const futureProofingSkills: Icon[] = [
    { img: "TypeScript", alt: "TypeScript" },
    { img: "Rust", alt: "Rust" },
  ];
  const allOtherSkills: Icon[] = [
    { img: "Python", alt: "Python" },
    { img: "Node", alt: "NodeJS" },
    { img: "Express", alt: "Express" },
    { img: "PostgreSQL", alt: "PostgreSQL" },
    { img: "Supabase", alt: "Supabase" },
    { img: "Firebase", alt: "Firebase" },
    { img: "MongoDB", alt: "MongoDB" },
    { img: "Figma", alt: "Figma" },
    { img: "Photoshop", alt: "Photoshop" },
    { img: "Illustrator", alt: "Illustrator" },
  ];

  return (
    <main>
      <Heading text="Jolene's Skills" />
      <article className="space-y-6 text-balance max-w-prose">
        <p className="mt-10">
          Psst, here's how I'll be an{" "}
          <span className="emphasis-text">asset</span> to you...
        </p>
        <p className="">
          Let me show you in <span className="emphasis-text">3</span> easy
          steps!
        </p>
        <h2 className="py-10 text-2xl font-bold text-purple-500">
          #1: I'm ready to go!
        </h2>
        <SkillsIconBox skills={mainSkills} />
        <p className="mt-20">
          I'll show you the technologies I have wide experience in and will be
          able to jump in right away.
        </p>
        {/* HTML */}
        <p className="">
          I use semantic <span className="tech-text">HTML</span>, and{" "}
          <span className="tech-text">JSX</span>, to create{" "}
          <span className="emphasis-text">accessible</span> experiences ensuring
          everyone can use your service / product.
        </p>
        {/* CSS */}
        <p className="">
          I love creating engaging designs using{" "}
          <span className="tech-text">CSS</span>. Not only does this bring out
          the artist in me, but I have an air-tight foundation -{" "}
          <i>I can even center a div!</i>
        </p>
        <p className="">
          But all joking aside. I'm able to switch{" "}
          <span className="emphasis-text">CSS / UI</span> libraries on demand.
        </p>
        <p className="">
          I'm can jump right in, whatever your team uses, including these I've
          already utilized:
        </p>
        <ul className="px-10">
          <li className="tech-text">Tailwind CSS</li>
          <li className="tech-text">Bootstrap</li>
          <li className="tech-text">Chakra UI</li>
          <li className="tech-text">Dracula UI</li>
        </ul>
        {/* TOOLS */}
        <p className="">
          I regularly use <span className="tech-text">Git</span> and{" "}
          <span className="tech-text">Github</span> for version control,
          teamwork & organizing a project. I can quickly spin up new apps using{" "}
          <span className="tech-text">Vite</span> and{" "}
          <span className="tech-text">NPM</span>,{" "}
          <span className="tech-text">Yarn</span> or, my fave,{" "}
          <span className="tech-text">PNPM</span>. I'm adept at using my{" "}
          <span className="tech-text">Fedora WSL2</span> system for employing{" "}
          <span className="tech-text">Linux</span> commands in the terminal.
        </p>
        {/* FRAMEWORKS */}
        <p>
          My main <span className="emphasis-text">framework</span> is{" "}
          <span className="tech-text">React</span> and it's whole ecosystem.{" "}
        </p>
        {/* POINT TWO */}
        <h2 className="py-10 text-2xl font-bold text-purple-500">
          #2: I'm actively future proofing!
        </h2>
        <SkillsIconBox skills={futureProofingSkills} />
        <p>
          I absolutely love <span className="emphasis-text">"strict"</span>{" "}
          languages! I recognize that languages built to help us developers
          fully think through our choices allow us to catch bugs before they
          ever have a chance to annoy your customers in the slightest.
        </p>
        <p>
          For this reason, I've been focusing on{" "}
          <span className="tech-text">TypeScript</span> &{" "}
          <span className="tech-text">Rust</span>. These are the languages I
          believe offer the most protection, and, thus, are my focus.
        </p>
        <p>
          I now use TypeScript on almost all my JS-based projects and am rapidly
          speeding up fixing compiler errors.
        </p>
        <p>
          Rust has been amazing at teaching me more computer science tenets, and
          has overall made me a better programmer.
        </p>
        {/* POINT THREE */}
        <h2 className="py-10 text-2xl font-bold text-purple-500">
          #3: I have experience using other tools when the situation arises!
        </h2>
        <SkillsIconBox skills={allOtherSkills} />
        <p>
          <span className="tech-text">Python</span> is my go-to when spinning up
          personal <span className="emphasis-text">command-line utilities</span>
          . Here are some projects I created & why:
        </p>
        <ul className="px-10 space-y-2">
          <li>
            A{" "}
            <span className="text-purple-400 font-roboto-mono">
              timezone tool
            </span>{" "}
            to quickly check teammates' times to arrange meetings.
          </li>
          <li>
            A{" "}
            <span className="text-purple-400 font-roboto-mono">
              decimal time converter
            </span>{" "}
            to assist me when entering times for part-time jobs -{" "}
            <i>until I break into tech</i>!
          </li>
          <li>
            A script to quickly generate a highly personalized{" "}
            <span className="emphasis-text">Excel</span> spreadsheet to help me
            organize each year.
          </li>
        </ul>
        <p>
          I'm obsessed with creating{" "}
          <span className="emphasis-text">full-stack</span> projects. I had
          started out with <span className="tech-text">MERN</span> projects, but
          now love the simplicity of <span className="tech-text">SQL</span>{" "}
          databases.
        </p>
        <p>
          I started out in <span className="emphasis-text">frontend</span>, so
          design is still a pasttime of mine. I used{" "}
          <span className="tech-text">Photoshop</span> extensively in my last
          career, but have expanded to{" "}
          <span className="tech-text">Illustrator</span> &{" "}
          <span className="tech-text">Figma</span> in these last few years.
        </p>
        <SkillTimeline />
      </article>
    </main>
  );
}
