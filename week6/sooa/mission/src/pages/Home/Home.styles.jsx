import styled from "styled-components";

const TitleWrapper = styled.div`
  width: inherit;
  height: 93px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  > .title {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 13px;
  }
  > .sub-title {
    font-size: 17px;
    font-weight: 500;
  }
`;

const CategoryWrapper = styled.div`
  margin-top: 70px;
  width: inherit;
  padding: 25px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
export { TitleWrapper, CategoryWrapper };
