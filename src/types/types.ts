import { Provider } from "@supabase/supabase-js";

export type Skills = {
  skills?: string[] | null;
};

export type Project = {
  id: string;
  title: string;
  img: string;
  imgAlt?: string;
  github: string;
  live: string;
  why: string;
  techUsed?: string[] | null;
  video?: string;
  challenges?: string;
  // TODO: Remove the conditional before pushing to production
  user_id?: string;
};

export type OAuthResponse = {
  provider: Provider;
  url: string | null;
};

export type Mode = "update" | "add";
