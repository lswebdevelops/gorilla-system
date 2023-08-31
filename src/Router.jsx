import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from './components/Profile'
import ErrorPage from "./components/ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/profile/:name",
      element: <Profile />,
    },
    {
        path: "*",
        element: <ErrorPage />,
      },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;