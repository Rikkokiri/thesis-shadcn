import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
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
      {/* TODO: Top level section element { background-color: var(--page-header-bg); } */}
      <section className="flex flex-col w-full items-center py-8 px-0 text-center">
        <p className="subtitle m-0">{t("electionName")}</p>
        <h1 className="heading-1 m-0">{t("questionPage.findYourCandidate")}</h1>
        <p className="page-intro p-4 pb-8 max-w-[680px] leading-6">
          {t("questionPage.description")}
        </p>
        <Button
          onClick={() => {
            questionsStartRef.current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <FiArrowDown />
          {t("questionPage.findYourCandidate")}
        </Button>
        <div ref={questionsStartRef} />
      </section>
      <div className="w-full flex flex-col items-center pt-6" ref={ref}>
        <QuestionForm />
      </div>
    </>
  );
};
