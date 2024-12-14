import { ProjectDetails, allProjects } from "../data/allProjects";
import ShowcaseProject from "../components/ProjectCard";
import ButtonLink from "../components/ButtonLink";
import { useState } from "react";

function Projects() {
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    if (filter === "All") {
      setFilteredProjects(allProjects);
    } else {
      const testingFilteredProjects: ProjectDetails[] = allProjects.filter(
        (project) => project.categories.includes(filter)
      );

      setFilteredProjects(testingFilteredProjects);
    }
  };

  return (
    <main className="w-full md:container py-4 px-4 sm:px-6">
      <h1 className="sr-only">Projects</h1>

      <div className="grid md:grid-cols-3 md:grid-auto-rows gap-4 md:gap-10">
        <section className="md:col-span-1 p-6 flex flex-col gap-4 bg-blue-500 rounded-3xl">
          <h2>&lt;explore&gt;</h2>
          <p className="text-xl">
            Discover my journey through code and creativity. Each project
            reflects problem-solving, innovation, and a passion for crafting
            seamless user experiences.
          </p>
        </section>

        <section className="md:col-span-2 p-6 flex flex-col gap-4 bg-blue-500 rounded-3xl">
          <h2>&lt;Projects&gt;</h2>
          <p>Check out some of my recent work below. </p>

          <div className="flex gap-8">
            <ButtonLink
              label="All"
              handleClick={() => handleFilterClick("All")}
              ariaPressed={activeFilter === "All"}
            />
            <ButtonLink
              label="Development"
              handleClick={() => handleFilterClick("Development")}
              ariaPressed={activeFilter === "Development"}
            />
            <ButtonLink
              label="Design"
              handleClick={() => handleFilterClick("Design")}
              ariaPressed={activeFilter === "Design"}
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            {filteredProjects.map((project) => {
              return (
                <ShowcaseProject
                  key={project.id}
                  projectDetails={project}
                  colorTheme="accent"
                  layout="vertical"
                />
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Projects;
