import { ReactNode } from "react";
import "./SectionCard.css";

interface SectionCardProps {
  title: string;
  children: ReactNode;
}

export const SectionCard = (props: SectionCardProps) => {
  return (
    <section className="section-card">
      <div className="section-card__header">
        <h2 className="section-card__title">{props.title}</h2>
      </div>
      <div className="section-card__content">{props.children}</div>
    </section>
  );
};
