import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Page from "./pages/Page/Page";
import PageId from "./pages/PageId/PageId";

const Layout = () => {
  return (
    <>
      <header style={{ backgroundColor: "green" }}>헤더입니다.</header>
      <Outlet />
    </>
  );
};

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
          path: "/page",
          element: <Page />,
        },
        {
          path: "/page/:pageId",
          element: <PageId />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
