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
    yearRange: "2025 - Present",
    description: [
      "Provide code reviews and feedback on JavaScript, React, HTML/CSS, and Node.js/Express projects for a cohort of ~40 students.",
      "Mentor students one-on-one, helping them improve problem-solving skills and understand key software engineering concepts.",
      "Guide students through debugging, troubleshooting, and optimizing full stack applications through pair programming.",
      "Lead whiteboarding sessions where students practice solving coding problems, refine their approach, and present their solutions.",
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
    yearRange: "2022 - Present",
    description: [
      "Build and customize WordPress websites using prebuilt themes and custom CSS; provide documentation for clients to manage their sites after launch.",
      "Design and develop internal tools and resources to streamline workflows and improve productivity.",
      "Designed an online learning platform for Indigenous adults, improving access to high school credits in remote areas.",
      "Collaborate closely with clients to define project scope, align with brand guidelines, and implement design strategies for projects.",
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
      "Figma",
      "Responsive Design",
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
    id: "manager-ui-design--sentis",
    jobTitle: "Manager, UI Design & Project Solutions",
    company: "The Sentis Group",
    yearRange: "2017 - 2021",
    description: [
      "Collaborated with senior developers to design and develop features for the survey platform, while ensuring cross-browser and device compatibility.",
      "Refactored survey platform stylesheets to establish a consistent design system, ensuring consistent typography, colour schemes, and layouts.",
      "Documented best practices for implementing custom survey questions, providing internal teams with guidance on GUI configuration and data processing.",
      "Designed interactive KPI dashboards with dynamic filtering functionality, helping clients analyze survey data and track key insights. ",
      "Maintained company website and digital assets.",
    ],
    skillsAndTools: [
      "HTML",
      "CSS",
      "JavaScript",
      "Figma",
      "Twig",
      "Responsive Design",
      "Affinity Photo",
      "Affinity Designer",
      "PowerPoint",
      "Excel",
      "Word",
      "Asana",
    ],
  },
  {
    id: "visual-identity--sentis",
    jobTitle: "Manager, Visual Identity & Project Solutions",
    company: "The Sentis Group",
    yearRange: "2016 - 2017",
    description: [
      "Designed and developed the company website, ensuring responsiveness and usability across devices.",
      "Designed interactive KPI dashboards with dynamic filtering, helping clients analyze survey data and track key insights. ",
      "Worked with full-stack developers to design a closed-loop feedback system for survey respondents, streamlining client follow-ups, status updates, and ticket management through a centralized portal.",
      "Collaborated with managing partners to establish a cohesive visual brand identity through typography, colour palettes, and templates.",
      "Designed and maintained brand collateral and digital assets to uphold brand identity.",
    ],
    skillsAndTools: [
      "Figma",
      "Responsive Design",
      "HTML",
      "CSS",
      "JavaScript",
      "Affinity Photo",
      "Affinity Designer",
      "PowerPoint",
      "Excel",
      "Word",
      "Asana",
    ],
  },
  {
    id: "research-manager--sentis",
    jobTitle: "Research Manager",
    company: "The Sentis Group",
    yearRange: "2015 - 2016",
    description: [
      "Led research projects from survey design through to data analysis and report delivery, ensuring high-quality, actionable insights.",
      "Designed and tested custom online reporting dashboards, collaborating closely with developers to optimize usability and functionality.",
      "Managed cross-functional teams by overseeing timelines, budgets, and resource coordination to drive project success.",
      "Processed large datasets in Excel, cleaning data and managing sample distribution.",
      "Coordinated with mailing companies to print and distribute paper surveys while overseeing internal teams handling data entry.",
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
  {
    id: "research-analyst--sentis",
    jobTitle: "Research Analyst",
    company: "The Sentis Group",
    yearRange: "2013 - 2015",
    description: [
      "Tested online surveys with complex skip logic and interactive reporting sites to ensure accurate functionality, including real-time data updates and proper filtering.",
      "Collaborated with research managers to collect, clean, and analyze data, and then transform findings into visually appealing reports and infographics.",
      "Managed extensive Excel data cleaning by removing duplicate entries from client sample, ensuring high data quality and even distribution.",
    ],
    skillsAndTools: ["PowerPoint", "Excel", "Word", "SPSS", "Asana"],
  },
];
