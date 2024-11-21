import Router from "./pages/Router";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import "./reset.css";
import "./App.css";
import { useEffect } from "react";
import useCartStore from "./pages/Store/cartStore";
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    
    font-style: normal;
  }
  body {
    font-family: "Pretendard-Regular", sans-serif;
  }
  :root {
  --width-variable: 390px;
  --status-bar: 88px;
  --order-bar: 130px;
}

`;
const App = () => {
  const fetchCart = useCartStore((state) => state.fetchCart);
  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <>
      <GlobalStyle />
      <Normalize />
      <Router />
    </>
  );
};

export default App;
