import {
  Certificate,
  CheckSquare, Code,
  DiamondsFour,
  Laptop,
} from "@phosphor-icons/react";

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
    id: "experience--teaching-assistant",
    icon: Laptop,
    title: "Teaching Assistant, Software Engineering",
    location: "BrainStation",
    dateInfo: "2025",
  },
  {
    id: "experience--in-stock",
    icon: Code,
    title: "Full-Stack Project: InStock",
    location: "BrainStation",
    dateInfo: "2025",
  },
  {
    id: "experience--freelance",
    icon: DiamondsFour,
    title: "Freelance Web Design",
    location: "Self-employed",
    dateInfo: "2022-Present",
  },
  {
    id: "experience--sentis",
    icon: CheckSquare,
    title: "UI Design & Development",
    location: "The Sentis Group",
    dateInfo: "2017-2022",
  },
];
