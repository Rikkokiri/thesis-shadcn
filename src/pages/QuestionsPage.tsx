import { useTranslation } from "react-i18next";
import "./QuestionsPage.css";
import { Button } from "../components/Button/Button";
import { FiArrowDown } from "react-icons/fi";
import { QuestionForm } from "../features/questionsForm";

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
        <QuestionForm />
      </div>
    </>
  );
};
