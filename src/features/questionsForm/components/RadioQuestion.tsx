import { TFunction } from "i18next";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface IRadioQuestionProps {
  t: TFunction;
  value: number | null;
  questionId: number;
  answerQuestion: (questionId: number, answer: number) => void;
}

export const RadioQuestion = (props: IRadioQuestionProps) => {
  const { t, value, questionId, answerQuestion } = props;
  const options = [
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
  ];

  const onValueChange = (value: string) => {
    answerQuestion(questionId, parseInt(value, 10));
  };

  return (
    <RadioGroup
      onValueChange={onValueChange}
      value={value ? value?.toString() : ""}
      className="mt-2"
    >
      {options.map((option) => {
        return (
          <div
            key={`radio-option-${option.value}`}
            className={`relative flex flex-col items-center justify-items-start w-8
              text-center first-of-type:text-left last-of-type:text-right
              `}
          >
            <RadioGroupItem
              value={option.value.toString()}
              id={`radio-option-${option.value}`}
              className={`group ${option.optionClassName}`}
            />
            <Label
              htmlFor="option-one"
              className="mt-3 font-normal text-xs leading-normal"
            >
              {option.label}
            </Label>
          </div>
        );
      })}
    </RadioGroup>
  );
};
