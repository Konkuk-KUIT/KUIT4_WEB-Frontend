import { create } from "zustand";

const initialState = {
  store: undefined,
  menus: [],
};

const useCartStore = create((set, get) => ({
  store: initialState.store,
  menus: initialState.menus,

  addMenu: (menu, pageStore) => {
    const cartStore = get().store;

    // 장바구니가 비어 있으면 가게 정보 설정 후 메뉴 추가
    if (!cartStore) {
      set({
        store: pageStore, // 현재 페이지의 가게를 장바구니로 설정
        menus: [menu],
      });
      return;
    }

    // 다른 가게 메뉴 추가 시
    if (cartStore.id !== pageStore.id) {
      const changeStore = window.confirm(
        "장바구니에 다른 가게의 메뉴가 담겨 있습니다. 가게를 변경하시겠습니까?"
      );
      if (changeStore) {
        // 확인 시
        set({
          store: pageStore,
          menus: [menu], // 장바구니 메뉴 초기화 후 새로운 메뉴 추가
        });
      }
      return;
    }

    // 동일한 가게 메뉴 추가 시
    set((state) => ({
      ...state,
      menus: [...state.menus, menu],
    }));
  },

  setStore: (store) => {
    set((state) => ({ ...state, store: store }));
  },

  getTotalPrice: () => get().menus.reduce((acc, cur) => acc + cur.price, 0),
  getMinDeliveryPrice: () => get().store?.minDeliveryPrice,
}));

export default useCartStore;
