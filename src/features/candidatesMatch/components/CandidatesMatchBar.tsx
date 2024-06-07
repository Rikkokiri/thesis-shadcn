import { ToggleButton } from "@components/ToggleButton/ToggleButton";
import { useState } from "react";
import { FiEyeOff } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { MatchButton } from "./MatchButton";
import { useCandidatesMatch } from "../hooks/useCandidatesMatch";
import { MatchWithDetails } from "../types";

/* TODO: Make sure toggle button matches following styles:
.button.match-bar__toggle {
  border-radius: 4px;
  padding-left: 12px;
  padding-right: 12px;
}

.match-bar__toggle.toggled-transparent {
  background-color: transparent;
}
*/

export const CandidatesMatchBar = (
  props: ReturnType<typeof useCandidatesMatch>,
) => {
  const { topFourCandidates, topCount, displayMatches } = props;
  const [resultsHidden, setResultsHidden] = useState<boolean>(false);

  if (!displayMatches) {
    return null;
  }

  return (
    <header className="bg-background fixed z-50 top-0 flex flex-col items-center justify-center h-[76px] w-full shadow-matchbar">
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
    <div className="flex flex-col justify-between items-top w-8 h-full">
      <div className="bg-gray-10 dark:bg-gray-80 w-full h-[34px] mb-0.5"></div>
      <div className="bg-gray-10 dark:bg-gray-80 w-full h-[18px] mb-0.5"></div>
    </div>
  );
};
