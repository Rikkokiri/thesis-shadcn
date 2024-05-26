import { CandidateIntroHeader } from "./components/CandidateHeader";
import { CandidateInfoContent } from "./components/CandidateInfoContent";
import { useCandidateInfo } from "./hooks/useCandidateInfo";

export function CandidateInfo({ candidateId }: { candidateId: string }) {
  const candidateInfo = useCandidateInfo(candidateId);
  return <CandidateInfoContent {...candidateInfo} />;
}

export function CandidateHeader({ candidateId }: { candidateId: string }) {
  const candidateInfo = useCandidateInfo(candidateId);
  return <CandidateIntroHeader {...candidateInfo} />;
}
