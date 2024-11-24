import { useEffect } from "react";
import Router from "./pages/Router/Router";
import GlobalStyle from "./styles/GlobalStyle";
import useCartStore from "./store/cartStore";

const App = () => {
  const fetchCart = useCartStore((state) => state.fetchCart);
  useEffect(() => {
    fetchCart();
  });
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
