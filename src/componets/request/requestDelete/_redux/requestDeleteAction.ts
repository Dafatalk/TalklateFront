// 1. TEMPLATE IN MAYUS
// 2. Template Cramercase
// 3. template in minus

export enum RequestDeleteActionType {
  UPLOAD_REQUEST_DELETE_ACTION = "requestDeleteReducer/uploadAction",
  RESET_ACTION = "requestDeleteReducer/resetAction",
}

const requestDeleteActions = {
  uploadRequestDeleteAction: (id: string) => ({
    type: RequestDeleteActionType.UPLOAD_REQUEST_DELETE_ACTION,
    payload: id,
  }),
  resetAction: () => ({
    type: RequestDeleteActionType.RESET_ACTION,
    payload: null,
  }),
};

export const { uploadRequestDeleteAction, resetAction } = requestDeleteActions;
