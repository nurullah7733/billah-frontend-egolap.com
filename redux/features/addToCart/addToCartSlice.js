import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const AddToCartSlice = createSlice({
  name: "AddToCartSlice",
  initialState,
  reducers: {
    setAddToCartProduct(state, actions) {
      state.products.push(actions.payload);
    },
    deleteAddToCartProduct(state, actions) {
      state.products.filter((item) => item.id !== actions.payload);
    },
  },
});

export const { setAddToCartProduct, deleteAddToCartProduct } =
  AddToCartSlice.actions;

export default AddToCartSlice.reducer;
