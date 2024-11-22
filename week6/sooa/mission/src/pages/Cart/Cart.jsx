import HeaderBar from "../../components/HeaderBar";
import CartItem from "../../components/CartItem/CartItem";
import { Wrapper } from "../../components/Wrapper.styles";
import Warning from "../../assets/warning.svg";
import {
  Bar,
  CartWrapper,
  CalWrapper,
  Cal,
  BottomWrapper,
} from "./Cart.styles";
import Button from "../../components/Button";
import BottomBar from "../../components/OrderBar/BottomBar";
import useCartStore from "../../store/useCartStore";

const Cart = () => {
  const store = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);
  const price = menus.reduce((acc, cur) => acc + cur.price, 0);
  let flag = true;

  const sortedMenus = menus.reduce((acc, cur) => {
    //cur이 acc에 존재하지 않으면 추가, 존재하면 count 올리기
    const found = acc.find((menu) => menu.id == cur.id);

    if (found) found.count += 1;
    else acc.push({ ...cur, count: 1 });

    return acc;
  }, []);

  return (
    <Wrapper>
      <HeaderBar arrow={true} cancel={true} />
      <Bar />
      <CartWrapper>
        <p>{store.name}</p>
        <div>
          {price < store.minDeliveryPrice && (
            <>
              <span>최소금액 미달</span>
              <img src={Warning} />
            </>
          )}
        </div>
      </CartWrapper>
      <div>
        {sortedMenus.map((menu) => {
          return <CartItem key={menu.id} menu={menu} />;
        })}
      </div>
      <CartWrapper>
        <span>더 담기 +</span>
      </CartWrapper>
      <Bar />
      <CalWrapper>
        <Cal>
          <span className="description">주문금액</span>
          <span className="price">{price}원</span>
        </Cal>
        <Cal>
          <span className="description">배달요금</span>
          <span className="price">{store.deliveryFee}원</span>
        </Cal>
        <Cal>
          <span className="result-description">총 결제금액</span>
          <span className="result-price">{price + store.deliveryFee}원</span>
        </Cal>
      </CalWrapper>
      <BottomWrapper>
        <span>최소 주문금액 {store.minDeliveryPrice}원</span>
        {price >= store.minDeliveryPrice ? (flag = false) : (flag = true)}
        <Button type="button" size="xl" disabled={flag}>
          {price + store.deliveryFee}원 결제하기
        </Button>
        <BottomBar />
      </BottomWrapper>
    </Wrapper>
  );
};

export default Cart;
