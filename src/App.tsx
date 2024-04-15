import { Outlet } from "react-router-dom";
import "./App.css";
import { useTranslation } from "react-i18next";
import { Toolbar } from "./components/Toolbar";

export const Homepage = () => {
  return <div>Homepage</div>;
};

export const QuestionsPage = () => {
  return <div>Questions Page</div>;
};

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <Toolbar />
      <main>
        <h1>{t("appName")}</h1>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
