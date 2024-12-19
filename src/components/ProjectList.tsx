import { Link } from "react-router-dom";
import { AllProjects } from "../data/allProjects";
import ChipList from "./ChipList";

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
    <>
      {projectsData.length ? (
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

                  <ChipList
                    labels={projectDetails.skillsAndTools}
                    variant="primaryLighten"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <p
          className={`${
            variant === "showcase" ? "text-blue-700" : "text-blue-50"
          }`}
        >
          Work in progress...
        </p>
      )}
    </>
  );
}

export default ProjectList;
