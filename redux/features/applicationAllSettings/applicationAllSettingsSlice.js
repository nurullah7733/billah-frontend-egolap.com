import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applicationAllSettings: [],
};

const applicationAllSettings = createSlice({
  name: "applicationAllSettings",
  initialState,
  reducers: {
    setApplicationAllSettings(state, actions) {
      state.applicationAllSettings = actions.payload;
    },
  },
});

export const { setApplicationAllSettings } = applicationAllSettings.actions;

export default applicationAllSettings.reducer;
