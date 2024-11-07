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

const RequestDeleteService = RequestService.getInstance(); //services than you did

type requestDeleteAction = {
  type: string;
  payload: {
    id: string; //as a RequestDeleteModel
  };
};

export function* resetrequestDeleteSaga(action: any) {
  yield put(resetResultReducer(action));
}
export function* uploadrequestDeleteNewSaga(action: requestDeleteAction) {
  yield put(uploadRequestDeleteReducer(action));
  try {
    const response: AxiosResponse<RequestModel> =
      yield RequestDeleteService.deletRequest(action.payload.id);
    yield put(uploadRequestDeleteSuccessReducer(response.data));
  } catch (ex) {
    yield put(uploadRequestDeleteErrorReducer(ex));
    console.log("ERROR:" + ex);
  }
}

//REMEBER TO PUT THE WACHER IN THE STORE AND THE SLICER/REDUCER
export function* watchrequestDeleteAsync() {
  yield all([
    takeEvery(RequestDeleteActionType.RESET_ACTION, resetrequestDeleteSaga),
    takeEvery(
      RequestDeleteActionType.UPLOAD_REQUEST_DELETE_ACTION,
      uploadrequestDeleteNewSaga
    ),
  ]);
}
