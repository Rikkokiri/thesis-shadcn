import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type Answer = {
  questionId: string;
  answer: number | null;
  hideQuestion: boolean | undefined;
};

interface AnswerState {
  answers: Answer[];
}

export const useAnswerStore = create<AnswerState>()(
  persist(
    (set) => ({
      answers: [],
      removeAllAnswers: () => set({ answers: [] }),
      setAnswer: (answer: Answer) =>
        set((state) => ({
          answers: state.answers.map((a) =>
            a.questionId === answer.questionId ? answer : a
          ),
        })),
    }),
    {
      name: "vaalikone-answers", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
