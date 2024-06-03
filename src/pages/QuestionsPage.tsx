import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import "./QuestionsPage.css";
import { Button } from "../components/Button/Button";
import { FiArrowDown } from "react-icons/fi";
import { QuestionForm } from "../features/questionsForm";
import { CandidatesMatch } from "src/features/candidatesMatch";
import { getQuestionsTotalCount } from "@data/api";
import { useRef } from "react";

export const QuestionsPage = () => {
  const { t } = useTranslation();
  const questionsTotalCount = getQuestionsTotalCount();
  const { ref, inView } = useInView({
    threshold: (1 / questionsTotalCount) * 1.5, // Reveal when half of second card is in view
  });
  const questionsStartRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      {inView && <CandidatesMatch />}
      <section className="question-page__header">
        <p className="subtitle m-0">{t("electionName")}</p>
        <h1 className="heading-1 question-page__title">
          {t("questionPage.findYourCandidate")}
        </h1>
        <p className="page-intro">{t("questionPage.description")}</p>

        <Button
          iconBefore={<FiArrowDown />}
          onClick={() => {
            console.log("Scroll to first question!");
            questionsStartRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          {t("questionPage.findYourCandidate")}
        </Button>
        <div ref={questionsStartRef} />
      </section>
      <div className="question-page__content" ref={ref}>
        <QuestionForm />
      </div>
    </>
  );
};
