interface ButtonLinkProps {
  label: string;
  contextClasses?: string;
  iconRight?: any;
  handleClick?: () => void;
  ariaPressed?: boolean;
}
function ButtonLink({
  label,
  contextClasses,
  iconRight,
  handleClick,
  ariaPressed,
}: ButtonLinkProps) {
  return (
    <button
      onClick={handleClick}
      aria-pressed={ariaPressed}
      className={`
        ${contextClasses} 
        font-heading text-lg text-blue-50 lowercase 
        border-b-2 border-transparent
        hover:border-b-2 hover:border-seafoam-500
        aria-pressed:border-b-2 aria-pressed:border-seafoam-500`}
    >
      {label} {iconRight}
    </button>
  );
}

export default ButtonLink;
