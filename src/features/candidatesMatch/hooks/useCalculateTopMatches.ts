import { CandidatesResponses } from "@data/candidateAnswers";
import { AnswerRecord } from "@stores/answerStore";
import { useMemo } from "react";
import {
  candidatesAnswersToAnswerRecord,
  userAnswersToAnswerRecord,
} from "../utils/transform-answers";
import { AnswerValuesRecord } from "../types";
import { matchPercentage } from "../utils/match";

type CandidateWithAnswers = {
  candidateId: string;
  answers: AnswerValuesRecord;
};

type CandidateMatch = {
  candidateId: string;
  score: number;
};

export function useCalculateTopMatches(
  userAnswers: AnswerRecord,
  candidateAnswers: CandidatesResponses,
) {
  const userAnswerRecord = useMemo(
    () => userAnswersToAnswerRecord(userAnswers),
    [userAnswers],
  );

  const candidates: CandidateWithAnswers[] = useMemo(() => {
    return Object.keys(candidateAnswers).map((candidateId) => {
      const candidate = candidateAnswers[candidateId];
      return {
        answers: candidatesAnswersToAnswerRecord(candidate),
        candidateId,
      };
    });
  }, [candidateAnswers]);

  const candidatesScores: CandidateMatch[] = useMemo(() => {
    return candidates.map((candidate) => {
      const score = matchPercentage(userAnswerRecord, candidate.answers);
      return {
        score,
        candidateId: candidate.candidateId,
      };
    });
  }, [userAnswerRecord, candidates]);

  const topFourMatches = useMemo(() => {
    return candidatesScores.sort((a, b) => b.score - a.score).slice(0, 4);
  }, [candidatesScores]);

  return {
    topFourMatches,
  };
}
