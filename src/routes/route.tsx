import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/login";
import Dashboard from "../pages/dashboard/dashboard";
import Register from "../pages/register/register";
import Recipe from "../pages/recipe/recipe";
import Favorites from "../pages/favorites/favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/recipe/:id",
    element: <Recipe />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
]);

export default router;
