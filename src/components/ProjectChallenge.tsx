import { Warning, Target } from "@phosphor-icons/react";
import IconGradientFill from "./IconGradientFill";

interface ProjectChallengeProps {
  title: string;
  overview: string;
  challengeAndSolution: {
    challenge: string;
    solution: string;
  };
  description: string[];
}

function ProjectChallenge ({
  title,
  overview,
  challengeAndSolution,
  description,
}: ProjectChallengeProps) {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="title-wrapper">
        <h3>{title}</h3>
        <p className="text-xl">{overview}</p>
      </div>

      <div className="h-px bg-gradient-to-r from-fuschia-neon/50 via-blue-neon/50 to-seafoam-neon/50 rounded-full"></div>
      <p className="font-heading text-base uppercase font-medium text-blue-50/60">
        Challenges & Solutions
      </p>

      <div className="grid md:grid-cols-2 gap-5 md:gap-6 lg:gap-10">
        <div className="md:col-span-1 flex gap-x-4">
          <IconGradientFill id="gradient--fuschia" icon={Warning}/>
          <p>{challengeAndSolution.challenge}</p>
        </div>

        <div className="md:col-span-1 flex gap-x-4">
          <IconGradientFill id="gradient--seafoam" icon={Target}/>
          <p>{challengeAndSolution.solution}</p>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-fuschia-neon/50 via-blue-neon/50 to-seafoam-neon/50 rounded-full"></div>

      {description.map((paragraphText, index) => {
        return <p key={index}>{paragraphText}</p>;
      })}
    </div>
  );
}

export default ProjectChallenge;
