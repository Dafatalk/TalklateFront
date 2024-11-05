import { createSlice } from "@reduxjs/toolkit";
import { UserLoginModel } from "../../../../core/models/UserModel";
import { ResultModel } from "../../../../core/redux/resultModel";

export const LOGIN_REDUCER_NAME = "logInReducer";

export interface LogInReducerModel {
  logIn: UserLoginModel;
  result: ResultModel;
}

export const logInSlice = createSlice({
  name: LOGIN_REDUCER_NAME,
  initialState: {
    logIn: {},
    result: {},
  } as LogInReducerModel,
  reducers: {
    resetResultReducer: (state, action) =>
      ({
        ...state,
        logIn: {},
        result: {
          action,
          error: false,
        },
      }) as LogInReducerModel,
    uploadLogInReducer: (state, action) =>
      ({
        ...state,
        result: {
          action,
          error: false,
        },
      }) as LogInReducerModel,
    uploadLogInSuccessReducer: (state, action) =>
      ({
        ...state,
        result: {
          action,
          error: false,
          messageUser: "The logIn was uploaded succesfully",
          token: action.payload,
        },
      }) as LogInReducerModel,
    uploadLogInErrorReducer: (state, action) =>
      ({
        ...state,
        result: {
          action,
          error: true,
          messageUser: action.payload.response.data.message,
        },
      }) as LogInReducerModel,
  },
});

// Action creators are generated for each case reducer function
export const {
  resetResultReducer,
  uploadLogInErrorReducer,
  uploadLogInReducer,
  uploadLogInSuccessReducer,
} = logInSlice.actions;

export default logInSlice.reducer;
