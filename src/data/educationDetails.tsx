interface EducationDetails {
  id: string;
  degree: string;
  institution: string;
  yearsAttended: string;
}

export const educationDetails: EducationDetails[] = [
  {
    id: "software-engineering--brainstation",
    degree: "Diploma of Software Engineering",
    institution: "BrainStation",
    yearsAttended: "2024",
  },
  {
    id: "ux-design--brainstation",
    degree: "UX Design Certificate",
    institution: "BrainStation",
    yearsAttended: "2018",
  },
  {
    id: "ui-design--brainstation",
    degree: "UI Design Certificate",
    institution: "BrainStation",
    yearsAttended: "2018",
  },
  {
    id: "bcomm--tmu",
    degree: "Bachelor of Commerce",
    institution: "Toronto Metropolitan University",
    yearsAttended: "2009-2013",
  },
];
