import { ButtonLink } from "@components/ButtonLink/ButtonLink";
import "../styles/CandidateModal.css";
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
      <div className="candidate-modal__body">
        <div className="candidate-modal__img-wrapper">
          <img src={logoSrc} aria-hidden className="candidate-modal__img" />
          <div
            className="candidate-modal__score-visual"
            aria-hidden
            style={{ width: `${percentage}%`, backgroundColor: brandColor }}
          />
          <span className="candidate-modal__score">{`${percentage}%`}</span>
        </div>
        <div className="candidate-modal__details-section">
          <h3 className="candidate-modal__name">{name}</h3>
          <span className="candidate-modal__number body-small">
            {t("candidate.number")} {candidate.number}
          </span>
        </div>
      </div>
      <div className="candidate-modal__actions">
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
