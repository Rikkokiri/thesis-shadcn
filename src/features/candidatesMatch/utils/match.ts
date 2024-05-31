import { AnswerValuesRecord } from "../types";

/**
 * Match score for a single question (possible answer 1, 2, 4, and 5)
 * score = ||answer1 - answer2| - 4| / 4
 */
export const answerMatchScore = (answer1: number, answer: number): number => {
  const ANSWER_SCALE = 4;
  return Math.abs(Math.abs(answer1 - answer) - ANSWER_SCALE) / ANSWER_SCALE;
};

/**
 * Calculate match percentage based on questions user has answered
 * @param user
 * @param candidate
 * @returns a percentage (between 0 and 100). 0 if no questions answered.
 *          100 if candidate has answered the same way to all the questions
 *          that user has answered.
 */
export const matchPercentage = (
  user: AnswerValuesRecord,
  candidate: AnswerValuesRecord,
) => {
  const allQuestionIds: number[] = Object.keys(user).map(Number);
  const questionsUserAnswered = allQuestionIds.filter(
    (questionId: number) => user[questionId] !== undefined, // && candidate[questionId] !== null,
  );

  if (questionsUserAnswered.length === 0) return 0;

  const matchScores = questionsUserAnswered.map((questionId) => {
    const userAnswer = user[questionId];
    const candidateAnswer = candidate[questionId];
    if (candidateAnswer == undefined) {
      return 0;
    }
    return answerMatchScore(userAnswer!, candidateAnswer);
  });

  const score =
    matchScores.reduce((acc, score) => acc + score, 0) / matchScores.length;
  return roundToTwoDecimals(score);
};

const roundToTwoDecimals = (num: number) => {
  return Math.trunc(Math.round(num * 100));
};
