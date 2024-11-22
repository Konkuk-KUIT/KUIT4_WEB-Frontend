import {useParams} from "react-router-dom";
import MenuItem from "../MenuItem/MenuItem";
import Star from "../../assets/star-yellow.svg";
import {
  NoStoreWrapper, StoreInfoWrapper, InfoWrapper, MenuWrapper, 
  ModalBackground, ModalWrapper, ModalBtnWrapper, BtnCancel, BtnReset
} from "./StoreInfo.styles";
import {useEffect, useState} from "react";
import useCartStore from "../../store/cartStore";
import {getStore} from "../../apis/stores";

const StoreInfo = () => {
  const menus = useCartStore((state) => state.menus);
  const addMenu = useCartStore((state) => state.addMenu);

  const {storeId} = useParams();
  const [store, setStore] = useState();

  const cartStore = useCartStore((state) => state.store);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const reset = useCartStore((state) => state.reset);

  useEffect(() => {
    if (menus.length == 0) {
      setStore(store);
    }
    getStore(storeId).then(value => setStore(value));
  }, []);


  const handleAddMenu = (menu) => {
    if ((menus.length > 0) && (store.id !== cartStore.id)) {
      setIsModalOpen(true);
      return;
    }
    addMenu(menu, store);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOrderCancel = () => {
    handleCloseModal();
    reset();
  };

  if (!store) {
    return (
      <NoStoreWrapper>
        <div className="noStore">가게를 찾을 수 없어요 🥺</div>
      </NoStoreWrapper>
    );
  };

  return (
    <StoreInfoWrapper>
      <InfoWrapper>
        <h1>{store.name}</h1>
        <div className="storeReputation">
          <img src={Star} alt="star" />
          <div className="storeRate">{store.rate}</div>
          <div className="storeReviewCnt">리뷰{store.reviewCnt.toLocaleString('ko-KR')}</div>
        </div>
        <div className="desc">
          <div className="descLine">
            <span className="descTitle">결제방법</span><span>토스결제만 현장결제 안됨</span>
          </div>
          <div className="descLine">
            <span className="descTitle">최소주문</span><span>{store.minDeliveryPrice.toLocaleString('ko-KR')}원</span>
          </div>
          <div className="descLine">
            <span className="descTitle">배달시간</span><span>약 {store.minDeliveryTime}-{store.maxDeliveryTime}분</span>
          </div>
        </div>
      </InfoWrapper>
      <MenuWrapper>
        <div className="category">샐러드</div>
        <div className="storeMenu">
          {store.menus.map((menu) => {
            return (
              <MenuItem key={menu.id} menu={menu} handleAddMenu={() => handleAddMenu(menu)} />
            );
          })}
        </div>
      </MenuWrapper>

      {isModalOpen && (
        <ModalBackground onClick={handleCloseModal}>
          <ModalWrapper onClick={(e) => e.stopPropagation()}>
            <div className="modalTitle">주문서에는 같은 가게만 담을 수 있어요</div>
            <div className="modalDesc">새로 담고 이전에 담은 메뉴는 삭제할까요?</div>
            <ModalBtnWrapper>
              <BtnCancel onClick={handleCloseModal}>취소</BtnCancel>
              <BtnReset onClick={handleOrderCancel}>새로 담기</BtnReset>
            </ModalBtnWrapper>
          </ModalWrapper>
        </ModalBackground>
      )}
    </StoreInfoWrapper>
  );
};
export default StoreInfo;