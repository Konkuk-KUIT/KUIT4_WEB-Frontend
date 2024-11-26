import styled from "styled-components";
import { GrayContent } from "../../styles/FontStyle";

const CartInfo = ({ orderPrice, deliveryFee }) => {
  const totalPrice = orderPrice + deliveryFee;

  return (
    <CartInfoContainer>
      <Wrapper>
        <CartContent>주문금액</CartContent>
        <CartPrice>{orderPrice.toLocaleString()}원</CartPrice>
      </Wrapper>
      <Wrapper>
        <CartContent>배달요금</CartContent>
        <CartPrice>{deliveryFee.toLocaleString()}원</CartPrice>
      </Wrapper>

      <TotalWrapper>
        <CartTitle>총 결제금액</CartTitle>
        <GrayContent style={{ textAlign: "right" }}>
          {totalPrice.toLocaleString()}원
        </GrayContent>
      </TotalWrapper>
    </CartInfoContainer>
  );
};

export default CartInfo;

const CartInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 16px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  box-sizing: border-box;
`;

const TotalWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  box-sizing: border-box;
`;

const CartContent = styled.p`
  color: #8b95a1;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CartPrice = styled.p`
  color: #505967;
  text-align: right;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CartTitle = styled.p`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
