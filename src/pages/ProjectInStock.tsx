import {NavLink} from "react-router-dom";
import {allProjects} from "../data/allProjects";
import InStockHero from "../assets/images/mockups/in-stock--warehouses.png";
import CustomDropdownInput from "../assets/images/code-snippets/in-stock--dropdown-input.png"
import HandleOptionNav from "../assets/images/code-snippets/in-stock--handleOptionNav.png"
import UseLayoutEffect from "../assets/images/code-snippets/in-stock--useLayoutEffect.png"
import MvcArchitecture from "../assets/images/code-snippets/in-stock--mvc-architecture.png"
import RateLimiting from "../assets/images/code-snippets/in-stock--rate-limiting.png"
import ChipList from "../components/ChipList";
import {
  ArrowSquareOut, ClockCountdown, Database,
  GithubLogo, Lightbulb, PersonArmsSpread, ShieldCheck, Stack,
  Textbox, Trash,
} from "@phosphor-icons/react";
import LinkButton from "../components/LinkButton";
import LinkSocial from "../components/LinkSocial";
import ProjectFeature from "../components/ProjectFeature";
import ProjectHighlight from "../components/ProjectHighlight";

function ProjectMetaHackathon() {
  const projectDetails = allProjects.find(
    (project) => project.id === "in-stock--brainstation"
  );

  const approach: string[] = [
    "RESTful API", "MVC Architecture", "Database Migrations", "Automated Seeding", "Error Handling", "Error Logging", "Rate Limiting"
  ]

  return (
    <main className="main-container">
      <section className="flex flex-col gap-8 items-center py-8 md:py-16">
        <div className="flex flex-col gap-4 lg:max-w-screen-lg">
          <h1 className="text-4xl text-center">{projectDetails?.title}</h1>
          <p className="text-xl md:text-2xl text-center">
            {projectDetails?.teaser}
          </p>

          {projectDetails?.githubRepos && (
            <div className="w-fit mx-auto">
              <LinkButton
                label="View on GitHub"
                href={`https://${
                  projectDetails?.githubRepos?.find(
                    (repo) => repo.type === "client"
                  )?.url
                }`}
                size="lg"
                target="_blank"
                iconRight={<ArrowSquareOut weight="bold"
                                           className="text-xl"/>}
              />
            </div>
          )}
        </div>

        <img
          src={InStockHero}
          alt="InStock warehouse and inventory management web app preview."
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
                  <a href={"#build-highlights"}
                     className="text-link">
                    Features
                  </a>
                </li>
                <li>
                  <a href={"#retrospective"}
                     className="text-link">
                    Retrospective
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
            InStock was originally a group project completed during a bootcamp where I learned some key
            aspects of collaborative development, such as Git flow, resolving merge conflicts, and using Jira
            to stay organized.
          </p>
          <p>
            After graduating, I decided to rebuild the web app on my own to gain more hands-on experience
            with some of the areas that I didn’t get to work on the first time around. This also gave me the
            chance to switch up the tech stack a bit and implement some additional features such as:
          </p>
          <ul className="list-disc pl-8">
            <li>Using TypeScript on the frontend</li>
            <li>Moving to raw SQL with PostgreSQL (instead of Knex and MySQL)</li>
            <li>Building custom form inputs that meet accessibility guidelines</li>
            <li>Centralized error handling and logging</li>
            <li>Automated database reseeding</li>
            <li>Protecting API routes with rate limiting</li>
          </ul>

          <div className="grid gap-8">
            <div className="md:col-span-1 flex flex-col gap-4">
              <h3>&lt;Toolkit&gt;</h3>
              {projectDetails?.skillsAndTools?.length ? (
                <ChipList labels={projectDetails?.skillsAndTools}/>
              ) : (
                <p>Stay tuned for details!</p>
              )}
            </div>

            <div className="md:col-span-1 flex flex-col gap-4">
              <h3>&lt;Approach&gt;</h3>
              {approach.length ? (
                <ChipList labels={approach}/>
              ) : (
                <p>Stay tuned for details!</p>
              )}
            </div>

            <div className="md:col-span-2 flex flex-col gap-4">
              <h3>&lt;Metadata&gt;</h3>

              <div className="grid grid-cols-2 gap-y-4">
                <p className="grid-cols-1 font-heading lowercase">Role</p>
                <p className="grid-cols-1 text-right">Full Stack Developer</p>

                <p className="grid-cols-1 font-heading lowercase">Completed</p>
                <p className="grid-cols-1 text-right">2025</p>

                <p className="grid-cols-1 font-heading lowercase">API Routes</p>
                <p className="grid-cols-1 text-right">10+</p>

                <p className="grid-cols-1 font-heading lowercase">Hosting</p>
                <p className="grid-cols-1 text-right">Netlify, Supabase, Render</p>
              </div>

              <div className="md:col-span-2 flex flex-col gap-2 items-start border-l-2 border-fuschia-300 pl-4">
                <p className="italic">Note: this demo is hosted using Render's free tier, so the initial load might
                  take up to 60 seconds.
                </p>
                <LinkButton label={"View website"}
                            href={"https://instock-jp.netlify.app"}
                            iconRight={<ArrowSquareOut weight="bold"
                                                       className="text-xl"/>}
                            target={"_blank"}
                />
              </div>

            </div>

            <div className="md:col-span-2 flex flex-col gap-4">
              <h3>&lt;GitHub&gt;</h3>

              <div className="flex flex-col lg:flex-row gap-6">
                {projectDetails?.githubRepos?.map((repo) => {
                  return (
                    <LinkSocial
                      key={repo.title}
                      url={`https://${repo.url}`}
                      icon={GithubLogo}
                      title={repo.title}
                      content={repo.url}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section-card md:col-span-2 md:col-start-2">
          <h2 id="build-highlights"
              className="scroll-mt-40">
            &lt;Build Highlights&gt;
          </h2>

          <p className="text-xl">
            Below are some highlights of the build that pushed me to explore new concepts in accessibility, backend
            architecture, and interactive UI patterns.
          </p>

          <div className="pt-4 flex flex-col gap-y-20">
            <ProjectFeature
              icon={PersonArmsSpread}
              title="Building an accessible custom dropdown input."
              description={[
                `I built a custom dropdown input from scratch that supports screen readers, keyboard navigation, and intuitive focus management.`,
                `Each option uses <code>role='radio'</code>, <code>aria-checked</code>, and <code>tabIndex='0'</code> to communicate state to screen readers, while keyboard events handle navigation and selection.`
              ]}
              imageSrc={CustomDropdownInput}
            />

            <ProjectFeature
              icon={Trash}
              title="CONTINUED (UPDATE) Building an accessible custom dropdown input."
              description={[
                `To support keyboard navigation, I manage focus with a handler that responds to <code>ArrowUp</code>, <code>ArrowDown</code>, and <code>Escape</code>.`,
                `This was my first deep dive into accessibility, and it gave me a stronger appreciation for the work that goes into building inclusive UI components.`,
              ]}
              imageSrc={HandleOptionNav}
            />

            <ProjectFeature
              icon={Textbox}
              title="Formatting the phone number while a user types."
              description={[
                `Continuing with the theme of custom inputs, I also built a phone number field that formats the value in real time as the user types.`,
                `Everything was working smoothly until I ran into an issue when editing a number in the middle of the input. Because controlled inputs re-render on each keystroke, the cursor kept jumping to the end of the string which is not ideal.`,
                `To fix this, I wrote a function to save the cursor position for each keystroke, then used <code>useLayoutEffect</code> to restore the selection position immediately after each update.`,
                `This ended up being one of those deceptively simple features that taught me how much thought it takes to get small UX details feeling smooth and intuitive.`
              ]}
              imageSrc={UseLayoutEffect}
            />

            <ProjectFeature
              icon={Stack}
              title="Building a scalable backend."
              description={[
                `I built the backend based on provided API specs by setting up routes, request handlers, and database queries to match the defined structure.`,
                `To keep things organized, I followed an MVC style pattern: routes handle incoming requests and pass them to controllers, which manage the business logic and communicate with models. The models run raw SQL queries directly against the database. This setup helped me get a clearer sense of how data flows through the app and where different responsibilities should live.`,
              ]}
              imageSrc={MvcArchitecture}
            />

            <ProjectFeature
              icon={ShieldCheck}
              title="Centralizing error handling and implementing logging with Winston."
              description={[
                `To make the backend feel more 'production-ready', I added centralized error handling middleware and integrated Winston for logging.`,
                `Since both were new to me, I spent some time digging into the docs to understand how they work and what problems they solve. The <code>errorHandler</code> middleware now catches errors across the app, and  either logs information or returns user-friendly messages, depending on the environment.`,
                `Adding logging was a great experience and even helped me optimize my frontend API calls. While testing, I noticed frontend API calls we being triggered (even when the first one failed). Thinking this was odd, I looked into what was happening and cleaned up the logic so the second call only fired if the first one succeeded. Catching that in the logs helped me spot and fix a bug I might’ve missed otherwise!`,
              ]}
            />

            <ProjectFeature
              icon={Database}
              title="Keeping the database clean with scheduled reseeds."
              description={[
                `In an attempt to keep the demo data clean, I set up a scheduled reseed that runs every three days using <code>node-cron</code>.`,
                `Setting this up led me to explore how database connections are managed across scheduled scripts and the main application, which gave me a deeper understanding how of background tasks interact with a live system.`,
              ]}
            />

            <ProjectFeature
              icon={ClockCountdown}
              title="Protecting the API with rate limiting"
              description={[
                `To protect the API from abuse, I added rate-limiting that allows 20 write operations per IP every 15 minutes. This helps protect the demo site from being flooded with requests without requiring users to sign in.`,
                `<code>GET</code> requests are excluded from this limit so users can explore freely.`,
              ]}
              imageSrc={RateLimiting}
            />
          </div>
        </section>

        <section className="section-card md:col-span-2 md:col-start-2">
          <h2 id="retrospective"
              className="scroll-mt-40">
            &lt;Retrospective&gt;
          </h2>

          <p>Rebuilding this project gave me a much deeper understanding of full stack development and how all the
            moving parts fit together. It also gave me a chance to slow down and ask better questions. On the backend,
            that meant learning how to structure a codebase that's easy to maintain and debug. On the frontend, I
            explored custom UI elements and accessibility considerations that I haven't done before.
          </p>

          <ProjectHighlight
            icon={Lightbulb}
            content={
              `The space to figure things out properly was one of the valuable parts of this project. From learning how to preserve cursor position in a custom input, debugging API call flow using logs, or working with raw SQL and database connections, I came out of each challenge with a clearer sense of why things are built the way they are.`
            }
          />
        </section>


      </div>
    </main>
  );
}

export default ProjectMetaHackathon;
