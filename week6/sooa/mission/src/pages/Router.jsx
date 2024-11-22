import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import Store from "./Store/Store";
import Stores from "./Stores/Stores";
import Cart from "./Cart/Cart";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/store",
      element: <Stores />,
    },
    {
      path: "/store/:storeId",
      element: <Store />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
