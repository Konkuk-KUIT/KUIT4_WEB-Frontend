/* eslint-disable no-unreachable */
/* eslint-disable no-fallthrough */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import validatePassword from "./utils/validatePassword";
import Header from "../../components/Header/Header";

const STEP = {
    INIT: 'INIT',
    CONFIRM: 'CONFIRM',
    COMPLETE: 'COMPLETE',
    ERROR: 'ERROR',
};

export default function PasswordPage() {
    const [password, setPassword] = useState('');
    const [step, setStep] = useState({
        name: STEP.INIT,
        payload: {},
    });

    const handlePasswordComplete = (value) => {
        switch (step.name){
            case STEP.INIT:
            case STEP.ERROR: {
                const {isValid, errorMessage} = validatePassword(value);

                if(isValid) {
                    setPassword(value);
                    setStep({
                        name: STEP.CONFIRM,
                    });
                }else {
                    setStep({
                        name: STEP.ERROR,
                        payload: {
                            message: errorMessage,
                        },
                    });
                }
                break;
            }

            case STEP.CONFIRM: {
                const isValid = password === value;

                if(isValid) {
                    setStep({
                        name: STEP.COMPLETE,
                    });
                }else{
                    setStep({
                        name: STEP.ERROR,
                        payload: {
                            message: "비밀번호가 일치하지 않습니다.",
                        }
                    });
                }
                break;
            }
        }
    }

    switch (step.name) {
        case STEP.INIT:{
            return(
                <PasswordInput
                    key={step.name}
                    title={'비밀번호를 입력해주세요'}
                    onComplete={handlePasswordComplete}
                    secure={true}
                />
            );
            break;
        }
        
        case STEP.CONFIRM:{
            return(
                <PasswordInput
                    key={step.name}
                    title={"비밀번호를 한번 더\n입력해주세요"}
                    onComplete={handlePasswordComplete}
                    secure={true}
                />
            );
            break;
        }
        
        case STEP.ERROR:{
            return(
                <PasswordInput
                    key={`${step.name}-${step.payload.message}`}
                    title={"비밀번호를 다시 입력해주세요"}
                    subtitle={<span style={{color: 'red'}}>{step.payload.message}</span>}
                    onComplete={handlePasswordComplete}
                    secure={true}
                />
            );
            break;
        }

        default:
            return (
                <>
                    <Header title={'비밀번호 입력을 완료했어요!'} subtitle={password} />
                </>
            );
    }
}