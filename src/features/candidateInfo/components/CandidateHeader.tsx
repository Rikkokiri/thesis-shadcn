import "../styles/CandidateHeader.css"; // TODO: Get rid of style file
import { useCandidateInfo } from "../hooks/useCandidateInfo";

export const CandidateIntroHeader = (
  props: ReturnType<typeof useCandidateInfo>,
) => {
  const { t, candidate } = props;

  if (!candidate) {
    return null;
  }

  return (
    <div className="bg-card p-6 mb-2 text-center w-full flex flex-col gap-4">
      <div>
        <p className="subtitle m-0">{t("electionName")}</p>
        <h1 className="heading-1-large m-0">{candidate.name}</h1>
      </div>
      {candidate.organization ||
        (candidate.creator && (
          <p className="candidate-header__organization m-0 font-bold">
            {t("candidate.createdBy")}{" "}
            {candidate.organization || candidate.creator}
          </p>
        ))}
      <div className="candidate-number font-bold size-[124px] flex justify-center items-center my-4 mx-auto rounded-full border">
        {t("candidate.number")} {candidate.number}
      </div>
    </div>
  );
};
