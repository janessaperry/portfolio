interface LinkSocialProps {
  url: string;
  target?: "_self" | "_blank";
  icon: React.ElementType;
  title: string;
  content: string;
}

function LinkSocial({
  url,
  target = "_blank",
  icon: Icon,
  title,
  content,
}: LinkSocialProps) {
  return (
    <a
      href={url}
      target={target}
      className="flex md:flex-col lg:flex-row gap-2 md:gap-1 lg:gap-4"
    >
      <Icon className="text-seafoam-500 text-3xl shrink-0" />
      <div className="flex-auto flex flex-col gap-1">
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-base leading-none text-fuschia-50">{content}</p>
      </div>
    </a>
  );
}

export default LinkSocial;
