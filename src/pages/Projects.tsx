import { AllProjects, allProjects } from "../data/allProjects";
import ProjectCard from "../components/ProjectCard";
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
      const testingFilteredProjects: AllProjects[] = allProjects.filter(
        (project) => project.categories.includes(filter)
      );

      setFilteredProjects(testingFilteredProjects);
    }
  };

  return (
    <main className="main-container">
      <section className="flex flex-col gap-8 items-center py-8 md:py-16">
        <div className="flex flex-col gap-4 lg:max-w-screen-lg">
          <h1 className="text-4xl text-center">Explore my Work</h1>
          <p className="text-xl md:text-2xl text-center">
            Discover my journey through code and creativity.
          </p>
        </div>
      </section>

      <div className="grid md:grid-cols-3 md:grid-auto-rows gap-4 md:gap-10">
        <section className=" section-card md:col-span-2 md:order-2">
          <h2>&lt;Projects&gt;</h2>
          <p className="text-xl">
            Check out some of my recent work below. Each project reflects
            problem-solving, innovation, and a passion for crafting seamless
            user experiences.
          </p>

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
                <ProjectCard
                  key={project.id}
                  projectDetails={project}
                  colorTheme="accent"
                  layout="vertical"
                />
              );
            })}
          </div>
        </section>

        <section className="section-card md:col-span-1 md:order-1 h-fit">
          <h2>&lt;Word on the Street&gt;</h2>
          <p className="text-xl italic">
            Janessa's ability to jump into technical challenges and solve
            problems really shines! She has a background writing code and
            wearing many hats, which is apparent in the way that Janessa takes a
            creative and technical approach to writing code.
          </p>
          <p className="text-right text-fuschia-50 text-base italic">
            – Educator, Software Engineering, BrainStation
          </p>
        </section>
      </div>
    </main>
  );
}

export default Projects;
