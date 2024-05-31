import { expect, test, describe } from "vitest";
import {
  candidatesAnswersToAnswerRecord,
  userAnswersToAnswerRecord,
} from "./transform-answers";
import { AnswerRecord } from "@stores/answerStore";
import { SingleCandidateAnswers } from "@data/candidateAnswers";

describe("candidatesAnswersToAnswerRecord", () => {
  const answers: SingleCandidateAnswers = {
    1: {
      answer: 1,
      comment: {
        en: "Test comment",
        fi: "Testikommentti",
      },
    },
    2: {
      answer: undefined,
    },
    3: {
      answer: 1,
    },
    4: {
      answer: 2,
    },
  };

  test("transforms empty record to an empty record", () => {
    expect(candidatesAnswersToAnswerRecord({})).toStrictEqual({});
  });

  test("should transform candidate answers to a simplified record of answers", () => {
    expect(candidatesAnswersToAnswerRecord(answers)).toStrictEqual({
      1: 1,
      2: undefined,
      3: 1,
      4: 2,
    });
  });
});

describe("candidatesAnswersToAnswerRecord", () => {
  const answers: AnswerRecord = {
    1: {
      questionId: 1,
      answer: null,
    },
    2: {
      questionId: 2,
      answer: 5,
    },
    3: {
      questionId: 3,
      answer: null,
    },
    7: {
      questionId: 7,
      answer: 2,
    },
    18: {
      questionId: 18,
      answer: 1,
    },
  };

  test("transforms empty record to an empty record", () => {
    expect(userAnswersToAnswerRecord({})).toStrictEqual({});
  });

  test("should transform candidate answers to a simplified record of answers", () => {
    expect(userAnswersToAnswerRecord(answers)).toStrictEqual({
      1: undefined,
      2: 5,
      3: undefined,
      7: 2,
      18: 1,
    });
  });
});
