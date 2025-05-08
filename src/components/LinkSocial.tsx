import React from "react";

interface LinkSocialProps {
  url: string;
  target?: "_self" | "_blank";
  icon: React.ElementType;
  title: string;
  content: string;
}

function LinkSocial ({
  url,
  target = "_blank",
  icon: Icon,
  title,
  content,
}: LinkSocialProps) {
  return (
    <a
      href={url}
      target={target}
      aria-label={title}
      className="flex md:flex-col lg:flex-row gap-2 md:gap-1 lg:gap-4 group normal-case"
    >
      <Icon className="text-seafoam-500 text-3xl shrink-0"/>
      <div className="flex-auto flex flex-col gap-1">
        <p className="text-xl font-medium group-hover:text-seafoam-500 transition-colors duration-300">
          {title}
        </p>
        <p className="text-base leading-none text-fuschia-50">{content}</p>
      </div>
    </a>
  );
}

export default LinkSocial;
