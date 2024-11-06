import { createSlice } from "@reduxjs/toolkit";
import { RequestModel } from "../../../../core/models/RequestModel";
import { ResultModel } from "../../../../core/redux/resultModel";

export const REQUEST_LIST_REDUCER_NAME = "requestListReducer";

export interface RequestListReducerModel {
  requestList: Array<RequestModel>; //AS A RequestListMODEL
  result: ResultModel; //AS A RESULT MODEL
}

export const requestListSlice = createSlice({
  name: REQUEST_LIST_REDUCER_NAME,
  initialState: {
    requestList: {},
    result: {},
  } as RequestListReducerModel,
  reducers: {
    resetResultReducer: (state, action) =>
      ({
        ...state,
        requestList: {},
        result: {
          action,
          error: false,
        },
      }) as RequestListReducerModel,
    RequestListReducer: (state, action) =>
      ({
        ...state,
        result: {
          action,
          error: false,
        },
      }) as RequestListReducerModel,
    RequestListSuccessReducer: (state, action) =>
      ({
        ...state,
        result: {
          list: action.payload,
          action,
          error: false,
          messageUser: "The requestList succesfully",
        },
      }) as RequestListReducerModel,
    RequestListErrorReducer: (state, action) =>
      ({
        ...state,
        result: {
          action,
          error: true,
          messageUser: action.payload.response.data.message,
        },
      }) as RequestListReducerModel,
  },
});

// Action creators are generated for each case reducer function
export const {
  resetResultReducer,
  RequestListErrorReducer,
  RequestListReducer,
  RequestListSuccessReducer,
} = requestListSlice.actions;

export default requestListSlice.reducer;
