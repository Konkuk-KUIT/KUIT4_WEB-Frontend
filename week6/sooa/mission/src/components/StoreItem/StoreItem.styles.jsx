import styled from "styled-components";

const Wrapper = styled.div`
  width: 390px;
  height: 116px;
  display: flex;
  padding: 16px;
  box-sizing: border-box;
`;

const LeftWrapper = styled.div`
  width: 54px;
  height: inherit;
  margin-right: 17px;
  margin-left: 8px;
  > div {
    width: 54px;
    height: 54px;
    border-radius: 8px;
    background-color: #ececec;
  }
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Store = styled.div`
  display: flex;
  flex-direction: column;
  > .store-name {
    height: 20px;
    font-size: 17px;
    font-weight: 600;
    margin-top: 2px;
    color: #333d4b;
  }
  > .store-name__description {
    height: 16px;
    font-size: 13px;
    font-weight: 500;
    margin-top: 4px;
    color: #6b7684;
  }
  > div {
    display: flex;
    margin-top: 5px;
    > .store-name__description {
      margin-left: 1px;
      height: 16px;
      font-size: 13px;
      font-weight: 500;
      color: #6b7684;
    }
  }
`;

export { Wrapper, LeftWrapper, RightWrapper, Store };
