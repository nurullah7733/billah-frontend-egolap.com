import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalProductsPrice: 0,
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
        (item) => item._id === actions.payload.id
      );
      if (index >= 0) {
        if (
          state.products[index].customerChoiceProductQuantity <
          state.products[index].quantity
        )
          state.products[index].customerChoiceProductQuantity +=
            actions.payload.count;
      }
    },

    DecreaseProductQuantity(state, actions) {
      const index = state.products.findIndex(
        (item) => item._id === actions.payload.id
      );
      if (index >= 0) {
        if (state.products[index].customerChoiceProductQuantity > 1)
          state.products[index].customerChoiceProductQuantity -=
            actions.payload.count;
      }
    },

    setTotalProductsPrice(state) {
      state.products.reduce((total, product) => {
        let productPrice = parseFloat(product.finalPrice);
        let productQuantity = parseInt(
          product.customerChoiceProductQuantity,
          10
        );
        if (!isNaN(productPrice) && !isNaN(productQuantity)) {
          console.log(total + productPrice * productQuantity);
          state.totalProductsPrice = total + productPrice * productQuantity;
          return total + productPrice * productQuantity;
        }
        return total;
      }, 0);
    },
  },
});

export const {
  setAddToCartProduct,
  deleteAddToCartProduct,
  IncreaseProductQuantity,
  DecreaseProductQuantity,
  setTotalProductsPrice,
} = AddToCartSlice.actions;

export default AddToCartSlice.reducer;
