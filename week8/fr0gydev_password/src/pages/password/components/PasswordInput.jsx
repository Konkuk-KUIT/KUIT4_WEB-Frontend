import { useState } from 'react';

import Header from './Header';
import PasswordIndicator from './PasswordIndicator';
import NumberKeypads from './NumberKeypads';
import shuffle from '../utils/shuffle';
import { useEffect, useMemo } from 'react';

export function PasswordInput({ title, subtitle, length, onComplete }) {
  const [password, setPassword] = useState('');

  const isComplete = password.length === length;

  const shuffledNumbers = useMemo(
    () => shuffle(Array.from({ length: 10 }).map((_, index) => index)),
    [],
  );

  const handleKeypadPress = (value) => {
    setPassword((prev) => prev + value);
  };

  const resetPassword = () => {
    setPassword('');
  };

  useEffect(() => {
    if (isComplete) {
      onComplete(password);
      resetPassword();
    }
  }, [isComplete]);

  return (
    <>
      <Header title={title} subtitle={subtitle} />
      <PasswordIndicator length={length} value={password} />
      <NumberKeypads
        numbers={shuffledNumbers}
        onPress={handleKeypadPress}
        secure={true}
      />
    </>
  );
}

export default PasswordInput;
