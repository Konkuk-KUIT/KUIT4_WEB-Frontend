import Header from "../Header";
import PasswordIndicator from "../PasswordIndicator";
import NumberKeypads from "../NumberKeypads";
import { useState } from "react";
import { useEffect, useMemo } from "react";
import shuffle from "../../utils/shuffle";
import { DEFAULT_PASSWORD_LENGTH } from "../../constants/password";
export default function PasswordInput({
  title,
  subtitle,
  onComplete,
  length = DEFAULT_PASSWORD_LENGTH,
}) {
  const [password, setPassword] = useState("");
  const isPasswordCompleted = password.length === length;
  const keypadNumbers = useMemo(() => {
    const numbers = Array.from({ length: 10 }, (_, index) => index);
    shuffle(numbers);
    return numbers; // return 구문이 없으면 keypadNumbers에 할당될 값이 없어 undefined가 할당되어, <NumberKeypads /> 컴포넌트에 props로 undefined가 전달되어 에러가 발생함!!!!
  }, []); //
  const handleKeyPress = (number) => {
    setPassword((prev) => prev + number);

  };
  useEffect(() => {
    if (isPasswordCompleted) {
      onComplete(password);
      console.log(password)

      setPassword("");
    }
  }, [isPasswordCompleted]);
  return (
    <>
      <Header title={title} subtitle={subtitle} />
      <PasswordIndicator length={4} value={password} />
      <NumberKeypads numbers={keypadNumbers} onPress={handleKeyPress} />
    </>
  );
}
