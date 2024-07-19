// import { ComponentType } from "react";

type SocialLinkProps = {
  img: string;
  url: string;
  title: string;
};

export function SocialLink({ img, url, title }: SocialLinkProps) {
  return (
    <li>
      <a
        href={url}
        title={title}
        target="_blank"
        className="text-neutral-600 hover:text-purple-400"
      >
        {img}
      </a>
    </li>
  );
}
