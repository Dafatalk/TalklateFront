import { RequestModel } from "../../../../core/models/RequestModel";

export enum RequestEditActionType {
  UPLOAD_REQUEST_EDIT_ACTION = "requestEditReducer/uploadAction",
  RESET_ACTION = "requestEditReducer/resetAction",
}

const requestEditActions = {
  uploadRequestEditAction: (requestEdit: RequestModel) => ({
    type: RequestEditActionType.UPLOAD_REQUEST_EDIT_ACTION,
    payload: { requestEdit },
  }),
  resetAction: () => ({
    type: RequestEditActionType.RESET_ACTION,
    payload: null,
  }),
};

export const { uploadRequestEditAction, resetAction } = requestEditActions;
