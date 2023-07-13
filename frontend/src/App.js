import Root from "./modules/Root";
import Login from "./modules/accounts/pages/Login";
import getAllTerritoriesLoader from "./modules/territories/loaders/getAllTerritories.loader";
import GetAllTerritories from "./modules/territories/pages/GetAllTerritories";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <GetAllTerritories />,
        loader: getAllTerritoriesLoader,
      },
      {
        path: "/accounts/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
