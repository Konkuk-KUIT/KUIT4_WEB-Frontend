import {
  Wrapper,
  RightWrapper,
  ButtonWrapper,
  MenuImg,
} from "./CartItem.styles";
import ArrowRight from "../../assets/arrow-right.svg";

const CartItem = ({ menu }) => {
  return (
    <Wrapper>
      <MenuImg />
      <RightWrapper>
        <h3>{menu.name}</h3>
        <p>추천소스, 채소볼, 베이컨추가, 시저드레싱 추가</p>
        <span>{menu.price}</span>
      </RightWrapper>
      <ButtonWrapper>
        <span>{menu.count}</span>
        <img src={ArrowRight} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default CartItem;
