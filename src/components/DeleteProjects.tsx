import { ProjectForm } from "./ProjectForm";

export function DeleteProjects() {
  return (
    <>
      <h2 className="leading-12 bg-gradient-to-br from-pink-600 via-purple-500 to-purple-400 bg-clip-text pb-2 font-alegreya text-4xl font-extrabold text-neutral-alpha subpixel-antialiased">
        Delete Project{" "}
        <span>
          <a
            href="https://github.com/JoleneKearse?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto ml-10 inline w-full text-center font-alegreya text-2xl font-extrabold text-purple-500 hover:text-purple-400"
          >
            Go to repos
          </a>
        </span>
      </h2>
      <p className="mt-6">
        You are so awesome! You added a freaking fantastic full-stack project
        and you're ready to remove a placeholder project.
      </p>
      <select
        id="projectToUpdate"
        className="mx-auto block w-2/5 border-none bg-purple-800 p-2 outline-none hover:shadow-inner hover:shadow-xl hover:shadow-purple-500"
        required
      ></select>
      <ProjectForm />
    </>
  );
}
