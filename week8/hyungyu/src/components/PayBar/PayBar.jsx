import useCartStore from "../../store/cartStore";
import Button from "../Button";
import styles from "./PayBar.module.css";

const handleAddMenu = () => {}

const PayBar = () => {
  const store = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);
  const totalMenuPrice = menus.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);

  return (
    <div className={styles.container}>
      <p className={styles.minDeliveryPrice}>최소 주문금액 {store?.minDeliveryPrice}원</p>
      <Button onClick={handleAddMenu} type="button" size="xl" disabled={totalMenuPrice<store?.minDeliveryPrice}>
        {totalMenuPrice+store?.deliveryFee}원 결제하기
      </Button>
    </div>
  )
}

export default PayBar
