export default function validatePassword(password) {
  const easyPasswords = ["2580", "1004", "1324", "1357"];

  for (let i = 0; i < password.length - 2; i++) {
    if (
      Number(password[i]) + 1 === Number(password[i + 1]) &&
      Number(password[i + 1]) + 1 === Number(password[i + 2])
    ) {
      return {
        isValid: false,
        errorMessage: "연속된 숫자는 사용할 수 없습니다.",
      };
    }
    if (
      Number(password[i]) - 1 === Number(password[i + 1]) &&
      Number(password[i + 1]) - 1 === Number(password[i + 2])
    ) {
      return {
        isValid: false,
        errorMessage: "연속된 숫자는 사용할 수 없습니다.",
      };
    }
  }

  for (let i = 0; i < password.length - 2; i++) {
    if (
      password[i] === password[i + 1] &&
      password[i + 1] === password[i + 2]
    ) {
      return {
        isValid: false,
        errorMessage: "같은 숫자를 3회 연속으로 사용할 수 없습니다.",
      };
    }
  }

  if (easyPasswords.includes(password)) {
    return {
      isValid: false,
      errorMessage: "너무 쉬운 비밀번호는 사용할 수 없습니다.",
    };
  }

  return { isValid: true, errorMessage: "" };
}
