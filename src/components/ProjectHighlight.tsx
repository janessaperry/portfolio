interface ProjectHighlightProps {
  icon: React.ElementType;
  content: string;
}

function ProjectHighlight({ icon: Icon, content }: ProjectHighlightProps) {
  return (
    <div className="flex gap-x-4">
      <div className="flex justify-center items-center rounded-2xl p-2 w-12 h-12 shrink-0 bg-gradient-to-tr from-seafoam-700 via-blue-300 to-fuschia-500">
        <Icon className="text-4xl text-fuschia-300" />
      </div>
      <p className="text-xl">{content}</p>
    </div>
  );
}

export default ProjectHighlight;
