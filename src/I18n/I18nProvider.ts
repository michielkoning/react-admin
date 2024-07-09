import { resolveBrowserLocale } from "react-admin";
import polyglotI18nProvider from "ra-i18n-polyglot";
import en from "./en";
import nl from "./nl";

export const i18nProvider = polyglotI18nProvider(
  (locale) => (locale === "nl" ? nl : en),
  resolveBrowserLocale(),

  [
    { locale: "en", name: "English" },
    { locale: "nl", name: "Nederland" },
  ],
);
