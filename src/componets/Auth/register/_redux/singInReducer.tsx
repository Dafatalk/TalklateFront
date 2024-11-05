import { createSlice } from "@reduxjs/toolkit";
import { ResultModel } from "../../../../core/redux/resultModel";
import { UserModel } from "../../../../core/models/UserModel";

export const SINGIN_REDUCER_NAME = "singinReducer";

export interface SinginReducerModel {
  user: UserModel;
  result: ResultModel;
}

export const singinSlice = createSlice({
  name: SINGIN_REDUCER_NAME,
  initialState: {
    user: {},
    result: {},
  } as SinginReducerModel,
  reducers: {
    resetResultReducer: (state, action) =>
      ({
        ...state,
        user: {},
        result: {
          action,
          error: false,
        },
      }) as SinginReducerModel,
    uploadsinginReducer: (state, action) =>
      ({
        ...state,
        result: {
          action,
          error: false,
        },
      }) as SinginReducerModel,
    uploadsinginSuccessReducer: (state, action) =>
      ({
        ...state,
        result: {
          action,
          error: false,
          messageUser: "Your acount was saved succesfully",
        },
      }) as SinginReducerModel,
    uploadsinginErrorReducer: (state, action) =>
      ({
        ...state,
        result: {
          action,
          error: true,
          messageUser: action.payload,
        },
      }) as SinginReducerModel,
  },
});

export const {
  resetResultReducer,
  uploadsinginErrorReducer,
  uploadsinginReducer,
  uploadsinginSuccessReducer,
} = singinSlice.actions;

export default singinSlice.reducer;
