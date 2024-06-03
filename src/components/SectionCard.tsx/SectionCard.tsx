import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  children: ReactNode;
}

/** TODO: Card title sizing
 .section-card__title {
  font-size: 20px;
  line-height: 140%;
}

TODO: Header bottom border
.section-card__header {
  padding: 21px 24px 16px;
  border-bottom: var(--section-card-header-border);
}
*/

export const SectionCard = (props: SectionCardProps) => {
  return (
    <section className="bg-card border-sm w-full">
      <div className="pt-[21px] px-6 pb-4">
        <h2 className="m-0 font-black text-xl">{props.title}</h2>
      </div>
      <div className="p-6">{props.children}</div>
    </section>
  );
};
