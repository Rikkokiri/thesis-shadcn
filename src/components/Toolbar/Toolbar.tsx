import { useTranslation } from "react-i18next";
import "./Toolbar.css";

export const Toolbar = () => {
  const { t } = useTranslation();

  return (
    <header className="toolbar">
      <nav className="toolbar__nav">
        <div className="toolbar__logo">
          <a href="#">{t("navigation.frontPage")}</a>
        </div>
        <ul className="toolbar__list">
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
