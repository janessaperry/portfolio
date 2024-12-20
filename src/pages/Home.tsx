import { ArrowRight } from "@phosphor-icons/react";
import { allProjects } from "../data/allProjects";
import LinkButton from "../components/LinkButton";
import ProjectList from "../components/ProjectList";

function Home() {
  return (
    <main className="main-container">
      <section className="py-8 md:py-16">
        <div className="mx-auto space-y-8 lg:max-w-screen-lg">
          <div className="space-y-4">
            <h1 className="text-4xl text-center">Hey there, I'm Janessa</h1>
            <p className="text-xl md:text-2xl text-center">
              Designer Turned Developer • Creative Problem Solver • Forever
              Curious, Always Evolving
            </p>
          </div>

          <div className="w-fit mx-auto rounded-full bg-gradient-to-tr from-seafoam-500/80 via-blue-neon/80 to-fuschia-neon/80 p-px">
            <div className="flex h-full w-full rounded-full items-center justify-center bg-fuschia-900">
              <p className="pl-10 font-semibold pr-5 py-1">
                <span
                  className="relative before:absolute before:w-3 before:h-3 before:rounded-full before:bg-seafoam-500 before:-left-6 before:top-[5px] before:animate-radiate
                [&:not(:last-of-type)]:after:absolute after:bg-seafoam-500 after:opacity-30 after:w-px after:h-[calc(100%+2rem)] after:-left-8 after:top-3"
                ></span>
                Available for work
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-3 grid-auto-rows gap-4 md:flex-row md:gap-10">
        <section className="section-card md:col-span-1 md:row-span-1 md:order-1">
          <h2>&lt;Craft&gt;</h2>
          <p className="text-xl">
            Bringing pixels to life with{" "}
            <span className="font-mono text-seafoam-500">&lt;code/&gt;</span>{" "}
            and <span className="font-mono text-seafoam-500">creativity()</span>
            .
          </p>
        </section>

        <section className="section-card md:col-span-1 md:order-3 md:h-fit lg:h-auto">
          <h2>&lt;About&gt;</h2>
          <p>
            I'm a web developer with a background in design, specializing in
            creating responsive, user-friendly websites. My work combines design
            expertise with development skills, transforming ideas into clean,
            functional web experiences.
          </p>
          <p>
            Since graduating from a coding bootcamp, I've built projects using
            React, Vue, Node.js, and Express (to name a few). I'm excited to
            bring my unique perspective to a collaborative team, building
            innovative digital solutions that prioritize usability and
            creativity.
          </p>
        </section>

        <section className="section-card section-card--accent md:col-span-2 md:row-span-2 md:order-2">
          <div className="flex justify-between items-baseline">
            <h2 className="text-fuschia-700">&lt;Showcase&gt;</h2>
            <LinkButton
              label="View all projects"
              href="/projects"
              variant="secondary"
              iconRight={<ArrowRight />}
            />
          </div>

          <ProjectList
            projectsData={allProjects.filter((project) => project.showcase)}
            variant="showcase"
          />
        </section>
      </div>
    </main>
  );
}

export default Home;
