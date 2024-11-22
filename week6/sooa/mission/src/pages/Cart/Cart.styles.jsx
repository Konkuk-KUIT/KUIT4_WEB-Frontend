import styled from "styled-components";

const Bar = styled.div`
  width: 390px;
  height: 16px;
  background: #f2f4f6;
`;

const CartWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 80px;
  align-items: center;
  width: 390px;
  height: 59px;
  border-top: 1px solid #e5e8eb;
  > p {
    height: 20px;
    font-size: 17px;
    font-weight: 700;
    color: #6b7684;
  }
  > div {
    display: flex;
    width: 110px;
    gap: 6px;
    font-size: 15px;
    font-weight: 500;
    color: #f04452;
  }

  > span {
    width: 68px;
    height: 20px;
    color: #3182f6;
  }
`;

const CalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 390px;
  height: 147px;
  margin-top: 16px;
`;

const Cal = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  font-weight: 500;
  padding: 9px 24px;
  box-sizing: border-box;
  > .description {
    color: #8b95a1;
  }
  > .price {
    color: #505967;
  }
  > .result-description {
    color: #4e5968;
  }
  > .result-price {
    font-size: 17px;
    font-weight: 600;
    color: #4e5968;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  > span {
    font-size: 17px;
    font-weight: 500;
    color: #6b7684;
  }
  > Button {
    margin: 19px 20px 0 20px;
  }
`;

export { Bar, CartWrapper, CalWrapper, Cal, BottomWrapper };
