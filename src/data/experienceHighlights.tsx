import {
  Certificate,
  CheckSquare,
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
    id: "experience--freelance",
    icon: DiamondsFour,
    title: "Freelance Web Design",
    location: "Self-employed",
    dateInfo: "2022-2024",
  },
  {
    id: "experience--sentis",
    icon: CheckSquare,
    title: "Survey Design & Development",
    location: "The Sentis Group",
    dateInfo: "2017-2022",
  },
  {
    id: "experience--fnesx",
    icon: Laptop,
    title: "Online Learning Platform Design",
    location: "FNESC",
    dateInfo: "2023-2024",
  },
];
