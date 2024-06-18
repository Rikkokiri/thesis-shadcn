interface IPromiseListProps {
  items: string[];
}

export const PromiseList = (props: IPromiseListProps) => {
  const { items } = props;

  return (
    <ol className="promise-list list-none m-0 p-0">
      {items.map((item: string, index: number) => (
        <li key={index} className="flex flex-row gap-6 pb-4">
          <div className="bg-primary text-primary-foreground size-6 text-xs flex justify-center items-center shrink-0 rounded-50 font-black">
            {index + 1}
          </div>
          <div className="pb-[5px] font-normal">{item}</div>
        </li>
      ))}
    </ol>
  );
};
