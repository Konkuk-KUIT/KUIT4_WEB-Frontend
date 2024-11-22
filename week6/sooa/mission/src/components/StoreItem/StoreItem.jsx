import RatingStar from "../../assets/rating-star.svg";
import { Link } from "react-router-dom";
import { Wrapper, LeftWrapper, RightWrapper, Store } from "./StoreItem.styles";

const StoreItem = ({ store }) => {
  const linkSrc = "/store/" + store.id;
  return (
    <Link to={linkSrc}>
      <Wrapper>
        <LeftWrapper>
          <div></div>
        </LeftWrapper>
        <RightWrapper>
          <Store>
            <span className="store-name">{store.id}위</span>
            <span className="store-name">{store.name}</span>
          </Store>
          <Store>
            <div>
              <img src={RatingStar} />
              <span className="store-name__description">
                {store.rate} ({store.reviewCnt})
              </span>
            </div>
            <span className="store-name__description">
              {store.minDeliveryTime}분~{store.maxDeliveryTime}분 ∙ 배달비{" "}
              {store.deliveryFee}원
            </span>
          </Store>
        </RightWrapper>
      </Wrapper>
    </Link>
  );
};

export default StoreItem;
