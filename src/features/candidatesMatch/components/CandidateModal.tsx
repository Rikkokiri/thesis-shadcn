import { ButtonLink } from "@components/ButtonLink/ButtonLink";
import { Modal } from "@components/Modal/Modal";
import { useTranslation } from "react-i18next";
import { MatchWithDetails } from "../types";

interface ICandidateModalProps {
  isOpen: boolean;
  closeModal: () => void;
  candidate: MatchWithDetails;
}

export const CandidateModal = ({
  isOpen,
  closeModal,
  candidate,
}: ICandidateModalProps) => {
  const { t } = useTranslation();
  const { name, percentage, logoSrc, brandColor } = candidate;

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="flex w-full">
        <div className="flex flex-col justify-start items-center">
          <img
            src={logoSrc}
            aria-hidden
            className="bg-gray-10 rounded-sm shrink-0 p-1 w-[64px] h-[85px]"
          />
          <div
            className="h-1 rounded-[19px] mt-1 mr-auto bg-gray-10"
            aria-hidden
            style={{ width: `${percentage}%`, backgroundColor: brandColor }}
          />
          <span className="text-sm font-bold text-center text-foreground m-0 mt-1">{`${percentage}%`}</span>
        </div>
        <div className="flex flex-col items-start justify-start pl-[18px]">
          <h3 className="text-lg font-bold leading-6">{name}</h3>
          <span className="text-sm font-bold mt-2.5">
            {t("candidate.number")} {candidate.number}
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col justify-end items-center pt-8">
        <ButtonLink
          to={`/candidates/${candidate.id}`}
          variant="outline"
          size="small"
        >
          {t("candidate.getToKnow")}
        </ButtonLink>
      </div>
    </Modal>
  );
};
