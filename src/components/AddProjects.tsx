import { ProjectForm } from "./ProjectForm";

export function AddProjects() {
  return (
    <>
      <h2 className="text-4xl pb-2 subpixel-antialiased font-extrabold leading-12 text-neutral-alpha bg-gradient-to-br from-pink-600 via-purple-500 to-purple-400 bg-clip-text font-alegreya">Add Project <span><a
        href="https://github.com/JoleneKearse?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="inline ml-10 font-alegreya font-extrabold text-2xl text-purple-500 text-center w-full mx-auto hover:text-purple-400"
      >
        Go to repos
      </a></span></h2>
      
      <ProjectForm />
    </>
  )
}