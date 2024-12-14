interface ProjectDetails {
  id: string;
  projectName: string;
  projectType: string;
  yearCompleted: string;
  description: string[];
  skillsAndTools: string[];
}

export const projectDetails: ProjectDetails[] = [
  {
    id: "press-start--capstone",
    projectName: "Freelance Designer",
    projectType: "BrainStation Capstone",
    yearCompleted: "2024",
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
    projectName: "Meta Hackathon",
    projectType: "BrainStation | Meta",
    yearCompleted: "2024",
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
