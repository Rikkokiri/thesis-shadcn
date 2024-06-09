import { TFunction } from "i18next";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CandidateIndicator } from "./CandidateIndicator";
import { SmallSpeechBubble } from "./SmallSpeechBubble";
import { QuestionType } from "@data/types";

interface IRadioAnswerProps {
  t: TFunction;
  candidateAnswer: number | null;
  userAnswer: number | null;
  candidateImgSrc: string;
}

export const RadioAnswer = (props: IRadioAnswerProps) => {
  const { t, candidateAnswer, userAnswer, candidateImgSrc } = props;
  const options = buildOptions(t, candidateAnswer, userAnswer, candidateImgSrc);

  return (
    <RadioGroup className="mt-2 has-[.user-answer-bubble]:mt-[78px]">
      {options.map((option) => {
        return (
          <div
            key={`radio-display-${option.value}`}
            className={`relative flex flex-col items-center justify-items-start w-8
              text-center first-of-type:text-left last-of-type:text-right
              group ${option.indicatorClassName} 
            `}
          >
            <RadioGroupItem
              value={option.value.toString()}
              checked={option.isChecked}
              id={`radio-option-${option.value}`}
              className={`cursor-not-allowed`}
            />
            {candidateAnswer === option.value && (
              <CandidateIndicator
                imgSrc={option.indicatorImgSrc ?? ""}
                className={`size-6 absolute top-1 cursor-not-allowed
                  ${option.indicatorClassName}
                  group-[.user-answer]:clip-circle-half
                  `}
                alt={""} // TODO: Meaningful alt text
              />
            )}
            <Label
              htmlFor="option-one"
              className="mt-3 font-normal text-xs leading-normal"
            >
              {option.label}
            </Label>
            {userAnswer === option.value && (
              <SmallSpeechBubble
                content={t("question.yourAnswer")}
                answer={userAnswer}
                questionType={QuestionType.AGREE_SCALE}
                className="user-answer-bubble absolute justify-self-start text-center bottom-[calc(100%+10px)]"
              />
            )}
          </div>
        );
      })}
    </RadioGroup>
  );
};

const buildOptions = (
  t: TFunction,
  candidateAnswer: number | null,
  userAnswer: number | null,
  candidateImgSrc: string,
) => {
  const options = [
    {
      value: 1,
      label: t("answerScale.strongDisagree"),
      optionClassName: `disagree`,
    },
    {
      value: 2,
      label: t("answerScale.disagree"),
      optionClassName: `disagree`,
    },
    { value: 4, label: t("answerScale.agree"), optionClassName: `agree` },
    {
      value: 5,
      label: t("answerScale.strongAgree"),
      optionClassName: `agree`,
    },
  ];

  return options.map((option) => {
    const isCandidateAnswer = candidateAnswer === option.value;
    const isUserAnswer = userAnswer === option.value;

    return {
      ...option,
      isChecked: isUserAnswer || isCandidateAnswer,
      indicatorClassName: `${isCandidateAnswer ? "candidate-answer" : ""} ${isUserAnswer ? `user-answer ${option.optionClassName}` : ""}`,
      indicatorImgSrc: isCandidateAnswer ? candidateImgSrc : undefined,
    };
  });
};
