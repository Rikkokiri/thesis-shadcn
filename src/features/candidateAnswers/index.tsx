import { Candidate } from "@data/candidates";
import { AnswerList } from "./components/AnswerList";
import { useCandidateAnswers } from "./hooks/useCandidateAnswers";

interface ICandidateAnswersProps {
  candidate: Candidate;
}

export const CandidateAnswers = (props: ICandidateAnswersProps) => {
  const candidateAnswersLogic = useCandidateAnswers(props.candidate);
  return <AnswerList {...candidateAnswersLogic} />;
};
