import { useState } from "react";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import validatePassword from "./utils/validatePassword";
import Header from "../../components/Header/Header";
const STEP = {
  INIT: "INIT",
  CONFIRM: "CONFIRM",
  COMPLETE: "COMPLETE",
  ERROR: "ERROR",
};

const Password = () => {
  const [password, setPassword] = useState("");
  const [step, setStep] = useState({
    name: STEP.INIT,
    payload: {},
  });

  const handlePasswordComplete = (value) => {
    switch (step.name) {
      case STEP.INIT:
      case STEP.ERROR: {
        const { isValid, errorMessage } = validatePassword(value);
        if (isValid) {
          setPassword(value);
          setStep({
            name: STEP.CONFIRM,
          });
        } else {
          setStep({
            name: STEP.ERROR,
            payload: {
              message: errorMessage,
            },
          });
        }
        break; // Added break to stop fall-through
      }
      case STEP.CONFIRM: {
        const isValid = value === password;
        if (isValid) {
          setStep({
            name: STEP.COMPLETE,
          });
        } else {
          setStep({
            name: STEP.ERROR,
            payload: {
              message: "비밀번호가 일치하지 않습니다.",
            },
          });
        }
        break; // Added break to stop fall-through
      }

      default:
        break;
    }
  };

  switch (step.name) {
    case STEP.INIT:
      return (
        <PasswordInput
          secure={true}
          key={step.name}
          title={"비밀번호를 입력해주세요"}
          onComplete={handlePasswordComplete}
        />
      );
    case STEP.CONFIRM:
      return (
        <PasswordInput
          secure={true}
          key={step.name}
          title={"비밀번호를 한번 더\n입력해주세요"}
          onComplete={handlePasswordComplete}
        />
      );
    case STEP.ERROR:
      return (
        <PasswordInput
          secure={true}
          key={`${step.name}-${step.payload.message}`}
          title={"비밀번호를 다시 입력해주세요"}
          subtitle={step.payload.message}
          onComplete={handlePasswordComplete}
        />
      );
    default:
      return (
        <Header title="비밀번호 설정이 완료되었습니다!" subtitle={password} />
      );
  }
};

export default Password;
