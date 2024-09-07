import { supabase } from "./supabaseClient";
import { Project } from "../types/types";

export async function addProject(projectData: Omit<Project, "id">) {
  return await supabase
        .from("projects")
        .insert([projectData]);
}

export async function updateProject(projectData: Partial<Project>, id: string) {
  return await supabase
    .from("projects")
    .update(projectData)
    .eq("id", id);
}

export async function handleFileUpload(file: File, bucketName: string): Promise<string | null> {
  const { error } = await supabase.storage
    .from(bucketName)
    .upload(file.name, file);

  if (error) {
    console.error("Error uploading file:", error);
    alert(`Error uploading file: ${error.message}`);
    return null;
  }

  // generate url to save in db
  return getFileUrl(bucketName, file.name);
}

export async function getFileUrl(bucketName: string, fileName: string): Promise<string | null> {
  const { data } = await supabase.storage
    .from(bucketName)
    .getPublicUrl(fileName);
  return data.publicUrl;
}

export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from("projects")
    .select("*");

  if (error) {
    console.error("Error getting projects:", error);
    alert(`Error getting projects: ${error.message}`);
    return [];
  }

  return data || [];
}

export async function getProjectId(id: string): Promise<Project | null> {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id);

  if (error) {
    console.error("Error getting project:", error);
    alert(`Error getting project: ${error.message}`);
    return null;
  }

  return data ? data[0] : null;
}
