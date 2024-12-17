import {
  Handshake,
  MagicWand,
  PuzzlePiece,
  RocketLaunch,
} from "@phosphor-icons/react";
import { contactLinks } from "../data/contactLinks";
import JanessaPerryHeadshot from "../assets/images/janessa-perry-headshot-2024.jpg";

interface Highlights {
  id: string;
  timeline: string;
  text: string;
}

interface Motivations {
  id: string;
  icon: JSX.Element;
  text: string;
}

function About() {
  const highlights: Highlights[] = [
    { id: "fast", timeline: "8 years", text: "at a small, fast paced company" },
    { id: "design", timeline: "5 years", text: "UI Design & Development" },
    { id: "freelance", timeline: "2 years", text: "Freelancing in Web Design" },
    {
      id: "diploma",
      timeline: "2024",
      text: "Diploma in Software Engineering",
    },
  ];

  const motivations: Motivations[] = [
    {
      id: "learning",
      icon: <RocketLaunch className="text-fuschia-500 text-3xl" />,
      text: "Continous Learning",
    },
    {
      id: "solving",
      icon: <PuzzlePiece className="text-fuschia-500 text-3xl" />,
      text: "Problem Solving",
    },
    {
      id: "detail",
      icon: <MagicWand className="text-fuschia-500 text-3xl" />,
      text: "Attention to Detail",
    },
    {
      id: "collaboration",
      icon: <Handshake className="text-fuschia-500 text-3xl" />,
      text: "Collaboration",
    },
  ];

  return (
    <main className="main-container">
      <section className="flex flex-col gap-8 items-center py-8">
        <div className="flex flex-col gap-4 lg:max-w-screen-xl">
          <h1 className="text-4xl text-center">A Little About Me</h1>
          <p className="text-xl md:text-2xl text-center">
            Hi, I'm Janessa, a developer with a background in design and
            creating seamless, intuitive digital experiences.
          </p>
        </div>
      </section>

      <div className="grid md:grid-cols-3 grid-auto-rows gap-4 md:flex-row md:gap-10">
        <section className="section-card md:col-span-1 md:order-1">
          <div className="pb-4">
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

          <div className="h-px bg-gradient-to-r from-fuschia-neon/50 via-blue-neon/50 to-seafoam-neon/50 rounded-full"></div>

          <div className="pt-4 flex flex-col gap-6">
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
                    <p className="text-base leading-none text-fuschia-50">
                      {contactItem.content}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        <section className="section-card md:col-span-2 md:order-2">
          <h2>&lt;Journey&gt;</h2>

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
            After eight years at Sentis, I transitioned to freelancing, focusing
            on designing websites and creating internal tools to streamline
            workflows for clients. Wanting to tackle more technical challenges,
            I enrolled in a software engineering bootcamp, where I sharpened my
            skills in React, Sass, Node.js, and MySQL.
          </p>

          <p>
            If you're looking for a developer who can bridge the gap between
            design and development while focusing on creating high-quality,
            user-centered web applications, I'd love to connect and explore how
            I can contribute to your team.
          </p>
        </section>

        <section className="section-card md:col-span-2 md:col-start-2 md:order-4 xl:col-span-1">
          <h2>&lt;Highlights&gt;</h2>

          <div className="card-wrapper grid grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 auto-rows-auto gap-4">
            {highlights.map((highlight) => {
              return (
                <div
                  key={highlight.id}
                  className="card p-4 bg-fuschia-50 rounded-xl"
                >
                  <p className="font-heading md:text-xl text-blue-700">
                    {highlight.timeline}
                  </p>
                  <p className="text-blue-500 text-lg leading-tight lowercase">
                    {highlight.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="section-card md:col-span-2 md:col-start-2 md:order-5 xl:col-span-1">
          <h2>&lt;Motivations&gt;</h2>

          <div className="card-wrapper grid grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2 auto-rows-auto gap-4">
            {motivations.map((motivation) => {
              return (
                <div
                  key={motivation.id}
                  className="card p-4 bg-fuschia-50 rounded-xl"
                >
                  {motivation.icon}
                  <p className="font-heading md:text-xl text-blue-700">
                    {motivation.text}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="section-card md:col-span-1 md:order-3">
          <h2>&lt;Interests&gt;</h2>
          <p>
            When I'm not at my desk being micro-managed by my cat, you can find
            us snuggled up on the couch playing video games, watching the
            Seahawks, or getting lost in a fantasy book.
          </p>
        </section>
      </div>
    </main>
  );
}

export default About;
