import { ReactNode } from "react";
import { QuestionType } from "@data/types";
import { doesAgree } from "@data/data-utils";

interface ISpeechBubbleProps {
  content: ReactNode;
  answer: number;
  questionType: QuestionType;
  className?: string;
}

export const SmallSpeechBubble = (props: ISpeechBubbleProps) => {
  const agreeingAnswer = doesAgree(props.answer, props.questionType);

  return (
    <div
      className={`${agreeingAnswer ? "bg-agree" : "bg-disagree"}
        flex flex-row items-center justify-center rounded
        mb-[10px] p-2 font-bold text-sm
        text-gray-5 dark:text-primary-foreground
         ${props.className || ""}
      `}
    >
      <div
        className={`clip-arrow-small size-arrow-sm absolute bg-inherit
          -translate-x-1/2 left-1/2 bottom-[-9px] 
          `}
      ></div>
      <div>{props.content}</div>
    </div>
  );
};
