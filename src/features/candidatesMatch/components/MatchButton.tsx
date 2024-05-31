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
        className="match-result"
        onClick={() => {
          console.log("Clicked the button");
          setIsModalOpen(true);
        }}
      >
        <div className="match-result__img-wrapper">
          <img src={logoSrc} aria-hidden className="match-result__img" />
          <p className="match-result__score">{`${percentage}%`}</p>
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
