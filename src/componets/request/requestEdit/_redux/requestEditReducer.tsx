import { createSlice } from "@reduxjs/toolkit";
import { RequestModel } from "../../../../core/models/RequestModel";
import { ResultModel } from "../../../../core/redux/resultModel";

export const REQUEST_EDIT_REDUCER_NAME = "requestEditReducer";

export interface RequestEditReducerModel {
  requestEdit: RequestModel;
  result: ResultModel;
}

export const requestEditSlice = createSlice({
  name: REQUEST_EDIT_REDUCER_NAME,
  initialState: {
    requestEdit: {},
    result: {},
  } as RequestEditReducerModel,
  reducers: {
    resetResultReducer: (state, action) =>
      ({
        ...state,
        requestEdit: {},
        result: {
          action,
          error: false,
        },
      }) as RequestEditReducerModel,
    uploadRequestEditReducer: (state, action) =>
      ({
        ...state,
        result: {
          action,
          error: false,
        },
      }) as RequestEditReducerModel,
    uploadRequestEditSuccessReducer: (state, action) =>
      ({
        ...state,
        result: {
          action,
          error: false,
          messageUser: "The requestEdit was uploaded succesfully",
        },
      }) as RequestEditReducerModel,
    uploadRequestEditErrorReducer: (state, action) =>
      ({
        ...state,
        result: {
          action,
          error: true,
          messageUser: action.payload.response.data,
        },
      }) as RequestEditReducerModel,
  },
});

export const {
  resetResultReducer,
  uploadRequestEditErrorReducer,
  uploadRequestEditReducer,
  uploadRequestEditSuccessReducer,
} = requestEditSlice.actions;

export default requestEditSlice.reducer;
