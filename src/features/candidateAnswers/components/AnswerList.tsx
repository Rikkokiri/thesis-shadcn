import { useState } from "react";
import { useCandidateAnswers } from "../hooks/useCandidateAnswers";
import { AnswerCard } from "./AnswerCard";
import { SectionCard } from "@components/SectionCard.tsx/SectionCard";
import { Toggle } from "@/components/ui/toggle";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";

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
          <Toggle
            pressed={isExpanded}
            onPressedChange={() => setExpanded(!isExpanded)}
            toggledIcon={<FiMinus className="size-6" />}
            untoggledIcon={<FiPlus className="size-6" />}
            variant="outlineGhost"
          >
            {isExpanded ? t("showFewer") : t("showMore")}
          </Toggle>
        </div>
      </SectionCard>
    </article>
  );
};
