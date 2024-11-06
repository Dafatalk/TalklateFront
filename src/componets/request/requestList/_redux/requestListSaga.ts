// 1. Template Cramercase
// 2. template in minus
// 3. template in MAYUS
import { all, put, takeEvery } from "redux-saga/effects";
import {
  resetResultReducer,
  RequestListErrorReducer,
  RequestListReducer,
  RequestListSuccessReducer,
} from "./requestListReducer";
import { AxiosResponse } from "axios";
import { RequestListActionType } from "./requestListAction";
import { RequestService } from "../../../../core/service/RequestService";
import { RequestModel } from "../../../../core/models/RequestModel";

const RequestListService = RequestService.getInstance(); //services than you did

type requestListAction = {
  type: string;
  payload: {
    requestList: Array<RequestModel>; //as a RequestListModel
  };
};

export function* resetrequestListSaga(action: any) {
  yield put(resetResultReducer(action));
}
export function* requestListNewSaga(action: requestListAction) {
  yield put(RequestListReducer(action.payload.requestList));
  try {
    const response: AxiosResponse<Array<RequestModel>> =
      yield RequestListService.getRequestS();
    yield put(RequestListSuccessReducer(response.data));
  } catch (ex) {
    yield put(RequestListErrorReducer(ex));
    console.log("ERROR:");
  }
}

export function* watchrequestListAsync() {
  yield all([
    takeEvery(RequestListActionType.RESET_ACTION, resetrequestListSaga),
    takeEvery(RequestListActionType.REQUEST_LIST_ACTION, requestListNewSaga),
  ]);
}
