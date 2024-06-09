import { TFunction } from "i18next";
import { RiThumbUpLine } from "react-icons/ri";
import { RiThumbDownLine } from "react-icons/ri";
import { YesNoAnswer, QuestionType } from "@data/types";
import { SmallSpeechBubble } from "./SmallSpeechBubble";
import { CandidateIndicator } from "./CandidateIndicator";
import { Toggle } from "@components/ui/toggle";

interface IYesNoAnswerProps {
  t: TFunction;
  questionId: number;
  candidateAnswer: number | null;
  userAnswer: number | null;
  candidateImgSrc: string;
}

type AnswerOption = {
  value: YesNoAnswer;
  label: string;
};

export const YesOrNoAnswer = (props: IYesNoAnswerProps) => {
  const { t, userAnswer, candidateAnswer, candidateImgSrc } = props;
  const options: AnswerOption[] = [
    {
      value: YesNoAnswer.YES,
      label: t("question.yes"),
    },
    {
      value: YesNoAnswer.NO,
      label: t("question.no"),
    },
  ];

  return (
    <div
      className={`
        flex flex-row justify-center items-end w-full gap-6 relative
        has-[.user-answer-bubble]:mt-[50px] has-[.user-answer-bubble]:mb-2.5`}
    >
      {options.map((option) => {
        const isToggled = candidateAnswer === option.value;

        return (
          <div className="flex flex-col items-center" key={option.value}>
            <Toggle
              disabled
              variant="outline"
              className="mt-2"
              pressed={isToggled}
              toggledIcon={
                <CandidateIndicator
                  alt={""} // TODO: Pass a meaningful alt text
                  imgSrc={candidateImgSrc}
                  className="size-6"
                />
              }
              untoggledIcon={
                option.value === YesNoAnswer.YES ? (
                  <RiThumbUpLine className="size-5" />
                ) : (
                  <RiThumbDownLine className="size-5" />
                )
              }
            >
              {option.label}
            </Toggle>
            {userAnswer === option.value && (
              <SmallSpeechBubble
                content={t("question.yourAnswer")}
                answer={userAnswer}
                questionType={QuestionType.YES_NO}
                className="user-answer-bubble absolute bottom-[calc(100%+10px)]"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
