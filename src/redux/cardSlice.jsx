import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
        const existItem = state.find((item)=>item.id === action.payload.id)
        if(existItem){
            return state.map((item)=> item.id === action.payload.id?{...item, quantity:item.quantity+1}:item)
        }
        else {
            state.push(action.payload);
        }
    },
    RemoveItem: (state, action)=> {
        return state.filter((item)=>item.id !== action.payload)
    },
    Incresequantity:(state, action)=>{
        return state.map((item)=> item.id === action.payload?{...item, quantity:item.quantity+1}:item)
    },
    Dicresequantity:(state, action)=>{
        return state.map((item)=> item.id === action.payload?{...item, quantity:item.quantity-1}:item)
    }

  },
});

export const{AddItem, RemoveItem, Incresequantity, Dicresequantity} = cartSlice.actions
export default cartSlice.reducer
