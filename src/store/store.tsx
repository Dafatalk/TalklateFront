import requestAddReducer from "../componets/request/requestAdd/_redux/requestAddReducer";
import singInReducer from "../componets/Auth/register/_redux/singInReducer";
import loginRegisterReducer from "../componets/Auth/_redux/loginRegisterReducer";
import logInReducer from "../componets/Auth/login/_redux/logInReducer";
import { watchSingInAsync } from "../componets/Auth/register/_redux/singInSaga";
import { watchlogInAsync } from "../componets/Auth/login/_redux/logInSaga";
import addFormReducer from "../componets/request/requestAdd/requestAddForm/_redux/addFormReducer";
import { watchRequestNewAsync } from "../componets/request/requestAdd/_redux/requestAddSaga";

export const mapReducer = {
  requestNew: requestAddReducer,
  singin: singInReducer,
  tooggleRegister: loginRegisterReducer,
  login: logInReducer,
  addformstate: addFormReducer,
};
export const mapWatchSaga = [
  watchSingInAsync,
  watchlogInAsync,
  watchRequestNewAsync,
];
