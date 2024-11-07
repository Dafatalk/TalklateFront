import requestAddReducer from "../componets/request/requestAdd/_redux/requestAddReducer";
import singInReducer from "../componets/Auth/register/_redux/singInReducer";
import loginRegisterReducer from "../componets/Auth/_redux/loginRegisterReducer";
import logInReducer from "../componets/Auth/login/_redux/logInReducer";
import addFormReducer from "../componets/request/requestAdd/requestAddForm/_redux/addFormReducer";
import EditFormReducer from "../componets/request/requestEdit/requestEditForm/_redux/EditFormReducer";
import requestListReducer from "../componets/request/requestList/_redux/requestListReducer";
import requestEditReducer from "../componets/request/requestEdit/_redux/requestEditReducer";
import requestDeleteReducer from "../componets/request/requestDelete/_redux/requestDeleteReducer";
//WATCHERS:
import { watchSingInAsync } from "../componets/Auth/register/_redux/singInSaga";
import { watchlogInAsync } from "../componets/Auth/login/_redux/logInSaga";
import { watchRequestNewAsync } from "../componets/request/requestAdd/_redux/requestAddSaga";
import { watchrequestListAsync } from "../componets/request/requestList/_redux/requestListSaga";
import { watchrequestEditAsync } from "../componets/request/requestEdit/_redux/requestEditSaga";
import { watchrequestDeleteAsync } from "../componets/request/requestDelete/_redux/requestDeleteSaga";

export const mapReducer = {
  requestNew: requestAddReducer,
  singin: singInReducer,
  tooggleRegister: loginRegisterReducer,
  login: logInReducer,
  addformstate: addFormReducer,
  listRequest: requestListReducer,
  editRequest: requestEditReducer,
  editFormState: EditFormReducer,
  deletRequest: requestDeleteReducer,
};
export const mapWatchSaga = [
  watchSingInAsync,
  watchlogInAsync,
  watchRequestNewAsync,
  watchrequestListAsync,
  watchrequestEditAsync,
  watchrequestDeleteAsync,
];
