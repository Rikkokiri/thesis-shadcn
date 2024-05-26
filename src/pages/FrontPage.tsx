import { Button } from "@components/Button/Button";
import "@components/PageHeader/PageHeader.css";
import { SectionCard } from "@components/SectionCard.tsx/SectionCard";
import { useAnswerStore } from "@stores/answerStore";
import { useTranslation } from "react-i18next";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Route } from "src/routes";

export const FrontPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { removeAllAnswers } = useAnswerStore();

  const startCompass = () => {
    removeAllAnswers();
    navigate(Route.QUESTIONS);
  };

  return (
    <>
      <div className="page-header">
        <h1 className="heading-1 mb-16">{t("frontPage.title")}</h1>
        <Button iconAfter={<FiChevronRight />} onClick={startCompass}>
          {t("frontPage.start")}
        </Button>
      </div>
      <div className="page-sections__column py-24">
        <SectionCard title={t("candidates")}>
          <div></div>
        </SectionCard>
      </div>
    </>
  );
};
