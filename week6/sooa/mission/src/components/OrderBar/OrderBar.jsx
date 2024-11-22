import Button from "../Button";
import BottomBar from "./BottomBar";
import { Link } from "react-router-dom";
import { Wrapper, TopWrapper, PriceWrapper } from "./OrderBar.styles";
import useCartStore from "../../store/useCartStore";

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  console.log(menus); // 상태가 변경될 때마다 출력

  const store = useCartStore((state) => state.store);
  const handleOrder = () => {};

  console.log("Menus:", menus);
  console.log("Store:", store);

  return (
    <Wrapper>
      <TopWrapper>
        <PriceWrapper>
          <div className="price-description">총 주문금액</div>
          <div className="price">
            {menus.reduce((acc, cur) => acc + cur.price, 0)}원
          </div>
        </PriceWrapper>
        <Link to="/cart">
          <Button onClick={handleOrder} type="button" size="lg">
            {store?.name && `${store.name}에서 `}주문하기
          </Button>
        </Link>
      </TopWrapper>
      <BottomBar />
    </Wrapper>
  );
};

export default OrderBar;
