import { useNavigate, useParams } from "react-router-dom";
import StatusBar from "../../components/StatusBar/StatusBar";
import OrderBar from "../../components/OrderBar/OrderBar";

import MenuItem from "../../components/MenuItem/MenuItem";

//import stores from "../../models/stores.js";
import {
  StoreTitle,
  StoreDesc,
  RatingReviewDisplay,
  MenuDetailWrapper,
} from "./Store.styles.jsx";

import ColorStar from "../../assets/color-star.svg";
import { useEffect, useState } from "react";
import useCartStore from "./cartStore.jsx";
import { StoreContextProvider, GetStoreContext } from "../context.jsx";
import { getStore } from "../../apis/stores.js";
const Store = () => {
  const navigate = useNavigate();
  const { storeId } = useParams();
  const [store, setStore] = useState();
  const addMenu = useCartStore((state) => state.addMenu);
  const currentStore = useCartStore((state) => state.store);
  const clearCart = useCartStore((state) => state.clearCart);
  //store 정보 가져옴
  useEffect(() => {
    getStore(storeId)
      .then((value) => setStore(value))
      .catch((error) => console.error("Failed to fetch store:", error));
  }, [storeId]);

  const handleAddMenu = (menu) => {
    if (currentStore && storeId != currentStore.id) {
      const confirmReset = window.confirm(
        "다른 가게의 메뉴를 추가하려고 합니다. 장바구니를 초기화하시겠습니까?"
      );
      if (!confirmReset) {
        return;
      }
      clearCart();
    }
    addMenu(menu, store);
    navigate("/cart");
  };
  if (!store) {
    return <div>가게를 찾을 수 없어요 🥺</div>;
  }

  const handleClick = () => {
    navigate("/store");
  };

  return (
    <>
      <StatusBar back={true} onClick={handleClick} />
      <StoreContextProvider value={store}>
        <div
          style={{
            marginTop: "var(--status-bar)",
            padding: "20px",
            width: "var(--width-variable)",
            boxSizing: "border-box",
          }}
        >
          <StoreIntr />
          <MenuDetailWrapper>
            <div className="menu-category">샐러드</div>
            {store.menus.map((menu) => {
              return (
                <MenuItem
                  key={menu.id}
                  menu={menu}
                  handleAddMenu={() => handleAddMenu(menu)}
                />
              );
            })}
          </MenuDetailWrapper>
        </div>
      </StoreContextProvider>
      <OrderBar />
    </>
  );
};
const StoreIntr = () => {
  const store = GetStoreContext().store;

  return (
    <StoreTitle>
      <div className="store-name">{store.name}</div>
      <RatingReviewDisplay>
        <img src={ColorStar} alt="star img" />
        <p className="store-rate">{store.rate}</p>
        <p className="store-review">리뷰 {store.reviewCnt}</p>
      </RatingReviewDisplay>
      <StoreDesc>
        <p>결제 방법</p>
        <p>토스결제만 현장결제 안됨</p>
      </StoreDesc>
      <StoreDesc>
        <p>최소주문</p>
        <p>{store.minDeliveryPrice}원</p>
      </StoreDesc>
      <StoreDesc>
        <p>배달시간</p>
        <p>
          약 {store.minDeliveryTime}-{store.maxDeliveryTime}분
        </p>
      </StoreDesc>
    </StoreTitle>
  );
};

export default Store;
