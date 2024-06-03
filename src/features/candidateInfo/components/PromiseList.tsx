interface IPromiseListProps {
  items: string[];
}

export const PromiseList = (props: IPromiseListProps) => {
  const { items } = props;

  return (
    <ol className="promise-list list-none m-0 p-0">
      {items.map((item: string, index: number) => (
        <li key={index} className="promise-list__li flex flex-row gap-6 pb-4">
          <div className="promise-list__number bg-secondary text-secondary-foreground size-6 text-xs flex justify-center items-center shrink-0 rounded-full font-black">
            {index + 1}
          </div>
          <div className="promise-list__li-content pb-[5px]">{item}</div>
        </li>
      ))}
    </ol>
  );
};
