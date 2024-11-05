import { UserModel } from "../../../../core/models/UserModel";

export enum SingInActionType {
  UPLOAD_SINGIN_ACTION = "singInReducer/uploadAction",
  RESET_ACTION = "singInReducer/resetAction",
}

const singInActions = {
  uploadSinginAction: (singIn: UserModel) => ({
    type: SingInActionType.UPLOAD_SINGIN_ACTION,
    payload: { singIn },
  }),
  resetAction: () => ({
    type: SingInActionType.RESET_ACTION,
    payload: null,
  }),
};

export const { uploadSinginAction, resetAction } = singInActions;
