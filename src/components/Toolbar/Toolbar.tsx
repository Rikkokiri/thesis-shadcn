import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Route } from "src/routes";

/* TODO: Options need to collapse at breakpoint 768px */
export const Toolbar = () => {
  const { t } = useTranslation();

  return (
    <header className="h-toolbar bg-background relative w-full h-[72px] flex flex-row items-center px-6 shadow-toolbar">
      <nav className="toolbar__nav font-bold flex flex-row justify-center items-center max-w-[1080px]">
        <div className="flex flex-row items-center gap-6">
          <div className="toolbar__logo size-10 bg-logo rounded-xs"></div>
          <Link to={Route.ROOT}>{t("navigation.frontPage")}</Link>
        </div>
      </nav>
    </header>
  );
};
