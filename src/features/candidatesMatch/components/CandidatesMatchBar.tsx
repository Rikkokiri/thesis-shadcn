// import "../styles/CandidatesMatchBar.css";
import { ToggleButton } from "@components/ToggleButton/ToggleButton";
import { useState } from "react";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { MatchButton } from "./MatchButton";
import { useCandidatesMatch } from "../hooks/useCandidatesMatch";
import { MatchWithDetails } from "../types";

export const CandidatesMatchBar = (
  props: ReturnType<typeof useCandidatesMatch>,
) => {
  const { topFourCandidates, topCount, displayMatches } = props;
  const [resultsHidden, setResultsHidden] = useState<boolean>(false);

  if (!displayMatches) {
    return null;
  }

  return (
    <header className="match-bar fixed z-50 top-0 flex flex-col items-center justify-center h-[76px] w-full">
      <div className="flex flex-row items-center w-full max-w-[520px]">
        <div className="flex flex-row w-full justify-evenly items-center p-0 pt-1">
          {resultsHidden || !topFourCandidates
            ? [...Array(topCount).keys()].map((index) => (
                <MatchPlaceholder key={index} />
              ))
            : topFourCandidates.map((candidate: MatchWithDetails) => (
                <MatchButton candidate={candidate} key={candidate.id} />
              ))}
        </div>
        <ToggleButton
          isToggled={resultsHidden}
          onClick={() => setResultsHidden(!resultsHidden)}
          untoggledIcon={<FiEye />}
          toggledIcon={<FiEyeOff />}
          variant="ghost"
          size="medium"
          iconSize={24}
          className="match-bar__toggle"
          toggledClassName="toggled-transparent"
        />
      </div>
    </header>
  );
};

const MatchPlaceholder = () => {
  return (
    <div className="placeholder-match flex flex-col justify-center items-center w-full">
      <div className="placeholder-candidate"></div>
      <div className="placeholder-score"></div>
    </div>
  );
};
