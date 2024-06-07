import { Button } from "@/components/ui/button";
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
      <div className="p-6 text-center w-full bg-background">
        <h1 className="text-3xl text-heading mb-4">{t("frontPage.title")}</h1>
        <Button onClick={startCompass}>
          <FiChevronRight className="mr-2" />
          {t("frontPage.start")}
        </Button>
      </div>
      <div className="flex flex-col gap-6 w-full py-6 max-w-[680px]">
        <SectionCard title={t("candidates")}>
          <div></div>
        </SectionCard>
      </div>
    </>
  );
};
