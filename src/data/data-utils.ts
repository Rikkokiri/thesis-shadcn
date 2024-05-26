import { AgreeScaleAnswer, QuestionType, YesNoAnswer } from "./types";

export const doesAgree = (
  answer: number,
  questionType: QuestionType,
): boolean => {
  if (questionType === QuestionType.YES_NO) {
    return answer === YesNoAnswer.YES;
  }
  return answer >= AgreeScaleAnswer.AGREE;
};
