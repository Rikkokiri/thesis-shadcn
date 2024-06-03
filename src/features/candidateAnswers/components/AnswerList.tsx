import "../styles/AnswerList.css";
import { useState } from "react";
import { useCandidateAnswers } from "../hooks/useCandidateAnswers";
import { AnswerCard } from "./AnswerCard";
import { SectionCard } from "@components/SectionCard.tsx/SectionCard";
import { ToggleButton } from "@components/ToggleButton/ToggleButton";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

export const AnswerList = (props: ReturnType<typeof useCandidateAnswers>) => {
  const { t, questions, candidateAnswers, candidateImgSrc } = props;
  const [isExpanded, setExpanded] = useState(false);
  const questionsToShow = isExpanded ? questions : [questions[0]];

  return (
    <article className="answer-list">
      <SectionCard title={t("candidateSections.answers")}>
        <>
          {questionsToShow.map((question) => (
            <AnswerCard
              key={question.id}
              question={question}
              candidateAnswer={
                candidateAnswers[question.id] ?? { answer: null }
              }
              questionsCount={questions.length}
              candidateImgSrc={candidateImgSrc}
            />
          ))}
        </>
        <div className="separator"></div>
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
