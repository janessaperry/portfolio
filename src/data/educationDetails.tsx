import { Code, GraduationCap, Layout, Palette } from "@phosphor-icons/react";

interface EducationDetails {
  id: string;
  icon: React.ElementType;
  title: string;
  location: string;
  dateInfo: string;
}

export const educationDetails: EducationDetails[] = [
  {
    id: "software-engineering--brainstation",
    icon: Code,
    title: "Diploma of Software Engineering",
    location: "BrainStation",
    dateInfo: "2024",
  },
  {
    id: "ux-design--brainstation",
    icon: Layout,
    title: "UX Design Certificate",
    location: "BrainStation",
    dateInfo: "2018",
  },
  {
    id: "ui-design--brainstation",
    icon: Palette,
    title: "UI Design Certificate",
    location: "BrainStation",
    dateInfo: "2018",
  },
  {
    id: "bcomm--tmu",
    icon: GraduationCap,
    title: "Bachelor of Commerce",
    location: "Toronto Metropolitan University",
    dateInfo: "2009-2013",
  },
];
