import React from "react";
import parse from 'html-react-parser';
import browserFrame from "../assets/graphics/browser-container.svg";

interface ProjectFeatureProps {
  icon: React.ElementType;
  title: string;
  description: string[];
  imageSrc?: string;
  // imageLayout?: "landscape" | "portrait";
  videoSrc?: string;
  videoLayout?: "landscape" | "portrait";
}

function ProjectFeature({
                          icon: Icon,
                          title,
                          description,
                          imageSrc,
                          videoSrc,
                          videoLayout = "landscape",
                        }: ProjectFeatureProps) {
  const layoutClasses = {
    landscape: "rounded-lg",
    portrait: "rounded-md md:w-1/3 self-center",
  };
  
  return (
    <div className="flex gap-4 items-start">
      <div className="flex justify-center items-center rounded-2xl p-2 w-12 h-12 shrink-0 bg-gradient-to-tr from-seafoam-700 via-blue-300 to-fuschia-500">
        <Icon className="text-4xl text-fuschia-300"/>
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-3">
          <p className="text-lg font-heading font-medium text-seafoam-500">
            {title}
          </p>
          {description.map((paragraphText, index) => {
            return <p key={index}>{parse(paragraphText)}</p>;
          })}
        </div>

        {videoSrc && (
          <div
            className={`border border-blue-700 overflow-hidden ${layoutClasses[videoLayout]}`}
          >
            <img
              src={browserFrame}
              alt="Browser frame for video"
              className="w-full bg-blue-700"
            />
            <video src={videoSrc}
                   controls
                   autoPlay
                   playsInline
                   loop
                   muted/>
          </div>
        )}

        {imageSrc && (
          <img
            src={imageSrc}
            alt=""
            className="w-full border border-fuschia-300/40 rounded-md"
          />
        )}
      </div>
    </div>
  );
}

export default ProjectFeature;
