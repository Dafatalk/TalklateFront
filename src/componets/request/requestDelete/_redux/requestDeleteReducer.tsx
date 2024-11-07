import { createSlice } from "@reduxjs/toolkit";
import { ResultModel } from "../../../../core/redux/resultModel";

export const REQUEST_DELETE_REDUCER_NAME = "requestDeleteReducer";

export interface RequestDeleteReducerModel {
  // CRAMERCASE
  id: string; //AS A RequestDeleteMODEL
  result: ResultModel; //AS A RESULT MODEL
}

export const requestDeleteSlice = createSlice({
  name: REQUEST_DELETE_REDUCER_NAME,
  initialState: {
    id: "",
    result: {},
  } as RequestDeleteReducerModel,
  reducers: {
    resetResultReducer: (state, action) =>
      ({
        ...state,
        id: "",
        result: {
          action,
          error: false,
        },
      }) as RequestDeleteReducerModel,
    uploadRequestDeleteReducer: (state, action) =>
      ({
        ...state,
        result: {
          action,
          error: false,
        },
      }) as RequestDeleteReducerModel,
    uploadRequestDeleteSuccessReducer: (state, action) =>
      ({
        ...state,
        result: {
          action,
          error: false,
          messageUser: "The requestDelete was uploaded succesfully",
        },
      }) as RequestDeleteReducerModel,
    uploadRequestDeleteErrorReducer: (state, action) =>
      ({
        ...state,
        result: {
          action,
          error: true,
          messageUser: action.payload.response.data.message,
        },
      }) as RequestDeleteReducerModel,
  },
});

// Action creators are generated for each case reducer function
export const {
  resetResultReducer,
  uploadRequestDeleteErrorReducer,
  uploadRequestDeleteReducer,
  uploadRequestDeleteSuccessReducer,
} = requestDeleteSlice.actions;

export default requestDeleteSlice.reducer;
