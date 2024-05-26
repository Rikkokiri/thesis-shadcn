import { ReactNode } from "react";
import "../styles/SmallSpeechBubble.css";
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
      className={`speech-bubble ${agreeingAnswer ? "agree" : "disagree"} ${props.className || ""}`}
    >
      <div className="speech-bubble__arrow"></div>
      <div className="speech-bubble__content">{props.content}</div>
    </div>
  );
};
