interface IconListProps<T> {
  listItems: T[];
}

function IconList<T>({ listItems }: IconListProps<T>) {
  return (
    <div className="flex flex-col gap-6">
      {listItems.map((item: any) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="flex md:flex-col lg:flex-row gap-2 md:gap-1 lg:gap-4"
          >
            <Icon className="text-seafoam-500 text-3xl shrink-0" />

            <div className="flex-auto flex flex-col gap-1">
              <p className="text-xl font-semibold">{item.title}</p>
              <p className="text-base leading-none text-fuschia-50 flex justify-between">
                <span>{item.location}</span>
                <span>{item.dateInfo}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default IconList;
