import { useTranslation } from "react-i18next";
import "./Toolbar.css";
import { Link } from "react-router-dom";
import { Route } from "src/routes";

export const Toolbar = () => {
  const { t } = useTranslation();

  return (
    <header className="toolbar">
      <nav className="toolbar__nav">
        <div className="toolbar__logo-wrapper">
          <div className="toolbar__logo"></div>
          <Link to={Route.ROOT}>{t("navigation.frontPage")}</Link>
        </div>
        {/*
        <ul className="toolbar__list">
          <li>
            <a href="#">{t("navigation.search")}</a>
          </li>
          <li>
            <span>{t("navigation.menu")}</span>
          </li>
        </ul>
        */}
      </nav>
    </header>
  );
};
