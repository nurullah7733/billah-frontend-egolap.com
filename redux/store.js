import { configureStore } from "@reduxjs/toolkit";
import darkOrLightModeSlice from "./features/darkOrLightMode/darkOrLightMode";
import SideItemCardSlice from "./features/sideItemCard/sideItemCardSlice";

export default configureStore({
  reducer: {
    mode: darkOrLightModeSlice,
    sideOpenDrawer: SideItemCardSlice,
  },
});
