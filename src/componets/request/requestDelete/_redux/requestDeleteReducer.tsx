import { createSlice } from "@reduxjs/toolkit";

export const REQUEST_DELETE_REDUCER_NAME = "requestDeleteReducer";

export interface RequestDeleteReducerModel {
  // CRAMERCASE
  requestDelete: any; //AS A RequestDeleteMODEL
  result: any; //AS A RESULT MODEL
}

export const requestDeleteSlice = createSlice({
  name: REQUEST_DELETE_REDUCER_NAME,
  initialState: {
    requestDelete: {},
    result: {},
  } as RequestDeleteReducerModel,
  reducers: {
    resetResultReducer: (state, action) =>
      ({
        ...state,
        requestDelete: {},
        result: {
          action,
          error: false,
        },
      } as RequestDeleteReducerModel),
    uploadrequestDeleteReducer: (state, action) =>
      ({
        ...state,
        result: {
          action,
          error: false,
        },
      } as RequestDeleteReducerModel),
    uploadrequestDeleteSuccessReducer: (state, action) =>
      ({
        ...state,
        result: {
          action,
          error: false,
          messageUser: "The requestDelete was uploaded succesfully",
        },
      } as RequestDeleteReducerModel),
    uploadrequestDeleteErrorReducer: (state, action) =>
      ({
        ...state,
        result: {
          action,
          error: true,
          messageUser: action.payload.response.data.message,
        },
      } as RequestDeleteReducerModel),
  },
});

// Action creators are generated for each case reducer function
export const {
  resetResultReducer,
  uploadrequestDeleteErrorReducer,
  uploadrequestDeleteReducer,
  uploadrequestDeleteSuccessReducer,
} = requestDeleteSlice.actions;

export default requestDeleteSlice.reducer;
