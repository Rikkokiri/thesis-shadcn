import { useCandidateInfo } from "../hooks/useCandidateInfo";

export const CandidateIntroHeader = (
  props: ReturnType<typeof useCandidateInfo>,
) => {
  const { t, candidate } = props;

  if (!candidate) {
    return null;
  }

  return (
    <div className="bg-card p-6 text-center w-full flex flex-col gap-4">
      <div>
        <p className="subtitle m-0">{t("electionName")}</p>
        <h1 className="heading-1-large m-0">{candidate.name}</h1>
      </div>
      {candidate.organization ||
        (candidate.creator && (
          <p className="m-0 font-bold text-xs leading-normal">
            {t("candidate.createdBy")}{" "}
            {candidate.organization || candidate.creator}
          </p>
        ))}
      <div
        className={`candidate-number size-[124px] flex justify-center items-center my-4 mx-auto
          rounded-full border border-foreground
          font-bold text-[20px] leading-normal
        `}
      >
        {t("candidate.number")} {candidate.number}
      </div>
    </div>
  );
};
