import { createSlice, current } from "@reduxjs/toolkit";
import {
  setUserAddToCartInLocalStorage,
  setUserTotalProductsPriceInLocalStorage,
  setUserTotalProductsPriceWithoutDiscountInLocalStorage,
} from "../../../utils/sessionHelper/sessionHelper";

const initialState = {
  products: [],
  couponDiscount: 0,
  shippingCost: 0,
  otherCost: 0,
  allProductsSubTotal: 0,
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
      const totalProductsPriceWithoutDiscount = state.products.reduce(
        (total, product) => {
          let productPrice = parseFloat(product.finalPrice);
          let productQuantity = parseInt(
            product.customerChoiceProductQuantity,
            10
          );

          if (!isNaN(productPrice) && !isNaN(productQuantity)) {
            return total + productPrice * productQuantity;
          }

          return total; // Accumulate total without changes
        },
        0
      );

      state.allProductsSubTotal = Math.ceil(totalProductsPriceWithoutDiscount);

      const totalProductsPrice = state.products.reduce((total, product) => {
        let productPrice = parseFloat(product.finalPrice);
        let productQuantity = parseInt(
          product.customerChoiceProductQuantity,
          10
        );

        if (!isNaN(productPrice) && !isNaN(productQuantity)) {
          return total + productPrice * productQuantity;
        }

        return total;
      }, 0);

      // Apply the discount to the total without other costs
      const afterDiscount =
        totalProductsPrice - (state.couponDiscount / 100) * totalProductsPrice;

      // Add other costs to the discounted total
      const addShippingAndOtherCost =
        afterDiscount + state.shippingCost + state.otherCost;

      // Ensure the discount logic is working correctly
      state.products.length === 0 && (state.totalProductsPrice = 0);
      state.totalProductsPrice = Math.ceil(addShippingAndOtherCost);

      setUserTotalProductsPriceInLocalStorage(state.totalProductsPrice);
      setUserTotalProductsPriceWithoutDiscountInLocalStorage(
        state.allProductsSubTotal
      );
    },

    setAddToCartProductFromLocalStorage(state, actions) {
      state.products = actions.payload.products;
      state.allProductsSubTotal = actions.payload.allProductsSubTotal;
      state.totalProductsPrice = actions.payload.totalProductsPrice;
    },
    setAddToCartProductFromUserDatabaseAfterLogin(state, actions) {
      let newProducts = actions.payload;
      let oldProducts = state.products;

      function isDuplicate(existingArray, newObj) {
        return existingArray.some((obj) => obj._id === newObj._id);
      }

      newProducts.forEach((obj) => {
        if (!isDuplicate(oldProducts, obj)) {
          oldProducts.push(obj);
        }
      });

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
