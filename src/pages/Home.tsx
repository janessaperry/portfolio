import { ArrowRight, Envelope, LinkedinLogo } from "@phosphor-icons/react";
import { Link } from "react-router";
import { showcaseProjects } from "../data/showcaseProjects";
import ShowcaseProject from "../components/ShowcaseProject";

function Home() {
  return (
    <main className="w-full md:container py-4 px-4 sm:px-6">
      <h1 className="sr-only">Janessa Perry | Designer turned Developer</h1>

      <div className="flex flex-col gap-4 md:flex-row md:gap-10">
        <div className="flex flex-col gap-4 md:gap-10 md:basis-1/3">
          <section className="p-6 flex flex-col gap-4 bg-blue-500 rounded-3xl">
            <h2>&lt;Craft&gt;</h2>
            <p className="text-2xl">
              Bringing pixels to life with{" "}
              <span className="font-mono text-seafoam-500">&lt;code/&gt;</span>{" "}
              and{" "}
              <span className="font-mono text-seafoam-500">creativity()</span>.
            </p>
          </section>

          <section className="p-6 flex flex-col gap-4 bg-blue-500 rounded-3xl">
            <h2>&lt;About&gt;</h2>
            <p>
              I'm a front-end developer with a background in design,
              specializing in creating responsive, user-friendly websites. My
              work combines design expertise with development skills,
              transforming ideas into clean, functional web experiences.
            </p>
            <p>
              Since graduating from a coding bootcamp, I've built projects using
              React, Vue, Node.js, and Express. I'm excited to bring my unique
              perspective as a designer-turned-developer to a collaborative
              team, building innovative digital solutions that prioritize
              usability and creativity.
            </p>
          </section>
        </div>

        <div className="flex flex-col gap-4 md:gap-10 md:basis-2/3">
          <section className="p-6 flex flex-col gap-4 bg-mauve-500 rounded-3xl">
            <div className="flex justify-between items-baseline">
              <h2 className="text-blue-500">&lt;Showcase&gt;</h2>
              <Link
                to="/projects"
                className="flex gap-x-2 items-center font-heading text-blue-500 hover:text-blue-700"
              >
                View all projects <ArrowRight />
              </Link>
            </div>

            {showcaseProjects.map((project) => {
              return (
                <ShowcaseProject
                  key={project.id}
                  thumbnailInfo={project.thumbnailInfo}
                  title={project.title}
                  description={project.description}
                />
              );
            })}
          </section>

          <section className="p-6 flex flex-col gap-4 bg-blue-500 rounded-3xl">
            <h2>&lt;Contact&gt;</h2>

            <div className="flex flex-col gap-2">
              <p>I'm currently open to new work opportunities.</p>
              <div className="flex gap-2">
                <LinkedinLogo className="text-seafoam-500 text-3xl" />
                <Envelope className="text-seafoam-500 text-3xl" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Home;
