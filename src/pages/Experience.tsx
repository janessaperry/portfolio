import { experienceHighlights } from "../data/experienceHighlights";
import { contactLinks } from "../data/contactLinks";
import { skillsAndTools } from "../data/skillsAndTools";
import { experienceDetails } from "../data/experienceDetails";
import { allProjects } from "../data/allProjects";
import { educationDetails } from "../data/educationDetails";
import { DownloadSimple } from "@phosphor-icons/react";
import LinkButton from "../components/LinkButton";
import LinkSocial from "../components/LinkSocial";
import ChipList from "../components/ChipList";
import IconList from "../components/IconList";

function Experience() {
  return (
    <main className="main-container">
      <section className="py-8 md:py-16">
        <div className="mx-auto space-y-4 lg:max-w-screen-lg">
          <h1 className="text-4xl text-center">My Experience</h1>
          <p className="text-xl md:text-2xl text-center">
            Check out my career journey below!
          </p>

          <div className="w-fit mx-auto">
            <LinkButton
              label="Download Resume"
              href="/files/JanessaPerry-SoftwareDeveloperResume.pdf"
              size="lg"
              target="_blank"
              iconRight={<DownloadSimple weight="bold" className="text-xl" />}
            />
          </div>
        </div>
      </section>

      <div className="grid md:grid-cols-3 grid-auto-rows gap-4 md:gap-10">
        <section className="section-card md:col-span-2 md:order-2">
          <h2>&lt;Profile&gt;</h2>
          <p className="text-xl">
            Designer turned developer, motivated by solving problems, learning
            new skills, and collaborating with others to create seamless digital
            experiences. Skilled in HTML, CSS, JavaScript, and modern
            frameworks, I bring a unique blend of design sensibility and
            development expertise. I'm excited to join a collaborative team
            where I can contribute to impactful projects and grow as a
            developer.
          </p>
        </section>

        <section className="section-card md:col-span-1 md:order-1">
          <h2>&lt;Links&gt;</h2>
          <div className="space-y-6">
            {contactLinks.map((contactItem) => {
              return (
                <LinkSocial
                  key={contactItem.id}
                  url={contactItem.url}
                  icon={contactItem.icon}
                  title={contactItem.title}
                  content={contactItem.content}
                />
              );
            })}
          </div>
        </section>

        <section className="section-card md:col-span-1 row-span-1 md:order-3">
          <h2>&lt;Highlights&gt;</h2>
          <IconList listItems={experienceHighlights} />
        </section>

        <section className="section-card md:col-span-2 md:row-span-3 md:order-4">
          <h2>&lt;Experience&gt;</h2>

          <ul className="flex flex-col gap-10 pl-10">
            {experienceDetails.map((role) => {
              return (
                <li
                  key={role.id}
                  className="relative flex flex-col gap-4
                  before:absolute before:w-4 before:h-4 before:rounded-full before:bg-seafoam-500 before:-left-10 before:top-1.5 before:animate-radiate
                  [&:not(:last-of-type)]:after:absolute after:bg-seafoam-500 after:opacity-30 after:w-px after:h-[calc(100%+2rem)] after:-left-8 after:top-3"
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-xl font-semibold">{role.jobTitle}</p>
                    <p className="text-base leading-none text-fuschia-50 flex justify-between">
                      <span>{role.company}</span>
                      <span>{role.yearRange}</span>
                    </p>
                  </div>

                  <ul className="list-disc pl-4 flex flex-col gap-2">
                    {role.description.map((item, index) => {
                      return (
                        <li key={index} className="ps-2">
                          {item}
                        </li>
                      );
                    })}
                  </ul>

                  <ChipList labels={role.skillsAndTools} />
                </li>
              );
            })}
          </ul>
        </section>

        <section className="section-card md:col-span-2 md:order-7 md:col-start-2">
          <h2>&lt;Projects&gt;</h2>

          <ul className="flex flex-col gap-10 pl-10">
            {allProjects.map((project) => {
              return (
                <li
                  key={project.id}
                  className="relative flex flex-col gap-4
                  before:absolute before:w-4 before:h-4 before:rounded-full before:bg-seafoam-500 before:-left-10 before:top-1.5 before:animate-radiate
                  [&:not(:last-of-type)]:after:absolute after:bg-seafoam-500 after:opacity-30 after:w-px after:h-[calc(100%+2rem)] after:-left-8 after:top-3"
                >
                  <div className="flex flex-col gap-1">
                    <p className="text-xl font-semibold">{project.title}</p>
                    <p className="text-base leading-none text-fuschia-50 flex justify-between">
                      <span>{project.type}</span>
                      <span>{project.yearCompleted}</span>
                    </p>
                  </div>

                  <ul className="list-disc pl-4 flex flex-col gap-2">
                    {project.description.map((item, index) => {
                      return (
                        <li key={index} className="ps-2">
                          {item}
                        </li>
                      );
                    })}
                  </ul>

                  <ChipList labels={project.skillsAndTools} />
                </li>
              );
            })}
          </ul>
        </section>

        <section className="section-card md:col-span-2 md:order-8 md:col-start-2">
          <h2>&lt;Education&gt;</h2>
          <IconList listItems={educationDetails} />
        </section>

        <section className="section-card md:col-span-1 row-span-1 md:order-5">
          <h2>&lt;Skills&gt;</h2>
          <ChipList labels={skillsAndTools.skills} variant="secondary" />
        </section>

        <section className="section-card md:col-span-1 row-span-1 md:order-6">
          <h2>&lt;Tools&gt;</h2>
          <ChipList labels={skillsAndTools.tools} variant="secondary" />
        </section>
      </div>
    </main>
  );
}

export default Experience;
