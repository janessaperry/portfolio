import pressStartThumbnail from "../assets/images/mockups/press-start--collection--laptop.png";
import metaHackathonThumbnail from "../assets/images/mockups/iggy-discover--flow--mobile.png";
import inStockThumbnail from "../assets/images/mockups/in-stock--device-mockups.png";
import netolnewThumbnail from "../assets/images/mockups/netolnew--home-page--devices.webp";

export interface AllProjects {
  id: string;
  showcase: boolean;
  slug: string;
  githubRepos?: {
    type: "client" | "server";
    title: string;
    url: string;
  }[];
  categories: string[];
  thumbnailInfo: {
    filePath: string;
    altText: string;
  };
  title: string;
  type: string;
  yearCompleted: string;
  teaser: string;
  experiencePoints?: string[];
  skillsAndTools: string[];
}

export const allProjects: AllProjects[] = [
  {
    id: "in-stock--brainstation",
    showcase: true,
    slug: "in-stock",
    githubRepos: [
      {
        type: "client",
        title: "InStock: Client",
        url: "github.com/janessaperry/instock-client",
      },
      {
        type: "server",
        title: "InStock: Server",
        url: "github.com/janessaperry/instock-server",
      },
    ],
    categories: [ "Development" ],
    thumbnailInfo: {
      filePath: inStockThumbnail,
      altText: "InStock - Warehouse and Inventory management web app preview.",
    },
    title: "InStock",
    type: "BrainStation",
    yearCompleted: "2025",
    teaser:
      "A fully responsive, full-stack inventory management system built with React, TypeScript, Node.js, and PostgreSQL.",
    experiencePoints: [
      `Built a full-stack inventory management app using React, TypeScript, Node.js, Express, and PostgreSQL.`,
      `Developed a responsive, accessible frontend in React with reusable components, form validation, and TypeScript.`,
      `Set up a modular Express server with centralized error handling, request logging (Winston), and API rate limiting.`,
      `Managed raw SQL migrations and data seeding through custom scripts and a cron job, using Supabase for PostgreSQL hosting.`,
      `Deployed frontend on Netlify and backend on Render, with secure CORS handling and environmental config.`,
    ],
    skillsAndTools: [
      "React",
      "TypeScript",
      "Sass",
      "Node JS",
      "Express",
      "PostgreSQL",
      "Supabase",
      "Winston",
      "Node-Cron",
      "Figma",
    ],
  },
  {
    id: "press-start--capstone",
    showcase: true,
    slug: "press-start",
    githubRepos: [
      {
        type: "client",
        title: "Press Start: Client",
        url: "github.com/janessaperry/press-start-client",
      },
      {
        type: "server",
        title: "Press Start: Server",
        url: "github.com/janessaperry/press-start-server",
      },
    ],
    categories: [ "Design", "Development" ],
    thumbnailInfo: {
      filePath: pressStartThumbnail,
      altText: "Press Start laptop mockup preview",
    },
    title: "Press Start",
    type: "BrainStation Capstone",
    yearCompleted: "2024",
    teaser:
      "Designed and developed a full-stack web app that helps users keep track of their video game collection so they can decide what to play next.",
    experiencePoints: [
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
    showcase: false,
    slug: "meta-hackathon",
    githubRepos: [
      {
        type: "client",
        title: "Meta Hackathon: Client",
        url: "github.com/janessaperry/meta-hackathon-client",
      },
      {
        type: "server",
        title: "Meta Hackathon: Server",
        url: "github.com/janessaperry/meta-hackathon-server",
      },
    ],
    categories: [ "Development" ],
    thumbnailInfo: {
      filePath: metaHackathonThumbnail,
      altText: "Meta Hackathon - Iggy Discover mobile mockup preview",
    },
    title: "Meta Hackathon",
    type: "BrainStation | Meta",
    yearCompleted: "2024",
    teaser:
      "Developed an Instagram Discovery Tool during a 24-hour hackathon that allows users to search for visually similar images.",
    experiencePoints: [
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
  {
    id: "website-redesign--netolnew",
    showcase: false,
    slug: "netolnew",
    categories: [ "Design" ],
    thumbnailInfo: {
      filePath: netolnewThumbnail,
      altText: "NETOLNEW - website redesign mockup preview",
    },
    title: "NETOLNEW",
    type: "Website Redesign",
    yearCompleted: "2023",
    teaser:
      "Improving the user experience and visual appeal of NETOLNEW's website where users can learn about indigenous language revitalization efforts and techniques in Canada.",
    skillsAndTools: [
      "Figma",
      "Affinity Photo",
      "Affinity Designer",
      "WordPress",
    ],
  },
];
