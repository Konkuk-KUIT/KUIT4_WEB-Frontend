import Router from "./pages/Router";
import { Normalize } from "styled-normalize";
import useCartStore from "./store/cartStore";
//import { getStore } from "./apis/stores";
import { useEffect } from "react";

const App = () => {
  const fetchCart = useCartStore((state) => state.fetchCart);

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <>
      <Normalize />
      <Router />
    </>
  );
};

export default App;
