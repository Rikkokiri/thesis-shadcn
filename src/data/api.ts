import { CATEGORIES, QUESTIONS } from "./questionsData";
import { CategoryWithQuestions } from "./types";

const sortByPosition = (a: { position: number }, b: { position: number }) =>
  a.position - b.position;

export const getQuestions = () => {
  return QUESTIONS;
};

export const getOrderedQuestionsByCategoryId = (categoryId: number) => {
  const questions = QUESTIONS.filter((q) => q.categoryId === categoryId);
  return questions.sort(sortByPosition);
};

export const getQuestionById = (id: number) => {
  return QUESTIONS.find((q) => q.id === id);
};

export const getOrderedCategories = () => {
  return CATEGORIES.sort(sortByPosition);
};

export const getCategoryById = (id: number) => {
  return CATEGORIES.find((c) => c.id === id);
};

export const getCategoriesWithQuestions = (): CategoryWithQuestions[] => {
  return CATEGORIES.map((category) => ({
    ...category,
    questions: getOrderedQuestionsByCategoryId(category.id),
  }));
};

export const getQuestionsTotalCount = () => {
  return QUESTIONS.length;
};
