import { RadioRange } from "@components/RadioRange/RadioRange";
import { TFunction } from "i18next";

interface RadioAnswerProps {
  t: TFunction;
  value: number | null;
  questionId: number;
  answerQuestion: (questionId: number, answer: number) => void;
}

export const RadioAnswer = (props: RadioAnswerProps) => {
  const { t, value, questionId, answerQuestion } = props;

  return (
    <div className="row_centered answer_radio">
      <RadioRange
        options={[
          { value: 1, label: t("answerScale.strongDisagree") },
          { value: 2, label: t("answerScale.disagree") },
          { value: 4, label: t("answerScale.agree") },
          { value: 5, label: t("answerScale.strongAgree") },
        ]}
        value={value ?? undefined}
        onChange={(value) => answerQuestion(questionId, value)}
      />
    </div>
  );
};
