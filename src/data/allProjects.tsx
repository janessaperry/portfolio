import pressStartThumbnail from "../assets/images/mockups/press-start--collection--laptop.png";
import metaHackathonThumbnail from "../assets/images/mockups/iggy-discover--flow--mobile.png";

interface ProjectDetails {
  id: number;
  showcase: boolean;
  slug: string;
  categories: string[];
  thumbnailInfo: {
    filePath: string;
    altText: string;
  };
  title: string;
  description: string;
  skillsAndTools: string[];
}

export const allProjects: ProjectDetails[] = [
  {
    id: 1,
    showcase: true,
    slug: "press-start",
    categories: ["Design", "Development"],
    thumbnailInfo: {
      filePath: pressStartThumbnail,
      altText: "Press Start laptop mockup preview",
    },
    title: "Press Start",
    description:
      "Designed and developed a full-stack web app that helps users keep track of their video game collection so they can decide what to play next. The site is fully responsive with a user-friendly interface and real-time data synchronization.",
    skillsAndTools: [
      "React",
      "Sass",
      "JavaScript",
      "Node JS",
      "Express",
      "Knex",
      "MySQL",
      "GraphQL",
      "Figma",
    ],
  },
  {
    id: 2,
    showcase: true,
    slug: "meta-hackathon",
    categories: ["Development"],
    thumbnailInfo: {
      filePath: metaHackathonThumbnail,
      altText: "Meta Hackathon - Iggy Discover mobile mockup preview",
    },
    title: "Meta Hackathon",
    description:
      "Developed an Instagram Discovery Tool during a 24-hour hackathon with Meta, allowing users to search for accounts by uploading images and discovering similar content and profiles.",
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
