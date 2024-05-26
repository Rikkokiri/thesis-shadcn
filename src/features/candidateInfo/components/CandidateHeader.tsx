import "../styles/CandidateHeader.css";
import { useCandidateInfo } from "../hooks/useCandidateInfo";

export const CandidateIntroHeader = (
  props: ReturnType<typeof useCandidateInfo>,
) => {
  const { t, candidate } = props;

  if (!candidate) {
    return null;
  }

  return (
    <div className="candidate-header">
      <div>
        <p className="subtitle m-0">{t("electionName")}</p>
        <h1 className="heading-1-larger m-0">{candidate.name}</h1>
      </div>
      {candidate.organization ||
        (candidate.creator && (
          <p className="candidate-header__organization m-0">
            By {candidate.organization || candidate.creator}
          </p>
        ))}
      <div className="candidate-number">
        No: {candidate.candidateNumber ?? "?"}
      </div>
    </div>
  );
};
