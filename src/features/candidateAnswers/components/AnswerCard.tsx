import "../styles/AnswerCard.css";
import { useTranslation } from "react-i18next";
import { Question } from "@data/types";
import { RadioAnswer } from "./RadioAnswer";
import { YesOrNoAnswer } from "./YesOrNoAnswer";
import { CandidateAnswer } from "@data/candidateAnswers";
import { CommentCard } from "./CommentCard";
import { useLocalizedString } from "@hooks/useLocalizedString";
import { getAnswerByQuestionId } from "@stores/answerStore";
import { Badge } from "@components/ui/badge";
import { Card, CardHeader } from "@components/ui/card";

interface ICardProps {
  question: Question;
  candidateAnswer: CandidateAnswer;
  questionsCount: number;
  candidateImgSrc: string;
}

export const AnswerCard = (props: ICardProps) => {
  const { candidateAnswer, question, questionsCount } = props;
  const { t } = useTranslation();
  const { localize } = useLocalizedString();
  const questionId = question.id;

  const candidateComment = candidateAnswer?.comment
    ? localize(candidateAnswer.comment)
    : undefined;

  const userAnswer = getAnswerByQuestionId(question.id);
  {
    /* <section className="answer-card"> */
  }
  return (
    <Card className="flex flex-col items-center p-6 max-w-[680px] w-full">
      <CardHeader>
        <Badge variant="secondary">{`${question.position}/${questionsCount}`}</Badge>
      </CardHeader>
      <h2 className="question">{question.question.en}</h2>
      {question.questionType === "yes-no" ? (
        <YesOrNoAnswer
          questionId={questionId}
          t={t}
          candidateAnswer={candidateAnswer?.answer ?? null}
          userAnswer={userAnswer?.answer ?? null}
          candidateImgSrc={props.candidateImgSrc}
        />
      ) : (
        <RadioAnswer
          t={t}
          candidateAnswer={candidateAnswer?.answer ?? null}
          userAnswer={userAnswer?.answer ?? null}
          candidateImgSrc={props.candidateImgSrc}
        />
      )}
      {candidateComment && (
        <CommentCard
          header={"Candidate name"} // TODO: Pass candidate's name
          body={candidateComment}
          questionType={question.questionType}
          answer={candidateAnswer?.answer}
        />
      )}
    </Card>
  );
};
