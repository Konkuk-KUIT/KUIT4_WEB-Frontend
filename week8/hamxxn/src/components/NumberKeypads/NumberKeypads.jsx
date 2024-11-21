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
  gap: 10px;
  box-sizing: border-box;

  > div {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 10px;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
  }
`;

export default NumberKeypads;
