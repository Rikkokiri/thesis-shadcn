import { getAllQuestionsInOrder, getCandidatesAnswersById } from "@data/api";
import { Candidate } from "@data/candidates";
import { useTranslation } from "react-i18next";

export const useCandidateAnswers = (candidate: Candidate) => {
  const questions = getAllQuestionsInOrder();
  const candidateAnswers = getCandidatesAnswersById(candidate.id);
  const { t } = useTranslation();

  return {
    t,
    questions,
    candidateName: candidate.name,
    candidateImgSrc: candidate.logoSrc,
    candidateAnswers,
  };
};
