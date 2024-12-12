import { Link } from "react-router";

interface ShowcaseProjectProps {
  thumbnailInfo: {
    filePath: string;
    altText: string;
  };
  title: string;
  description: string;
}

function ShowcaseProject({
  thumbnailInfo,
  title,
  description,
}: ShowcaseProjectProps) {
  return (
    <Link
      to="/projects"
      className="p-6 flex flex-col md:flex-row gap-8 items-center"
    >
      <div className="md:basis-1/3">
        <img
          src={thumbnailInfo.filePath}
          alt={thumbnailInfo.altText}
          className="sm:w-1/2 md:w-full justify-self-center"
        />
      </div>

      <div className="md:basis-2/3 flex flex-col gap-2">
        <h2 className="text-pink-700">{title}</h2>
        <p className="text-blue-500">{description}</p>
      </div>
    </Link>
  );
}

export default ShowcaseProject;
