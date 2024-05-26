import { Outlet } from "react-router-dom";
import { Toolbar } from "./components/Toolbar/Toolbar";

function App() {
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
