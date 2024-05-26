import { PromiseList } from "./PromiseList";
import { useCandidateInfo } from "../hooks/useCandidateInfo";
import { SectionCard } from "@components/SectionCard.tsx/SectionCard";
import { BackgroundDetailsGrid } from "./BackgroundDetailsGrid";

export const CandidateInfoContent = (
  props: ReturnType<typeof useCandidateInfo>,
) => {
  const { t, promises, candidate } = props;

  return (
    <>
      {promises && (
        <SectionCard title={t("candidateSections.electionPromises")}>
          <PromiseList items={promises} />
        </SectionCard>
      )}
      {candidate && (
        <SectionCard title={t("candidateSections.backgroundInfo")}>
          <BackgroundDetailsGrid t={t} candidate={candidate} />
        </SectionCard>
      )}
    </>
  );
};
