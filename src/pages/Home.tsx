import { ArrowRight, Envelope, LinkedinLogo } from "@phosphor-icons/react";
import { Link } from "react-router";
import { allProjects } from "../data/allProjects";
import ShowcaseProject from "../components/ProjectCard";

function Home() {
  return (
    <main className="w-full md:container py-4 px-4 sm:px-6">
      <h1 className="sr-only">Janessa Perry | Designer turned Developer</h1>

      <div className="grid md:grid-cols-3 grid-auto-rows gap-4 md:flex-row md:gap-10">
        <section className="md:col-span-1 md:row-span-1 md:order-1 p-6 flex flex-col gap-4 bg-blue-500 rounded-3xl">
          <h2>&lt;Craft&gt;</h2>
          <p className="text-2xl">
            Bringing pixels to life with{" "}
            <span className="font-mono text-seafoam-500">&lt;code/&gt;</span>{" "}
            and <span className="font-mono text-seafoam-500">creativity()</span>
            .
          </p>
        </section>

        <section className="md:col-span-1 md:row-span-2 md:order-3 p-6 flex flex-col gap-4 bg-blue-500 rounded-3xl">
          <h2>&lt;About&gt;</h2>
          <p>
            I'm a front-end developer with a background in design, specializing
            in creating responsive, user-friendly websites. My work combines
            design expertise with development skills, transforming ideas into
            clean, functional web experiences.
          </p>
          <p>
            Since graduating from a coding bootcamp, I've built projects using
            React, Vue, Node.js, and Express. I'm excited to bring my unique
            perspective as a designer-turned-developer to a collaborative team,
            building innovative digital solutions that prioritize usability and
            creativity.
          </p>
        </section>

        <section className="md:col-span-2 md:row-span-2 md:order-2 p-6 flex flex-col gap-4 bg-mauve-500 rounded-3xl">
          <div className="flex justify-between items-baseline">
            <h2 className="text-blue-500">&lt;Showcase&gt;</h2>
            <Link
              to="/projects"
              className="flex gap-x-2 items-center font-heading text-blue-500 hover:text-blue-700"
            >
              View all projects <ArrowRight />
            </Link>
          </div>

          {allProjects
            .filter((project) => project.showcase)
            .map((project) => {
              return (
                <ShowcaseProject
                  key={project.id}
                  projectDetails={project}
                  layout="horizontal"
                />
              );
            })}
        </section>

        <section className="md:col-span-2 md:order-4 p-6 flex flex-col gap-4 bg-blue-500 rounded-3xl">
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
    </main>
  );
}

export default Home;
