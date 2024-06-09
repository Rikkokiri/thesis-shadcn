import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { MatchWithDetails } from "../types";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ICandidateModalProps {
  children: ReactNode;
  candidate: MatchWithDetails;
}

export const CandidateModal = ({
  candidate,
  children,
}: ICandidateModalProps) => {
  const { t } = useTranslation();
  const { name, percentage, logoSrc, brandColor } = candidate;

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
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
            <h2 className="text-lg font-bold leading-6">{name}</h2>
            <span className="text-sm font-bold mt-2.5">
              {t("candidate.number")} {candidate.number}
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col justify-end items-center pt-8">
          <Link
            to={`/candidates/${candidate.id}`}
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            {t("candidate.getToKnow")}
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};
