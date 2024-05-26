import { QuestionType } from "@data/types";
import "../styles/DisplayRadioRange.css";
import { SmallSpeechBubble } from "./SmallSpeechBubble";
import { useTranslation } from "react-i18next";
import { CandidateIndicator } from "./CandidateIndicator";

interface IDisplayRadioOption {
  value: number;
  label: string;
  isChecked?: boolean;
  optionClassName?: string;
  indicatorClassName?: string;
  indicatorImgSrc?: string;
}

interface IDisplayRadioRangeProps {
  options: IDisplayRadioOption[];
  userAnswer: number | null;
  candidateAnswer: number | null;
  isReadonly?: boolean;
}

export const DisplayRadioRange = (props: IDisplayRadioRangeProps) => {
  const { t } = useTranslation();
  const { userAnswer, candidateAnswer } = props;

  return (
    <div className="radio-display">
      {props.options.map((option, index) => {
        const optionClass = option.optionClassName ?? "";

        return (
          <div
            className={`radio-display__option ${optionClass}`}
            key={`radio-option-${option.value}`}
          >
            <input
              type="radio"
              name="radio-option"
              id={`radio-option-${option.value}`}
              value={option.value}
              checked={option.isChecked}
              readOnly={true}
              className={props.isReadonly ? "readonly" : ""}
            />
            {option.isChecked && (
              <div
                className={`option__indicator ${option.indicatorClassName ?? ""}`}
              >
                {candidateAnswer === option.value && (
                  <CandidateIndicator
                    imgSrc={option.indicatorImgSrc ?? ""}
                    className="candidate-indicator"
                    alt={""} // TODO: Meaningful alt text
                  />
                )}
              </div>
            )}
            <label key={index}>{option.label}</label>
            {userAnswer === option.value && (
              <SmallSpeechBubble
                content={t("question.yourAnswer")}
                answer={userAnswer}
                questionType={QuestionType.AGREE_SCALE}
                className="user-answer-bubble"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
