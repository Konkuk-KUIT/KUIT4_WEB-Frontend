export default function validatePassword(password) {
    const easyPasswords = ['2580', '1004', '1234', '1357'];

    for (let i = 0; i < password.length - 2; i++){
        if (
            Number(password[i]) +1 === Number(password[i+1]) && Number(password[i+1]) +1 === Number(password[i+2])
        ) {
            return {
                isValid: false,
                errorMessage: 'you cannot use continuous password!',
            };
        }
        if (
            Number(password[i]) -1 === Number(password[i+1]) && Number(password[i+1]) -1 === Number(password[i+2])
        ) {
            return {
                isValid: false,
                errorMessage: 'you cannot use continuous password!',
            };
        }
    }

    for (let i = 0; i < password.length - 2; i++){
        if (
            password[i] === password[i+1] && password[i+1] === password[i+2]
        ) {
            return {
                isValid: false,
                errorMessage: 'you cannot use the same number!',
            };
        }
    }
    if (easyPasswords.includes(password)) {
        return {
            isValid: false,
            errorMessage: 'please use a strong password!',
        };
    };
    return { isValid: true, errorMessage: '' };
}