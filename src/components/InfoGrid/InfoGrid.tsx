import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  className?: string;
}

export const InfoGrid = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="info-grid list-none m-0 p-0 grid grid-cols-1 gap-y-4 w-full">
      {children}
    </ul>
  );
};

/* TODO: Define breakpoint variables
@media (width <= 620px) {
  .info-grid__row {
    grid-template-columns: 1fr;
  }
}  */
export const InfoGridRow = ({ children, className }: GridProps) => {
  return (
    <li
      className={`info-grid__row ${className ?? ""} w-full grid grid-cols-2 gap-x-4`}
    >
      {children}
    </li>
  );
};

/**
 * TODO:
 * .info-grid__item { padding-bottom: 5px; }
 */
export const InfoGridItem = ({ children, className }: GridProps) => {
  return (
    <div className={`info-grid__item pb-1 ${className ?? ""}`}>{children}</div>
  );
};
