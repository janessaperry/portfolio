import {
  Envelope,
  GithubLogo,
  Handshake,
  LinkedinLogo,
  MagicWand,
  PuzzlePiece,
  RocketLaunch,
} from "@phosphor-icons/react";
import JanessaPerryHeadshot from "../assets/images/janessa-perry-headshot-2024.jpg";
function About() {
  return (
    <main className="w-full md:container py-4 px-4 sm:px-6">
      <h1 className="sr-only">About</h1>

      <div className="flex flex-col gap-4 md:flex-row md:gap-10">
        <div className="flex flex-col gap-4 md:gap-10 md:basis-1/3">
          <section className="p-6 lg:p-8 flex flex-col divide-y-4 divide-dotted divide-mauve-500 bg-blue-500 rounded-3xl">
            <div className="pb-8">
              <img
                src={JanessaPerryHeadshot}
                alt="Janessa Perry headshot"
                className="mb-4 rounded-full max-w-48 justify-self-center"
              />
              <p className="text-2xl font-medium justify-self-center">
                Janessa Perry
              </p>
              <p className="text-xl justify-self-center">Web Developer</p>
            </div>

            <div className="pt-8 flex flex-col gap-8">
              <a
                href="https://github.com/janessaperry"
                target="_blank"
                className="flex md:flex-col lg:flex-row gap-2 md:gap-1 lg:gap-4"
              >
                <GithubLogo className="text-seafoam-500 text-3xl shrink-0" />{" "}
                <div>
                  <p className="text-xl font-semibold">git in it</p>
                  <p className="text-base leading-none text-mauve-500">
                    github.com/janessaperry
                  </p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/janessa-perry"
                target="_blank"
                className="flex md:flex-col lg:flex-row gap-2 md:gap-1 lg:gap-4"
              >
                <LinkedinLogo className="text-seafoam-500 text-3xl shrink-0" />{" "}
                <div>
                  <p className="text-xl font-semibold">let connect = true;</p>
                  <p className="text-base leading-none text-mauve-500">
                    linkedin.com/in/janessa-perry
                  </p>
                </div>
              </a>

              <a
                href="mailto:hello@janessaperry.com"
                target="_blank"
                className="flex md:flex-col lg:flex-row gap-2 md:gap-1 lg:gap-4"
              >
                <Envelope className="text-seafoam-500 text-3xl shrink-0" />{" "}
                <div>
                  <p className="text-xl font-semibold">sendEmail(hello)</p>
                  <p className="text-base leading-none text-mauve-500">
                    hello@janessaperry.com
                  </p>
                </div>
              </a>
            </div>
          </section>

          <section className="p-8 flex flex-col gap-4 bg-blue-500 rounded-3xl">
            <h2>&lt;Interests&gt;</h2>
            <p>
              When I'm not at my desk being micro-managed by my cat, you can
              find us snuggled up on the couch playing video games, watching the
              Seahawks, or getting lost in a fantasy book.
            </p>
          </section>
        </div>

        <div className="flex flex-col gap-4 md:gap-10 md:basis-2/3">
          <section className="p-8 flex flex-col gap-4 bg-blue-500 rounded-3xl">
            <h2>&lt;About&gt;</h2>
            <p className="text-2xl">
              Hi, I'm Janessa, a developer with a background in design and
              creating seamless, intuitive digital experiences.
            </p>

            <p>
              My journey into development began at The Sentis Group, where I
              started as a Research Analyst. Collaborating with full-stack
              developers to design custom KPI dashboards sparked my interest in
              design and coding. In 2017, I took on the challenge of redesigning
              and developing the company website, learning HTML, CSS, and
              JavaScript along the way. This experience led me to contribute to
              the company's survey platform, where I designed and developed
              responsive surveys, ensuring functionality across devices and
              browsers. Working closely with experienced developers, I gained
              hands-on experience in problem-solving and building optimized,
              user-friendly web solutions.
            </p>

            <p>
              After eight years at Sentis, I transitioned to freelancing,
              focusing on designing websites and creating internal tools to
              streamline workflows for clients. Wanting to tackle more technical
              challenges, I enrolled in a software engineering bootcamp, where I
              sharpened my skills in React, Sass, Node.js, and MySQL.
            </p>

            <p>
              If you're looking for a developer who can bridge the gap between
              design and development while focusing on creating high-quality,
              user-centered web applications, I'd love to connect and explore
              how I can contribute to your team.
            </p>
          </section>

          <div className="grid lg:grid-cols-2 auto-rows-auto gap-4 md:gap-10">
            <section className="p-8 flex flex-col gap-4 bg-blue-500 rounded-3xl">
              <h2>&lt;Highlights&gt;</h2>

              <div className="card-wrapper grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 auto-rows-auto gap-4">
                <div className="card p-4 bg-mauve-500 rounded-xl">
                  <p className="font-heading md:text-xl text-blue-700">
                    8 years
                  </p>
                  <p className="text-blue-500 text-base md:text-lg leading-tight lowercase">
                    at a small, fast paced company
                  </p>
                </div>

                <div className="card p-4 bg-mauve-500 rounded-xl">
                  <p className="font-heading md:text-xl text-blue-700">
                    5 years
                  </p>
                  <p className="text-blue-500 text-base md:text-lg leading-tight lowercase">
                    UI design & development
                  </p>
                </div>

                <div className="card p-4 bg-mauve-500 rounded-xl">
                  <p className="font-heading md:text-xl text-blue-700">
                    2 years
                  </p>
                  <p className="text-blue-500 text-base md:text-lg leading-tight lowercase">
                    freelancing in web design
                  </p>
                </div>

                <div className="card p-4 bg-mauve-500 rounded-xl">
                  <p className="font-heading md:text-xl text-blue-700">2024</p>
                  <p className="text-blue-500 text-base md:text-lg leading-tight lowercase">
                    Diploma in Software Engineering
                  </p>
                </div>
              </div>
            </section>

            <section className="p-8 flex flex-col gap-4 bg-blue-500 rounded-3xl">
              <h2>&lt;Motivations&gt;</h2>

              <div className="card-wrapper grid grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 auto-rows-auto gap-4">
                <div className="card p-4 bg-mauve-500 rounded-xl">
                  <RocketLaunch className="text-mauve-800 text-3xl" />
                  <p className="font-heading md:text-xl leading-tight text-blue-700">
                    continous learning
                  </p>
                </div>

                <div className="card p-4 bg-mauve-500 rounded-xl">
                  <PuzzlePiece className="text-mauve-800 text-3xl" />
                  <p className="font-heading md:text-xl leading-tight text-blue-700">
                    solving problems
                  </p>
                </div>

                <div className="card p-4 bg-mauve-500 rounded-xl">
                  <MagicWand className="text-mauve-800 text-3xl" />
                  <p className="font-heading md:text-xl leading-tight text-blue-700">
                    attention to detail
                  </p>
                </div>

                <div className="card p-4 bg-mauve-500 rounded-xl">
                  <Handshake className="text-mauve-800 text-3xl" />
                  <p className="font-heading md:text-xl leading-tight text-blue-700">
                    collaboration
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
