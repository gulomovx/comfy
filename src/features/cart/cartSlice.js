import { createSlice } from "@reduxjs/toolkit";
import { fromJSON } from "postcss";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  ordertTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find((i) => i.cartID === product.cartID);

      if (item) {
        item.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numItemsInCart += product.amount;
      state.cartTotal = product.price * product.amount;
      
          toast.success("item added to cart!");
          
          cartSlice.caseReducers.calculateTotals(state)
    },
    clearCart: (state) => {},
    removeItem: (state, action) => {
      
    },
      editItem: (state, action) => { },
      calculateTotals: (state) => {
        state.tax = 0.1 * state.cartTotal;
      state.ordertTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    }
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;
