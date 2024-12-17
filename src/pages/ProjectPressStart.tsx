import { NavLink } from "react-router-dom";
import {
  GameController,
  GithubLogo,
  Lightbulb,
  MagnifyingGlass,
  Sliders,
  Target,
  TreasureChest,
  Warning,
} from "@phosphor-icons/react";
import { allProjects } from "../data/allProjects";
import ChipList from "../components/ChipList";
import PressStartHero from "../assets/images/mockups/press-start--collection--laptop.png";
import AddToCollection from "../assets/videos/press-start--add-to-collection.mp4";
import ManageCollection from "../assets/videos/press-start--manage-collection.mp4";
import FilterCollection from "../assets/videos/press-start--filter-collection.mp4";
import ExploreGames from "../assets/videos/press-start--explore.mp4";
import BrowserFrame from "../assets/graphics/browser-container.svg";
import IconGradientFill from "../components/IconGradientFill";

function ProjectPressStart() {
  const toolkit = allProjects.find(
    (project) => project.id === "press-start--capstone"
  )?.skillsAndTools;

  return (
    <main className="main-container">
      <section className="flex flex-col gap-8 items-center py-8">
        <div className="flex flex-col gap-4 lg:max-w-screen-xl">
          <h1 className="text-4xl text-center">Press Start</h1>
          <p className="text-xl md:text-2xl text-center">
            Created a full-stack web app that helps users track, rate, and get
            recommendations for their video game collection, with a responsive,
            user-friendly interface and real-time data synchronization.
          </p>
        </div>

        <img
          src={PressStartHero}
          alt="Press Start collection page preview"
          className="sm:w-1/2 md:w-full lg:max-w-screen-lg xl:object-contain justify-self-center"
        />
      </section>

      <div className="grid md:grid-cols-3 gap-4 md:gap-10">
        <section className="hidden md:section-card md:col-span-1 md:sticky md:top-10 md:h-fit">
          <div className="flex flex-col gap-4">
            <h2>&lt;Contents&gt;</h2>
            {/* TODO UPDATE THIS SO IT HIGHLIGHTS ACTIVE SECTION AS USER SCROLLS */}
            <nav>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#overview">Overview</a>
                </li>
                <li>
                  {" "}
                  <a href="#features">Features</a>
                </li>
                <li>
                  {" "}
                  <a href="#challenges">Challenges</a>
                </li>
                <li>
                  {" "}
                  <a href="#retrospective">Retrospective</a>
                </li>
                <li>
                  {" "}
                  <a href="#road-map">Road Map</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h2>&lt;Projects&gt;</h2>
            <nav>
              <ul className="flex flex-col gap-2">
                <li>
                  <NavLink to="/projects/press-start">Press Start</NavLink>
                </li>
                <li>
                  {" "}
                  <NavLink to="/projects/meta-hackathon">
                    Meta Hackathon
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        <section className="section-card md:col-span-2">
          <h2 id="overview">&lt;Overview&gt;</h2>

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

          <div className="grid gap-8">
            <div className="md:col-span-1 flex flex-col gap-4">
              <h3>&lt;Toolkit&gt;</h3>
              {toolkit?.length ? <ChipList labels={toolkit} /> : <p>TBD</p>}
            </div>

            <div className="md:col-span-1 flex flex-col gap-4">
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
              <div className="flex flex-col md:flex-row gap-6">
                <a
                  href={"https://github.com/janessaperry/press-start-client"}
                  target="_blank"
                  className="md:basis-1/2 flex md:flex-col lg:flex-row gap-2 md:gap-1 lg:gap-4"
                >
                  <GithubLogo className="text-seafoam-500 text-3xl shrink-0" />
                  <div className="flex-auto flex flex-col gap-1">
                    <p className="text-xl font-semibold">git in it: client</p>
                    <p className="text-base leading-none text-fuschia-50">
                      github.com/janessaperry/press-start-client
                    </p>
                  </div>
                </a>

                <a
                  href={"https://github.com/janessaperry/press-start-server"}
                  target="_blank"
                  className="md:basis-1/2 flex md:flex-col lg:flex-row gap-2 md:gap-1 lg:gap-4"
                >
                  <GithubLogo className="text-seafoam-500 text-3xl shrink-0" />
                  <div className="flex-auto flex flex-col gap-1">
                    <p className="text-xl font-semibold">git in it: server</p>
                    <p className="text-base leading-none text-fuschia-50">
                      github.com/janessaperry/press-start-server
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-card md:col-span-2 md:col-start-2">
          <h2 id="features">&lt;Features&gt;</h2>

          <p className="text-xl">
            Here are some of the key features that make managing your game
            collection and discovering new titles easier than ever.
          </p>

          <div className="pt-4 flex flex-col gap-y-20">
            <div className="flex gap-4 items-start">
              <div className="flex justify-center items-center rounded-2xl p-2 w-12 h-12 shrink-0 bg-gradient-to-tr from-seafoam-700 via-blue-300 to-fuschia-500">
                <TreasureChest className="text-4xl text-fuschia-300" />
              </div>

              <div className="flex flex-col gap-y-4">
                <div className="">
                  <p className="text-lg font-heading font-medium text-seafoam-500">
                    Keep track of the games you own.
                  </p>
                  <p>
                    Easily add games to your collection and note which console
                    they're for, whether they're physical or digital. It's a
                    great way to keep everything organized!
                  </p>
                </div>

                <div className="border border-blue-700 rounded-lg overflow-hidden">
                  <img
                    src={BrowserFrame}
                    alt="Browser frame for video"
                    className="w-full h-fit"
                  />
                  <video
                    src={AddToCollection}
                    controls
                    autoPlay
                    playsInline
                    loop
                    muted
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex justify-center items-center rounded-2xl p-2 w-12 h-12 shrink-0 bg-gradient-to-tr from-seafoam-700 via-blue-300 to-fuschia-500">
                <GameController className="text-4xl text-fuschia-300" />
              </div>

              <div className="flex flex-col gap-y-4">
                <div className="">
                  <p className="text-lg font-heading font-medium text-seafoam-500">
                    Manage games in your collection by keeping track of play
                    status.
                  </p>
                  <p>
                    Setting the play status lets you quickly filter for games
                    you want to play to you can dive in to your next adventure
                    sooner.
                  </p>
                </div>

                <div className="border border-blue-700 rounded-lg overflow-hidden">
                  <img
                    src={BrowserFrame}
                    alt="Browser frame for video"
                    className="w-full h-fit"
                  />
                  <video
                    src={ManageCollection}
                    controls
                    autoPlay
                    playsInline
                    loop
                    muted
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex justify-center items-center rounded-2xl p-2 w-12 h-12 shrink-0 bg-gradient-to-tr from-seafoam-700 via-blue-300 to-fuschia-500">
                <Sliders className="text-4xl text-fuschia-300" />
              </div>

              <div className="flex flex-col gap-y-4">
                <div className="">
                  <p className="text-lg font-heading font-medium text-seafoam-500">
                    Filter games in your collection decide what to play next.
                  </p>
                  <p>
                    Right now, users can filter by status and console, but I'm
                    working on adding more options—like genre or estimated
                    playtime—so you can really narrow down what you want to play
                    next.
                  </p>
                </div>

                <div className="border border-blue-700 rounded-lg overflow-hidden">
                  <img
                    src={BrowserFrame}
                    alt="Browser frame for video"
                    className="w-full h-fit"
                  />
                  <video
                    src={FilterCollection}
                    controls
                    autoPlay
                    playsInline
                    loop
                    muted
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex justify-center items-center rounded-2xl p-2 w-12 h-12 shrink-0 bg-gradient-to-tr from-seafoam-700 via-blue-300 to-fuschia-500">
                <MagnifyingGlass className="text-4xl text-fuschia-300" />
              </div>

              <div className="flex flex-col gap-y-4">
                <div className="">
                  <p className="text-lg font-heading font-medium text-seafoam-500">
                    Discover new or upcoming games.
                  </p>
                  <p>
                    The explore page lets you browse through games by platform
                    or see what's coming soon. It's the perfect way to find your
                    next adventure, whether it's a new release or something you
                    missed.
                  </p>
                </div>

                <div className="border border-blue-700 rounded-lg overflow-hidden">
                  <img
                    src={BrowserFrame}
                    alt="Browser frame for video"
                    className="w-full h-fit"
                  />
                  <video
                    src={ExploreGames}
                    controls
                    autoPlay
                    playsInline
                    loop
                    muted
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-card md:col-span-2 md:col-start-2">
          <h2 id="challenges">&lt;Challenges&gt;</h2>

          <p className="text-xl">
            This project pushed me to explore new skills and tackle challenges
            I'd never faced before, making it a valuable learning experience.
          </p>

          <div className="pt-4 flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-5">
              <div className="title-wrapper">
                <h3>Backend Development</h3>
                <p className="text-xl">
                  This was my first experience structuring and building a
                  backend, and it required a lot of problem-solving on the fly.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-fuschia-neon/50 via-blue-neon/50 to-seafoam-neon/50 rounded-full"></div>
              <div className="grid md:grid-cols-2 gap-5 md:gap-10">
                <div className="md:col-span-1 flex gap-x-4">
                  <IconGradientFill id="gradient--pink" icon={Warning} />
                  <p>
                    Structuring a database and building a proxy server for the
                    first time.
                  </p>
                </div>

                <div className="md:col-span-1 flex gap-x-4">
                  <IconGradientFill id="gradient--seafoam" icon={Target} />
                  <p>
                    Focused on getting a working solution by experimenting with
                    different approaches and refining based on trial and error.
                  </p>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-fuschia-neon/50 via-blue-neon/50 to-seafoam-neon/50 rounded-full"></div>

              <p>
                I didn't really have a clear plan or idea on how to create a
                scalable system, so I focused on making things work. While it
                wasn't the most elegant solution, it gave me a better
                understanding of backend development and showed me the need to
                learn more about backend design patterns and planning
                strategies. This experience also made me realize how important
                it is to manage the "single source of truth" when working with
                data.
              </p>
            </div>

            <div className="challenge-item flex flex-col gap-y-5">
              <div className="title-wrapper">
                <h3>Filtering Data</h3>
                <p className="text-xl">
                  Filtering was a new challenge for me, and my initial solution
                  could definitely be better.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-fuschia-neon/50 via-blue-neon/50 to-seafoam-neon/50 rounded-full"></div>
              <div className="grid md:grid-cols-2 gap-5 md:gap-10">
                <div className="md:col-span-1 flex gap-x-4">
                  <IconGradientFill id="gradient--pink" icon={Warning} />
                  <p>
                    Managing filters with data coming from both the database and
                    the API.
                  </p>
                </div>

                <div className="md:col-span-1 flex gap-x-4">
                  <IconGradientFill id="gradient--seafoam" icon={Target} />
                  <p>
                    While my current solution works, I've identified ways to
                    make the filtering logic more modular and scalable for
                    future improvements.
                  </p>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-fuschia-neon/50 via-blue-neon/50 to-seafoam-neon/50 rounded-full"></div>

              <p>
                My filters pull options from the API, user collections, or both,
                but right now, the options are sourced from multiple places. I
                plan to go back in and consolidate everything into one central
                source for the filter options. This would simplify the logic,
                improve consistency, and make the system easier to maintain.
              </p>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="title-wrapper">
                <h3>API Integration</h3>
                <p className="text-xl">
                  This was the most robust and complex API I've worked with,
                  requiring me to retrieve and clean large amounts of data. I
                  extensively tested API requests with Postman, refining
                  filtering logic to meet specific use cases.
                </p>
              </div>

              <div className="h-px bg-gradient-to-r from-fuschia-neon/50 via-blue-neon/50 to-seafoam-neon/50 rounded-full"></div>
              <div className="grid md:grid-cols-2 gap-5 md:gap-10">
                <div className="md:col-span-1 flex gap-x-4">
                  <IconGradientFill id="gradient--pink" icon={Warning} />
                  <p>
                    Managing filters with data coming from both the database and
                    the API.
                  </p>
                </div>

                <div className="md:col-span-1 flex gap-x-4">
                  <IconGradientFill id="gradient--seafoam" icon={Target} />
                  <p>
                    Extensively tested API requests with Postman and iteratively
                    refined filtering logic to address specific use cases.
                  </p>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-fuschia-neon/50 via-blue-neon/50 to-seafoam-neon/50 rounded-full"></div>

              <p>
                Managing this API was a challenge. I had to extract relevant
                data while ensuring it aligned with the site's goals. For
                example, I initially filtered explicit games by excluding
                certain themes and null age ratings. However, when working on
                the Explore page for new releases, I discovered that unreleased
                games often didn't have age ratings either. This led me to
                adjust my API calls to include unreleased games without age
                ratings, while excluding games with no release date or ratings.
                Though not a perfect solution, this approach worked within my
                timeline and gave me a deeper understanding of the complexities
                involved in robust API integrations.
              </p>
            </div>
          </div>
        </section>

        <section className="section-card md:col-span-2 md:col-start-2">
          <h2 id="retrospective">&lt;Retrospective&gt;</h2>

          <p>
            This project introduced me to backend development—designing the
            database, building a server, and integrating a complex API. I had to
            quickly learn backend essentials: creating a database schema,
            building a proxy server, and handling API integration.
          </p>

          <p>
            Data filtering was more complicated than expected, and I realized
            the importance of planning the data flow from the start. I struggled
            with integrating filters from both the database and API. A clearer
            plan from the beginning could've prevented confusion and streamlined
            the filtering process.
          </p>

          <p>
            Working with a complex API required extensive testing and careful
            data retrieval to meet project goals. The API was the most complex
            I've used. It taught me how crucial it is to understand its
            structure and data flow early on, which would've saved time and
            effort in refining requests.
          </p>

          <div className="flex gap-x-4">
            <div className="flex justify-center items-center rounded-2xl p-2 w-12 h-12 shrink-0 bg-gradient-to-tr from-seafoam-700 via-blue-300 to-fuschia-500">
              <Lightbulb className="text-4xl text-fuschia-300" />
            </div>
            <p className="text-xl">
              This project pushed me out of my comfort zone and made me rethink
              how I approach backend work and complex APIs. It wasn't perfect,
              but I've learned where to be more strategic and where to clean
              things up. Next time, I'll have a clearer plan from the start to
              avoid repeating the same mistakes.
            </p>
          </div>
        </section>

        <section className="section-card md:col-span-2 md:col-start-2">
          <h2 id="road-map">&lt;Road map&gt;</h2>

          <p className="text-xl">
            I'm looking forward to keeping this project going, with the hope of
            eventually deploying it.
          </p>

          <div className="flex flex-col gap-2">
            <h3>So, what's next for Press Start?</h3>
            <ul className="list-disc pl-4">
              <li>Refactoring the code for scalability.</li>
              <li>Adding user authentication.</li>
              <li>Expanding filters and sorting options.</li>
              <li>Adding franchise tracking with release alerts.</li>
              <li>Improving responsive design.</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProjectPressStart;
