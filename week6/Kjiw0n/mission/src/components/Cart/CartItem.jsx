import styled from "styled-components";
import { ItemTitle, ItemContent } from "../../styles/FontStyle";
import Arrow from "/src/assets/arrowBack.svg";

const CartItem = ({ menu }) => {
  return (
    <CartItemContainer>
      <ItemInfoContainer>
        <ItemImg src="http://placehold.co/54" />
        <ItemInfoWrapper>
          <ItemTitle>{menu.name}</ItemTitle>
          <ItemContent style={{ width: "210px" }}>
            {menu.ingredients}
          </ItemContent>
          <ItemContent>{menu.price.toLocaleString()}원</ItemContent>
        </ItemInfoWrapper>
      </ItemInfoContainer>

      <ItemCnt>{menu.cnt}</ItemCnt>
      <ArrowIcon />
    </CartItemContainer>
  );
};

export default CartItem;

const CartItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  padding: 16px 0;
`;

const ItemInfoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  gap: 16px;
`;

const ItemImg = styled.img``;

const ItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const ItemCnt = styled.p`
  color: #6b7684;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ArrowIcon = styled(Arrow)`
  width: 16px;
  height: 16px;
  transform: rotate(180deg);
  path {
    fill: #6b7684;
  }
`;
