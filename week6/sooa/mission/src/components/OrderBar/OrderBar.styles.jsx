import styled from "styled-components";

const Wrapper = styled.div`
  width: 390px;
  height: 111px;
  background-color: white;
  box-shadow: 0px -8px 16px 0px #0000001a;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  border-radius: 16px 16px 0px 0px;
`;

const TopWrapper = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  padding: 16px 24px 18px 24px;
  box-sizing: border-box;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > .price-description {
    width: 69px;
    height: 18px;
    font-size: 15px;
    font-weight: 400;
    color: #6b7684;
    margin-bottom: 5px;
  }
  > .price {
    width: 66px;
    height: 20px;
    font-size: 17px;
    font-weight: 600;
    color: #4e5968;
  }
`;
const BottomWrapper = styled.div`
  width: inherit;
  height: 34px;
  display: flex;
  justify-content: center;
  > div {
    width: 134px;
    height: 5px;
    margin-top: 21px;
    border-radius: 100px;
    background-color: black;
  }
`;

export { Wrapper, TopWrapper, BottomWrapper, PriceWrapper };
