import Button from "../Button";
import { Link } from "react-router-dom";
import styles from "./OrderBar.module.css";
import useCartStore from "../../store/cartStore";

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);

  const handleOrder = () => {};

  return (
    <div className={styles.orderBarContainer}>
      <div className={styles.orderInfo}>
        <div className={styles.totalPriceWords}>총 주문금액</div>
        <div className={styles.totalPrice}>{menus.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)}원</div>
      </div>
        <Link to="/cart" className={styles.orderBtnText}>
          <Button onClick={handleOrder} type="button" size="lg">
            {store?.name && `${store.name}에서 `}주문하기
          </Button>
        </Link>
      </div>
  );
};

export default OrderBar;