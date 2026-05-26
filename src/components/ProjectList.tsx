import { ArrowSquareOut } from "@phosphor-icons/react";
import { AllProjects } from "../data/allProjects";
import ChipList from "./ChipList";

interface ProjectListProps {
  projectsData: AllProjects[];
  variant?: "showcase" | "default";
}

function ProjectList ({ projectsData, variant = "default" }: ProjectListProps) {
  const variantClasses = {
    showcase: "col-span-2 py-8 lg:flex-row",
    default: "bg-fuschia-100 p-6 lg:p-8 lg:col-span-1 rounded-3xl",
  };
  return (
    <>
      {projectsData.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projectsData.map((projectDetails) => {
            return (
              <div key={projectDetails.id} className={`flex flex-col gap-8 ${variantClasses[variant]}`}>
                <div>
                  <img src={projectDetails.thumbnailInfo.filePath} alt={projectDetails.thumbnailInfo.altText}
                    className="sm:w-1/2 md:w-full md:max-h-80 md:object-contain justify-self-center group-hover:scale-105 transition ease duration-300"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <div>
                    <h2 className="w-fit text-transparent bg-clip-text bg-fuschia-700 group-hover:bg-gradient-to-b group-hover:from-fuschia-500 group-hover:via-fuschia-500 group-hover:to-fuschia-700">
                      {projectDetails.title}
                    </h2>
                    <div className="flex flex-col md:flex-row md:justify-between lg:flex-col xl:flex-row xl:justify-between">
                      <p className="text-base font-medium text-fuschia-500">{projectDetails.role}</p>
                      <p className="text-base font-medium  text-fuschia-500">{projectDetails.type} • {projectDetails.yearCompleted}</p>
                    </div>
                  </div>

                  <p className="text-blue-500 normal-case">
                    {projectDetails.teaser}
                  </p>

                  <ChipList labels={projectDetails.skillsAndTools} variant="primaryLighten"/>

                  {(projectDetails.githubRepos || projectDetails.liveUrl) && (
                    <div className="flex gap-2 mt-2">
                      {projectDetails.liveUrl && (
                        <a className="button button-primary" href={projectDetails.liveUrl} target="_blank">
                          View live <ArrowSquareOut weight="bold" className="text-lg"/>
                        </a>
                      )}

                      {projectDetails.githubRepos?.map((repo) => (
                        <a key={repo.url} href={`https://${repo.url}`} target="_blank" className="button button-secondary">
                          {repo.type === "client" ? "Client Repo" : "Server Repo"}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className={`${variant === "showcase" ? "text-blue-700" : "text-blue-50"}`}>
          Work in progress...
        </p>
      )}
    </>
  );
}

export default ProjectList;
