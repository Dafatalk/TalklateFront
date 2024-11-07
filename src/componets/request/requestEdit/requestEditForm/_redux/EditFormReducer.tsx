import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestModel } from "../../../../../core/models/RequestModel";

export const TOGGLE_EDIT_FORM_REDUCER_NAME = "toggleEditFormReducer";

interface EditFormState {
  isEditFormOpen: boolean;
  requestData: RequestModel | null;
}

export const toggleEditFormSlice = createSlice({
  name: TOGGLE_EDIT_FORM_REDUCER_NAME,
  initialState: {
    isEditFormOpen: false,
    requestData: null,
  } as EditFormState,
  reducers: {
    openEditForm: (state, action: PayloadAction<RequestModel>) => {
      state.isEditFormOpen = true;
      state.requestData = action.payload; // Guardamos los datos de la solicitud
    },
    closeEditForm: (state) => {
      state.isEditFormOpen = false;
      state.requestData = null;
    },
  },
});

export const { openEditForm, closeEditForm } = toggleEditFormSlice.actions;

export default toggleEditFormSlice.reducer;
