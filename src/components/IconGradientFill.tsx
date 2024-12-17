interface IconGradientFill {
  id: string;
  icon: React.ElementType;
}

function IconGradientFill({ id, icon: Icon }: IconGradientFill) {
  let from: string;
  let via: string | undefined;
  let to: string;

  switch (id) {
    case "gradient--pink":
      from = "#EFA4F0";
      to = "#AD33AD";
      break;

    case "gradient--seafoam":
      from = "#ADE7D6";
      to = "#46A78A";
      break;

    case "gradient--pink-seafoam":
      from = "#ADE7D6";
      via = "#009DFF";
      to = "#46A78A";
      break;

    default:
      from = "#EFA4F0";
      to = "#AD33AD";
  }

  return (
    <div className="w-10 h-10 shrink-0">
      <svg width="0" height="0">
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: from, stopOpacity: 1 }} />
            {via && (
              <stop offset="50%" style={{ stopColor: via, stopOpacity: 1 }} />
            )}
            <stop offset="100%" style={{ stopColor: to, stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>

      <Icon className="w-full h-full" style={{ fill: `url(#${id})` }} />
    </div>
  );
}

export default IconGradientFill;
