import { Link } from "react-router-dom";
import { AllProjects } from "../data/allProjects";

interface ProjectListProps {
  projectsData: AllProjects[];
  variant?: "showcase" | "default";
}

function ProjectList({ projectsData, variant = "default" }: ProjectListProps) {
  const variantClasses = {
    showcase: "col-span-2 py-8 lg:flex-row",
    default:
      "bg-fuschia-100 hover:brightness-110 transition ease p-6 lg:p-8 lg:col-span-1 rounded-3xl",
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {projectsData.map((projectDetails) => {
        return (
          <Link
            key={projectDetails.id}
            to={`/projects/${projectDetails.slug}`}
            className={`
            flex flex-col gap-8
            ${variantClasses[variant]} 
            `}
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
              <p className="text-blue-500 normal-case">
                {projectDetails.overview}
              </p>

              <ul className="flex flex-wrap gap-2">
                {projectDetails.skillsAndTools.map((label) => {
                  return (
                    <li
                      key={label}
                      className="text-blue-300 text-base leading-none	lowercase py-2 px-3 bg-fuschia-50/60 border border-fuschia-muted rounded-lg"
                    >
                      {label}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProjectList;
