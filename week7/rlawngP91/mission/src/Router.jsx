import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home"
import Store from "./pages/store/Store";
import StoreId from "./pages/store/StoreId";
import Cart from "./pages/cart/Cart";
import Header from "./components/header/Header";
import OrderBar from "./components/orderBar/OrderBar";

const HeaderLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};
const StoreLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <OrderBar />
        </>
    );
};
const BottomLayout = () => {
    return (
        <>
            <Outlet />
            <OrderBar />
        </>
    );
};

const Router = () => {
    const router = createBrowserRouter([
        {
            element: <BottomLayout />,
            children: [
                { path: "/", element: <Home /> }
            ]
        },
        {
            element: <StoreLayout />,
            children: [
                {path: "/store", element: <Store />}, {path: "/store/:storeId", element: <StoreId />}
            ]
        },
        {
            element: <HeaderLayout />,
            children: [
                {path: "/cart", element: <Cart />}
            ]
        }
    ]);
    return <RouterProvider router={router} />;
};

export default Router;
