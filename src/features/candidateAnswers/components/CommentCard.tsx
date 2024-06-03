import { ReactNode } from "react";
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
      className={`comment-card text-sm flex flex-col gap-5 p-4 pt-2 w-full  mb-0 mx-2.5 ${questionType === QuestionType.AGREE_SCALE ? "mt-7" : "mt-3"} max-w-[343px] rounded-sm relative bg-gray-20 dark:bg-gray-90`}
    >
      <div
        className="absolute size-4 bg-inherit"
        style={{
          transform: "rotate(45deg",
          top: "-6px",
          left: `${arrowPosition(answer, questionType)}%`,
          display: answer === undefined ? "none" : "inherit",
        }}
      ></div>
      <div className="font-bold">{header}</div>
      <div>{body}</div>
    </div>
  );
};
