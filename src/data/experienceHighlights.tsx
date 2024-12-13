import {
  Certificate,
  CheckSquare,
  DiamondsFour,
  Laptop,
} from "@phosphor-icons/react";

interface ExperienceHighlights {
  id: number;
  icon: JSX.Element;
  title: string;
  location: string;
  year: string;
}

export const experienceHighlights: ExperienceHighlights[] = [
  {
    id: 1,
    icon: <Certificate className="text-seafoam-500 text-3xl shrink-0" />,
    title: "Software Engineering Diploma",
    location: "BrainStation",
    year: "2024",
  },
  {
    id: 2,
    icon: <DiamondsFour className="text-seafoam-500 text-3xl shrink-0" />,
    title: "Freelance Web Design",
    location: "Self-employed",
    year: "2022-2024",
  },
  {
    id: 3,
    icon: <CheckSquare className="text-seafoam-500 text-3xl shrink-0" />,
    title: "Survey Design & Development",
    location: "The Sentis Group",
    year: "2017-2022",
  },
  {
    id: 4,
    icon: <Laptop className="text-seafoam-500 text-3xl shrink-0" />,
    title: "Online Learning Platform Design",
    location: "FNESC",
    year: "2023-2024",
  },
];
