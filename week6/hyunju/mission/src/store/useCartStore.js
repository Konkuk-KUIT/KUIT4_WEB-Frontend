import { create } from "zustand";

const initialState = {
  store: undefined,
  menus: [],
  totalAmount: 0,
};

const useCartStore = create((set, get) => ({
  ...initialState,

  addMenu: (menu, currentStore) => {
    const { store } = get();

    if (store && store.id !== currentStore.id) {
      const shouldClear = window.confirm(
        "다른 가게의 메뉴를 추가하려고 합니다. " +
        "장바구니를 초기화하고 새로운 가게의 메뉴를 추가할까요?"
      );
      if (shouldClear) {
        set({
          store: currentStore,
          menus: [menu],
          totalAmount: menu.price,
        });
      }
      return;
    }

    set((state) => ({
      store: currentStore,
      menus: [...state.menus, menu],
      totalAmount: state.totalAmount + menu.price,
    }));
  },

  setStore: (store) => {
    set({ store });
  },

  clearCart: () => {
    set({ ...initialState });
  },

  getDeliveryFee: () => {
    const store = get().store;
    return store ? store.deliveryFee : 0;
  },

  getTotalPayment: () => {
    const { totalAmount } = get();
    const deliveryFee = get().getDeliveryFee();
    return totalAmount + deliveryFee;
  },
}));

export default useCartStore;
