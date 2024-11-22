import Router from "./pages/Router";
import { Normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { useEffect } from "react";
import useCartStore from "./store/useCartStore";
const GlobalStyle = createGlobalStyle`

  @font-face {
  font-family: "Pretendard-Regular";
  src: url("https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
    format("woff");
  font-weight: 400;
  font-style: normal;
}

  body {
    font-family: "Pretendard-Regular", sans-serif;
  }

`;

const App = () => {
  const fetchCart = useCartStore((state) => state.fetchCart);
  useEffect(() => {
    fetchCart();
  }, []);
  const menus = useCartStore((state) => state.menus);
  console.log(menus);
  return (
    <>
      <GlobalStyle />
      <Normalize />
      <Router />
    </>
  );
};

export default App;
