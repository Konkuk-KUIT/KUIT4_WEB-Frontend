import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
`;
const MenuImg = styled.div`
  width: 54px;
  height: 54px;
  margin: 28px 16px 28px 24px;
  border-radius: 27px;
  background: #ececec;
`;
const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 201px;
  gap: 5px;
  margin-top: 16px;
  > h3 {
    height: 20px;
    font-size: 17px;
    font-weight: 600;
    margin: 0;
  }
  > span {
    width: 45px;
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
  margin-left: 19px;
`;

export { Wrapper, RightWrapper, ButtonWrapper, MenuImg };
