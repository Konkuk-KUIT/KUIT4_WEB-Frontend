import { useParams } from "react-router-dom";
// import stores from "../../models/stores";
// import useCartStore from "./cartStore";
import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import styles from "./Store.module.css";
import { useEffect, useState } from "react";

import {getStore} from "../../api/stores"
import useCartStore from "./cartStore";

const Store = ({header_bar}) => {
  // const store = stores.find((store) => store.id.toString() === storeId);
  // const setStore = useCartStore((state)=> state.setStore);
  const {storeId} =useParams();
  const[store, setStore] =useState();
  const addMenu = useCartStore((state)=>state.addMenu);

  useEffect(()=>  {
    getStore(storeId).then((value)=>setStore(value));
    getStore(storeId).then((value)=>console.log("이것은 store.jsx의 value: ",value));

  },[]);

  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }
const handleAddMenu =(menu) => {
    addMenu(menu, store);
};
  return (
    <div>
          {header_bar(true)}
      {/* <div className={styles.box}>
        <div className={styles.namebox}><div className={styles.name}>{store.name}</div></div>
        <div className={styles.starbox}>
          <img src="/star1.png" alt="star" className={styles.star}/>
          <div className={styles.rate}>{store.rate}</div>
          <div className={styles.review}>리뷰 {store.reviewCnt}</div>
        </div>
        <div className={styles.asign}><div className={styles.toss}>결제방법 토스결제만 현장결제 안됨</div></div>
        <div className={styles.minprice}><div className={styles.minpdeliveryprice}>최소주문 {store.minDeliveryPrice}원</div></div>
        <div className={styles.time}><div className={styles.deliverytime}>배달시간 약{store.minDeliveryTime}-{store.maxDeliveryTime}분</div></div>
      </div>
      <div className={styles.salad}>샐러드</div>
      <div className={styles.menu}>
        {store.menus.map((menu) => {
          return <MenuItem key={menu.id} menu={menu} handleAddMenu={handleAddMenu} />;
        })}
      </div> */}
      <h1> {store.name}</h1>
      <div>
        {store.menus.map((menu)=>{
          return(
            <MenuItem key={menu.id} menu={menu} handleAddMenu={()=>handleAddMenu(menu)} />
          );
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Store;