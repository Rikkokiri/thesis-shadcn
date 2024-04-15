import { useTranslation } from "react-i18next";

export const Toolbar = () => {
  const { t } = useTranslation();

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">{t("navigation.frontPage")}</a>
          </li>
          <li>
            <a href="#">{t("navigation.search")}</a>
          </li>
          <li>
            <span>{t("navigation.menu")}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};
