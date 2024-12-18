import { Link } from "react-router-dom";
import { AllProjects } from "../data/allProjects";

interface ProjectCardProps {
  projectDetails: AllProjects;
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
      to={`/projects/${projectDetails.slug}`}
      className={`card ${
        colorTheme === "accent"
          ? "bg-fuschia-50 p-6 lg:p-8"
          : "bg-transparent py-6"
      } ${
        layout === "vertical" ? "lg:basis-1/2" : "lg:flex-row lg:px-0"
      } flex flex-col gap-8 rounded-3xl`}
    >
      <div className="md:basis-1/3">
        <img
          src={projectDetails.thumbnailInfo.filePath}
          alt={projectDetails.thumbnailInfo.altText}
          className="sm:w-1/2 md:w-full lg:max-h-56 xl:object-contain justify-self-center"
        />
      </div>

      <div className="md:basis-2/3 flex flex-col gap-2">
        <h2 className="text-fuschia-700">{projectDetails.title}</h2>
        <p className="text-blue-500 normal-case">{projectDetails.overview}</p>

        <ul className="flex flex-wrap gap-2">
          {projectDetails.skillsAndTools.map((label) => {
            return (
              <li
                key={label}
                className="text-blue-300 text-base leading-none	lowercase py-2 px-3 bg-fuschia-50 border border-fuschia-muted rounded-lg"
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
