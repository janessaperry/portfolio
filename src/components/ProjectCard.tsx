import { Link } from "react-router";
import { ProjectDetails } from "../data/allProjects";

interface ProjectCardProps {
  projectDetails: ProjectDetails;
  colorTheme?: string;
  layout?: string;
}

function ProjectCard({
  projectDetails,
  colorTheme = "default",
  layout = "vertical",
}: ProjectCardProps) {
  return (
    <Link
      to="/projects"
      className={`card ${
        colorTheme === "accent"
          ? "p-6 bg-mauve-500 lg:basis-1/2"
          : "py-6 lg:flex-row"
      } ${layout} py-6 flex flex-col gap-8 rounded-3xl`}
    >
      <div className="md:basis-1/3">
        <img
          src={projectDetails.thumbnailInfo.filePath}
          alt={projectDetails.thumbnailInfo.altText}
          className="sm:w-1/2 md:w-full lg:max-h-56 xl:object-contain justify-self-center"
        />
      </div>

      <div className="md:basis-2/3 flex flex-col gap-2">
        <h2 className="text-pink-700">{projectDetails.title}</h2>
        <p className="text-blue-500">{projectDetails.description}</p>

        <ul className="flex flex-wrap gap-2">
          {projectDetails.skillsAndTools.map((label) => {
            return (
              <li
                key={label}
                className="text-blue-300 text-base leading-none	lowercase py-2 px-3 bg-mauve-300 border border-mauve-700 rounded-lg"
              >
                {label}
              </li>
            );
          })}
        </ul>
      </div>
    </Link>
  );
}

export default ProjectCard;
