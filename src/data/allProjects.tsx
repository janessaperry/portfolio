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
      "Leveraged design and full-stack development skills to create a website that helps users keep track of their video game collection and decide what to play next. ",
      "Built features for users to track games, rate them, and get recommendations based on their preferences and play history.",
      "Implemented a responsive, user-friendly interface with seamless navigation and real-time data synchronization.",
      "Utilized modern web technologies to ensure a smooth user experience and scalability.",
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
      "Developed an Instagram Discovery Tool during a 24-hour hackathon that allows users to search for visually similar images using AI.",
    description: [
      "Participated in a 24-hour hackathon with Meta to conceptualize and build a tool designed to enhance user engagement with visual content.",
      "Developed an Instagram Discovery Tool that allows users to search for accounts by uploading images, connecting them to similar content and profiles.",
      "Implemented an image-based search feature to help users discover new accounts based on visual similarities, enhancing user exploration and interaction.",
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
