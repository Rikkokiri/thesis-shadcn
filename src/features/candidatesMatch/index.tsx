import { CandidatesMatchBar } from "./components/CandidatesMatchBar";
import { useCandidatesMatch } from "./hooks/useCandidatesMatch";

export function CandidatesMatch() {
  const candidateMatches = useCandidatesMatch();
  return <CandidatesMatchBar {...candidateMatches} />;
}
