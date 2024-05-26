import { LocalizedString } from "@data/types";
import { useTranslation } from "react-i18next";

export const supportedLanguages = ["en", "fi"];

export type SupportedLanguage = (typeof supportedLanguages)[number];

export const useLocalizedString = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const localize = (string: LocalizedString) => {
    if (currentLanguage === "fi" && string.fi) {
      return string.fi;
    }
    return string.en;
  };

  return { localize };
};
