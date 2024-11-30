import styled from "styled-components";

const sizeStyles = {
  sm: {
    padding: "8px 14px 8px 15px",
    fontSize: "13px",
  },
  lg: {
    padding: "10px 16px",
    fontSize: "15px",
  },
  xl: {
    padding: "18px 112px 19px 113px",
    fontSize: "16px",
  },
};

const StyledButton = styled.button`
  color: white;
  background-color: ${(props) => (props.disabled ? "#D0DFFB" : "#3182f6")};
  font-weight: 500;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  border-width: 0;
  border-radius: 8px;
  padding: ${(props) => sizeStyles[props.size]?.padding};
  font-size: ${(props) => sizeStyles[props.size]?.fontSize};
  /* width: 84px; */
top: ${(props)=>props.top};
left: ${(props)=>props.left};
border-radius: 8px;
position: absolute;
`;

const Button = ({ children, type = "button", size = "sm", disabled,onClick ,top,left}) => {
  return (
  //  <Link to={"/cart"}>
    <StyledButton type={type} size={size} disabled={disabled} onClick={onClick} top={top} left={left}>
      {children}
    </StyledButton>
  //  </Link>
  );
};

export default Button;