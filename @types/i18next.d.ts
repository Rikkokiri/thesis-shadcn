import { resources, defaultNS } from "../src/i18n/config";

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
    defaultNS: typeof defaultNS;
    // resources: typeof resources.en;
    resources: typeof resources.en;
  }
}
