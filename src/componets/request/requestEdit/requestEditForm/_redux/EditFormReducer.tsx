import { createSlice } from "@reduxjs/toolkit";

export const TOGGLE_EDIT_FORM_REDUCER_NAME = "toggleEditFormReducer";

interface EditFormState {
  isEditFormOpen: boolean;
}

export const toggleEditFormSlice = createSlice({
  name: TOGGLE_EDIT_FORM_REDUCER_NAME,
  initialState: {
    isEditFormOpen: false,
  } as EditFormState,
  reducers: {
    openEditForm: (state) => {
      state.isEditFormOpen = true;
    },
    closeEditForm: (state) => {
      state.isEditFormOpen = false;
    },
  },
});

export const { openEditForm, closeEditForm } = toggleEditFormSlice.actions;

export default toggleEditFormSlice.reducer;
