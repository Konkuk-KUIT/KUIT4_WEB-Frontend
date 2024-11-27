import React, { useState } from 'react';
import './NumberKeypads.css';

/**
 *
 * @param {number[]} numbers - The keypad numbers. (required)
 * @param {(number) => void} onPress - The function to be called when a number is clicked.
 * @param {boolean} secure - The flag to indicate if the keypad is secure.
 */

export default function NumberKeypads({ numbers, onPress, secure }) {
    const [pressedNumber, setPressedNumber] = useState(null);
    const [randomNumber, setRandomNumber] = useState(null);

    const isPressed = (number) =>
        number === pressedNumber || number === randomNumber;

    const handlePress = (number) => {
        setPressedNumber(number);

        if (secure) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * numbers.length);
            } while (numbers[randomIndex] === number);

            setRandomNumber(numbers[randomIndex]);
        }
    };

    const handlePressEnd = () => {
        setPressedNumber(null);
        setRandomNumber(null);
    };

    return (
        <div className="number-keypad">
            <div className="number-keypad-grid">
                {numbers.map((number) => (
                    <button
                        key={number}
                        className={`number-keypad-button ${isPressed(number) ? 'pressed' : ''
                            }`}
                        data-number={number}
                        onMouseDown={() => handlePress(number)}
                        onMouseUp={handlePressEnd}
                        onClick={() => onPress(number)}
                    >
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
}