import Button from "../Button";
import { MenuWrapper, MenuImg, MenuDescWrapper } from "./MenuItem.styles";

const MenuItem = ({ menu, handleAddMenu }) => {
  return (
    <MenuWrapper>
      <MenuImg />
      <MenuDescWrapper>
        <h3 className="menu-name">
          <p>{menu.name}</p>
          <p className="isBest">{menu.isBest && "Best"}</p>
        </h3>
        <span>{menu.price}원</span>
        <p>{menu.ingredients}</p>
      </MenuDescWrapper>
      <Button onClick={handleAddMenu} size="sm">
        담기
      </Button>
    </MenuWrapper>
  );
};

export default MenuItem;
