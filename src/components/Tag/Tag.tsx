import "./Tag.css";

interface ITagProps {
  children?: React.ReactNode;
}

export const Tag = (props: ITagProps) => {
  return <div className="tag">{props.children}</div>;
};
