import {create} from "zustand";
import { getCart,updateCart } from "../../apis/cartStore";
const initialState = {
    store : undefined,
    menus:[],
};


const useCartStore = create((set,get) =>({
    store: initialState.store,
    menus: initialState.menus,
    
    addMenu: (menu, store)=>{
        set((state)=>({...state,store,menus:[...state.menus, menu]}));
        updateCart(store, get().menus);
    },
    // setStore: (store)=>{
    //     set((state)=>({...state,store:store}));
    //
    clearCart: ()=>{
        set((state)=>({...state, store: {},menus:[]}))
        updateCart({}, []);
    },
    fetchCart: async()=>{
        const data = await getCart();
        console.log('data: ' ,data)
        set(data);
    }
}));

export default useCartStore
