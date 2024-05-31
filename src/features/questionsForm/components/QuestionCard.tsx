import "../styles/QuestionCard.css";
import { useTranslation } from "react-i18next";
import { ToggleButton } from "../../../components/ToggleButton/ToggleButton";
import { FiEyeOff } from "react-icons/fi";
import { Tag } from "../../../components/Tag/Tag";
import { Category, Question } from "@data/types";
import { Answer } from "@stores/answerStore";
import { RadioQuestion } from "./RadioQuestion";
import { YesNoQuestion } from "./YesNoQuestion";
import { AdditionalInfo } from "./AdditionalInfo";

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

  return (
    <section className="card">
      <div className="row-centered card__header">
        <Tag>{`${questionNumber}/${questionsCount}`}</Tag>
        <p className="category">{category.name.en}</p>
      </div>
      <h2 className="question">{question.question.en}</h2>
      <div className="row-centered info-buttons">
        {question.additionalInfo && (
          <AdditionalInfo t={t} info={question.additionalInfo} />
        )}
        <ToggleButton
          onClick={() => toggleQuestionHiding(question.id)}
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
        <YesNoQuestion
          answerQuestion={answerQuestion}
          questionId={questionId}
          t={t}
          answer={answer?.answer ?? null}
        />
      ) : (
        <RadioQuestion
          questionId={questionId}
          answerQuestion={answerQuestion}
          t={t}
          value={answer?.answer ?? null}
        />
      )}
    </section>
  );
};
