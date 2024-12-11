import { SocialLink } from "./SocialLink";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export function Footer() {
  return (
    <footer className="absolute bottom-6 w-full md:w-5/6">
      <div className="flex flex-col flex-wrap items-center justify-between gap-2 md:flex-row">
        <p className="pr-2 text-center text-sm text-neutral-300">
          &copy; {new Date().getFullYear()} Meet Jolene. All rights reserved.
        </p>
        <ul className="flex gap-3">
          <SocialLink
            img={<FaGithub />}
            title="Github"
            url="https://github.com/JoleneKearse/"
          />
          <SocialLink
            img={<FaLinkedin />}
            title="LinkedIn"
            url="https://www.linkedin.com/in/jolene-kearse-2562ba218/"
          />
          <SocialLink
            img={<MdEmail />}
            title="Email"
            url="mailto:pharaohnutz@gmail.com"
          />
        </ul>
      </div>
    </footer>
  );
}
