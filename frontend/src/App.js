import "./App.css";

import Root from "./modules/Root";
import Login from "./modules/accounts/pages/Login";
import GetAllTerritories from "./modules/territories/pages/GetAllTerritories";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <GetAllTerritories />,
      },
      {
        path: "/accounts/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
