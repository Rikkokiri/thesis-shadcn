import { ReactNode } from "react";
import "./InfoGrid.css";

interface GridProps {
  children: ReactNode;
  className?: string;
}

export const InfoGrid = ({ children }: { children: ReactNode }) => {
  return <ul className="info-grid">{children}</ul>;
};

export const InfoGridRow = ({ children, className }: GridProps) => {
  return <li className={`info-grid__row ${className ?? ""}`}>{children}</li>;
};

export const InfoGridItem = ({ children, className }: GridProps) => {
  return <div className={`info-grid__item ${className ?? ""}`}>{children}</div>;
};
