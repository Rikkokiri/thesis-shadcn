import { getAllCandidatesAnswers, getCandidateById } from "@data/api";
import { useCalculateTopMatches } from "./useCalculateTopMatches";
import { someAnswered, useAnswerStore } from "@stores/answerStore";
import { useTranslation } from "react-i18next";
import { MatchWithDetails } from "../types";
import { useMemo } from "react";

const TOP_MATCHES_COUNT = 4;

export function useCandidatesMatch() {
  const { t } = useTranslation();
  const candidatesAnswers = getAllCandidatesAnswers();
  const userAnswers = useAnswerStore((state) => state.answers);
  const displayMatches = someAnswered();

  const { topFourMatches } = useCalculateTopMatches(
    userAnswers,
    candidatesAnswers,
  );

  const topFourCandidates: MatchWithDetails[] = useMemo(() => {
    return topFourMatches.map((match, index) => {
      const details = getCandidateById(match.candidateId);
      return {
        id: match.candidateId,
        percentage: match.score,
        rank: index + 1,
        name: details!.name,
        logoSrc: details!.logoSrc,
        brandColor: details!.brandColor,
        number: details!.number,
      };
    });
  }, [topFourMatches]);

  return {
    t,
    displayMatches,
    topFourCandidates,
    topCount: TOP_MATCHES_COUNT,
  };
}
