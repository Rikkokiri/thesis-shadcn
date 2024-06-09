import {
  InfoGrid,
  InfoGridItem,
  InfoGridRow,
} from "@components/InfoGrid/InfoGrid";
import { Candidate } from "@data/candidates";
import { useLocalizedString } from "@hooks/useLocalizedString";
import { TFunction } from "i18next";

interface IBackgroundDetailsProps {
  t: TFunction;
  candidate: Candidate;
}

export const BackgroundDetailsGrid = (props: IBackgroundDetailsProps) => {
  const { t, candidate } = props;
  const { localize } = useLocalizedString();
  const titleClasses = "text-base font-bold";

  return (
    <InfoGrid>
      <InfoGridRow>
        <InfoGridItem className={titleClasses}>
          {t("candidate.website")}
        </InfoGridItem>
        <InfoGridItem>
          {candidate.website?.url ? (
            <a href={candidate.website?.url} target="_blank" rel="noreferrer">
              {candidate.website?.text
                ? localize(candidate.website?.text)
                : candidate.website?.url}
            </a>
          ) : (
            "-"
          )}
        </InfoGridItem>
      </InfoGridRow>
      <InfoGridRow>
        <InfoGridItem className={titleClasses}>Creator</InfoGridItem>
        <InfoGridItem>{candidate.creator}</InfoGridItem>
      </InfoGridRow>
      <InfoGridRow>
        <InfoGridItem className={titleClasses}>Github repository</InfoGridItem>
        <InfoGridItem>{candidate.github?.url || "-"}</InfoGridItem>
      </InfoGridRow>
    </InfoGrid>
  );
};
