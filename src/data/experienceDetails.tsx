interface ExperienceDetails {
  id: string;
  jobTitle: string;
  company: string;
  yearRange: string;
  description: string[];
  skillsAndTools: string[];
}

export const experienceDetails: ExperienceDetails[] = [
  {
    id: "teaching-assistant--brainstation",
    jobTitle: "Teaching Assistant",
    company: "BrainStation",
    yearRange: "2025-Present",
    description: [
      "Provide code reviews and feedback on JavaScript, React, HTML/CSS, and Node.js/Express projects for a cohort of ~40 students.",
      "Assist in debugging, troubleshooting, and optimizing front-end and full-stack applications.",
      "Mentor students one-on-one, helping them improve problem-solving skills and understand key software engineering concepts.",
      "Collaborate with instructors in standups and retrospectives to enhance curriculum and improve the student learning experience.",
    ],
    skillsAndTools: [
      "Full-stack Development",
      "HTML",
      "CSS",
      "SASS",
      "React",
      "Node JS",
      "Express",
      "MySQL",
      "REST APIs",
      "Git",
      "GitHub",
      "VS Code",
      "Axios",
      "Postman",
      "Agile",
      "Chrome DevTools",
      "Debugging",
      "Code Reviews",
      "Responsive Design",
    ],
  },
  {
    id: "freelance-design--contract",
    jobTitle: "Freelance Designer",
    company: "Self-employed",
    yearRange: "2022-Present",
    description: [
      "Deliver user-friendly WordPress websites and provide documentation to enable clients to manage and update their sites independently after launch.",
      "Design and develop internal tools and resources to streamline workflow and improve productivity.",
      "Designed an online learning platform for Indigenous adults, improving access to high school credits in remote areas.",
    ],
    skillsAndTools: [
      "Figma",
      "WordPress",
      "Responsive Design",
      "HTML",
      "CSS",
      "JavaScript",
      "Affinity Photo",
      "Affinity Designer",
      "PowerPoint",
      "Excel",
      "Word",
    ],
  },
  {
    id: "ui-design--sentis",
    jobTitle: "Manager, UI Design & Project Solutions",
    company: "The Sentis Group",
    yearRange: "2017 - 2022",
    description: [
      "Led the design of the survey platform and collaborated with senior developers to implement features, ensuring they met user needs and were optimized for cross-browser and device compatibility",
      "Trained new hires in survey programming fundamentals and maintained comprehensive platform documentation to support onboarding.",
      "Used a range of design and development tools to create and maintain Sentis' website and brand collateral, ensuring consistency and functionality across platforms.",
      "Collaborated with project managers and full-stack developers to design KPI dashboards, empowering clients to make data-driven decisions.",
    ],
    skillsAndTools: [
      "Figma",
      "Responsive Design",
      "HTML",
      "CSS",
      "JavaScript",
      "Twig",
      "WordPress",
      "Affinity Photo",
      "Affinity Designer",
      "PowerPoint",
      "Excel",
      "Word",
      "Asana",
    ],
  },
  {
    id: "research--sentis",
    jobTitle: "Project Manager",
    company: "The Sentis Group",
    yearRange: "2013 - 2017",
    description: [
      "Managed multiple projects across lifecycle stages, coordinating cross-functional teams to ensure timely and high quality deliverables. ",
      "Designed custom online reporting sites based on client needs, collaborating closely with developers to ensure usability and functionality.  ",
      "Cleaned and prepared sample data to ensure accurate survey distribution supporting effective data collection. ",
    ],
    skillsAndTools: [
      "PowerPoint",
      "Excel",
      "Word",
      "Figma",
      "Responsive Design",
      "SPSS",
      "Asana",
    ],
  },
];
