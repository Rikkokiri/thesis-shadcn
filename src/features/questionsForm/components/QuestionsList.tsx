import { QuestionCard } from "./QuestionCard";
import { IQuestionsForm } from "../hooks/useQuestionsForm";
import { Question } from "src/data/types";

export const QuestionsList = (props: IQuestionsForm) => {
  const { categoriesAndQuestions, questionsTotalCount, answers } = props;

  return (
    <section className="w-full">
      {categoriesAndQuestions.map((category) => (
        <article
          key={category.id}
          className="question-page__category-section flex flex-col items-center w-full"
        >
          {category.questions.map((question: Question) => (
            <QuestionCard
              // TODO: className="w-full"
              key={question.id}
              category={category}
              question={question}
              answer={answers[question.id]}
              questionsCount={questionsTotalCount}
              answerQuestion={props.answerQuestion}
              toggleQuestionHiding={props.toggleQuestionHiding}
            />
          ))}
        </article>
      ))}
      {/* TODO: Link to results page */}
    </section>
  );
};
