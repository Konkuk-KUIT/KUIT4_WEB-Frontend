/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Header from '../Header/Header';
import PasswordIndicator from '../PasswordIndicator/PasswordIndicator';
import NumberKeypads from '../NumberKeypads/NumberKeypads';
import shuffle from '../../utils/shuffle';
import { DEFAULT_PASSWORD_LENGTH } from '../../constants/password';

import { useEffect, useMemo } from 'react';
import { useState } from 'react';

export function PasswordInput({ title, subtitle, length = DEFAULT_PASSWORD_LENGTH, onComplete, secure = true }) {
  const [password, setPassword] = useState('');

  const isComplete = password.length === length;

  const shuffledNumbers = useMemo(
    () => shuffle(Array.from({ length: 10 }).map((_, index) => index)),
    [],
  );

  const handleKeypadPress = (value) => {
    setPassword((prev) => prev + value);
  };

  useEffect(() => {
    if (isComplete) {
      onComplete(password);
      setPassword(''); //resetPassword
    }
  }, [isComplete]);

  return (
    <>
      <Header title={title} subtitle={subtitle} />
      <PasswordIndicator length={length} value={password} />
      <NumberKeypads
        numbers={shuffledNumbers}
        onPress={handleKeypadPress}
        secure={secure}
      />
    </>
  );
}

export default PasswordInput;