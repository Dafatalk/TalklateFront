import { createSlice } from "@reduxjs/toolkit";
import { RequestModel } from "../../../../core/models/RequestModel";
import { ResultModel } from "../../../../core/redux/resultModel";

export const REQUEST_NEW_REDUCER_NAME = "requestNewReducer";

export interface NewRequestReducerModel {
  newRequest: RequestModel;
  result: ResultModel;
}

export const requestAddSlice = createSlice({
  name: REQUEST_NEW_REDUCER_NAME,
  initialState: {
    newRequest: {},
    result: {},
  } as NewRequestReducerModel,
  reducers: {
    resetResultReducer: (state, action) =>
      ({
        ...state,
        newRequest: {},
        result: {
          action,
          error: false,
        },
      }) as NewRequestReducerModel,
    uploadRequestReducer: (state, action) =>
      ({
        ...state,
        result: {
          action,
          error: false,
        },
      }) as NewRequestReducerModel,
    uploadRequestSuccessReducer: (state, action) =>
      ({
        ...state,
        result: {
          action,
          error: false,
          messageUser: "The request was uploaded succesfully",
        },
      }) as NewRequestReducerModel,
    uploadRequestErrorReducer: (state, action) =>
      ({
        ...state,
        result: {
          action,
          error: true,
          messageUser: action.payload.response.data,
        },
      }) as NewRequestReducerModel,
  },
});

export const {
  resetResultReducer,
  uploadRequestErrorReducer,
  uploadRequestReducer,
  uploadRequestSuccessReducer,
} = requestAddSlice.actions;

export default requestAddSlice.reducer;
