import { create } from "zustand";
import { getCart, updateCart } from "../apis/cart";

const initialState = {
    store: null,
    menus: [],  // [{menu, storeId}] 형태로 저장하도록 수정
};

const useCartStore = create((set, get) => ({
    store: initialState.store,
    menus: initialState.menus,

    addMenu: async (menu, newStore) => {
        const currentState = get();
        console.log('Current state:', currentState);

        let updatedStore;
        let updatedMenus;


        // 장바구니가 비어있는 경우
        if (!currentState.store || currentState.menus.length === 0) {
            console.log('Cart is empty, adding first item');
            updatedStore = newStore;
                updatedMenus = [{
                    ...menu,
                    storeId: newStore.id
                }];
        }
        else if (currentState.menus[0].storeId === newStore.id) {
            console.log('Same store, adding item');
            updatedStore = currentState.store;
                updatedMenus = [
                    ...currentState.menus, 
                    {
                        ...menu,
                        storeId: newStore.id
                    }
                ];
        } else {
            // 다른 가게의 메뉴인 경우
            // Modal표시를 위해 상위로 error 던짐
            console.log('Different store detected');
            throw new Error('DIFFERENT_STORE');
        }

        // updateCart 사용
        try {
            // 서버에 카트 업데이트 요청
            await updateCart(updatedStore, updatedMenus);
            // local에도 저장
            set({
                store: updatedStore,
                menus: updatedMenus
            });
        } catch {
            console.log('Failed to add menu to cart: ', error);
        }
        return;
    },

    setStore: (store) => {
        set({ store });
    },

    // cart가 비워지면 db.json에도 빈 cart로 update
    resetCart: async () => {
        try {
            await updateCart(null, []);
            set(initialState);
        } catch (error) {
            console.error('Failed to reset cart:', error);
        }
    },

    // 시작할때 db.json에서 cart정보 불러오기
    fetchCart: async () => {
        try {
            const data = await getCart();
            console.log("Fetch Cart info : ", data);
            set(data);
        } catch {
            console.error('Failed to fetch cart:', error);
        }
    },
}));

export default useCartStore;