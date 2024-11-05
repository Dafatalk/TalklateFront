import { all, put, takeEvery } from "redux-saga/effects";
import {
  resetResultReducer,
  uploadLogInErrorReducer,
  uploadLogInReducer,
  uploadLogInSuccessReducer,
} from "./logInReducer";
import { AxiosResponse } from "axios";
import { LogInActionType } from "./logInAction";
import { UserService } from "../../../../core/service/UserService";
import { UserLoginModel } from "../../../../core/models/UserModel";

const LogInService = UserService.getInstance();

type logInAction = {
  type: string;
  payload: {
    user: UserLoginModel; //as a LogInModel
  };
};

export function* resetlogInSaga(action: any) {
  yield put(resetResultReducer(action));
}
export function* uploadlogInNewSaga(action: logInAction) {
  yield put(uploadLogInReducer(action.payload.user));
  try {
    const response: AxiosResponse<{ token: string }> = yield LogInService.login(
      action.payload.user
    );

    yield put(uploadLogInSuccessReducer(response.data.token));
  } catch (ex) {
    yield put(uploadLogInErrorReducer(ex));
    console.log("ERROR: " + ex);
  }
}

export function* watchlogInAsync() {
  yield all([
    takeEvery(LogInActionType.RESET_ACTION, resetlogInSaga),
    takeEvery(LogInActionType.UPLOAD_LOGIN_ACTION, uploadlogInNewSaga),
  ]);
}
