import { useParams } from "react-router-dom";
// import stores from "../../models/stores";
import useCartStore from "./cartStore";
import MenuItem from "../../components/MenuItem/MenuItem";
import OrderBar from "../../components/OrderBar/OrderBar";
import styles from "./Store.module.css";
import { useEffect,useState } from "react";

import { getStore } from "../../apis/stores";
const Store = ({header_bar}) => {
  const { storeId } = useParams();
  // const store = stores.find((store) => store.id.toString() === storeId);
  // const store = useCartStore((state)=> state.store);
  // const setStore = useCartStore((state)=> state.setStore);
  const addMenu = useCartStore((state)=>state.addMenu)
  const menus = useCartStore((state)=>state.menus)
  const clearCart = useCartStore((state)=>state.clearCart)

  const [store, setStore] = useState();
  useEffect(() => {
    getStore(storeId).then((value) => {
        setStore(value);
      })
  }, [storeId]);
 
  const handleAddMenu = async (menu) => {
    
    console.log("menu",menu)
      // 장바구니에 담긴 가게와 새로 추가하려는 메뉴의 가게가 다른 경우
      if (menus.length > 0 && menu.storeId !== menus[0].storeId) {
        const confirmClear = window.confirm(
          "장바구니에는 동일 가게의 메뉴만 추가할 수 있습니다. 기존 항목을 초기화할까요?"
        );
  
        if (confirmClear) {
          // 장바구니 초기화
          clearCart()
          addMenu(menu,store) // 새 가게의 메뉴로 장바구니 초기화
        }
      } else {
        addMenu(menu,store) // 새 가게의 메뉴로 장바구니 초기화
      }
      // addMenu(menu,store)
   
  };
  
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
          return <MenuItem key={menu.id} menu={menu} handleAddMenu={() => handleAddMenu(menu)}/>;
          //1. 메뉴아이템에 store 주기
          //2. ㅡㄷ
        })}
      </div>
      <OrderBar />
    </div>
  );
};

export default Store;
