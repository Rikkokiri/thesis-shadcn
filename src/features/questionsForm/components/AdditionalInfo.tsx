import { FiInfo } from "react-icons/fi";
import { LocalizedString } from "@data/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
    <Dialog>
      <DialogTrigger>
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
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("question.whatAbout")}</DialogTitle>
          <DialogDescription>{localize(info)}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
