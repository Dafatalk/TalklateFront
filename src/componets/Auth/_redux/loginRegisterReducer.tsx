import { createSlice } from "@reduxjs/toolkit";

// 1. TEMPLATE IN MAYUS
// 2. Template Cramercase
// 3. template in minus

export const TOGGLE_REGISTER_REDUCER_NAME = "toggleRegisterReducer";

interface RegisterState {
  isRegisterOpen: boolean;
}

export const toggleRegisterSlice = createSlice({
  name: TOGGLE_REGISTER_REDUCER_NAME,
  initialState: {
    isRegisterOpen: false,
  } as RegisterState,
  reducers: {
    openRegister: (state) => {
      state.isRegisterOpen = true;
    },
    closeRegister: (state) => {
      state.isRegisterOpen = false;
    },
    toggleRegister: (state) => {
      state.isRegisterOpen = !state.isRegisterOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { openRegister, closeRegister, toggleRegister } =
  toggleRegisterSlice.actions;

export default toggleRegisterSlice.reducer;
