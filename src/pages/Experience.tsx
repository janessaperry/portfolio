import { experienceHighlights } from "../data/experienceHighlights";
import { contactLinks } from "../data/contactLinks";
import { skillsAndTools } from "../data/skillsAndTools";
import { experienceDetails } from "../data/experienceDetails";
import { allProjects } from "../data/allProjects";
import { educationDetails } from "../data/educationDetails";

function Experience() {
  return (
    <main className="w-full lg:container py-4 px-4 sm:px-6">
      <h1 className="sr-only">Experience</h1>

      <div className="grid md:grid-cols-3 grid-auto-rows gap-4 md:gap-10">
        <section className="section-card md:col-span-2 md:order-2">
          <h2>&lt;Profile&gt;</h2>
          <p className="text-xl">
            Designer turned developer, motivated by solving problems, learning
            new skills, and collaborating with others to create seamless digital
            experiences. Skilled in HTML, CSS, JavaScript, and modern
            frameworks, I bring a unique blend of design sensibility and
            development skills to create seamless digital experiences. I’m
            excited to join a collaborative team where I can contribute to
            user-focused projects and grow as a developer.
          </p>
        </section>

        <section className="section-card md:col-span-1 md:order-1">
          <h2>&lt;Links&gt;</h2>
          <div className="flex flex-col gap-6">
            {contactLinks.map((contactItem) => {
              return (
                <a
                  key={contactItem.id}
                  href={contactItem.url}
                  target="_blank"
                  className="flex md:flex-col lg:flex-row gap-2 md:gap-1 lg:gap-4"
                >
                  {contactItem.icon}
                  <div className="flex-auto flex flex-col gap-1">
                    <p className="text-xl font-semibold">{contactItem.title}</p>
                    <p className="text-base leading-none text-mauve-500">
                      {contactItem.content}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section className="section-card md:col-span-1 row-span-1 md:order-3">
          <h2>&lt;Highlights&gt;</h2>

          <div className="flex flex-col gap-6">
            {experienceHighlights.map((highlight) => {
              return (
                <div
                  key={highlight.id}
                  className="flex md:flex-col lg:flex-row gap-2 md:gap-1 lg:gap-4"
                >
                  {highlight.icon}

                  <div className="flex-auto flex flex-col gap-1">
                    <p className="text-xl font-semibold">{highlight.title}</p>
                    <p className="text-base leading-none text-mauve-500 flex justify-between">
                      <span>{highlight.location}</span>
                      <span>{highlight.year}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
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
                    <p className="text-base leading-none text-mauve-500 flex justify-between">
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

                  <ul className="flex flex-wrap gap-2">
                    {role.skillsAndTools.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="text-seafoam-500 text-base leading-none lowercase py-2 px-3 bg-blue-300 border border-blue-100 rounded-lg"
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
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
                    <p className="text-base leading-none text-mauve-500 flex justify-between">
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

                  <ul className="flex flex-wrap gap-2">
                    {project.skillsAndTools.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="text-seafoam-500 text-base leading-none lowercase py-2 px-3 bg-blue-300 border border-blue-100 rounded-lg"
                        >
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="section-card md:col-span-2 md:order-8 md:col-start-2">
          <h2>&lt;Education&gt;</h2>

          <ul className="flex flex-col gap-4">
            {educationDetails.map((education) => {
              return (
                <li key={education.id}>
                  <div className="flex flex-col gap-1">
                    <p className="text-xl font-semibold">{education.degree}</p>
                    <p className="text-base leading-none text-mauve-500 flex justify-between">
                      <span>{education.institution}</span>
                      <span>{education.yearsAttended}</span>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        <section className="section-card md:col-span-1 row-span-1 md:order-5">
          <h2>&lt;Skills&gt;</h2>

          <ul className="flex flex-wrap gap-2">
            {skillsAndTools.skills.map((skill) => {
              return (
                <li
                  key={skill}
                  className="text-seafoam-500 text-base leading-none	lowercase py-2 px-3 bg-blue-300 border border-blue-100 rounded-lg"
                >
                  {skill}
                </li>
              );
            })}
          </ul>
        </section>

        <section className="section-card md:col-span-1 row-span-1 md:order-6">
          <h2>&lt;Tools&gt;</h2>

          <ul className="flex flex-wrap gap-2">
            {skillsAndTools.tools.map((tool) => {
              return (
                <li
                  key={tool}
                  className="text-seafoam-500 text-base leading-none	lowercase py-2 px-3 bg-blue-300 border border-blue-100 rounded-lg"
                >
                  {tool}
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default Experience;
