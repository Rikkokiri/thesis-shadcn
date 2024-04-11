import { Outlet } from "react-router-dom";
import "./App.css";
import { useTranslation } from "react-i18next";

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
      <h1>{t("appName")}</h1>
      <Outlet />
    </div>
  );
}

export default App;
