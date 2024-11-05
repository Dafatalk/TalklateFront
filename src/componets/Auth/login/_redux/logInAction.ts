import { UserLoginModel } from "../../../../core/models/UserModel";

export enum LogInActionType {
  UPLOAD_LOGIN_ACTION = "logInReducer/uploadAction",
  RESET_ACTION = "logInReducer/resetAction",
}
const LoginActions = {
  uploadLogInAction: (user: UserLoginModel) => ({
    type: LogInActionType.UPLOAD_LOGIN_ACTION,
    payload: { user },
  }),
  resetAction: () => ({
    type: LogInActionType.RESET_ACTION,
    payload: null,
  }),
};

export const { uploadLogInAction, resetAction } = LoginActions;
