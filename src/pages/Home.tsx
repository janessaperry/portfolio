import { ArrowRight, Envelope, LinkedinLogo } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { allProjects } from "../data/allProjects";
import ProjectCard from "../components/ProjectCard";
import ButtonLink from "../components/ButtonLink";

function Home() {
  const navigate = useNavigate();

  return (
    <main className="main-container">
      <section className="flex flex-col items-center py-8 md:py-16">
        <div className="flex flex-col gap-4 lg:max-w-screen-lg">
          <h1 className="text-4xl text-center">Hey there, I'm Janessa</h1>
          <p className="text-xl md:text-2xl text-center">
            I'm a designer-turned-developer who loves creating clean, responsive
            websites that look great and work even better. My focus is on
            building user-friendly experiences that feel seamless and intuitive.
          </p>
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

        <section className="section-card md:col-span-1 md:row-span-2 md:order-3 md:h-fit lg:h-auto">
          <h2>&lt;About&gt;</h2>
          <p>
            I'm a web developer with a background in design, specializing in
            creating responsive, user-friendly websites. My work combines design
            expertise with development skills, transforming ideas into clean,
            functional web experiences.
          </p>
          <p>
            Since graduating from a coding bootcamp, I've built projects using
            React, Vue, Node.js, and Express. I'm excited to bring my unique
            perspective as a designer-turned-developer to a collaborative team,
            building innovative digital solutions that prioritize usability and
            creativity.
          </p>
        </section>

        <section className="section-card section-card--accent md:col-span-2 md:row-span-2 md:order-2">
          <div className="flex justify-between items-baseline">
            <h2 className="text-fuschia-700">&lt;Showcase&gt;</h2>
            <ButtonLink
              variant="secondary"
              handleClick={() => navigate("/projects")}
              label="View all projects"
              iconRight={<ArrowRight />}
            />
          </div>

          {allProjects
            .filter((project) => project.showcase)
            .map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  projectDetails={project}
                  layout="horizontal"
                />
              );
            })}
        </section>

        <section className="section-card md:col-span-2 md:order-4">
          <h2>&lt;Contact&gt;</h2>

          <div className="flex flex-col gap-2">
            <p>I'm currently open to new work opportunities.</p>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/in/janessa-perry"
                target="_blank"
              >
                <LinkedinLogo className="text-seafoam-500 text-3xl" />
              </a>

              <a href="mailto:hello@janessaperry.com" target="_blank">
                <Envelope className="text-seafoam-500 text-3xl" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
