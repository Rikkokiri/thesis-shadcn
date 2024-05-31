import { Category, Question, QuestionType } from "./types";

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: {
      en: "Naming conventions",
      fi: "Nimeämiskäytännöt",
    },
    position: 0,
  },
  {
    id: 2,
    name: {
      en: "Technology choices",
      fi: "Teknologiavalinnat",
    },
    position: 1,
  },
  {
    id: 3,
    name: {
      en: "Component props",
      fi: "Komponentin propsit",
    },
    position: 2,
  },
];

export const QUESTIONS: Question[] = [
  {
    id: 1,
    question: {
      en: "Is it important to give a component's default style variant a descriptive name?",
      fi: "Onko tärkeää antaa komponentin oletustyylin variantille kuvaava nimi?",
    },
    categoryId: 1,
    position: 0,
    questionType: QuestionType.YES_NO,
  },
  {
    id: 2,
    question: {
      en: "Should you use a CSS-in-JS library for styling components?",
      fi: "Pitäisikö komponenttien tyylittelyyn käyttää CSS-in-JS -kirjastoa?",
    },
    categoryId: 2,
    position: 0,
    questionType: QuestionType.YES_NO,
    additionalInfo: {
      en: "Som sample information that will be displayed to give context to this statement. It will be shown as a modal.",
      fi: "Som sample information that will be displayed to give context to this statement. It will be shown as a modal.",
    },
  },
  {
    id: 3,
    question: {
      en: "Should optional props have default values?",
      fi: "Pitäisikö valinnaisilla propseilla olla oletusarvot?",
    },
    categoryId: 3,
    position: 0,
    questionType: QuestionType.YES_NO,
  },
  {
    id: 4,
    question: {
      en: "Providing TypeScript types for component props is important",
      fi: "On tärkeää tarjota TypeScript-tyypit komponentin propseille",
    },
    categoryId: 3,
    position: 1,
    questionType: QuestionType.AGREE_SCALE,
  },
];
