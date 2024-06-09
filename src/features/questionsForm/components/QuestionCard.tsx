import { useTranslation } from "react-i18next";
import { Toggle } from "@/components/ui/toggle";
import { FiEyeOff } from "react-icons/fi";
import { Category, Question } from "@data/types";
import { Answer } from "@stores/answerStore";
import { RadioQuestion } from "./RadioQuestion";
import { YesNoQuestion } from "./YesNoQuestion";
import { AdditionalInfo } from "./AdditionalInfo";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@components/ui/card";

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
    <Card className="flex flex-col items-center justify-center mb-6 py-20 px-6 w-full max-w-[680px]">
      <CardHeader className="gap-6">
        <Badge>{`${questionNumber}/${questionsCount}`}</Badge>
        <p className="text-xs font-bold">{category.name.en}</p>
      </CardHeader>
      <h2 className="text-center font-black text-2xl my-5 mx-0 max-w-[343px]">
        {question.question.en}
      </h2>
      <div className="flex flex-row justify-center items-center w-full mt-1.5 mb-4.5">
        {question.additionalInfo && (
          <AdditionalInfo t={t} info={question.additionalInfo} />
        )}
        <Toggle
          variant="noHoverGhost"
          onPressedChange={() => toggleQuestionHiding(question.id)}
          pressed={!!answer?.hideQuestion}
          untoggledIcon={<FiEyeOff size="size-5" />}
          toggledIcon={<FiEyeOff size="size-5" />}
          size="sm"
        >
          {t("question.hide")}
        </Toggle>
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
    </Card>
  );
};
