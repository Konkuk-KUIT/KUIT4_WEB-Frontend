import React from "react";
import styled from "styled-components";

const NumberKeypads = ({ number, onPress, secure = false }) => {
  return (
    <KeypadWrapper>
      {number.map((num) => (
        <div key={`num-${num}`} onClick={() => onPress(num)}>
          {num}
        </div>
      ))}
    </KeypadWrapper>
  );
};

const KeypadWrapper = styled.div`
  width: 390px;
  position: fixed;
  bottom: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 30px;
  box-sizing: border-box;

  > div {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export default NumberKeypads;
