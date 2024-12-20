import axios, { AxiosResponse } from "axios";
import { UserModel, UserLoginModel } from "../models/UserModel";

export class UserService {
  private PAHT_URI = "http://192.168.20.2:8005/auth";

  private static _instance: UserService;

  private constructor() {}
  public static getInstance() {
    if (!UserService._instance) {
      UserService._instance = new UserService();
    }
    return this._instance;
  }

  private registerEndPoint = `${this.PAHT_URI}/register`;
  private loginEndPoint = `${this.PAHT_URI}/login`;

  public register(user: UserModel): Promise<AxiosResponse<UserModel>> {
    try {
      return axios.post<UserModel>(this.registerEndPoint, user);
    } catch (error) {
      console.error("ESTO ES LO QUE PASA:" + error);
      throw error;
    }
  }

  public login(
    user: UserLoginModel
  ): Promise<AxiosResponse<{ token: string }>> {
    try {
      console.log("LLEGO HASTA ACA: " + user);

      return axios.post<{ token: string }>(this.loginEndPoint, user);
    } catch (error) {
      throw error;
    }
  }
}
