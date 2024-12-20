import { create } from "zustand";
import { getCart, updateCart } from "../apis/cartStore";

const initialState = {
  store: undefined,
  menus: [],
};

const useCartStore = create((set, get) => ({
  store: initialState.store,
  menus: initialState.menus,

  addMenu: (menu, store) => {
    set((state) => ({ ...state, store, menus: [...state.menus, menu] })); // 상태 업데이트
    updateCart(store, get().menus);
  },
  deleteMenu: () => {
    set((state) => ({ ...state, menus: [] }));
    set((state) => ({ ...state, store: undefined }));
  },
  fetchCart: async () => {
    const data = await getCart();
    set(data);
  },
}));

export default useCartStore;
