import {
  StoreWrapper,
  Title,
  Desc,
  DescWrapper,
  SubDesc,
} from "./Store.styles";
import YellowStar from "../../assets/rating-yellowstar.svg";

const StoreDescription = ({ store }) => {
  return (
    <StoreWrapper>
      <Title>{store.name}</Title>
      <Desc>
        <img src={YellowStar} />
        <span className="store-rate">{store.rate}</span>
        <span className="store-review">리뷰{store.reviewCnt}</span>
      </Desc>
      <DescWrapper>
        <SubDesc>
          <span>결제방법</span>
          <span>토스결제만 현장결제 안됨</span>
        </SubDesc>
        <SubDesc>
          <span>최소주문</span>
          <span>{store.minDeliveryPrice}원</span>
        </SubDesc>
        <SubDesc>
          <span>배달시간</span>
          <span>
            약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
          </span>
        </SubDesc>
      </DescWrapper>
      <hr />
    </StoreWrapper>
  );
};

export default StoreDescription;
