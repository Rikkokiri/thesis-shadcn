import { useEffect, useState } from "react";
import "./QuestionCard.css";
import { useTranslation } from "react-i18next";
import { RadioRange } from "../RadioRange/RadioRange";
import { ToggleButton } from "../ToggleButton/ToggleButton";
import { RiThumbUpLine } from "react-icons/ri";
import { RiThumbUpFill } from "react-icons/ri";
import { RiThumbDownLine } from "react-icons/ri";
import { RiThumbDownFill } from "react-icons/ri";
import { FiInfo } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Tag } from "../Tag/Tag";

interface ICardProps {
  title: string;
  category: string;
  number: number;
  questionType: "yes-no" | "radio";
  questionCount: number;
}

export const QuestionCard = (props: ICardProps) => {
  const [questionHidden, setQuestionHidden] = useState<boolean>(false);
  const { t } = useTranslation();

  const [answer, setAnswer] = useState<string | undefined>(undefined);
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const handleToggle = (toggled: boolean) => {
    setIsToggled(!toggled);
  };

  useEffect(() => {
    console.log("Answer changed to: ", answer);
  }, [answer]);

  return (
    <section className="card">
      <div className="row_centered card_header">
        <Tag>{`${props.number}/${props.questionCount}`}</Tag>
        <p className="category">{props.category}</p>
      </div>
      <h2 className="question">{props.title}</h2>
      <div className="row_centered info-buttons">
        <ToggleButton
          isToggled={false}
          toggle={() => {}}
          untoggledIcon={<FiInfo />}
          variant="ghost"
          size="small"
        >
          {t("question.whatAbout")}
        </ToggleButton>
        <ToggleButton
          toggle={() => setQuestionHidden((questionHidden) => !questionHidden)}
          isToggled={questionHidden}
          untoggledIcon={<FiEyeOff />}
          toggledIcon={<FiEyeOff />}
          variant="ghost"
          size="small"
        >
          {t("question.hide")}
        </ToggleButton>
      </div>
      {props.questionType === "yes-no" ? (
        <div className="row_centered answer_buttons">
          <ToggleButton
            isToggled={isToggled}
            toggle={() => handleToggle(isToggled)}
            untoggledIcon={<RiThumbUpLine />}
            toggledIcon={<RiThumbUpFill />}
          >
            {t("question.yes")}
          </ToggleButton>
          <ToggleButton
            isToggled={!isToggled}
            toggle={() => handleToggle(isToggled)}
            untoggledIcon={<RiThumbDownLine />}
            toggledIcon={<RiThumbDownFill />}
          >
            {t("question.no")}
          </ToggleButton>
        </div>
      ) : (
        <div className="row_centered answer_radio">
          <RadioRange
            options={[
              { value: "1", label: t("answerScale.strongDisagree") },
              { value: "2", label: t("answerScale.disagree") },
              { value: "3", label: t("answerScale.agree") },
              { value: "4", label: t("answerScale.strongAgree") },
            ]}
            value={answer}
            onChange={(value) => setAnswer(value)}
          />
        </div>
      )}
    </section>
  );
};
