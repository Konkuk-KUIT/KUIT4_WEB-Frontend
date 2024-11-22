import { create } from "zustand"; 

import { getCart, updateCart } from "../apis/cart";

const initialState = {
    store: undefined,
    menus: [],
}

const useCartStore = create((set, get) => ({
    store: initialState.store,
    menus: initialState.menus,
    menusFrom: initialState.store,
    addMenu: (menu, store) => {
        set((state) => {
            const existingMenu = state.menus.find((m) => m.id === menu.id);
            const updatedMenus = existingMenu
                ? state.menus.map((m) =>
                    m.id === menu.id ? { ...m, quantity: m.quantity + 1 } : m
                    )
                : [...state.menus, { ...menu, quantity: 1 }];
            // 상태 업데이트
            const updatedState = {
                ...state,
                store,
                menus: updatedMenus,
            };
        
            // 서버와 동기화
            updateCart(store, updatedMenus);
            return updatedState;
        });
    },
    fetchCart: async () => {
        const data = await getCart();
        console.log("Fetched Cart", data);
        set(() => ({
            store: data.store,
            menus: data.menus || [], // 메뉴가 없으면 빈 배열
          }));
    },
    setMenusFrom: (store) => {
        set((state) => ({...state, menusFrom: store}));
    },
    resetStore: () => {
        set((state) => ({...state, menus: initialState.menus, menusFrom: initialState.store}));
    },
}));

export default useCartStore;