import styled from "styled-components";
import Button from "../Button";
import CartInfo from "./CartInfo";
import useCartStore from "../../store/cartStore";

const Order = ({ isUnderMinimumPrice, minDeliveryPrice, totalPrice }) => {
  const store = useCartStore((state) => state.store);

  if (!store) {
    return;
  }

  return (
    <>
      <CartInfo orderPrice={totalPrice} deliveryFee={store.deliveryFee} />

      <BtnContainer>
        {isUnderMinimumPrice && (
          <MinimumPriceInfo>
            최소 주문금액 {minDeliveryPrice.toLocaleString()}원
          </MinimumPriceInfo>
        )}

        <Button size="xl" disabled={isUnderMinimumPrice}>
          {(totalPrice + store.deliveryFee).toLocaleString()}원 결제하기
        </Button>
      </BtnContainer>
    </>
  );
};

export default Order;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 12px;
`;

const MinimumPriceInfo = styled.p`
  color: #6b7684;
  text-align: center;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
