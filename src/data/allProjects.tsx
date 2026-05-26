import pressStartThumbnail from "../assets/images/mockups/press-start--explore--device.png";
import inStockThumbnail from "../assets/images/mockups/in-stock--device-mockups.png";
import netolnewThumbnail from "../assets/images/mockups/netolnew--home-page--devices.webp";
import dencitiesThumbnail from "../assets/images/mockups/dencities--map--device.png";
import woawThumbnail from "../assets/images/mockups/woaw--home--device.png";

export interface AllProjects {
  id: string;
  showcase: boolean;
  slug?: string;
  githubRepos?: {
    type: "client" | "server";
    title: string;
    url: string;
  }[];
  liveUrl?: string;
  categories: string[];
  thumbnailInfo: {
    filePath: string;
    altText: string;
  };
  title: string;
  role: string;
  type: string;
  yearCompleted: string;
  teaser: string;
  experiencePoints?: string[];
  skillsAndTools: string[];
}

export const allProjects: AllProjects[] = [
  {
    id: "press-start--project",
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
    role: "Full Stack Developer • Designer",
    type: "Personal Project",
    yearCompleted: "Ongoing",
    teaser: `Developing a full-stack video game collection tracker with custom React hooks, multi-category filtering with URL syncs, JWT authentication with secure password reset, and a PostgreSQL backend synced from the IGDB API.`,
    experiencePoints: [
      `Developing a full-stack web app to help gamers keep track of their video game collections featuring a component-based React and TypeScript frontend and a layered MVC backend with Node.js, Express, and a PostgreSQL database managed with Prisma ORM.`,
      `Implemented JWT authentication with a secure password reset flow, including rate-limited reset requests and bcrypt hashed tokens.`,
      `Built a multi-category filter system with URL param sync featuring different behaviours on desktop (sidebar filters applied on change) versus mobile (modal filters applied on submit).`,
      `Integrated custom React hooks to manage authentication, filtering, pagination, and mobile versus desktop behaviour, keeping page components clean and focused.`,
      `Integrated IGDB API with custom sync logic to keep local database data up to date with IGDB; use IGDB checksum to detect changes during sync to avoid unnecessary writes.`,
    ],
    skillsAndTools: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma ORM",
      "REST APIs",
      "IGDB API",
      "Headless UI",
      "Figma",
      "Responsive Design",
    ],
  },
  {
    id: "gemeindemap--dencities",
    showcase: true,
    liveUrl: "https://st-stefan-afiesl.gemeindemap.at/?year=2026",
    categories: [ "Development" ],
    thumbnailInfo: {
      filePath: dencitiesThumbnail,
      altText: "Gemeindemap - community participation platform preview",
    },
    title: "Gemeindemap",
    role: "Frontend Developer",
    type: "Freelance",
    yearCompleted: "2025",
    teaser: `Contributed to a production civic engagement platform, building modal authentication and participation flows, improving mobile responsiveness, and implemented i18n translations for multi language support.`,
    skillsAndTools: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "i18n",
    ],
  },
  {
    id: "website--woaw",
    showcase: false,
    categories: [ "Design", "Development" ],
    thumbnailInfo: {
      filePath: woawThumbnail,
      altText: "Women of the Ancient World website preview",
    },
    title: "Women of the Ancient World",
    role: "Full Stack Developer • Designer",
    type: "Freelance",
    yearCompleted: "2025",
    teaser: `Designed and contributed to the development of a custom WordPress theme using Blade templating and ACF with React injected to handle dynamic search and filtering without page reloads.`,
    skillsAndTools: [
      "React",
      "JavaScript",
      "PHP",
      "Laravel",
      "WordPress",
      "UI Design",
      "Figma",
      "Responsive Design",
    ],
  },
  {
    id: "in-stock--brainstation",
    showcase: false,
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
    liveUrl: "https://instock-jp.netlify.app",
    categories: [ "Development" ],
    thumbnailInfo: {
      filePath: inStockThumbnail,
      altText: "InStock - Warehouse and Inventory management web app preview.",
    },
    title: "InStock",
    role: "Full Stack Developer",
    type: "BrainStation",
    yearCompleted: "2025",
    teaser: `Rebuilt a bootcamp group project solo with an upgraded tech stack, implementing centralized error handling, request logging, API rate limiting, automated database reseeding, and accessible custom form components.`,
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
      "SCSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Supabase",
      "Node-Cron",
      "Winston",
      "Figma",
    ],
  },
  {
    id: "website-redesign--netolnew",
    showcase: false,
    slug: "netolnew",
    liveUrl: "https://netolnew.ca",
    categories: [ "Design" ],
    thumbnailInfo: {
      filePath: netolnewThumbnail,
      altText: "NETOLNEW - website redesign mockup preview",
    },
    title: "NETOLNEW",
    role: "UI Designer",
    type: "Freelance",
    yearCompleted: "2023",
    teaser: `Redesigned the NETOLNEW website in Figma and refined the visual design and layout using a pre-built WordPress theme and custom CSS.`,
    skillsAndTools: [
      "UI Design",
      "Responsive Design",
      "Figma",
      "Affinity Designer",
      "Affinity Photo",
      "WordPress",
    ],
  },
];
