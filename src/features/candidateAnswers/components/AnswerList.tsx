import { useState } from "react";
import { useCandidateAnswers } from "../hooks/useCandidateAnswers";
import { AnswerCard } from "./AnswerCard";
import { SectionCard } from "@components/SectionCard.tsx/SectionCard";
import { ToggleButton } from "@components/ToggleButton/ToggleButton";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

/*
TODO: Make sure button matches following styles:
.answer-list__expand-button.toggled {
  background-color: transparent;
}

.answer-list__expand-button:hover {
  background-color: var(--button-outline-bg-hover);
}
*/

export const AnswerList = (props: ReturnType<typeof useCandidateAnswers>) => {
  const { t, questions, candidateAnswers, candidateImgSrc } = props;
  const [isExpanded, setExpanded] = useState(false);
  const questionsToShow = isExpanded ? questions : [questions[0]];

  return (
    <article className="answer-list">
      <SectionCard title={t("candidateSections.answers")} contentClasses="p-0">
        <div>
          {questionsToShow.map((question) => (
            <div
              className="border-b border-gray-10 dark:border-black last:border-none"
              key={question.id}
            >
              <AnswerCard
                question={question}
                candidateAnswer={
                  candidateAnswers[question.id] ?? { answer: null }
                }
                questionsCount={questions.length}
                candidateImgSrc={candidateImgSrc}
              />
            </div>
          ))}
        </div>
        <div className="bg-gray-30 dark:bg-gray-60 my-0 mx-6 h-px"></div>
        <div className="answer-list__expand p-6 flex flex-row justify-center items-center w-full">
          <ToggleButton
            isToggled={isExpanded}
            onClick={() => setExpanded(!isExpanded)}
            toggledIcon={<FiMinus />}
            untoggledIcon={<FiPlus />}
            iconSize={24}
            className="answer-list__expand-button"
          >
            {isExpanded ? t("showFewer") : t("showMore")}
          </ToggleButton>
        </div>
      </SectionCard>
    </article>
  );
};
