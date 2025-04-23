import React from "react";
import parse from 'html-react-parser';
import browserFrame from "../assets/graphics/browser-container.svg";

interface ProjectFeatureProps {
  icon: React.ElementType;
  title: string;
  contentBlocks: {
    type: string;
    paragraph?: string;
    imageSrc?: string;
    imageAlt?: string;
    videoSrc?: string;
    videoLayout?: "landscape" | "portrait";
  }[];
}

function ProjectFeature({
                          icon: Icon,
                          title,
                          contentBlocks,
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

          {contentBlocks.map((block, index) => {
            if (block.type === "text" && block.paragraph) {
              return <p key={index}>{parse(block.paragraph)}</p>;
            }

            if (block.type === "video") {
              const layout = block.videoLayout || "landscape";
              return <div key={index}
                          className={`border border-blue-700 overflow-hidden my-3 ${layoutClasses[layout]}`}
              >
                <img
                  src={browserFrame}
                  alt="Browser frame for video"
                  className="w-full bg-blue-700"
                />
                <video src={block.videoSrc}
                       controls
                       autoPlay
                       playsInline
                       loop
                       muted/>
              </div>
            }

            if (block.type === "image") {
              return <img
                key={index}
                src={block.imageSrc}
                alt={block.imageAlt}
                className="w-full border border-fuschia-300/40 rounded-md my-3"
              />
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectFeature;
