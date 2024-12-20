import { NavLink } from "react-router-dom";
import {
  ArrowSquareOut,
  GameController,
  GithubLogo,
  Lightbulb,
  MagnifyingGlass,
  Sliders,
  TreasureChest,
} from "@phosphor-icons/react";
import { allProjects } from "../data/allProjects";
import ChipList from "../components/ChipList";
import PressStartHero from "../assets/images/mockups/press-start--collection--laptop.png";
import AddToCollection from "../assets/videos/press-start--add-to-collection.mp4";
import ManageCollection from "../assets/videos/press-start--manage-collection.mp4";
import FilterCollection from "../assets/videos/press-start--filter-collection.mp4";
import ExploreGames from "../assets/videos/press-start--explore.mp4";
import LinkButton from "../components/LinkButton";
import LinkSocial from "../components/LinkSocial";
import ProjectFeature from "../components/ProjectFeature";
import ProjectChallenge from "../components/ProjectChallenge";
import ProjectHighlight from "../components/ProjectHighlight";

function ProjectPressStart() {
  const projectDetails = allProjects.find(
    (project) => project.id === "press-start--capstone"
  );

  return (
    <main className="main-container">
      <section className="flex flex-col gap-8 items-center py-8 md:py-16">
        <div className="flex flex-col gap-4 lg:max-w-screen-lg">
          <h1 className="text-4xl text-center">{projectDetails?.title}</h1>
          <p className="text-xl md:text-2xl text-center">
            {projectDetails?.overview}
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
                iconRight={<ArrowSquareOut weight="bold" className="text-xl" />}
              />
            </div>
          )}
        </div>

        <img
          src={PressStartHero}
          alt="Press Start collection page preview"
          className="sm:w-1/2 md:w-full lg:max-w-screen-lg xl:object-contain justify-self-center"
        />
      </section>

      <div className="grid md:grid-cols-3 gap-4 md:gap-10">
        <section className="hidden md:section-card md:col-span-1 md:sticky md:top-32 md:h-fit">
          <div className="flex flex-col gap-2">
            <h3 className="text-fuschia-300">&lt;Contents&gt;</h3>
            <nav>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#overview" className="text-link">
                    Overview
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#features" className="text-link">
                    Features
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#challenges" className="text-link">
                    Challenges
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#retrospective" className="text-link">
                    Retrospective
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="#road-map" className="text-link">
                    Road Map
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-fuschia-300">&lt;Projects&gt;</h3>
            <nav>
              <ul className="flex flex-col gap-2">
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
            Press Start is a web app that helps gamers manage their video game
            collections.
          </p>

          <p>
            Gamers today have more options than ever. With PlayStation, Xbox,
            Nintendo, and PC all having both physical and digital games, it gets
            hard to keep track of all the games you own. I can't be the only one
            who has bought a game from a digital store because I saw a sale only
            to completely forget I own it. Needless to say, my backlog only
            seems to grow and I'm stuck in a pattern of just playing the most
            recent game I bought.
          </p>

          <p>
            My solution to this issue is Press Start - a web app that helps
            users keep track of the games they own so they can easily decide
            what to play next.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
              <h3>&lt;Toolkit&gt;</h3>
              {projectDetails?.skillsAndTools?.length ? (
                <ChipList labels={projectDetails?.skillsAndTools} />
              ) : (
                <p>Stay tuned for details!</p>
              )}
            </div>

            <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
              <h3>&lt;Metadata&gt;</h3>

              <div className="grid grid-cols-2 gap-y-4">
                <p className="grid-cols-1 font-heading lowercase">Completed</p>
                <p className="grid-cols-1 text-right">2024</p>

                <p className="grid-cols-1 font-heading lowercase">Timeline</p>
                <p className="grid-cols-1 text-right">2 weeks</p>

                <p className="grid-cols-1 font-heading lowercase">Role</p>
                <p className="grid-cols-1 text-right">Designer, Developer</p>
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
            Here are some of the key features that make managing your game
            collection and discovering new titles easier than ever.
          </p>

          <div className="pt-4 flex flex-col gap-y-20">
            <ProjectFeature
              icon={TreasureChest}
              title="Keep track of the games you own."
              description={[
                "Easily add games to your collection and note which console they're for, whether they're physical or digital. It's a great way to keep everything organized!",
              ]}
              videoSrc={AddToCollection}
            />

            <ProjectFeature
              icon={GameController}
              title="Manage games in your collection by keeping track of play
                    status."
              description={[
                "Setting the play status lets you quickly filter for games you want to play to you can dive in to your next adventure sooner.",
              ]}
              videoSrc={ManageCollection}
            />

            <ProjectFeature
              icon={Sliders}
              title="Filter games in your collection decide what to play next."
              description={[
                "Right now, users can filter by status and console, but I'm working on adding more options—like genre or estimated playtime—so you can really narrow down what you want to play next.",
              ]}
              videoSrc={FilterCollection}
            />

            <ProjectFeature
              icon={MagnifyingGlass}
              title="Discover new or upcoming games."
              description={[
                "The explore page lets you browse through games by platform or see what's coming soon. It's the perfect way to find your next adventure, whether it's a new release or something you missed.",
              ]}
              videoSrc={ExploreGames}
            />
          </div>
        </section>

        <section className="section-card md:col-span-2 md:col-start-2">
          <h2 id="challenges" className="scroll-mt-40">
            &lt;Challenges&gt;
          </h2>

          <p className="text-xl">
            This project pushed me to explore new skills and tackle challenges
            I'd never faced before, making it a valuable learning experience.
          </p>

          <div className="pt-4 flex flex-col gap-y-10">
            <ProjectChallenge
              title="Backend Development"
              overview="This was my first experience structuring and building a backend, and it required a lot of problem-solving on the fly."
              challengeAndSolution={{
                challenge:
                  "Structuring a database and building a proxy server for the first time.",
                solution:
                  "Focused on getting a working solution by experimenting with different approaches and refining based on trial and error.",
              }}
              description={[
                "I didn't really have a clear plan or idea on how to create a scalable system, so I focused on making things work. While it wasn't the most elegant solution, it gave me a better understanding of backend development and showed me the need to learn more about backend design patterns and planning strategies. This experience also made me realize how important it is to manage the single source of truth when working with data.",
              ]}
            />

            <ProjectChallenge
              title="Filtering Data"
              overview="Filtering was a new challenge for me, and my initial solution could definitely be better."
              challengeAndSolution={{
                challenge:
                  "Managing filters with data coming from both the database and the API.",
                solution:
                  "While my current solution works, I've identified ways to make the filtering logic more modular and scalable for future improvements.",
              }}
              description={[
                "My filters pull options from the API, user collections, or both, but right now, the options are sourced from multiple places. I plan to go back in and consolidate everything into one central source for the filter options. This would simplify the logic, improve consistency, and make the system easier to maintain.",
              ]}
            />

            <ProjectChallenge
              title="API Integration"
              overview="This was the most robust and complex API I've worked with, requiring me to retrieve and clean large amounts of data."
              challengeAndSolution={{
                challenge:
                  "Working with a complex API to retrieve and clean large amounts of data.",
                solution:
                  "Tested API requests with Postman and iteratively refined filtering logic to address specific use cases.",
              }}
              description={[
                "Managing this API was a challenge. I had to extract relevant data while ensuring it aligned with the site's goals. For example, I initially filtered explicit games by excluding certain themes and null age ratings. However, when working on the Explore page for new releases, I discovered that unreleased games often didn't have age ratings either. This led me to adjust my API calls to include unreleased games without age ratings, while excluding games with no release date or ratings. Though not a perfect solution, this approach worked within my timeline and gave me a deeper understanding of the complexities involved in robust API integrations.",
              ]}
            />
          </div>
        </section>

        <section className="section-card md:col-span-2 md:col-start-2">
          <h2 id="retrospective" className="scroll-mt-40">
            &lt;Retrospective&gt;
          </h2>

          <p>
            This project introduced me to backend development—designing the
            database, building a server, and integrating a complex API. I had to
            quickly learn backend essentials: creating a database schema,
            building a proxy server, and handling API integration.
          </p>

          <p>
            Filtering data from both the database and API was more complicated
            than expected. I realized the importance of having a clear plan for
            data flow from the beginning. The lack of structure made it
            difficult to integrate filters effectively, which caused unnecessary
            complexity.
          </p>

          <p>
            The complexity of the API was another significant challenge.
            Extensive testing and refining of the API calls were necessary to
            meet project goals. Working with this API taught me how crucial it
            is to understand its structure and data flow early on, which
            would've saved time and effort in refining requests.
          </p>

          <ProjectHighlight
            icon={Lightbulb}
            content={
              "This project pushed me out of my comfort zone and made me rethink how I approach backend work and complex APIs. It wasn't perfect, but I've learned where to be more strategic and where to clean things up. Next time, I'll have a clearer plan from the start to avoid repeating the same mistakes."
            }
          />
        </section>

        <section className="section-card md:col-span-2 md:col-start-2">
          <h2 id="road-map" className="scroll-mt-40">
            &lt;Road map&gt;
          </h2>

          <p className="text-xl">
            I'm looking forward to keeping this project going, with the hope of
            eventually deploying it.
          </p>

          <div className="flex flex-col gap-2">
            <h3>So, what's next for Press Start?</h3>
            <ul className="list-disc pl-4">
              <li>Refactor code for scalability.</li>
              <li>Add user authentication.</li>
              <li>Expand filters and sorting options.</li>
              <li>Add franchise tracking with release alerts.</li>
              <li>Improve responsive design.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProjectPressStart;
