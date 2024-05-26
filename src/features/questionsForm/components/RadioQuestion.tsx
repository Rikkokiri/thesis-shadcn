import { RadioRange } from "@components/RadioRange/RadioRange";
import { TFunction } from "i18next";

interface RadioQuestionProps {
  t: TFunction;
  value: number | null;
  questionId: number;
  answerQuestion: (questionId: number, answer: number) => void;
}

export const RadioQuestion = (props: RadioQuestionProps) => {
  const { t, value, questionId, answerQuestion } = props;

  return (
    <div className="row-centered answer__radio">
      <RadioRange
        options={[
          {
            value: 1,
            label: t("answerScale.strongDisagree"),
            optionClassName: "disagree",
          },
          {
            value: 2,
            label: t("answerScale.disagree"),
            optionClassName: "disagree",
          },
          { value: 4, label: t("answerScale.agree"), optionClassName: "agree" },
          {
            value: 5,
            label: t("answerScale.strongAgree"),
            optionClassName: "agree",
          },
        ]}
        value={value ?? undefined}
        onChange={(value) => answerQuestion(questionId, value)}
      />
    </div>
  );
};
