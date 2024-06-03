import { FiInfo } from "react-icons/fi";
import { LocalizedString } from "@data/types";
import { Modal } from "@components/Modal/Modal";
import { TFunction } from "i18next";
import { ToggleButton } from "@components/ToggleButton/ToggleButton";
import { useLocalizedString } from "@hooks/useLocalizedString";
import { useState } from "react";

interface IAdditionalInfoProps {
  t: TFunction;
  info: LocalizedString;
}

export const AdditionalInfo = (props: IAdditionalInfoProps) => {
  const { t, info } = props;
  const { localize } = useLocalizedString();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ToggleButton
        isToggled={isModalOpen}
        onClick={() => setIsModalOpen(true)}
        untoggledIcon={<FiInfo />}
        toggledIcon={<FiInfo />}
        variant="ghost"
        size="small"
        toggledClassName=""
      >
        {t("question.whatAbout")}
      </ToggleButton>
      <Modal
        isOpen={isModalOpen}
        closeModal={() => {
          setIsModalOpen(false);
        }}
      >
        <h3 className="heading-3 pb-2">{t("question.whatAbout")}</h3>
        <p className="body-small">{localize(info)}</p>
      </Modal>
    </>
  );
};
