import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "@utils/localstorage";
import { notifyError, notifySuccess } from "@utils/toast";

const initialState = {
  cart_products: [],
  orderQuantity: 1,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add_cart_product: (state, { payload }) => {
      const isExist = state.cart_products.find((item) => item._id === payload._id);
      if (!isExist) {
        state.cart_products.push({ ...payload, orderQuantity: state.orderQuantity });
        notifySuccess(`${payload.title} sepete eklendi`);
      } else {
        state.cart_products = state.cart_products.map((item) => {
          if (item._id === payload._id) {
            return {
              ...item,
              orderQuantity: item.orderQuantity + state.orderQuantity,
            };
          } else {
            return item;
          }
        });
        notifySuccess(`${payload.title} sepetteki miktarı artırıldı`);
      }
      setLocalStorage("cart_products", state.cart_products);
    },
    quantityDecrement: (state, { payload }) => {
      state.cart_products = state.cart_products.map((item) => {
        if (item._id === payload._id && item.orderQuantity > 1) {
          return {
            ...item,
            orderQuantity: item.orderQuantity - 1,
          };
        } else {
          return item;
        }
      });
      setLocalStorage("cart_products", state.cart_products);
    },
    remove_product: (state, { payload }) => {
      state.cart_products = state.cart_products.filter((item) => item._id !== payload._id);
      notifyError(`${payload.title} sepetten çıkarıldı`);
      setLocalStorage("cart_products", state.cart_products);
    },
    initialOrderQuantity: (state) => {
      state.orderQuantity = 1;
    },
    handleOrderQuantity: (state, { payload }) => {
      state.orderQuantity = payload;
    },
    get_cart_products: (state) => {
      state.cart_products = getLocalStorage("cart_products") || [];
    },
    increment: (state) => {
      state.orderQuantity += 1;
    },
    decrement: (state) => {
      if (state.orderQuantity > 1) {
        state.orderQuantity -= 1;
      }
    },
  },
});

export const {
  add_cart_product,
  quantityDecrement,
  remove_product,
  initialOrderQuantity,
  handleOrderQuantity,
  get_cart_products,
  increment,
  decrement,
} = cartSlice.actions;

export default cartSlice.reducer;

