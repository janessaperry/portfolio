import {NavLink} from "react-router-dom";
import {allProjects} from "../data/allProjects";
import MetaHackathonHero from "../assets/images/mockups/iggy-discover--flow--mobile.png";
import VisualSearch from "../assets/videos/iggy-discover--visual-search.mp4";
import ExploreAccounts from "../assets/videos/iggy-discover--explore-accounts.mp4";
import ChipList from "../components/ChipList";
import {
  ArrowSquareOut,
  GithubLogo,
  Image,
  Lightbulb,
  Storefront,
} from "@phosphor-icons/react";
import LinkButton from "../components/LinkButton";
import LinkSocial from "../components/LinkSocial";
import ProjectFeature from "../components/ProjectFeature";
import ProjectHighlight from "../components/ProjectHighlight";

function ProjectMetaHackathon() {
  const projectDetails = allProjects.find(
    (project) => project.id === "meta-hackathon--brainstation"
  );

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
                iconRight={<ArrowSquareOut weight="bold" className="text-xl"/>}
              />
            </div>
          )}
        </div>

        <img
          src={MetaHackathonHero}
          alt="Iggy Discover preview"
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
                  <a href={"#overview"} className="text-link">
                    Overview
                  </a>
                </li>
                <li>
                  <a href={"#features"} className="text-link">
                    Features
                  </a>
                </li>
                <li>
                  <a href={"#retrospective"} className="text-link">
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
          <h2 id="overview" className="scroll-mt-40">
            &lt;Overview&gt;
          </h2>

          <p className="text-xl">
            During a 24-hour hackathon hosted by Meta, I had the chance to
            collaborate with a talented team to create an Instagram discovery
            tool that helps users explore content in a visual and engaging way.
          </p>
          <p>
            Iggy Discover is an Instagram discovery tool designed for young
            adult users, allowing them to find visually similar content,
            profiles, and businesses. The project was developed during a
            hackathon with Meta, focused on supporting users in adapting to AI
            innovations. With just 24 hours to brainstorm, code, and present our
            solution, we created a prototype that delivers visually similar
            posts and accounts based on the image a user searched for.
          </p>

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
              <h3>&lt;Metadata&gt;</h3>

              <div className="grid grid-cols-2 gap-y-4">
                <p className="grid-cols-1 font-heading lowercase">Completed</p>
                <p className="grid-cols-1 text-right">2024</p>

                <p className="grid-cols-1 font-heading lowercase">Timeline</p>
                <p className="grid-cols-1 text-right">24 hours</p>

                <p className="grid-cols-1 font-heading lowercase">Role</p>
                <p className="grid-cols-1 text-right">Front-end Developer</p>
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
          <h2 id="features" className="scroll-mt-40">
            &lt;Features&gt;
          </h2>

          <p className="text-xl">
            Here are some of the key features of Iggy Discover.
          </p>

          <div className="pt-4 flex flex-col gap-y-20">
            <ProjectFeature
              icon={Image}
              title="Discover similar content using visual search."
              contentBlocks={[
                {
                  type: "text",
                  paragraph: `Iggy Discover lets users search for images from their Instagram feed to find similar posts. Whether it's a photo of pasta or a cityscape, the tool uses AI to return related content, helping users explore more of what they enjoy.`
                },
                {type: "video", videoSrc: VisualSearch, videoLayout: "portrait"}
              ]}
            />

            <ProjectFeature
              icon={Storefront}
              title="Find shops, restaurants, and brands with similar images in their posts."
              contentBlocks={[
                {
                  type: "text",
                  paragraph: `Beyond posts, Iggy Discover helps users discover businesses or brands that offer products similar to the images being searched for. In the example below, you can discover restaurants serving up some delicious pasta. It's a great way to find new places, products, or services that match your tastes.`
                },
                {type: "video", videoSrc: ExploreAccounts, videoLayout: "portrait"}

              ]}
            />
          </div>
        </section>

        <section className="section-card md:col-span-2 md:col-start-2">
          <h2 id="retrospective" className="scroll-mt-40">
            &lt;Retrospective&gt;
          </h2>

          <p>
            Looking back, the 24-hour hackathon was a whirlwind of collaboration
            and problem-solving. While the time constraints were intense,
            especially with different time zones to coordinate, we managed to
            stay focused by dividing tasks clearly and keeping communication
            open. We chose to hardcode the visual search results instead of
            attempting an AI-powered solution, as we didn't have the resources
            to implement it fully in such a short time. This decision allowed us
            to deliver a working prototype on schedule.
          </p>

          <ProjectHighlight
            icon={Lightbulb}
            content={
              "The hackathon taught me valuable lessons in working under pressure, prioritizing features, and collaborating with a diverse team. Although we didn't get to explore AI as much as we'd hoped, it sparked my interest in the potential of AI-driven content discovery. If given more time, I would love to explore implementing AI models for more dynamic results and refine the user experience."
            }
          />
        </section>
      </div>
    </main>
  );
}

export default ProjectMetaHackathon;
