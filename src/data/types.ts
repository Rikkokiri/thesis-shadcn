type LocalizedString = {
  en: string;
  fi: string | undefined;
};

export enum QuestionType {
  AGREE_SCALE = "agree-scale",
  YES_NO = "yes-no",
}

export type Question = {
  id: number;
  question: LocalizedString;
  categoryId: number;
  questionType: QuestionType;
  position: number;
  additionalInfo?: LocalizedString;
};

export type Category = {
  id: number;
  name: LocalizedString;
  position: number;
};

export type CategoryWithQuestions = Category & {
  questions: Question[];
};
