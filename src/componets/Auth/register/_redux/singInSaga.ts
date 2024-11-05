import { all, put, takeEvery } from "redux-saga/effects";
import { UserModel } from "../../../../core/models/UserModel";
import { UserService } from "../../../../core/service/UserService";
import {
  resetResultReducer,
  uploadsinginErrorReducer,
  uploadsinginReducer,
  uploadsinginSuccessReducer,
} from "./singInReducer";
import { AxiosResponse } from "axios";
import { SingInActionType } from "./singInAction";

const singinService = UserService.getInstance();

type SinginAction = {
  type: string;
  payload: {
    singIn: UserModel;
  };
};

export function* resetSinginSaga(action: any) {
  yield put(resetResultReducer(action));
}
export function* uploadSinginNewSaga(action: SinginAction) {
  console.log("SIIIII ENTROOO" + action.payload.singIn);
  yield put(uploadsinginReducer(action.payload.singIn));
  try {
    const response: AxiosResponse<UserModel> = yield singinService.register(
      action.payload.singIn
    );
    yield put(uploadsinginSuccessReducer(response.data));
    console.log("RESPUESTA: buena " + response.data);
  } catch (ex) {
    yield put(uploadsinginErrorReducer(ex));
    console.log("ERROR:" + ex);
  }
}

export function* watchSingInAsync() {
  yield all([
    takeEvery(SingInActionType.RESET_ACTION, resetSinginSaga),
    takeEvery(SingInActionType.UPLOAD_SINGIN_ACTION, uploadSinginNewSaga),
  ]);
}
