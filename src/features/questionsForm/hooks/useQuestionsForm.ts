import { AnswerRecord, useAnswerStore } from "@stores/answerStore";
import { getCategoriesWithQuestions, getQuestionsTotalCount } from "@data/api";
import { CategoryWithQuestions } from "@data/types";

export interface IQuestionsForm {
  questionsTotalCount: number;
  answerQuestion: (questionId: number, answer: number) => void;
  categoriesAndQuestions: CategoryWithQuestions[];
  toggleQuestionHiding: (questionId: number) => void;
  answers: AnswerRecord;
}

export const useQuestionsForm = (): IQuestionsForm => {
  const { setAnswer, toggleQuestionHiding } = useAnswerStore();

  const answerQuestion = (questionId: number, answer: number) => {
    setAnswer({ questionId, answer });
  };

  const categoriesAndQuestions = getCategoriesWithQuestions();
  const questionsTotalCount = getQuestionsTotalCount();

  const answersInStore = useAnswerStore((state) => state.answers);

  return {
    questionsTotalCount: questionsTotalCount,
    answerQuestion,
    categoriesAndQuestions,
    toggleQuestionHiding: toggleQuestionHiding,
    answers: answersInStore,
  };
};
