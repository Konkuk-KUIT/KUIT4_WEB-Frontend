import Button from "../Button";
import { OrderContainer, PriceWrapper } from "./OrderBar.styles.jsx";
import BottomBar from "../../assets/bottomBar.svg";
import useCartStore from "../../pages/Store/cartStore.jsx";

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  const handleOrder = () => {};

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        display: "flex",
        height: "111px",
        flexDirection: "column",
        backgroundColor: "white",
        boxSizing: "border-box",
      }}
    >
      <OrderContainer>
        <PriceWrapper>
          <div className="price-desc">총 주문금액</div>
          <div className="price">
            {menus.reduce((acc, cur) => acc + cur.price, 0)}원
          </div>
        </PriceWrapper>
        <Button onClick={handleOrder} type="button" size="lg">
          {store ? `${store.name} 주문하기` : "주문하기"}
        </Button>
      </OrderContainer>
      <img src={BottomBar} style={{ height: "34px" }} />
    </div>
  );
};

export default OrderBar;
