import { supabase } from "./supabaseClient";
import { Project } from "../types/types";

export async function addProject(projectData: Omit<Project, "id">) {
  return await supabase
        .from("projects")
        .insert([projectData]);
}

// export async function updateProject(projectData: Partial<Project>) {
//   // return await supabase.rpc("delete_and_readd_project", {
//   //   project_id: projectData.id,
//   //   new_title: projectData.title || null,
//   //   new_img: projectData.img || null,
//   //   new_img_alt: projectData.imgAlt || null,
//   //   new_github: projectData.github || null,
//   //   new_live: projectData.live || null,
//   //   new_why: projectData.why || null,
//   //   new_video: projectData.video || null,
//   //   new_challenges: projectData.challenges || null
//   // });
//   const { data, error: PostgrestError } = await supabase
//     .from("projects")
//     .select("*")
//     .eq("id", projectData.id)
//     .single();
//   if (PostgrestError) {
//     console.error("Error getting project:", PostgrestError);
//     alert(`Error getting project: ${PostgrestError.message}`);
//     return;
//   }
//   console.log(data);
//   if (JSON.stringify(data) === JSON.stringify(projectData)) {
//     console.log("No changes detected");
//     return;
//   } else {
//     for (const key in data) {
//       if (data[key as keyof Project] === projectData[key as keyof Project]) {
//         delete data[key as keyof Project];
//       }
//     }
//   }
//   return { data: null, error: null };
// }

export async function deleteProject(id: string) {
  return await supabase
    .from("projects")
    .delete()
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
