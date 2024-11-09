import { all, put, takeEvery } from "redux-saga/effects";
import {
  resetResultReducer,
  uploadRequestDeleteErrorReducer,
  uploadRequestDeleteReducer,
  uploadRequestDeleteSuccessReducer,
} from "./requestDeleteReducer";
import { AxiosResponse } from "axios";
import { RequestDeleteActionType } from "./requestDeleteAction";
import { RequestService } from "../../../../core/service/RequestService";
import { RequestModel } from "../../../../core/models/RequestModel";

const RequestDeleteService = RequestService.getInstance();

type requestDeleteAction = {
  type: string;
  payload: string;
};

export function* resetrequestDeleteSaga(action: any) {
  yield put(resetResultReducer(action));
}
export function* uploadrequestDeleteNewSaga(action: requestDeleteAction) {
  console.log(action);

  yield put(uploadRequestDeleteReducer(action.payload));
  try {
    const response: AxiosResponse<RequestModel> =
      yield RequestDeleteService.deleteRequest(action.payload);
    console.log(response);

    yield put(uploadRequestDeleteSuccessReducer(response.data));
  } catch (ex) {
    yield put(uploadRequestDeleteErrorReducer(ex));
    console.log("ERROR:" + ex);
  }
}

export function* watchrequestDeleteAsync() {
  yield all([
    takeEvery(RequestDeleteActionType.RESET_ACTION, resetrequestDeleteSaga),
    takeEvery(
      RequestDeleteActionType.UPLOAD_REQUEST_DELETE_ACTION,
      uploadrequestDeleteNewSaga
    ),
  ]);
}
