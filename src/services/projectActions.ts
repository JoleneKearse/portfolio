import { supabase } from "./supabaseClient";
import { Project } from "../types/types";

export async function addProject(projectData: Omit<Project, "id">) {
  return await supabase
        .from("projects")
        .insert([projectData]);
}

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

type GithubRepoMeta = {
  pushed_at: string;
};

function getRepoPathFromGithubUrl(url: string): string | null {
  try {
    const parsedUrl = new URL(url);
    if (parsedUrl.hostname !== "github.com") {
      return null;
    }

    const [owner, repo] = parsedUrl.pathname
      .split("/")
      .filter(Boolean)
      .slice(0, 2);

    if (!owner || !repo) {
      return null;
    }

    return `${owner}/${repo.replace(/\.git$/, "")}`;
  } catch {
    return null;
  }
}

export async function sortProjectsByGithubLastUpdated(
  projectList: Project[],
): Promise<Project[]> {
  const datedProjects = await Promise.all(
    projectList.map(async (project) => {
      const repoPath = getRepoPathFromGithubUrl(project.github);
      if (!repoPath) {
        return { project, lastUpdated: "" };
      }

      try {
        const response = await fetch(`https://api.github.com/repos/${repoPath}`);

        if (!response.ok) {
          return { project, lastUpdated: "" };
        }

        const data = (await response.json()) as GithubRepoMeta;
        return { project, lastUpdated: data.pushed_at ?? "" };
      } catch {
        return { project, lastUpdated: "" };
      }
    }),
  );

  return datedProjects
    .sort((a, b) => {
      const aTime = a.lastUpdated ? new Date(a.lastUpdated).getTime() : 0;
      const bTime = b.lastUpdated ? new Date(b.lastUpdated).getTime() : 0;
      return bTime - aTime;
    })
    .map(({ project }) => project);
}
