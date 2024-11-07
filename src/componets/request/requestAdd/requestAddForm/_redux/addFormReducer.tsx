import { createSlice } from "@reduxjs/toolkit";

export const TOGGLE_ADD_FORM_REDUCER_NAME = "toggleAddFormReducer";

interface AddFormState {
  isNewRequestOpen: boolean;
}

export const toggleNewRequestSlice = createSlice({
  name: TOGGLE_ADD_FORM_REDUCER_NAME,
  initialState: {
    isNewRequestOpen: false,
  } as AddFormState,
  reducers: {
    openNewRequest: (state) => {
      state.isNewRequestOpen = true;
    },
    closeNewRequest: (state) => {
      state.isNewRequestOpen = false;
    },
  },
});

export const { openNewRequest, closeNewRequest } =
  toggleNewRequestSlice.actions;

export default toggleNewRequestSlice.reducer;
