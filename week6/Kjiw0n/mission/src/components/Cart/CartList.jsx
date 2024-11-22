import styled from "styled-components";
import WarnningIcon from "/src/assets/WarnningIcon.svg";
import CartItem from "./CartItem";
import useCartStore from "../../store/cartStore";
import { useNavigate } from "react-router-dom";

const CartList = ({ isUnderMinimumPrice }) => {
  const store = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);

  const navigate = useNavigate();

  const handleMoreOrder = () => {
    navigate(`/store/${store.id}`);
  };

  if (menus.length == 0) {
    return <div>장바구니에 메뉴가 없어요 🥺</div>;
  }

  const countedMenus = menus.reduce((acc, item) => {
    const existingItem = acc.find((el) => el.id === item.id);
    if (existingItem) {
      existingItem.cnt += 1;
    } else {
      acc.push({ ...item, cnt: 1 });
    }
    return acc;
  }, []);

  return (
    <CartListContainer>
      {isUnderMinimumPrice && (
        <WarnningContainer>
          <p>최소금액 미달</p>
          <WarnningIcon style={{ width: "13px", height: "13px" }} />
        </WarnningContainer>
      )}

      <StoreName>{store?.name}</StoreName>
      {countedMenus.map((menu) => {
        return <CartItem key={menu.id} menu={menu} />;
      })}

      <Line1></Line1>
      <CartMore onClick={handleMoreOrder}>더 담기 +</CartMore>
    </CartListContainer>
  );
};

export default CartList;

const CartListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 26px 0 0 24px;
  position: relative;
`;

const WarnningContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  position: absolute;
  top: 30px;
  right: 25px;

  p {
    color: #f04452;
    text-align: right;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const StoreName = styled.p`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-bottom: 12px;
`;

const Line1 = styled.div`
  width: 390px;
  height: 1px;
  background: #f2f4f6;
`;

const CartMore = styled.p`
  width: 100%;
  text-align: center;
  padding: 20px 0;
  color: #3182f6;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
