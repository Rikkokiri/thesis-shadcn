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
import { Toggle } from "@/components/ui/toggle";
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
        <Toggle
          pressed={isModalOpen}
          onPressedChange={() => setIsModalOpen(true)}
          untoggledIcon={<FiInfo className="size-5" />}
          toggledIcon={<FiInfo className="size-5" />}
          variant="ghost"
          size="sm"
        >
          {t("question.whatAbout")}
        </Toggle>
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
