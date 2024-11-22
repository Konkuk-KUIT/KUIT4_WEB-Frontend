import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/cartStore";
import Button from "../Button";
import styles from "./OrderBar.module.css";
import { useEffect, useState } from "react";
import { getCart } from "../../apis/cart";

const OrderBar = () => {
  const [cartInfo, setCartInfo] = useState([]);
  // const menus = useCartStore((state) => state.menus);
  useEffect(() => {
    getCart().then((value) => {
      setCartInfo(value); // API 결과를 상태에 저장
    });
  }, [cartInfo]);

  // useNavigate사용하여 주문하기 버튼 클릭시 cart로 넘어가게 설정
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/cart");
  };
  if (!cartInfo || cartInfo.length === 0 || !cartInfo[0]?.store) {
    return (
      <div className={styles.orderBarContainer}>
        <div className={styles.orderBarText}>
          <div className={styles.orderTotalPriceText}>총 주문금액</div>
          <div className={styles.orderTotalPrice}>0원</div>
        </div>
        <div className={styles.orderBarButton}>
          <Button onClick={handleOrder} type="button" size="lg">
            주문하기
          </Button>
        </div>
      </div>
    );
  }
  const menus = cartInfo[0].menus;
  return (
    <div className={styles.orderBarContainer}>
      <div className={styles.orderBarText}>
        <div className={styles.orderTotalPriceText}>총 주문금액</div>
        <div className={styles.orderTotalPrice}>
          {/* toLocalString으로 사용하여 1000단위 쉼표 넣기 */}
          {menus
            .reduce(
              (acc, currentMenu) => acc + currentMenu.price * currentMenu.cnt,
              0
            )
            .toLocaleString()}
          원
        </div>
      </div>
      <div className={styles.orderBarButton}>
        <Button onClick={handleOrder} type="button" size="lg">
          {/* optional chaning : ?를 붙여줘서 prop가 존재하지 않을 때는 undefined로 비워둠 */}
          {/* {store?.name && `${store.name}에서 `} */}
          주문하기
        </Button>
      </div>
    </div>
  );
};

export default OrderBar;
