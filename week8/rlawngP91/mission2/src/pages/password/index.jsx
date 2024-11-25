import { useState } from "react";
import PasswordInput from "../../components/PasswordInput";
import validatePassword from "./utils/validatePassword"
import Header from "../../components/Header";

const STEP = {
    INIT: 'INIT',
    CONFIRM: 'CONFIRM',
    COMPLETE: 'COMPLETE'
};

export default function PasswordPage() { 
    const [password, setPassword] = useState('');
    const [step, setStep] = useState({
        name: STEP.INIT,
        payload: {},
    });

    const handlePasswordComplete = (value) => {
        switch (step.name) {
            case STEP.INIT:
            case STEP.ERROR:
                {
                const {isValid, errorMessage} = validatePassword(value);
                if (isValid) {
                    setPassword(value);
                    setStep({
                        name: STEP.CONFIRM,
                    });
                } else {
                    setStep({
                        name: STEP.ERROR,
                        payload: {message: errorMessage}
                    });
                }
                break;
            }
            case STEP.CONFIRM: {
                const isValid = password === value;
                if (isValid) {
                    setStep({
                        name: STEP.COMPLETE,
                    });
                } else {
                    setStep({
                        name: STEP.ERROR,
                        payload: {message: "password is not correct!"}
                    });
                }
                break;
            }   
        }
    }

    switch (step.name) {
        case STEP.INIT: {
            return (
                <PasswordInput key={step.name} title={'Enter your password!'} onCompleted={handlePasswordComplete} />
            );
        }
        case STEP.CONFIRM: {
            return (
                <PasswordInput key={step.name} title={'Retry your password!'} onCompleted={handlePasswordComplete} />
            );
        }
        case STEP.ERROR: {
            return (
                <PasswordInput key={`${step.name} - ${step.errorMessage}`}
                    title={'Retry your password'}
                    subtitle={<span style={{ color: 'red' }} > { step.payload.message }</span >}
            onCompleted = { handlePasswordComplete } />
            );
        }
        default:
            return <>
            <Header title={'Hi, Your password is correct!!'} subtitle={password}/>
            </>
    }
}