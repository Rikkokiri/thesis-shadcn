import { LocalizedString } from "./types";

/* TODO: Move to types file */
export type CandidateAnswer = {
  /* candidateId: string; */
  /* questionId: number; */
  answer?: number;
  comment?: LocalizedString;
};

export type SingleCandidateAnswers = {
  [questionId: number]: CandidateAnswer;
};

export type CandidatesResponses = {
  [candidateId: string]: SingleCandidateAnswers;
};

const ANT_DESIGN_ANSWERS: SingleCandidateAnswers = {
  1: {
    answer: 1,
    comment: {
      en: "Test comment",
      fi: "Testikommentti",
    },
  },
  2: {
    answer: 1,
  },
  3: {
    answer: 1,
  },
};

const CHAKRA_ANSWERS: SingleCandidateAnswers = {
  1: {
    answer: 1,
  },
  2: {
    answer: 1,
  },
  3: {
    answer: 1,
  },
};

const MANTINE_ANSWERS: SingleCandidateAnswers = {
  1: {
    answer: undefined,
    comment: {
      en: "I did not want to answer but will still comment",
      fi: "En halunnut vastata mutta kommentoin silti",
    },
  },
  2: {
    answer: 1,
  },
  3: {
    answer: 1,
  },
  4: {
    answer: 2,
    comment: {
      en: "Test comment",
      fi: "",
    },
  },
};

const SHADCN_ANSWERS: SingleCandidateAnswers = {
  1: {
    answer: 1,
  },
  2: {
    answer: 1,
  },
  3: {
    answer: 1,
  },
};

export const CANDIDATE_ANSWERS: CandidatesResponses = {
  chakra: CHAKRA_ANSWERS,
  ant: ANT_DESIGN_ANSWERS,
  mantine: MANTINE_ANSWERS,
  shadcnui: SHADCN_ANSWERS,
};
