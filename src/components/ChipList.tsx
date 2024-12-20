interface ChipListProps {
  labels: string[];
  variant?: "primary" | "primaryLighten" | "secondary";
}
function ChipList({ labels, variant = "primary" }: ChipListProps) {
  const variantClasses = {
    primary: "text-blue-300 bg-fuschia-100 border border-fuschia-muted",
    primaryLighten:
      "text-blue-500 bg-fuschia-50/40 border border-fuschia-muted",
    secondary: "text-seafoam-500 bg-blue-300 border border-blue-100",
  };
  return (
    <ul className="flex flex-wrap gap-2">
      {labels.map((label) => {
        return (
          <li
            key={label}
            className={`${variantClasses[variant]} text-base leading-none lowercase py-1.5 px-2 md:py-2 md:px-3 rounded-lg`}
          >
            {label}
          </li>
        );
      })}
    </ul>
  );
}

export default ChipList;
