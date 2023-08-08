import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "",
};

const darkOrLightModeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    setMode(state, actions) {
      state.mode = actions.payload;
    },
  },
});

export const { setMode } = darkOrLightModeSlice.actions;

export default darkOrLightModeSlice.reducer;
