import { Link } from "react-router-dom";
import styles from "./Cart.module.css";
import ShowSelectedMenus from "./ShowSelectedMenus/ShowSelectedMenus";
import useCartStore from "../../store/cartStore";

const Cart = () => {
  const store = useCartStore((state) => state.menusFrom);
  const menus = useCartStore((state) => state.menus);
  const totalMenuPrice = menus.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

  const resetStore = useCartStore((state) => state.resetStore);
  const handleCancleOrder = () => {
    if(window.confirm("주문을 취소하시겠습니까?")){
      resetStore();
      alert("취소되었습니다.");
    }
  } 

  return(
    <div className={styles.container}>
      <div className={styles.selectedMenus}>
        <div className={styles.storeInfo}>
          <span className={styles.storeName}>{store?.name}</span>
          {totalMenuPrice < store?.minDeliveryPrice ? 
          <span className={styles.priceError}>최소금액 미달<img src="/warning.svg" alt="warningSVG" /></span>
          : <></>}
        </div>
        {menus.map((menu) => {
          return(
            <ShowSelectedMenus key={menu.id} menu={menu} cnt={menu.quantity}/>
          );
        })}
      </div>
      <div className={styles.getMore}>
        {/* <Link to={`/store/${store?.id}`} className={styles.getMoreTextLink}> */}
        <Link to={store ? `/store/${store?.id}` : '/store'} className={styles.getMoreTextLink}>
          <div className={styles.getMoreTextBox}>
            더 담기
            <img src="/getMoreBtn.svg" alt="getMoreBtnSVG" />
          </div>
        </Link>
      </div>
      <div className={styles.orderInfo}>
        <div className={styles.orderPrice}>
          <span className={styles.orderPriceText}>주문금액</span>
          <span className={styles.orderPricePrice}>{totalMenuPrice}원</span>
        </div>
        <div className={styles.deliveryFee}>
          <span className={styles.deliveryFeeText}>배달요금</span>
          <span className={styles.deliveryFeePrice}>{store?.deliveryFee}원</span>
        </div>
        <div className={styles.totalPrice}>
          <span className={styles.totalPriceText}>총 결제금액</span>
          <span className={styles.totalPricePrice}>{totalMenuPrice+store?.deliveryFee}원</span>
        </div>
      </div>
      <div className={styles.cancleOrder} onClick={handleCancleOrder}>주문취소</div>
    </div>
  );
};

export default Cart;
