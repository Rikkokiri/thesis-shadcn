import { getCandidateById } from "@data/api";
import { useParams } from "react-router-dom";
import { CandidateInfo, CandidateHeader } from "src/features/candidateInfo";
import { CandidateAnswers } from "src/features/candidateAnswers";

export const CandidatePage = () => {
  const { id } = useParams<{ id: string }>();
  const candidate = id ? getCandidateById(id) : undefined;

  if (!candidate) {
    return <div>Candidate not found</div>;
  }

  return (
    <>
      <CandidateHeader candidateId={candidate.id} />
      <div className="page-sections__column mb-24">
        <CandidateInfo candidateId={candidate.id} />
        <CandidateAnswers candidate={candidate} />
      </div>
    </>
  );
};
