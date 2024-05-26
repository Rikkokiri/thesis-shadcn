import { Outlet } from "react-router-dom";
import { Toolbar } from "./components/Toolbar/Toolbar";
import { useDetectTheme } from "@hooks/useDetectTheme";
import { useEffect } from "react";

function App() {
  const { prefersDarkMode, setActiveTheme } = useDetectTheme();
  useEffect(() => {
    setActiveTheme(prefersDarkMode);
  }, [prefersDarkMode, setActiveTheme]);

  return (
    <>
      <Toolbar />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
