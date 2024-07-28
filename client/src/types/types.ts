export type Icon = {
  img: string;
  alt: string;
}

export type Skills = {
  skills: Icon[];
}

export type Project = {
  id: number;
  title: string;
  img: string;
  github: string;
  live: string;
  description: string;
  techUsed: Icon[];
}