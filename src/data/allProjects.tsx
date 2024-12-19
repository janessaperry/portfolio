import pressStartThumbnail from "../assets/images/mockups/press-start--collection--laptop.png";
import metaHackathonThumbnail from "../assets/images/mockups/iggy-discover--flow--mobile.png";

export interface AllProjects {
  id: string;
  showcase: boolean;
  slug: string;
  categories: string[];
  thumbnailInfo: {
    filePath: string;
    altText: string;
  };
  title: string;
  type: string;
  yearCompleted: string;
  overview: string;
  description: string[];

  skillsAndTools: string[];
}

export const allProjects: AllProjects[] = [
  {
    id: "press-start--capstone",
    showcase: true,
    slug: "press-start",
    categories: ["Design", "Development"],
    thumbnailInfo: {
      filePath: pressStartThumbnail,
      altText: "Press Start laptop mockup preview",
    },
    title: "Press Start",
    type: "BrainStation Capstone",
    yearCompleted: "2024",
    overview:
      "Designed and developed a full-stack web app that helps users keep track of their video game collection so they can decide what to play next.",
    description: [
      "Designed and developed a full-stack web app to help user's keep track of their video game collections, using React for the front-end and Node JS and Express for the backend.",
      "Built a proxy server to securely communicate with the IGDB API, retrieving game data while being mindful of API rate limits and handling requests efficiently to ensure a consistent user experience.",
      "Designed and implemented a user-friendly interface with seamless navigation, leveraging responsive design techniques and real-time data synchronization to ensure an optimal experience across devices.",
    ],
    skillsAndTools: [
      "React",
      "Sass",
      "JavaScript",
      "REST APIs",
      "IGDB API",
      "Node JS",
      "Express",
      "MySQL",
      "Knex",
      "Figma",
      "Responsive Design",
    ],
  },
  {
    id: "meta-hackathon--brainstation",
    showcase: true,
    slug: "meta-hackathon",
    categories: ["Development"],
    thumbnailInfo: {
      filePath: metaHackathonThumbnail,
      altText: "Meta Hackathon - Iggy Discover mobile mockup preview",
    },
    title: "Meta Hackathon",
    type: "BrainStation | Meta",
    yearCompleted: "2024",
    overview:
      "Developed an Instagram Discovery Tool during a 24-hour hackathon that allows users to search for visually similar images.",
    description: [
      "Participated in a 24-hour hackathon with Meta to conceptualize and build a tool aimed at enhancing user engagement and trust in AI features.",
      "Developed an Instagram Discovery Tool that enables users to search for visually similar images from their feed.",
      "Engineered an image-based search feature that allows users to discover visually similar accounts and content, driving engagement and discovery.",
    ],
    skillsAndTools: [
      "React",
      "Sass",
      "JavaScript",
      "Node JS",
      "Express",
      "Figma",
    ],
  },
];
