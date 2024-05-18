import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { FrontPage } from "../pages/FrontPage";
import { QuestionsPage } from "../pages/QuestionsPage";

export enum Route {
  ROOT = "/",
  QUESTIONS = "/questions",
  CANDIDATE = "/candidates/:id",
  RESULTS = "/results",
}

const routes: RouteObject[] = [
  {
    path: Route.ROOT,
    element: <App />,
    children: [
      {
        path: Route.ROOT,
        element: <FrontPage />,
      },
      {
        path: Route.QUESTIONS,
        element: <QuestionsPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
