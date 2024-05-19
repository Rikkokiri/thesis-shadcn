import { useEffect, useState } from "react";
import "../styles/QuestionCard.css";
import { useTranslation } from "react-i18next";
import { ToggleButton } from "../../../components/ToggleButton/ToggleButton";
import { RiThumbUpLine } from "react-icons/ri";
import { RiThumbUpFill } from "react-icons/ri";
import { RiThumbDownLine } from "react-icons/ri";
import { RiThumbDownFill } from "react-icons/ri";
import { FiInfo } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Tag } from "../../../components/Tag/Tag";
import { Category, Question } from "@data/types";
import { Answer } from "@stores/answerStore";
import { RadioAnswer } from "./RadioAnswer";
import { YesNoAnswer } from "./YesNoAnswer";

interface ICardProps {
  category: Category;
  question: Question;
  answer: Answer | undefined;
  questionsCount: number;
  answerQuestion: (questionId: number, answer: number) => void;
  toggleQuestionHiding: (questionId: number) => void;
}

export const QuestionCard = (props: ICardProps) => {
  const {
    answer,
    question,
    category,
    questionsCount,
    answerQuestion,
    toggleQuestionHiding,
  } = props;
  const { t } = useTranslation();
  const questionId = question.id;
  const questionNumber = category.position + question.position + 1;

  useEffect(() => {
    console.log("Answer changed to: ", answer);
  }, [answer]);

  return (
    <section className="card">
      <div className="row_centered card_header">
        <Tag>{`${questionNumber}/${questionsCount}`}</Tag>
        <p className="category">{category.name.en}</p>
      </div>
      <h2 className="question">{question.question.en}</h2>
      <div className="row_centered info-buttons">
        {question.additionalInfo && (
          <ToggleButton
            isToggled={false}
            toggle={() => {}}
            untoggledIcon={<FiInfo />}
            variant="ghost"
            size="small"
          >
            {t("question.whatAbout")}
          </ToggleButton>
        )}
        <ToggleButton
          toggle={() => toggleQuestionHiding(question.id)}
          isToggled={!!answer?.hideQuestion}
          untoggledIcon={<FiEyeOff />}
          toggledIcon={<FiEyeOff />}
          variant="ghost"
          size="small"
        >
          {t("question.hide")}
        </ToggleButton>
      </div>
      {question.questionType === "yes-no" ? (
        <YesNoAnswer
          answerQuestion={answerQuestion}
          questionId={questionId}
          t={t}
          answer={answer?.answer ?? null}
        />
      ) : (
        <RadioAnswer
          questionId={questionId}
          answerQuestion={answerQuestion}
          t={t}
          value={answer?.answer ?? null}
        />
      )}
    </section>
  );
};
