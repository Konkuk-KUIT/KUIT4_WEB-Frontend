import React, {useEffect} from "react";
import Router from "./pages/Router";
import { Normalize } from "styled-normalize";
import useCartStore from "./pages/Cart/cartStore";


const App = () => {
  const fetchCart = useCartStore((state) => state.fetchCart);

  useEffect(() => {
    fetchCart();
  },[]);

  return (
    <>
      <Normalize />
      <Router />
    </>
  );
};

export default App;
