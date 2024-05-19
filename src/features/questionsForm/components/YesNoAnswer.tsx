import { TFunction } from "i18next";
import { RiThumbUpLine } from "react-icons/ri";
import { RiThumbUpFill } from "react-icons/ri";
import { RiThumbDownLine } from "react-icons/ri";
import { RiThumbDownFill } from "react-icons/ri";
import { ToggleButton } from "@components/ToggleButton/ToggleButton";

const YES = 5;
const NO = 1;

interface YesNoAnswerProps {
  t: TFunction;
  questionId: number;
  answerQuestion: (questionId: number, answer: number) => void;
  answer: number | null;
}

export const YesNoAnswer = (props: YesNoAnswerProps) => {
  const { answer, answerQuestion, questionId, t } = props;

  return (
    <div className="row_centered answer_buttons">
      <ToggleButton
        isToggled={answer === YES}
        toggle={() => answerQuestion(questionId, YES)}
        untoggledIcon={<RiThumbUpLine />}
        toggledIcon={<RiThumbUpFill />}
      >
        {t("question.yes")}
      </ToggleButton>
      <ToggleButton
        isToggled={answer === NO}
        toggle={() => answerQuestion(questionId, NO)}
        untoggledIcon={<RiThumbDownLine />}
        toggledIcon={<RiThumbDownFill />}
      >
        {t("question.no")}
      </ToggleButton>
    </div>
  );
};
