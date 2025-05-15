import { NavLink } from "react-router-dom";
import { allProjects } from "../data/allProjects";
import NetolnewHero from "../assets/images/mockups/netolnew--home-page--devices.webp";
import NetolnewCollage from "../assets/images/mockups/netolnew--final-design--collage.jpg";
import ChipList from "../components/ChipList";
import {
  ArrowSquareOut, Binoculars, Compass, Palette,
} from "@phosphor-icons/react";
import LinkButton from "../components/LinkButton";
import ProjectFeature from "../components/ProjectFeature";

function ProjectNetolnew () {
  const projectDetails = allProjects.find(
    (project) => project.id === "website-redesign--netolnew"
  );

  return (
    <main className="main-container">
      <section className="flex flex-col gap-8 items-center py-8 md:py-16">
        <div className="flex flex-col gap-4 lg:max-w-screen-lg">
          <h1 className="text-4xl text-center">{projectDetails?.title}</h1>
          <p className="text-xl md:text-2xl text-center">
            {projectDetails?.teaser}
          </p>

          <LinkButton label="View website"
                      href="https://netolnew.ca"
                      iconRight={<ArrowSquareOut weight="bold"
                                                 className="text-xl"/>}
                      size="lg"
                      target="_blank"
          />
        </div>

        <img
          src={NetolnewHero}
          alt="Netolnew home page preview"
          className="py-16 sm:w-1/2 md:w-full lg:max-w-screen-lg xl:object-contain justify-self-center"
        />
      </section>

      <div className="grid md:grid-cols-3 gap-4 md:flex-row md:gap-10">
        <section className="hidden md:section-card md:col-span-1 md:sticky md:top-32 md:h-fit md:!space-y-10">
          <div className="space-y-4">
            <h2>&lt;Contents&gt;</h2>
            <nav>
              <ul className="space-y-4 list-none">
                <li>
                  <a href={"#overview"}
                     className="text-link">
                    Overview
                  </a>
                </li>
                <li>
                  <a href={"#UPDATE"}
                     className="text-link">
                    Objectives
                  </a>
                </li>
                <li>
                  <a href={"#highlights"}
                     className="text-link">
                    Highlights
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="space-y-4">
            <h2>&lt;Projects&gt;</h2>
            <nav>
              <ul className="space-y-4 list-none">
                {allProjects.map((project) => {
                  return (
                    <li key={project.id}>
                      <NavLink
                        to={`/projects/${project.slug}`}
                        className="text-link"
                      >
                        {project.title}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </section>

        <section className="section-card md:col-span-2">
          <h2 id="overview"
              className="scroll-mt-40">
            &lt;Overview&gt;
          </h2>

          <p className="text-xl">
            NETOLNEW is an Indigenous-led, Indigenous-governed, relationship-based national partnership of scholars,
            community leaders, educators, activists, and allies working at the heart of Indigenous language
            revitalization (ILR) in Canada — formed to engage in positive action through collaborative research.
          </p>
          <p>
            Their website was getting old and difficult to maintain so they decided it was time for an overhaul. That’s
            where I came in.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="md:col-span-1 flex flex-col gap-4">
              <h3>&lt;Toolkit&gt;</h3>
              {projectDetails?.skillsAndTools?.length ? (
                <ChipList labels={projectDetails?.skillsAndTools}/>
              ) : (
                 <p>Stay tuned for details!</p>
               )}
            </div>


            <div className="md:col-span-1 flex flex-col gap-4">
              <h3>&lt;Metadata&gt;</h3>

              <div className="grid grid-cols-2 gap-y-4">
                <p className="grid-cols-1 font-heading lowercase">Role</p>
                <p className="grid-cols-1 text-right">Designer</p>

                <p className="grid-cols-1 font-heading lowercase">Completed</p>
                <p className="grid-cols-1 text-right">2023</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-card md:col-span-2 md:col-start-2">
          <h2 id="objectives"
              className="scroll-mt-40">
            &lt;Objectives&gt;
          </h2>

          <p className="text-xl">
            The main goals for the redesign were to streamline navigation throughout the site, enhance content
            discoverability, and to elevate the overall design aesthetics.
          </p>

          <div className="pt-4 flex flex-col gap-y-20">
            <ProjectFeature
              icon={Compass}
              title="Streamline navigation and site organization."
              contentBlocks={[
                {
                  type: "text",
                  paragraph: `Over the years NETOLNEW's website had become confusing to navigate and difficult to maintain. Naturally, this was a major focus of the redesign.`
                },
              ]}
            />
          </div>

          <div className="pt-4 flex flex-col gap-y-20">
            <ProjectFeature
              icon={Binoculars}
              title="Enhance content discoverability."
              contentBlocks={[
                {
                  type: "text",
                  paragraph: `The primary purpose of NETOLNEW's website is to share knowledge and as such, the design needed to ensure users were able to find the content they were looking for.`
                },
              ]}
            />
          </div>

          <div className="pt-4 flex flex-col gap-y-20">
            <ProjectFeature
              icon={Palette}
              title="Elevate overall design aesthetics."
              contentBlocks={[
                {
                  type: "text",
                  paragraph: `Create a modern looking website that is consistent, accessible, and engaging for users.`
                },
              ]}
            />
          </div>

        </section>

        <section className="section-card md:col-span-2 md:col-start-2">
          <h2 id="highlights"
              className="scroll-mt-40">
            &lt;Highlights&gt;
          </h2>

          <p>Here are some of the standout improvements from the redesign, focused on clarity, usability, and creating a
            more scalable, user-centered experience.
          </p>

          <ul className="list-disc pl-8">
            <li className="mb-2"><span className="font-semibold">Clear, simplified structure</span>: Reorganized the
              site architecture
              and
              navigation to help users find content
              faster and more intuitively.
            </li>
            <li className="mb-2"><span className="font-semibold">Accessible, cohesive visuals</span>: Standardized
              spacing, colour, and
              typography for a more consistent,
              readable, and inclusive experience across the site.
            </li>
            <li className="mb-2"><span className="font-semibold">User-first interactions</span>: Replaced friction-heavy
              elements like
              nested tabs and scattered pages with
              modals, accordions, and scannable layouts to improve usability.
            </li>
            <li className="mb-2"><span className="font-semibold">Cultural storytelling on the homepage</span>: Refreshed
              the intro
              section with Indigenous language elements to
              communicate the site's mission right from the start.
            </li>
            <li className="mb-2"><span className="font-semibold">Flexible content system</span>: Built reusable design
              patterns for
              media, articles, and guides, making the site
              easier to update and maintain long term.
            </li>
            <li className="mb-2"><span className="font-semibold">Responsive & future-friendly</span>: Ensured the design
              works seamlessly
              across devices and supports consistent
              growth with minimal maintenance overhead.
            </li>
          </ul>

          <img src={NetolnewCollage} alt="NETOLNEW Final Design Collage" className="rounded-2xl"/>
        </section>
      </div>
    </main>
  );
}

export default ProjectNetolnew;
