import { supabase } from "./supabaseClient";
import { Project } from "../types/types";

export async function addProject(projectData: Omit<Project, "id">) {
  return await supabase
        .from("projects")
        .insert([projectData]);
}