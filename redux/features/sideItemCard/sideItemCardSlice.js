import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: true,
};

const SideItemCardSlice = createSlice({
  name: "sideItemCardSlice",
  initialState,
  reducers: {
    setOpenDrawer(state) {
      state.isOpen = !state;
    },
  },
});

export const { setOpenDrawer } = SideItemCardSlice.actions;

export default SideItemCardSlice.reducer;
