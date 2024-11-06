// 1. TEMPLATE IN MAYUS
// 2. Template Cramercase
// 3. template in minus

export enum RequestListActionType {
  REQUEST_LIST_ACTION = "requestListReducer/findAction",
  RESET_ACTION = "requestListReducer/resetAction",
}

const requestListActions = {
  RequestListAction: () => ({
    type: RequestListActionType.REQUEST_LIST_ACTION,
    payload: {},
  }),
  resetAction: () => ({
    type: RequestListActionType.RESET_ACTION,
    payload: null,
  }),
};

export const { RequestListAction, resetAction } = requestListActions;
