import './index.css';

export default function NumberKeypads({ numbers, onPress }) {
    const handelKeyPress = (number) => {
        onPress(number);
        };
    return (
        <div className="number-keypad">
            <div className="number-keypad-grid">
                {numbers.map((number) => (
                    <button key={number} className="number-keypad-button"
                        onClick={() => handelKeyPress(number)}>
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
}