import { all, put, takeEvery } from "redux-saga/effects";
import { RequestModel } from "../../../../core/models/RequestModel";
import { RequestService } from "../../../../core/service/RequestService";
import {
  resetResultReducer,
  uploadRequestErrorReducer,
  uploadRequestReducer,
  uploadRequestSuccessReducer,
} from "./requestAddReducer";
import { AxiosResponse } from "axios";
import { RequestAddActionType } from "./requestAddAction";

const requestService = RequestService.getInstance();

type RequestAddAction = {
  type: string;
  payload: {
    newRequest: RequestModel;
  };
};

export function* resetRequestSaga(action: any) {
  yield put(resetResultReducer(action));
}
export function* uploadRequestNewSaga(action: RequestAddAction) {
  yield put(uploadRequestReducer(action.payload));
  try {
    const response: AxiosResponse<RequestModel> =
      yield requestService.saveRequest(action.payload.newRequest);
    yield put(uploadRequestSuccessReducer(response.data));
  } catch (ex) {
    yield put(uploadRequestErrorReducer(ex));
  }
}

export function* watchRequestNewAsync() {
  yield all([
    takeEvery(RequestAddActionType.RESET_ACTION, resetRequestSaga),
    takeEvery(RequestAddActionType.UPLOAD_REQUEST_ACTION, uploadRequestNewSaga),
  ]);
}
