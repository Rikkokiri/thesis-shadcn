import { Link, Outlet } from "react-router-dom";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { useDetectTheme } from "@hooks/useDetectTheme";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { prefersDarkMode, setActiveTheme } = useDetectTheme();
  const { t } = useTranslation();

  useEffect(() => {
    setActiveTheme(prefersDarkMode);
  }, [prefersDarkMode, setActiveTheme]);

  return (
    <>
      <Toolbar />
      <div className="h-main flex flex-col">
        <main className="flex flex-col items-center justify-items-start flex-[1_0_auto]">
          <Outlet />
        </main>
        <footer
          id="app-footer"
          className="flex flex-col bg-gray-5 dark:bg-gray-90 py-[21px] px-0"
        >
          <div className="flex flex-row justify-center wrap py-1 px-4 text-sm">
            <Link className="py-3 px-6 font-bold" to="/">
              {t("footer.frontPageLink")}
            </Link>
            <a
              className="py-3 px-6 font-bold"
              href="https://vaalit.yle.fi/vaalikone/presidentinvaali2024"
            >
              Ylen vaalikone presidentivaaleissa 2024
            </a>
            {/* TODO: Link to source code */}
          </div>
          {/* TODO: Language menu */}
        </footer>
      </div>
    </>
  );
}

export default App;
