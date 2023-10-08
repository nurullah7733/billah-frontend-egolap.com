import { configureStore } from "@reduxjs/toolkit";
import darkOrLightModeSlice from "./features/darkOrLightMode/darkOrLightMode";
import SideItemCardSlice from "./features/sideItemCard/sideItemCardSlice";
import AddToCartSlice from "./features/addToCart/addToCartSlice";

export default configureStore({
  reducer: {
    mode: darkOrLightModeSlice,
    sideOpenDrawer: SideItemCardSlice,
    addToCartProducts: AddToCartSlice,
  },
});
