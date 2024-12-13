import { Envelope, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

interface ContactLinks {
  id: number;
  url: string;
  icon: JSX.Element;
  title: string;
  content: string;
}

export const contactLinks: ContactLinks[] = [
  {
    id: 1,
    url: "https://github.com/janessaperry",
    icon: <GithubLogo className="text-seafoam-500 text-3xl shrink-0" />,
    title: "git in it",
    content: "github.com/janessaperry",
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/janessa-perry/",
    icon: <LinkedinLogo className="text-seafoam-500 text-3xl shrink-0" />,
    title: "let connect = true;",
    content: "linkedin.com/in/janessa-perry/",
  },
  {
    id: 3,
    url: "mailto:hello@janessaperry.com",
    icon: <Envelope className="text-seafoam-500 text-3xl shrink-0" />,
    title: "sendEmail(hello)",
    content: "hello@janessaperry.com",
  },
];
