import { configureStore } from "@reduxjs/toolkit";
import SideItemCardSlice from "./features/sideItemCard/sideItemCardSlice";
import AddToCartSlice from "./features/addToCart/addToCartSlice";
import websiteSettingSlice from "./features/websiteSettings/webSettingSlice";

export default configureStore({
  reducer: {
    websiteSettings: websiteSettingSlice,
    sideOpenDrawer: SideItemCardSlice,
    addToCartProducts: AddToCartSlice,
  },
});
