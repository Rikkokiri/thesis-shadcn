import { getCandidateById } from "@data/api";
import { useParams } from "react-router-dom";
import { CandidateInfo, CandidateHeader } from "src/features/candidateInfo";
import { CandidateAnswers } from "src/features/candidateAnswers";
import { useEffect } from "react";

export const CandidatePage = () => {
  const { id } = useParams<{ id: string }>();
  const candidate = id ? getCandidateById(id) : undefined;

  useEffect(() => window.scrollTo(0, 0), []);

  if (!candidate) {
    return <div>Candidate not found</div>;
  }

  return (
    <>
      <CandidateHeader candidateId={candidate.id} />
      <div className="flex flex-col gap-6 w-full pb-6 pt-12 max-w-[680px]">
        <CandidateInfo candidateId={candidate.id} />
        <CandidateAnswers candidate={candidate} />
      </div>
    </>
  );
};
