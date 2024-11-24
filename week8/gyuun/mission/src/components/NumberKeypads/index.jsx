import './index.css';

export default function NumberKeypads({numbers,onPress}){
    const handleKeyPress = (number) => {
        return()=>{
            onPress(number);
            console.log(number)
        };
    };
    return (
        <div 
        className='number-keypad'
        >
            <div 
            className='number-keypad-grid'
            >
                {numbers.map((number)=>(
                    <button
                    key={number}
                    className='number-keypad-button'
                    onClick={handleKeyPress(number)}>
                        {number}
                    </button>
                ))}
            </div>
        </div>
    );
}