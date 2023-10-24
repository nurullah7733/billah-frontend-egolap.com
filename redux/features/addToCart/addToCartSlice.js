import { createSlice, current } from "@reduxjs/toolkit";
import {
  setUserAddToCartInLocalStorage,
  setUserTotalProductsPriceInLocalStorage,
} from "../../../utils/sessionHelper/sessionHelper";
import { getItemWithExpiry } from "../../../utils/localStorageWithExpire/localStorageWithExpire";

const initialState = {
  products: [],
  couponDiscount: 0,
  shippingCost: 0,
  otherCost: 0,
  totalProductsPrice: 0,
};

const AddToCartSlice = createSlice({
  name: "AddToCartSlice",
  initialState,
  reducers: {
    setAddToCartProduct(state, actions) {
      state.products.push(actions.payload);
      // addToCart to localStorage
      setUserAddToCartInLocalStorage(state.products);
    },

    deleteAddToCartProduct(state, actions) {
      state.products = state.products.filter(
        (item) => item._id !== actions.payload
      );
      // addToCart to localStorage
      setUserAddToCartInLocalStorage(state.products);
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
      // addToCart to localStorage
      setUserAddToCartInLocalStorage(state.products);
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
      // addToCart to localStorage
      setUserAddToCartInLocalStorage(state.products);
    },

    setTotalProductsPrice(state) {
      state.products.reduce((total, product) => {
        let productPrice = parseFloat(product.finalPrice);
        let productQuantity = parseInt(
          product.customerChoiceProductQuantity,
          10
        );
        if (!isNaN(productPrice) && !isNaN(productQuantity)) {
          let totalPrice = total + productPrice * productQuantity;
          let afterDiscount =
            totalPrice - (totalPrice * state.couponDiscount) / 100;
          let addShippingAndOtherCost =
            afterDiscount + state.shippingCost + state.otherCost;
          return (state.totalProductsPrice = addShippingAndOtherCost);
        }
        return totalPrice;
      }, 0);
      setUserTotalProductsPriceInLocalStorage(state.totalProductsPrice);
    },

    setAddToCartProductFromLocalStorage(state, actions) {
      state.products = actions.payload.products;
      state.totalProductsPrice = actions.payload.totalProductsPrice;
    },
    setAddToCartProductFromUserDatabaseAfterLogin(state, actions) {
      state.products = actions.payload;
      // addToCart to localStorage
      setUserAddToCartInLocalStorage(state.products);
    },

    setCouponDiscount(state, actions) {
      state.couponDiscount = actions.payload;
    },
    setShippingCost(state, actions) {
      state.shippingCost = actions.payload;
    },
    setOtherCost(state, actions) {
      state.otherCost = actions.payload;
    },
  },
});

export const {
  setAddToCartProduct,
  deleteAddToCartProduct,
  IncreaseProductQuantity,
  DecreaseProductQuantity,
  setTotalProductsPrice,
  setAddToCartProductFromLocalStorage,
  setAddToCartProductFromUserDatabaseAfterLogin,
  setCouponDiscount,
  setOtherCost,
  setShippingCost,
} = AddToCartSlice.actions;

export default AddToCartSlice.reducer;
