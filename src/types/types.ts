import { Provider } from "@supabase/supabase-js";

export type Icon = {
  img: string;
  alt: string;
}

export type Skills = {
  skills: Icon[];
}

export type Project = {
  id: string;
  title: string;
  img: string;
  imgAlt?: string;
  github: string;
  live: string;
  why: string;
  techUsed: Icon[];
  video?: string;
  challenges?: string;
}

export type OAuthResponse = {
  provider: Provider;
  url: string | null;
}