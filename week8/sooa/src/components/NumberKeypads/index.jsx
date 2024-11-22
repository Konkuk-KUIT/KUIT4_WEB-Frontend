import "./index.css";

export default function NumberKeypads({ numbers, onPress }) {
  const handleKeyPress = (number) => {
    onPress(number);
  };

  return (
    <div className="number-keypad">
      <div className="number-keypad-grid">
        {numbers.map((number) => {
          return (
            <button
              key={number}
              className="number-keypad-button"
              onClick={() => handleKeyPress(number)}
            >
              {number}
            </button>
          );
        })}
      </div>
    </div>
  );
}
