import { useTranslation } from "react-i18next";
import "./QuestionsPage.css";
import { QuestionCard } from "../components/QuestionCard/QuestionCard";
import { Button } from "../components/Button/Button";
import { FiArrowDown } from "react-icons/fi";

export const QuestionsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="question-page__header">
        <p className="question-page__subtitle">{t("electionName")}</p>
        <h1 className="pageheader_title">
          {t("questionPage.findYourCandidate")}
        </h1>
        <p className="page-intro">{t("questionPage.description")}</p>
        <Button onClick={() => {}} iconBefore={<FiArrowDown />}>
          {t("questionPage.findYourCandidate")}
        </Button>
      </section>
      <div className="question-page__content">
        <QuestionCard
          title="Question 1"
          category="Category 1"
          number={1}
          questionType="yes-no"
          questionCount={2}
        />
        <QuestionCard
          title="Question 2"
          category="Category 2"
          number={2}
          questionType="radio"
          questionCount={2}
        />
      </div>
    </>
  );
};
