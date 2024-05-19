import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type Answer = {
  questionId: number;
  answer: number | null; // Null means that question is set to hidden
  hideQuestion?: boolean;
};

export type AnswerRecord = Record<number, Answer>;

interface AnswerState {
  answers: Record<number, Answer>;
  removeAllAnswers: () => void;
  setAnswer: (answer: Answer) => void;
  toggleQuestionHiding: (questionId: number) => void;
}

export const useAnswerStore = create<AnswerState>()(
  persist(
    (set) => ({
      answers: [],
      removeAllAnswers: () => set({ answers: [] }),
      setAnswer: (answer: Answer) =>
        set((state) => ({
          answers: { ...state.answers, [answer.questionId]: answer },
        })),
      toggleQuestionHiding: (questionId: number) =>
        set((state) => {
          const answer = state.answers[questionId] ?? {
            questionId,
            answer: null,
          };
          const hideQuestion = !answer?.hideQuestion;
          return {
            answers: {
              ...state.answers,
              [questionId]: {
                ...answer,
                answer: hideQuestion ? null : answer.answer,
                hideQuestion,
              },
            },
          };
        }),
    }),
    {
      name: "vaalikone-answers", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

/**
 * Have some of the questions been answered?
 */
export const someAnswered = (): boolean => {
  const answers = useAnswerStore((state) => state.answers);
  return Object.values(answers).some((answer) => answer.answer !== null);
};
