import styled from "styled-components";
import { ItemContent, ItemTitle } from "../../styles/FontStyle";
import Button from "../Button";
import useCartStore from "../../store/cartStore";

const MenuItem = ({ menu, handleAddMenu }) => {
  return (
    <MenuItemContainer>
      <MenuItemImage />

      <MenuItemWrapper>
        <ItemTitleWrapper>
          <ItemTitle>{menu.name}</ItemTitle>
          {menu.id == 1 && (
            <ItemTitle style={{ color: "#3182F6" }}>BEST</ItemTitle>
          )}
        </ItemTitleWrapper>
        <ItemContent>{menu.price.toLocaleString()}원</ItemContent>
        <ItemContent style={{ wordBreak: "keep-all" }}>
          {menu.ingredients}
        </ItemContent>
      </MenuItemWrapper>

      <Button onClick={handleAddMenu} type="button" size="sm">
        담기
      </Button>
    </MenuItemContainer>
  );
};

export default MenuItem;

const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 24px;
  gap: 16px;
`;

const MenuItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 201px;
  gap: 5px;
`;

const MenuItemImage = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 27px;
  background: #ececec;
`;

const ItemTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
`;
