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
        <p className="text-sm font-bold text-heading m-0">
          {t("electionName")}
        </p>
        <h1 className="text-4xl text-heading m-0">{candidate.name}</h1>
      </div>
      {candidate.organization ||
        (candidate.creator && (
          <p className="m-0 font-bold text-xs">
            {t("candidate.createdBy")}{" "}
            {candidate.organization || candidate.creator}
          </p>
        ))}
      <div
        className={`size-[124px] flex justify-center items-center my-4 mx-auto
          rounded-50 border border-foreground text-xl font-bold
        `}
      >
        {t("candidate.number")} {candidate.number}
      </div>
    </div>
  );
};
