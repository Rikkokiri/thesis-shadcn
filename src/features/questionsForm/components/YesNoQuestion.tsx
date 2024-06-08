import { TFunction } from "i18next";
import { RiThumbUpLine } from "react-icons/ri";
import { RiThumbUpFill } from "react-icons/ri";
import { RiThumbDownLine } from "react-icons/ri";
import { RiThumbDownFill } from "react-icons/ri";
import { ToggleButton } from "@components/ToggleButton/ToggleButton";
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
    <div className="row-centered gap-24 mt-40">
      <ToggleButton
        isToggled={answer === YesNoAnswer.YES}
        onClick={() => answerQuestion(questionId, YesNoAnswer.YES)}
        untoggledIcon={<RiThumbUpLine />}
        toggledIcon={<RiThumbUpFill />}
      >
        {t("question.yes")}
      </ToggleButton>
      <ToggleButton
        isToggled={answer === YesNoAnswer.NO}
        onClick={() => answerQuestion(questionId, YesNoAnswer.NO)}
        untoggledIcon={<RiThumbDownLine />}
        toggledIcon={<RiThumbDownFill />}
      >
        {t("question.no")}
      </ToggleButton>
    </div>
  );
};
