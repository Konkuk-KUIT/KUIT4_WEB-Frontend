import { create } from "zustand";
import { updateCart,getCart } from "../../apis/cart";

const initialState = {
    store: undefined,
    menus: []
};

const useCartStore = create((set,get) => ({
    store: initialState.store,
    menus: initialState.menus,

    addMenu: (menu, store) => 
        
        //{ set((state) =>
        //({ ...state, menus: [...state.menus, menu] }))
        //},
        
        { set((state) => {
        
        const existingMenu = state.menus.find((m) => m.id === menu.id);
        // 동일한 메뉴가 있는경우
        if (existingMenu) {
            return {
                ...state, store,
                menus: state.menus.map((m) =>
                    m.id === menu.id
                        ? { ...m, quantity: (m.quantity || 1) + 1 }
                        : m
                ),
            };
        }
        // 동일한 메뉴가 없는 경우
        return {
            ...state, store,
            menus: [...state.menus, { ...menu, quantity: 1 }],
        };
    })

    updateCart(store, get().menus);



},
    fetchCart: async() => {
        const data = await getCart();
        set(data);
    }



}));

export default useCartStore;