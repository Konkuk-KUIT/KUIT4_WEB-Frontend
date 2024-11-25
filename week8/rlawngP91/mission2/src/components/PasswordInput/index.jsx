import Header from "../Header";
import PasswordIndicator from '../PasswordIndicator';
import NumberKeypads from '../NumberKeypads';
import { useEffect, useState, useMemo } from "react";
import { DEFAULT_PASSWORD_LENGTH } from "../../constants/password";
import { shuffle } from "../../utils/shuffle";


export default function PasswordInput({ title, subtitle, onCompleted, length = DEFAULT_PASSWORD_LENGTH }) {
    const [password, setPassword] = useState('');
    const isPasswordCompleted = password.length == 4;

    const keypadNumbers = useMemo(() => shuffle(Array.from({length: 10}, (_, index) => index)), []);

    const handleKeyPress = (number) => {
        setPassword((prev) => prev + number);
    };

    useEffect(() => {
        if (isPasswordCompleted) {
            onCompleted(password);
            setPassword('');
        }
    }, [isPasswordCompleted]);
    
    return (
        <>
            <Header 
                title={title} 
                subtitle={
                    <span style={{ color: 'red' }}>
                        {subtitle}
                    </span>
                }
            />
            <PasswordIndicator length={length} value={password} />
            <NumberKeypads 
                numbers={keypadNumbers} 
                onPress={handleKeyPress} 
            />
        </>
    );
}