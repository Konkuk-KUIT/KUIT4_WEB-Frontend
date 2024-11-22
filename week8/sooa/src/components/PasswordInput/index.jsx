import Header from "../Header";
import PasswordIndicator from "../PasswordIndicator";
import NumberKeypads from "../NumberKeypads";
import shuffle from "../../utils/shuffle";
import { DEFAULT_PASSWORD_LENGTH } from "../../constants/password";
import { useEffect, useMemo, useState } from "react";

export default function PasswordInput({
  title,
  subtitle,
  onCompleted,
  length = DEFAULT_PASSWORD_LENGTH,
}) {
  const [password, setPassword] = useState("");
  const isPasswordCompleted = password.length == length;

  const keypadNumbers = useMemo(
    () => shuffle(Array.from({ length: 10 }).map((_, index) => index)),
    []
  );

  const handleKeyPress = (number) => {
    setPassword((prev) => prev + number);
  };

  useEffect(() => {
    if (isPasswordCompleted) {
      onCompleted(password);
      setPassword("");
    }
  }, [isPasswordCompleted]);

  return (
    <>
      <Header title={title} subtitle={subtitle} />
      <PasswordIndicator length={length} value={password} />
      <NumberKeypads
        numbers={keypadNumbers}
        onPress={handleKeyPress} // 1, 2, 3, 4,
        // onChange={console.log}  // 1, 12, 123, 1234
      />
    </>
  );
}
