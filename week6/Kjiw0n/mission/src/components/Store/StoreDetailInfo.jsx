import styled from "styled-components";
import { Title, GrayContent } from "../../styles/FontStyle";
import StarIcon from "/src/assets/Star1.svg";

const StoreDetailInfo = ({ storeInfo }) => {
  const storeDescriptions = [
    { label: "결제방법", value: "토스결제만 현장결제 안됨" },
    {
      label: "최소주문",
      value: `${storeInfo.minDeliveryPrice.toLocaleString()}원`,
    },
    {
      label: "배달시간",
      value: `약 ${storeInfo.minDeliveryTime}-${storeInfo.maxDeliveryTime}분`,
    },
  ];
  return (
    <StoreDetailInfoContainer>
      <Title>{storeInfo.name}</Title>
      <StoreReview>
        <ReviewIcon />
        <GrayContent>{storeInfo.rate}</GrayContent>
        <ReviewCnt>리뷰{storeInfo.reviewCnt.toLocaleString()}</ReviewCnt>
      </StoreReview>

      <StoreDescContainer>
        {storeDescriptions.map((desc, index) => (
          <StoreDescWrapper key={index}>
            <Desc>{desc.label}</Desc>
            <Desc>{desc.value}</Desc>
          </StoreDescWrapper>
        ))}
      </StoreDescContainer>
    </StoreDetailInfoContainer>
  );
};

export default StoreDetailInfo;

const StoreDetailInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 26px 24px 14px 24px;
`;

const StoreReview = styled.div`
  display: flex;
  flex-direction: row;
  gap: 9px;
  margin-top: 9px;
`;

const ReviewIcon = styled(StarIcon)`
  width: 18px;
  height: 18px;
  path {
    fill: #ffd158;
  }
`;

const ReviewCnt = styled.p`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const StoreDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 21px;
`;

const StoreDescWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

// StoreDescription Text Style
const Desc = styled.p`
  color: #4e5968;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
