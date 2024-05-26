import { getCandidateById } from "@data/api";
import { useLocalizedString } from "@hooks/useLocalizedString";
import { useTranslation } from "react-i18next";

export const useCandidateInfo = (candidateId: string) => {
  const { localize } = useLocalizedString();
  const { t } = useTranslation();
  const candidate = getCandidateById(candidateId);

  const promises: string[] =
    candidate?.promises?.map((promise) => {
      return localize(promise);
    }) ?? [];

  return {
    t,
    promises,
    candidate,
  };
};
