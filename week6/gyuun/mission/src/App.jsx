import Router from "./pages/Router";
// import { Normalize } from "styled-normalize";
import { useEffect } from "react";
import { getStore } from "./apis/stores";
import useCartStore from "./pages/Store/cartStore";
const App = () => {
  const fetchCart = useCartStore(state => state.fetchCart)
  useEffect(()=>{
    fetchCart();
  },[])
  return (
    <>
      <Router />
    </>
  );
};

export default App;
