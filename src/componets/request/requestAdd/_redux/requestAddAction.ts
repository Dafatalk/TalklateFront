import { RequestModel } from "../../../../core/models/RequestModel";

export enum RequestAddActionType {
  UPLOAD_REQUEST_ACTION = "requestAddReducer/uploadAction",
  RESET_ACTION = "requestAddReducer/resetAction",
}

const requestAddActions = {
  uploadRequestAction: (newRequest: RequestModel) => ({
    type: RequestAddActionType.UPLOAD_REQUEST_ACTION,
    payload: { newRequest },
  }),
  resetAction: () => ({
    type: RequestAddActionType.RESET_ACTION,
    payload: null,
  }),
};

export const { uploadRequestAction, resetAction } = requestAddActions;
