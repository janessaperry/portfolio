import browserFrame from "../assets/graphics/browser-container.svg";

interface ProjectFeatureProps {
  icon: React.ElementType;
  title: string;
  description: string[];
  videoSrc: string;
}

function ProjectFeature({
  icon: Icon,
  title,
  description,
  videoSrc,
}: ProjectFeatureProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex justify-center items-center rounded-2xl p-2 w-12 h-12 shrink-0 bg-gradient-to-tr from-seafoam-700 via-blue-300 to-fuschia-500">
        <Icon className="text-4xl text-fuschia-300" />
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="">
          <p className="text-lg font-heading font-medium text-seafoam-500">
            {title}
          </p>
          {description.map((paragraphText) => {
            return <p>{paragraphText}</p>;
          })}
        </div>

        <div className="border border-blue-700 rounded-lg overflow-hidden">
          <img
            src={browserFrame}
            alt="Browser frame for video"
            className="w-full bg-blue-700"
          />
          <video src={videoSrc} controls autoPlay playsInline loop muted />
        </div>
      </div>
    </div>
  );
}

export default ProjectFeature;
