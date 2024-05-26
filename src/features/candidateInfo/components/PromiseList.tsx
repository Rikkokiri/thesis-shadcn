import "../styles/PromiseList.css";

interface IPromiseListProps {
  items: string[];
}

export const PromiseList = (props: IPromiseListProps) => {
  const { items } = props;

  return (
    <ol className="promise-list">
      {items.map((item: string, index: number) => (
        <li key={index} className="promise-list__li">
          <div className="promise-list__number">{index + 1}</div>
          <div className="promise-list__li-content">{item}</div>
        </li>
      ))}
    </ol>
  );
};
