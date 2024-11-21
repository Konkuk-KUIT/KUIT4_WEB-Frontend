import React from "react";
import styled from "styled-components";
const Header = ({ title, subtitle }) => {
  return (
    <HeaderWrapper>
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > .title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  > .subtitle {
    color: red;
  }
`;
export default Header;
