function BackgroundBokeh() {
  const circles = [
    {
      size: "w-32 h-32 md:w-1/4 md:h-64 lg:w-1/3",
      color: "bg-blue-neon/80",
      blur: "blur-[100px] md:blur-[180px]",
      animation: "animate-bokeh1",
      position: "-top-16 md:-top-32 left-0",
    },
    {
      size: "w-32 h-32 md:w-1/4 md:h-64 lg:w-5/12",
      color: "bg-fuschia-neon/80",
      blur: "blur-[100px] md:blur-[180px]",
      animation: "animate-bokeh2",
      position: "-top-16 md:-top-28 left-1/4",
    },
    {
      size: "w-32 h-32 md:w-1/4 md:h-64 lg:w-5/12",
      color: "bg-fuschia-neon/80",
      blur: "blur-[100px] md:blur-[180px]",
      animation: "animate-bokeh3",
      position: "-top-16 md:-top-28 left-1/2",
    },
    {
      size: "w-32 h-32 md:w-1/4 md:h-64 lg:w-1/3",
      color: "bg-blue-neon/80",
      blur: "blur-[100px] md:blur-[180px]",
      animation: "animate-bokeh4",
      position: "-top-16 md:-top-32 left-3/4",
    },
  ];
  return (
    <div className="w-full h-1/6 md:h-1/6 absolute overflow-x-clip z-[-10]">
      {circles.map((circle, index) => (
        <div
          key={index}
          className={`absolute mix-blend-multiply z-[-10] rounded-full ${circle.size} ${circle.color} ${circle.blur} ${circle.animation} ${circle.position}`}
        ></div>
      ))}
    </div>
  );
}

export default BackgroundBokeh;
