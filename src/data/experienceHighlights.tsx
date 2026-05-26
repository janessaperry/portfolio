import { Certificate, Code, Laptop } from "@phosphor-icons/react";

interface ExperienceHighlights {
  id: string;
  icon: React.ElementType;
  title: string;
  location: string;
  dateInfo: string;
}

export const experienceHighlights: ExperienceHighlights[] = [
  {
    id: "experience--brainstation",
    icon: Certificate,
    title: "Software Engineering Diploma",
    location: "BrainStation",
    dateInfo: "2024",
  },
  {
    id: "experience--freelance-dev",
    icon: Code,
    title: "Junior Web Developer",
    location: "Independent Contractor",
    dateInfo: "2025 - Present",
  },
  {
    id: "experience--press-start",
    icon: Code,
    title: "Full-Stack Project: Press Start",
    location: "Personal Project",
    dateInfo: "Ongoing",
  },
  {
    id: "experience--teaching-assistant",
    icon: Laptop,
    title: "Teaching Assistant, Software Engineering",
    location: "BrainStation",
    dateInfo: "2025",
  }
];
