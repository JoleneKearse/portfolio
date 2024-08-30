import { supabase } from "./supabaseClient";
import { Project } from "../types/types";

export async function addProject(projectData: Omit<Project, "id">) {
  return await supabase
        .from("projects")
        .insert([projectData]);
}

export async function handleFileUpload(file: File, bucketName: string): Promise<string | null> {
  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(file.name, file);

  if (error) {
    console.error("Error uploading file:", error);
    alert(`Error uploading file: ${error.message}`);
    return null;
  }

  return data?.path || null;
}