import { expect, test, describe } from "vitest";
import { answerMatchScore, matchPercentage } from "./match";
import { AnswerValuesRecord } from "../types";

const ANSWER_VALUES = [1, 2, 4, 5];

describe("answerMatchScore", () => {
  test.each([
    [1, 5, 0],
    [1, 5, 0],
    [1, 1, 1],
    [2, 2, 1],
    [4, 4, 1],
    [5, 5, 1],
    [1, 4, 0.25],
    [2, 5, 0.25],
    [1, 2, 0.75],
    [4, 5, 0.75],
  ])("scores %d and %d are %d match", (answer1, answer2, expected) => {
    expect(answerMatchScore(answer1, answer2)).toBe(expected);
  });
});

describe("matchPercentage", () => {
  test("user and candidate with same answers have 100% match", () => {
    const user: AnswerValuesRecord = {
      1: 1,
      2: 2,
      3: 4,
      4: 5,
    };
    const candidate = user;
    expect(matchPercentage(user, candidate)).toBe(100);
  });

  test("candidate not answering a question that candidate has answered affects match score", () => {
    const shared: AnswerValuesRecord = {
      1: 5, // switching this to 1 => 0.67
      2: 2,
      3: 4,
      6: 1,
      7: 4,
    };

    const user = {
      ...shared,
      5: 5,
    };

    const candidate = {
      ...shared,
      5: undefined, // If candidate did not answer => 0.8
    };
    const expectedMatch = 83;

    const user2 = {
      ...user,
      5: 1,
    };

    const user3 = {
      ...shared,
      5: undefined,
    };

    const user4 = {
      ...shared,
      1: 1,
      5: 5,
    };
    const user4Match = 67;

    expect(matchPercentage(user, candidate)).toBe(expectedMatch);
    expect(matchPercentage(user2, candidate)).toBe(expectedMatch);
    expect(matchPercentage(user3, candidate)).toBe(100);
    expect(matchPercentage(user4, candidate)).toBe(user4Match);
  });

  test("almost identical answers", () => {
    const user: AnswerValuesRecord = {
      1: 5,
      2: 2,
      3: 5,
    };

    const candidate = {
      ...user,
      3: 4,
    };

    expect(matchPercentage(user, candidate)).toBe(92);
  });

  describe("case 2 of candidate not answering a question that candidate has answered", () => {
    const shared: AnswerValuesRecord = {
      26: 2,
      27: 2,
      28: 4,
    };

    const userCases: AnswerValuesRecord[] = ANSWER_VALUES.map((answer) => {
      return {
        ...shared,
        25: answer, // Candidate did not answer and user answered => 0.75 (regardless of user answer)
      };
    });

    const candidate = shared;

    test.each(userCases)(
      "user answer %o, candidate answer undefined",
      (userAnswers) => {
        expect(matchPercentage(userAnswers, candidate)).toBe(75);
      },
    );
  });

  // describe("user not answering questions does not affect match score", () => {});
});
