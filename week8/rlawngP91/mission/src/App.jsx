import Router from "./Router";
import { Normalize } from "styled-normalize";
import useCartStore from "./store/cartStore";
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