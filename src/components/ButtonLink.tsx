interface ButtonLinkProps {
  label: string;
  variant?: "primary" | "secondary";
  iconRight?: JSX.Element;
  handleClick?: () => void;
  ariaPressed?: boolean;
}

function ButtonLink({
  label,
  variant = "primary",
  iconRight,
  handleClick,
  ariaPressed,
}: ButtonLinkProps) {
  const variantClasses = {
    primary:
      "text-blue-50 hover:border-seafoam-500 aria-pressed:border-seafoam-500",
    secondary: "text-blue-700 hover:text-fuschia-700 hover:border-fuschia-500",
  };

  return (
    <button
      onClick={handleClick}
      aria-pressed={ariaPressed}
      className={`
        ${variantClasses[variant]}
        font-heading text-base lowercase 
        border-b-2 border-transparent
        flex justify-center items-center
        group`}
    >
      {label}
      {iconRight && (
        <span className="pl-2 transition-transform ease-out group-hover:translate-x-2">
          {iconRight}
        </span>
      )}
    </button>
  );
}

export default ButtonLink;
