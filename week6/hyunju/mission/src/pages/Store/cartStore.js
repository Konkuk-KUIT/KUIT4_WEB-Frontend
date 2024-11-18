import {create} from "zustand";
import { updateCart,getCart } from "../../api/cart";
// import {getCart, updateCart } from "../api/cart";

const initialState = {
    store : undefined,
    menus:[],
};


const useCartStore = create((set, get) =>({
    store: initialState.store,
    menus: initialState.menus,

    addMenu: (menu, store)=>{
        set((state)=>({...state,store, menus:[...state.menus, menu]}));
        updateCart(store, get().menus);
    },
    // setStore: (store)=>{
    //     set((state)=>({...state,store:store}));
    // },
    clearCart: ()=>{
        set((state)=>({...state,menus:[]}))
    },
    fetchCart: async () =>{
        const data= await getCart();
        console.log("cartStore.js의 getCart값:  ", data);
    }
}));

export default useCartStore