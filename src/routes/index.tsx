import { RouteObject, createBrowserRouter, useRoutes } from "react-router-dom";
import App, { Homepage, QuestionsPage } from "../App";

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
        element: <Homepage />,
      },
      {
        path: Route.QUESTIONS,
        element: <QuestionsPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
