import React from "react";

interface LinkIconProps {
  url: string;
  target?: "_self" | "_blank";
  icon: React.ElementType;
  variant?: "primary" | "secondary";
  ariaLabel: string;
}

function LinkIcon ({
  url,
  target = "_blank",
  icon: Icon,
  variant = "primary",
  ariaLabel,
}: LinkIconProps) {
  const variantClasses = {
    primary: "text-seafoam-500 hover:text-seafoam-700",
    secondary: "text-blue-50 hover:text-seafoam-500",
  };
  return (
    <a href={url} target={target} aria-label={ariaLabel}>
      <Icon className={`${variantClasses[ variant ]} text-3xl`}/>
    </a>
  );
}

export default LinkIcon;
