import useCartStore from "../../store/useCartStore";
import Button from "../Button";
import {
  Wrapper,
  RightWrapper,
  ButtonWrapper,
  MenuImg,
} from "./MenuItem.styles";

const MenuItem = ({ menu, handleAddMenu }) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const deleteMenu = useCartStore((state) => state.deleteMenu);
  const setStore = useCartStore((state) => state.setStore);
  const store = useCartStore((state) => state.store);
  /*const handleAddMenu = () => {
    if (!store) {
      setStore(findStore);
      addMenu(menu);
    } else if (store != findStore) {
      if (
        window.confirm(
          "주문서에는 같은 가게만 담을 수 있어요\n 새로 담고 이전에 담은 메뉴는 삭제할까요?"
        )
      ) {
        setStore(findStore);
        deleteMenu();
        addMenu(menu);
      }
    } else addMenu(menu);
  };*/
  return (
    <Wrapper>
      <MenuImg />
      <RightWrapper>
        <h3>{menu.name}</h3>
        <span>{menu.price}</span>
        <p>{menu.ingredients}</p>
      </RightWrapper>
      <ButtonWrapper>
        <Button onClick={handleAddMenu} type="button" size="sm">
          담기
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default MenuItem;
