interface LinkButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  size?: "base" | "lg";
  target?: "_self" | "_blank";
  iconRight?: JSX.Element;
}

function LinkButton({
  label,
  href,
  variant = "primary",
  size = "base",
  target = "_self",
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
      {label}
      {iconRight && <span className="pl-1">{iconRight}</span>}
    </a>
  );
}

export default LinkButton;
