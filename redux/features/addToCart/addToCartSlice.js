import { createSlice, current } from "@reduxjs/toolkit";

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
      state.products.filter((item) => item._id !== actions.payload);
    },
    IncreaseProductQuantity(state, actions) {
      const index = state.products.findIndex(
        (item) => item._id === actions.payload
      );

      if (index >= 0) {
        state.products[index].productWithQuantity = 100;
      }
    },
  },
});

export const {
  setAddToCartProduct,
  deleteAddToCartProduct,
  IncreaseProductQuantity,
} = AddToCartSlice.actions;

export default AddToCartSlice.reducer;
