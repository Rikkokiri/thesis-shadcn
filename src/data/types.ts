export type LocalizedString = {
  en: string;
  fi: string | undefined;
};

export enum QuestionType {
  AGREE_SCALE = "agree-scale",
  YES_NO = "yes-no",
}

export enum YesNoAnswer {
  YES = 5,
  NO = 1,
}

export enum AgreeScaleAnswer {
  STRONGLY_DISAGREE = 1,
  DISAGREE = 2,
  AGREE = 4,
  STRONGLY_AGREE = 5,
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
