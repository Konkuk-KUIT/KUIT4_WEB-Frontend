import styled from "styled-components";

const sizeStyles = {
  sm: {
    padding: "8px 14px 8px 15px",
    fontSize: "13px",
    borderRadius: "8px",
  },
  lg: {
    padding: "10px 16px",
    fontSize: "15px",
    borderRadius: "8px",
  },
  xl: {
    padding: "18px 112px 19px 113px",
    fontSize: "16px",
    borderRadius: "16px",
  },
};

const StyledButton = styled.button`
  color: white;
  background-color: ${(props) => (props.disabled ? "#D0DFFB" : "#3182f6")};
  font-weight: 500;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border-width: 0;
  border-radius: ${(props) => sizeStyles[props.size]?.borderRadius};
  padding: ${(props) => sizeStyles[props.size]?.padding};
  font-size: ${(props) => sizeStyles[props.size]?.fontSize};
`;

const Button = ({ children, type = "button", size = "sm", disabled, onClick }) => {
  return (
    <StyledButton type={type} size={size} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
