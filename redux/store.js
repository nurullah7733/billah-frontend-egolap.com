import { configureStore } from "@reduxjs/toolkit";
import SideItemCardSlice from "./features/sideItemCard/sideItemCardSlice";
import AddToCartSlice from "./features/addToCart/addToCartSlice";
import websiteSettingSlice from "./features/websiteSettings/webSettingSlice";
import userShippingAddressFormSlice from "./features/userShippingAddressForm/userShippingAddressFormSlice";
import applicationAllSettingsSlice from "./features/applicationAllSettings/applicationAllSettingsSlice";

export default configureStore({
  reducer: {
    websiteSettings: websiteSettingSlice,
    sideOpenDrawer: SideItemCardSlice,
    addToCartProducts: AddToCartSlice,
    userShippingAddressForm: userShippingAddressFormSlice,
    applicationAllSettings: applicationAllSettingsSlice,
  },
});
