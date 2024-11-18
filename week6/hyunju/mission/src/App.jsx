
import Router from "./pages/index";
import React from "react";
import {useEffect} from "react";
import {getStore} from './api/stores'
import useCartStore from "./pages/Store/cartStore";


function App() {

  //브라우저에서 한번에 6개 HTTP요청만 보낼 수 있고, 그 이상 넘어가는 개수는 큐에서 대기함, 그래서 한번에 App.jsx에서 한번에 싹다 요청xx
  //필요할때 요청하기
  
  // useEffect(()=>{
  //   getStore().then((value)=> console.log(value));
  // }, []);

  const fetchCart = useCartStore((state) => state.fetchCart);
  useEffect(()=>{
    fetchCart();
  }, []);

  return <Router />;
}

export default App;
