import { NavLink } from "react-router";
import { allProjects } from "../data/allProjects";
import MetaHackathonHero from "../assets/images/mockups/iggy-discover--flow--mobile.png";
import BrowserFrame from "../assets/graphics/browser-container.svg";
import VisualSearch from "../assets/videos/iggy-discover--visual-search.mp4";
import ExploreAccounts from "../assets/videos/iggy-discover--explore-accounts.mp4";
import ChipList from "../components/ChipList";
import {
  GithubLogo,
  Image,
  Lightbulb,
  Storefront,
} from "@phosphor-icons/react";

function ProjectMetaHackathon() {
  const toolkit = allProjects.find(
    (project) => project.id === "meta-hackathon--brainstation"
  )?.skillsAndTools;

  return (
    <main className="w-full md:container py-4 px-4 sm:px-6">
      <section className="flex flex-col gap-8 items-center py-8">
        <div className="flex flex-col gap-4 lg:max-w-screen-xl">
          <h1 className="text-4xl text-center">Meta Hackathon</h1>
          <p className="text-lg md:text-2xl text-center">
            Developed an Instagram Discovery Tool during a 24-hour hackathon
            with Meta, allowing users to search for accounts by uploading images
            and discovering similar content and profiles.
          </p>
        </div>

        <img
          src={MetaHackathonHero}
          alt="Press Start collection page preview"
          className="sm:w-1/2 md:w-full lg:max-w-screen-lg xl:object-contain justify-self-center"
        />
      </section>

      <div className="grid md:grid-cols-3 grid-auto-rows gap-4 md:flex-row md:gap-10">
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
            During a 24-hour hackathon hosted by Meta, I had the chance to
            collaborate with a talented team to create an Instagram discovery
            tool that helps users explore content in a visual and engaging way.
          </p>
          <p>
            Iggy Discover is an Instagram discovery tool designed for young
            adult users, allowing them to upload images and find similar
            content, profiles, and businesses. The project was developed during
            a hackathon with Meta, focused on supporting users in adapting to AI
            innovations. With just 24 hours to brainstorm, code, and present our
            solution, we created a prototype that delivers visually similar
            posts and accounts based on image uploads.
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
                <p className="grid-cols-1 text-right">24 hours</p>

                <p className="grid-cols-1 font-heading lowercase">Role</p>
                <p className="grid-cols-1 text-right">Front-end Developer</p>
              </div>
            </div>

            <div className="md:col-span-2 flex flex-col gap-4">
              <h3>&lt;GitHub&gt;</h3>
              <div className="flex flex-col md:flex-row gap-6">
                <a
                  href={"https://github.com/janessaperry/meta-visual-search"}
                  target="_blank"
                  className="md:basis-1/2 flex md:flex-col lg:flex-row gap-2 md:gap-1 lg:gap-4"
                >
                  <GithubLogo className="text-seafoam-500 text-3xl shrink-0" />
                  <div className="flex-auto flex flex-col gap-1">
                    <p className="text-xl font-semibold">git in it: client</p>
                    <p className="text-base leading-none text-mauve-500">
                      github.com/janessaperry/meta-visual-search
                    </p>
                  </div>
                </a>

                <a
                  href={
                    "https://github.com/janessaperry/meta-visual-search-api"
                  }
                  target="_blank"
                  className="md:basis-1/2 flex md:flex-col lg:flex-row gap-2 md:gap-1 lg:gap-4"
                >
                  <GithubLogo className="text-seafoam-500 text-3xl shrink-0" />
                  <div className="flex-auto flex flex-col gap-1">
                    <p className="text-xl font-semibold">git in it: server</p>
                    <p className="text-base leading-none text-mauve-500">
                      github.com/janessaperry/meta-visual-search-api
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
            Here are some of the key features of Iggy Discover.
          </p>

          <div className="pt-4 flex flex-col gap-y-20">
            <div className="flex gap-4 items-start">
              <div className="flex justify-center items-center rounded-2xl p-2 w-12 h-12 shrink-0 bg-gradient-to-tr from-seafoam-700 via-blue-300 to-pink-300">
                <Image className="text-4xl text-pink-500" />
              </div>

              <div className="flex flex-col gap-y-4">
                <div className="">
                  <p className="text-lg font-heading font-medium text-seafoam-500">
                    Discover similar content using visual search.{" "}
                  </p>
                  <p>
                    Iggy Discover lets users search for images from their
                    Instagram feed to find similar posts. Whether it's a photo
                    of pasta or a cityscape, the tool uses AI to return related
                    content, helping users explore more of what they enjoy.
                  </p>
                </div>

                <div className="md:w-1/3 self-center border border-blue-700 rounded-md overflow-hidden">
                  <img src={BrowserFrame} />
                  <video src={VisualSearch} controls autoPlay muted />
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex justify-center items-center rounded-2xl p-2 w-12 h-12 shrink-0 bg-gradient-to-tr from-seafoam-700 via-blue-300 to-pink-300">
                <Storefront className="text-4xl text-pink-500" />
              </div>

              <div className="flex flex-col gap-y-4">
                <div className="">
                  <p className="text-lg font-heading font-medium text-seafoam-500">
                    Find shops, restaurants, and brands with similar images in
                    their posts.
                  </p>
                  <p>
                    Beyond posts, Iggy Discover helps users discover businesses
                    or brands that offer products similar to the images being
                    searched for. In the example below, you can discover
                    restaurants serving up some delicious pasta. It's a great
                    way to find new places, products, or services that match
                    your tastes.
                  </p>
                </div>

                <div className="md:w-1/3 self-center border border-blue-700 rounded-md overflow-hidden">
                  <img src={BrowserFrame} />
                  <video src={ExploreAccounts} controls autoPlay muted />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-card md:col-span-2 md:col-start-2">
          <h2 id="retrospective">&lt;Retrospective&gt;</h2>

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

          <div className="flex gap-x-4">
            <div className="flex justify-center items-center rounded-2xl p-2 w-12 h-12 shrink-0 bg-gradient-to-tr from-seafoam-700 via-blue-300 to-pink-300">
              <Lightbulb className="text-4xl text-pink-500" />
            </div>
            <p className="text-xl">
              The hackathon taught me valuable lessons in working under
              pressure, prioritizing features, and collaborating with a diverse
              team. Although we didn't get to explore AI as much as we'd hoped,
              it sparked my interest in the potential of AI-driven content
              discovery. If given more time, I would love to explore
              implementing AI models for more dynamic results and refine the
              user experience.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProjectMetaHackathon;
