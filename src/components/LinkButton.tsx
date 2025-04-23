import React from "react";

interface LinkButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  size?: "base" | "lg" | "xl";
  target?: "_self" | "_blank";
  iconLeft?: React.JSX.Element;
  iconRight?: React.JSX.Element;
}

function LinkButton({
                      label,
                      href,
                      variant = "primary",
                      size = "base",
                      target = "_self",
                      iconLeft,
                      iconRight,
                    }: LinkButtonProps) {
  const variantClasses = {
    primary: "text-seafoam-500 hover:text-seafoam-700",
    secondary:
      "text-blue-700 border-b border-transparent hover:text-fuschia-700 hover:border-fuschia-500",
  };

  return (
    <a
      href={href}
      target={target}
      className={`
        ${variantClasses[variant]}
        font-heading text-${size} lowercase 
        flex justify-center items-center
        transition-all ease-in-out duration-300`}
    >
      {iconLeft && <span className="pr-3">{iconLeft}</span>}
      {label}
      {iconRight && <span className="pl-3">{iconRight}</span>}
    </a>
  );
}

export default LinkButton;
