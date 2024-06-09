import { TFunction } from "i18next";
import { RiThumbUpLine } from "react-icons/ri";
import { RiThumbUpFill } from "react-icons/ri";
import { RiThumbDownLine } from "react-icons/ri";
import { RiThumbDownFill } from "react-icons/ri";
import { Toggle } from "@components/ui/toggle";
import { YesNoAnswer } from "@data/types";

interface IYesNoQuestionProps {
  t: TFunction;
  questionId: number;
  answerQuestion: (questionId: number, answer: number) => void;
  answer: number | null;
}

export const YesNoQuestion = (props: IYesNoQuestionProps) => {
  const { answer, answerQuestion, questionId, t } = props;

  return (
    <div className="flex flex-row justify-center items-center w-full gap-6 mt-10">
      <Toggle
        variant="outline"
        onPressedChange={() => answerQuestion(questionId, YesNoAnswer.YES)}
        pressed={answer === YesNoAnswer.YES}
        untoggledIcon={<RiThumbUpLine className="size-5" />}
        toggledIcon={<RiThumbUpFill className="size-5" />}
      >
        {t("question.yes")}
      </Toggle>
      <Toggle
        variant="outline"
        pressed={answer === YesNoAnswer.NO}
        onPressedChange={() => answerQuestion(questionId, YesNoAnswer.NO)}
        untoggledIcon={<RiThumbDownLine className="size-5" />}
        toggledIcon={<RiThumbDownFill className="size-5" />}
      >
        {t("question.no")}
      </Toggle>
    </div>
  );
};
