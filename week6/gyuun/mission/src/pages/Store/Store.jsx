import { useParams } from "react-router-dom";
import stores from "../../models/stores";
import useCartStore from "./cartStore";
import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import styles from "./Store.module.css";
import { useEffect } from "react";


const Store = ({header_bar}) => {
  const { storeId } = useParams();
  const store = stores.find((store) => store.id.toString() === storeId);
  const setStore = useCartStore((state)=> state.setStore);
  useEffect(()=>{
    if(store){
      setStore(store);
    }
  },[])
  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  return (
    <div>
          {header_bar(true)}
      <div className={styles.box}>
        <div className={styles.namebox}><div className={styles.name}>{store.name}</div></div>{/*이름 */}
        <div className={styles.starbox}>
          <img src="/goldstar.svg" alt="goldstarout" className={styles.star}/>
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
          return <MenuItem key={menu.id} menu={menu} />;
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Store;
