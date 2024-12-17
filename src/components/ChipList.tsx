function ChipList({ labels }: { labels: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {labels.map((label) => {
        return (
          <li
            key={label}
            className="text-blue-300 text-base leading-none	lowercase py-2 px-3 bg-mauve-300 border border-mauve-700 rounded-lg"
          >
            {label}
          </li>
        );
      })}
    </ul>
  );
}

export default ChipList;
