import { ReactNode } from "react";
import "../styles/CommentCard.css";
import { QuestionType, YesNoAnswer } from "@data/types";

interface ICommentCardProps {
  header: ReactNode;
  body: ReactNode;
  answer?: number;
  questionType: QuestionType;
}

export const CommentCard = (props: ICommentCardProps) => {
  const { header, body, answer, questionType } = props;

  const arrowPosition = (
    answer: number | undefined,
    questionType: QuestionType,
  ) => {
    if (answer === undefined) return 50;
    if (questionType === QuestionType.YES_NO) {
      return answer === YesNoAnswer.YES ? 33 : 63;
    }
    return (answer < 4 ? answer - 1 : answer - 2) * 30 + 3;
  };

  return (
    <div
      className={`comment-card answer-${questionType === QuestionType.AGREE_SCALE && "scale"}`}
    >
      <div
        className="comment-card__arrow"
        style={{
          left: `${arrowPosition(answer, questionType)}%`,
          display: answer === undefined ? "none" : "inherit",
        }}
      ></div>
      <div className="comment-card__header">{header}</div>
      <div className="comment-card__body">{body}</div>
    </div>
  );
};
