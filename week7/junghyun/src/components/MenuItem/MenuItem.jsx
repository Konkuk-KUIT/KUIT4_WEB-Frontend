import {useParams} from "react-router-dom";
import useCartStore from "../../store/cartStore";
import stores from "../../models/stores";
import Button from "../Button"
import {MenuItemWrapper, ItemDescWrapper, NameWrapper, ButtonWrapper, ModalBackground, ModalWrapper, ModalBtnWrapper, BtnCancel, BtnReset} from './MenuItem.styles';
import {useState} from 'react';

const MenuItem = ({menu}) => {
  const {storeId} = useParams();
  const store = stores.find((s) => s.id.toString() === storeId);
  const cartStore = useCartStore((state) => state.store);
  const menus = useCartStore((state) => state.menus);
  const addMenu = useCartStore((state) => state.addMenu);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddMenu = () => {
    if (store.id !== cartStore.id) {
      setIsModalOpen(true);
      return;
    }
    addMenu(menu);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const resetMenus = useCartStore((state) => state.resetMenus);
  const setStore = useCartStore((state) => state.setStore);
  const handdleOrderCancel = () => {
    handleCloseModal();
    resetMenus();
    setStore(store);
    addMenu(menu);
  };

  return (
    <MenuItemWrapper>
      <img src="https://placehold.co/54x54" alt={menu.name} />
      <ItemDescWrapper>
        <NameWrapper>
          <h3>{menu.name}</h3>
          <h4>{menu.isBest ? "BEST" : ""}</h4>
        </NameWrapper>
        <span>{menu.price.toLocaleString('ko-KR')}원</span>
        <p>{menu.ingredients}</p>
      </ItemDescWrapper>
      <ButtonWrapper>
        <Button onClick={handleAddMenu} type="button" size="sm">담기</Button>
      </ButtonWrapper>
      {isModalOpen && (
        <ModalBackground onClick={handleCloseModal}>
          <ModalWrapper onClick={(e) => e.stopPropagation()}>
            <div className="modalTitle">주문서에는 같은 가게만 담을 수 있어요</div>
            <div className="modalDesc">새로 담고 이전에 담은 메뉴는 삭제할까요?</div>
            <ModalBtnWrapper>
              <BtnCancel onClick={handleCloseModal}>취소</BtnCancel>
              <BtnReset onClick={handdleOrderCancel}>새로 담기</BtnReset>
            </ModalBtnWrapper>
          </ModalWrapper>
        </ModalBackground>
      )}
    </MenuItemWrapper>
  );
};
export default MenuItem;
