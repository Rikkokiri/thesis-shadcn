import { ReactNode } from "react";

interface SectionCardProps {
  title: string;
  children: ReactNode;
  contentClasses?: string;
}

export const SectionCard = ({
  title,
  children,
  contentClasses = "p-6",
}: SectionCardProps) => {
  return (
    <section className="bg-card rounded w-full">
      <div className="pt-[21px] px-6 pb-4 border-b-2 border-gray-20 dark:border-gray-60">
        <h2 className="m-0 font-black text-xl leading-140">{title}</h2>
      </div>
      <div className={contentClasses}>{children}</div>
    </section>
  );
};
