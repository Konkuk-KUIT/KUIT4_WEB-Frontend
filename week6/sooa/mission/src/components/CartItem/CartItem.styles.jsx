import styled from "styled-components";

const Wrapper = styled.div`
  width: 390px;
  height: 110px;
  display: flex;
  padding: 16px;
  box-sizing: border-box;
`;

const MenuImg = styled.div`
  width: 54px;
  height: 54px;
  margin: 3px 8px 21px 16px;
  border-radius: 8px;
  background: #ececec;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  gap: 5px;
  margin-left: 17px;
  > h3 {
    font-size: 17px;
    font-weight: 700;
    color: #333d4b;
    margin: 0;
  }
  > span {
    width: 53px;
    height: 16px;
    font-size: 13px;
    font-weight: 500;
    color: #6b7684;
  }
  > p {
    width: inherit;
    height: 32px;
    font-size: 13px;
    font-weight: 500;
    color: #6b7684;
    margin: 0;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
  > span {
    width: 20px;
    height: 18px;
    font-size: 15px;
    font-weight: 500;
    color: #6b7684;
  }
`;

export { Wrapper, RightWrapper, ButtonWrapper, MenuImg };
