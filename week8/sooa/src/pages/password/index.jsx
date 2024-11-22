import { useState } from "react";
import PasswordInput from "../../components/PasswordInput";
import Header from "../../components/Header";
import validatePassword from "./utils/validatePassword";

const STEP = {
  INIT: "INIT",
  CONFIRM: "CONFIRM",
  COMPLETED: "COMPLETE",
  ERROR: "ERROR",
};

export default function Passwordpage() {
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
        break;
      }
      case STEP.CONFIRM: {
        const isValid = password === value;

        if (isValid) {
          setPassword(value);
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
        break;
      }
      default:
        break;
    }
  };

  switch (step.name) {
    case STEP.INIT: {
      return (
        <PasswordInput
          key={step.name}
          title={"비밀번호를 입력해주세요"}
          onCompleted={handlePasswordComplete}
        />
      );
    }

    case STEP.CONFIRM: {
      return (
        <PasswordInput
          key={step.name}
          title={"비밀번호를 한 번 더\n입력해주세요"}
          onCompleted={handlePasswordComplete}
        />
      );
    }

    case STEP.ERROR: {
      return (
        <PasswordInput
          key={`${step.name}-${step.payload.messeage}`}
          title={"비밀번호를 다시 입력해주세요"}
          subtitle={
            <span style={{ color: "red" }}>{step.payload.message}</span>
          }
          onCompleted={handlePasswordComplete}
        />
      );
    }

    default:
      return (
        <>
          <Header title={"비밀번호 입력을 완료했어요!"} subtitle={password} />
        </>
      );
  }
}
