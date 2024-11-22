import { createBrowserRouter, Outlet, RouterProvider, useLocation } from "react-router-dom";
import Home from "./Home/Home";
import Stores from "./Stores/Stores";
import Store from "./Store/Store";
import Cart from "./Cart/Cart";
import OrderBar from "../components/OrderBar/OrderBar";
import styles from "./Router.module.css";
import { useEffect, useState } from "react";
import PayBar from "../components/PayBar/PayBar";
import TopStatusBar from "../components/TopStatusBar/TopStatusBar";
import FooterHomeIndicatorBar from "../components/FooterHomeIndicatorBar/FooterHomeIndicatorBar";

const Layout = () => {
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);
  const [showOrderBar, setShowOrderBar] = useState(true);
  const [showPayBar, setShowPayBar] = useState(true);

  useEffect(() => {
    setShowHeader(location.pathname !== "/");
  }, [location.pathname]);
  useEffect(() => {
    setShowOrderBar(location.pathname !== "/cart");
  }, [location.pathname]);
  useEffect(() => {
    setShowPayBar(location.pathname === "/cart");
  }, [location.pathname]);

  return(
    <>
    <TopStatusBar />
      {showHeader && (
        <header className={styles.header}>
          <img src="/arrowBackLeft.svg" alt="arrowBackLeftSVG" className={styles.backArrow} />
        </header>
      )}
      <Outlet />
      {showOrderBar && (
        <OrderBar />
      )}
      {showPayBar && (
        <PayBar />
      )}
      <FooterHomeIndicatorBar />
    </>
  )
}

const Router = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
