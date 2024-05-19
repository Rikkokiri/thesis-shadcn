import { QuestionCard } from "./QuestionCard";
import { IQuestionsForm } from "../hooks/useQuestionsForm";
import { Question } from "src/data/types";
import "../styles/QuestionsForm.css";

export const QuestionsList = (props: IQuestionsForm) => {
  const { categoriesAndQuestions, questionsTotalCount, answers } = props;

  /* TODO: Use utility class to get list to 100 % width */
  return (
    <section className="questions-list">
      {categoriesAndQuestions.map((category) => (
        <article key={category.id} className="question-page__category-section">
          {category.questions.map((question: Question) => (
            <QuestionCard
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
    </section>
  );
};
