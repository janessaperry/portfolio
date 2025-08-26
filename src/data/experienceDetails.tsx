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
    jobTitle: "Teaching Assistant, Software Engineering",
    company: "BrainStation",
    yearRange: "Jan - Mar 2025",
    description: [
      "Provide code reviews and feedback on JavaScript, React, HTML/CSS, and Node.js/Express projects for a cohort of ~40 students.",
      "Mentor students one-on-one, helping them improve problem-solving skills and understand key software engineering concepts.",
      "Guide students through debugging, troubleshooting, and optimizing full stack applications through pair programming.",
      "Lead whiteboarding sessions where students practice solving coding problems, refine their approach, and present their solutions.",
      "Collaborate with instructors in standups and retrospectives to enhance curriculum and improve the student learning experience.",
    ],
    skillsAndTools: [
      "Front End Development",
      "HTML",
      "CSS",
      "SCSS",
      "React",
      "Back End Development",
      "Node.js",
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
    ],
  },
  {
    id: "web-design--freelance",
    jobTitle: "Web Designer",
    company: "Self-employed",
    yearRange: "2022 - Present",
    description: [
      "Build and customize WordPress websites using prebuilt themes and custom CSS; provide documentation for clients to manage their sites after launch.",
      "Design and develop internal tools and resources to streamline workflows and improve productivity.",
      "Designed an online learning platform for Indigenous adults, improving access to high school credits in remote areas.",
      "Collaborate closely with clients to define project scope, align with brand guidelines, and implement user-focused design strategies for projects.",
    ],
    skillsAndTools: [
      "HTML",
      "CSS",
      "JavaScript",
      "UI Design",
      "Responsive Design",
      "Figma",
      "Affinity Designer",
      "Affinity Photo",
      "WordPress",
    ],
  },
  {
    id: "senior-manager-ui-design--sentis",
    jobTitle: "Senior Manager, UI Design & Project Solutions",
    company: "The Sentis Group",
    yearRange: "2021 - 2022",
    description: [
      "Led the front-end development and UI design of a survey platform, while ensuring cross-browser and device compatibility.",
      "Designed and developed reusable, interactive survey question types that were engaging, responsive, and easy to configure through survey GUI.",
      "Implemented a flexible system that allowed survey programmers to easily apply custom styles via the survey GUI, allowing client branding in survey templates.",
      "Trained new hires in survey programming fundamentals and maintained comprehensive platform documentation to support onboarding.",
      "Collaborated with project managers and full-stack developers to design KPI dashboards, empowering clients to make data-driven decisions.",
    ],
    skillsAndTools: [
      "HTML",
      "CSS",
      "JavaScript",
      "Twig",
      "UI Design",
      "Responsive Design",
      "Figma",
      "Affinity Photo",
      "Affinity Designer",
      "WordPress",
      "Asana",
    ],
  },
  {
    id: "manager-ui-design--sentis",
    jobTitle: "Manager, UI Design & Project Solutions",
    company: "The Sentis Group",
    yearRange: "2017 - 2021",
    description: [
      "Collaborated with senior developers to design and develop features for the survey platform, while ensuring cross-browser and device compatibility.",
      "Refactored survey platform stylesheets to establish a consistent design system, ensuring consistent typography, colour schemes, and layouts.",
      "Documented best practices for implementing custom survey questions, providing internal teams with guidance on GUI configuration and data processing.",
      "Designed interactive KPI dashboards with dynamic filtering functionality, helping clients analyze survey data and track key insights. ",
      "Maintained company website and digital assets, contributing to a cohesive brand identity.",
    ],
    skillsAndTools: [
      "HTML",
      "CSS",
      "JavaScript",
      "Twig",
      "UI Design",
      "Responsive Design",
      "Figma",
      "Affinity Photo",
      "Affinity Designer",
      "Asana",
    ],
  },
];
