import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "",
  productReviewTab: 1,
};

const websiteSettingSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode(state, actions) {
      state.mode = actions.payload;
    },
    setProductReviewTab(state, actions) {
      state.productReviewTab = actions.payload;
    },
  },
});

export const { setMode, setProductReviewTab } = websiteSettingSlice.actions;

export default websiteSettingSlice.reducer;
