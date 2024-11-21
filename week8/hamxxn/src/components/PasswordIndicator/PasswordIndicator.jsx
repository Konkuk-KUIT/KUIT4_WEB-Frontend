import React from "react";
import styled from "styled-components";

const PasswordIndicator = ({ length, value }) => {
  console.log("password press");
  return (
    <PasswordWrapper>
      {Array.from({ length: value.length }).map((_, i) => (
        <div key={`black-${i}`} className="black"></div>
      ))}
      {Array.from({ length: length - value.length }).map((_, i) => (
        <div key={`grey-${i}`} className="grey"></div>
      ))}
    </PasswordWrapper>
  );
};

const PasswordWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  > div {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0 5px;
  }
  > .black {
    background-color: black;
  }
  > .grey {
    background-color: grey;
  }
`;

export default PasswordIndicator;
