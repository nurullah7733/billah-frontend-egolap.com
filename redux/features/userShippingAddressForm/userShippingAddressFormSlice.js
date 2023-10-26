import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formValue: {
    name: "",
    email: "",
    mobile: "",
    alternativeMobile: "",
    country: "Bangladesh",
    city: "",
    thana: "",
    zipCode: "",
    address: "",
    paymentMethod: "",
    termAndCondition: false,
  },
};

const userShippingAddressForm = createSlice({
  name: "userShippingAddressForm",
  initialState,
  reducers: {
    setShippingAddressFormValue(state, actions) {
      state.formValue[`${actions.payload.Name}`] = actions.payload.Value;
    },
  },
});

export const { setShippingAddressFormValue } = userShippingAddressForm.actions;

export default userShippingAddressForm.reducer;
