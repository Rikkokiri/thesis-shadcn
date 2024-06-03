import "../styles/MatchButton.css";
import { useState } from "react";
import { CandidateModal } from "./CandidateModal";
import { MatchWithDetails } from "../types";

interface IMatchButtonProps {
  candidate: MatchWithDetails;
}

export const MatchButton = (props: IMatchButtonProps) => {
  const { name, rank, percentage, logoSrc } = props.candidate;
  const ariaLabel = `top ${rank} - ${name} - ${percentage}% match`;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        aria-label={ariaLabel}
        className="h-full border-none p-0 flex flex-col items-center gap-1 w-[36px]"
        onClick={() => {
          console.log("Clicked the button");
          setIsModalOpen(true);
        }}
      >
        <div className="flex flex-col justify-start items-center">
          <img
            src={logoSrc}
            aria-hidden
            className="rounded-sm shrink-0 w-8 h-[43px] p-[3px]"
          />
          <p className="match-result__score font-bold text-center text-primary-foreground">{`${percentage}%`}</p>
        </div>
      </button>
      <CandidateModal
        isOpen={isModalOpen}
        closeModal={() => {
          setIsModalOpen(false);
        }}
        {...props}
      />
    </>
  );
};
