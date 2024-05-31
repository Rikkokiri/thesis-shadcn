import { Answer, AnswerRecord } from "@stores/answerStore";
import { SingleCandidateAnswers } from "@data/candidateAnswers";
import { AnswerValuesRecord } from "../types";

/**
 * Transform user answers to a simplified record of answers
 */
export const userAnswersToAnswerRecord = (
  answers: AnswerRecord,
): AnswerValuesRecord => {
  const result: AnswerValuesRecord = {};
  Object.values(answers).forEach((answer: Answer) => {
    result[answer.questionId] = answer.answer ?? undefined;
  });
  return result;
};

/**
 * Transform candidate answers to a simplified record of answers
 */
export const candidatesAnswersToAnswerRecord = (
  answers: SingleCandidateAnswers,
): AnswerValuesRecord => {
  const result: AnswerValuesRecord = {};
  Object.keys(answers).forEach((id) => {
    const questionId = Number(id);
    const answer = answers[questionId].answer ?? undefined;
    result[questionId] = answer;
  });
  return result;
};
