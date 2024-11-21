import Button from "../Button";
import { Wrapper } from "./OrderBar.styles.jsx";
import useCartStore from "../../pages/Store/cartStore.jsx";
import BottomBar from "../../assets/bottomBar.svg";

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  const totalPrice = menus.reduce((acc, cur) => acc + cur.price, 0);

  const handleOrder = () => {};

  return (
    <Wrapper>
      <div className="price-desc">최소 주문금액 {store.minDeliveryPrice}원</div>
      <Button
        disabled={!store || totalPrice < store.minDeliveryPrice}
        size="xl"
      >
        {totalPrice + store.deliveryFee}원 결제하기
      </Button>
      <img src={BottomBar} />
    </Wrapper>
  );
};

export default OrderBar;
