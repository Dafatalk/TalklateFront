import { createSlice } from "@reduxjs/toolkit";

// 1. TEMPLATE IN MAYUS
// 2. Template Cramercase
// 3. template in minus

export const TOGGLE_REGISTER_REDUCER_NAME = "toggleRegisterReducer";

interface RegisterState {
  isNewRequestOpen: boolean;
}

export const toggleNewRequestSlice = createSlice({
  name: TOGGLE_REGISTER_REDUCER_NAME,
  initialState: {
    isNewRequestOpen: false,
  } as RegisterState,
  reducers: {
    openNewRequest: (state) => {
      state.isNewRequestOpen = true;
    },
    closeNewRequest: (state) => {
      state.isNewRequestOpen = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openNewRequest, closeNewRequest } =
  toggleNewRequestSlice.actions;

export default toggleNewRequestSlice.reducer;
