import { all, put, takeEvery } from "redux-saga/effects";
import {
  resetResultReducer,
  uploadRequestEditErrorReducer,
  uploadRequestEditReducer,
  uploadRequestEditSuccessReducer,
} from "./requestEditReducer";
import { AxiosResponse } from "axios";
import { RequestEditActionType } from "./requestEditAction";
import { RequestService } from "../../../../core/service/RequestService";
import { RequestModel } from "../../../../core/models/RequestModel";

const RequestEditService = RequestService.getInstance();

type requestEditAction = {
  type: string;
  payload: {
    requestEdit: RequestModel;
  };
};

export function* resetrequestEditSaga(action: any) {
  yield put(resetResultReducer(action));
}
export function* uploadrequestEditNewSaga(action: requestEditAction) {
  yield put(uploadRequestEditReducer(action.payload.requestEdit));
  try {
    const response: AxiosResponse<RequestModel> =
      yield RequestEditService.editRequest(action.payload.requestEdit);
    yield put(uploadRequestEditSuccessReducer(response.data));
  } catch (ex) {
    yield put(uploadRequestEditErrorReducer(ex));
    console.log("ERROR:" + ex);
  }
}

export function* watchrequestEditAsync() {
  yield all([
    takeEvery(RequestEditActionType.RESET_ACTION, resetrequestEditSaga),
    takeEvery(
      RequestEditActionType.UPLOAD_REQUEST_EDIT_ACTION,
      uploadrequestEditNewSaga
    ),
  ]);
}
