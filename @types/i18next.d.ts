// import { resources, defaultNS } from "../src/i18n";
import i18next from "i18next";
import { resources, defaultNS } from "../src/i18n/config";

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
    defaultNS: typeof defaultNS;
    // resources: typeof resources.en;
    resources: typeof resources.en;
  }
}

/*
// import the original type declarations
import "react-i18next";
// import all namespaces (for the default language, only)
import en from "../public/locales/en/translation.json";

declare module "react-i18next" {
  interface CustomTypeOptions {
    returnNull: false;
    resources: typeof en;
  }
}
*/
