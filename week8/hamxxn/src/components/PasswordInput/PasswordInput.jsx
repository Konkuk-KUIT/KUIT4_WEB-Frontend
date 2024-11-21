import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import PasswordIndicator from "../PasswordIndicator/PasswordIndicator";
import NumberKeypads from "../NumberKeypads/NumberKeypads";
import { shuffle } from "../../utils/shuffle";
import { DEFAULT_PASSWORD_LENGTH } from "../../constant/password";
import { useMemo } from "react";

const PasswordInput = ({
  title,
  subtitle,
  length = DEFAULT_PASSWORD_LENGTH,
  onComplete,
  secure = true,
}) => {
  const [password, setPassword] = useState("");
  const isPasswordCompleted = password.length === length;

  const keypadNumbers = useMemo(
    () => shuffle(Array.from({ length: 10 }, (_, index) => index)),
    []
  );

  const handleKeyPress = (number) => {
    if (password.length < length) {
      setPassword((prev) => prev + number);
    }
  };

  useEffect(() => {
    if (isPasswordCompleted) {
      onComplete(password); // 비밀번호 전달
      setPassword("");
    }
  }, [isPasswordCompleted, password, onComplete]);

  return (
    <Wrapper>
      <Header title={title} subtitle={subtitle} />
      <PasswordIndicator length={length} value={password} />
      <NumberKeypads
        number={keypadNumbers}
        onPress={handleKeyPress}
        secure={secure}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;

export default PasswordInput;
