import { create } from "zustand";

const initialState = {
    store: null,
    menus: [],  // [{menu, storeId}] 형태로 저장하도록 수정
};

const useCartStore = create((set, get) => ({
    store: initialState.store,
    menus: initialState.menus,

    addMenu: (menu, newStore) => {
        const currentState = get();
        console.log('Current state:', currentState);

        // 장바구니가 비어있는 경우
        if (!currentState.store || currentState.menus.length === 0) {
            console.log('Cart is empty, adding first item');
            set({
                store: newStore,
                menus: [{
                    ...menu,
                    storeId: newStore.id
                }]
            });
            return;
        }

        // 첫 번째 메뉴의 storeId와 비교
        const firstMenuStoreId = currentState.menus[0].storeId;
        if (firstMenuStoreId === newStore.id) {
            console.log('Same store, adding item');
            set({
                ...currentState,
                menus: [...currentState.menus, {
                    ...menu,
                    storeId: newStore.id
                }]
            });
            return;
        }

        // 다른 가게의 메뉴인 경우
        console.log('Different store detected');
        return;
    },

    setStore: (store) => {
        set({ store });
    },

    resetCart: () => {
        set(initialState);
    },
}));

export default useCartStore;