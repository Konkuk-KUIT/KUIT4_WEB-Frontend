import { useState } from 'react';

import PasswordInput from './components/PasswordInput/PasswordInput';
import validatePassword from './utils/validatePassword';
import Header from './components/Header/Header';

const PASSWORD_LENGTH = 4;

function PasswordPage() {
    const [password, setPassword] = useState('');
    const [step, setStep] = useState({
        name: 'INIT',
        payload: {},
    });

    const handleComplete = (value) => {
        switch (step.name) {
            case 'INIT': {
                const { isValid, errorMessage } = validatePassword(value);
                if (isValid) {
                    setPassword(value);
                    setStep({ name: 'CONFIRM' });
                } else {
                    setStep({ name: 'ERROR', payload: { message: errorMessage } });
                }
                break;
            }

            case 'CONFIRM': {
                if (password === value) {
                    setStep({ name: 'COMPLETE' });
                } else {
                    setStep({
                        name: 'ERROR',
                        payload: { message: '비밀번호가 일치하지 않습니다.' },
                    });
                }
                break;
            }

            case 'ERROR': {
                const { isValid, errorMessage } = validatePassword(value);
                if (isValid) {
                    setPassword(value);
                    setStep({ name: 'CONFIRM' });
                } else {
                    setStep({ name: 'ERROR', payload: { message: errorMessage } });
                }
                break;
            }

            default:
                break;
        }
    };

    switch (step.name) {
        case 'INIT':
            return (
                <PasswordInput
                    key={step.name}
                    title={'비밀번호를 입력해주세요'}
                    length={PASSWORD_LENGTH}
                    onComplete={handleComplete}
                />
            );

        case 'CONFIRM':
            return (
                <PasswordInput
                    key={step.name}
                    title={'비밀번호를 다시 한 번 입력해주세요'}
                    length={PASSWORD_LENGTH}
                    onComplete={handleComplete}
                />
            );

        case 'ERROR':
            return (
                <PasswordInput
                    key={step.name}
                    title={'비밀번호를 다시 입력해주세요'}
                    subtitle={step.payload.message}
                    length={PASSWORD_LENGTH}
                    onComplete={handleComplete}
                />
            );

        case 'COMPLETE':
            return <Header title="비밀번호 입력을 완료했어요!" />;

        default:
            return null;
    }
}

export default PasswordPage;