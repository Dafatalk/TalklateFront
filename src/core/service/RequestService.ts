import { RequestModel } from "../models/RequestModel";
import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";

export class RequestService {
  private PAHT_URI = "http://localhost:8005/api/v1/request";

  private static _instance: RequestService;

  private constructor() {}
  public static getInstance() {
    if (!RequestService._instance) {
      RequestService._instance = new RequestService();
    }
    return this._instance;
  }
  private saveRequestEndPoint = `${this.PAHT_URI}/create`;
  private getRequestEndPoint = `${this.PAHT_URI}/all`;
  private deletRequestEndPoint = `${this.PAHT_URI}/delete`;
  private editRequestEndPoint = `${this.PAHT_URI}/update`;

  public saveRequest(
    request: RequestModel
  ): Promise<AxiosResponse<RequestModel>> {
    try {
      const token = Cookies.get("token");

      return axios.post<RequestModel>(this.saveRequestEndPoint, request, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public getRequestS(): Promise<AxiosResponse<RequestModel>> {
    try {
      const token = Cookies.get("token");
      return axios.get<RequestModel>(this.getRequestEndPoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public deletRequest(id: string): Promise<AxiosResponse<RequestModel>> {
    try {
      const token = Cookies.get("token");

      return axios.post<RequestModel>(this.deletRequestEndPoint, id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  public editRequest(
    request: RequestModel
  ): Promise<AxiosResponse<RequestModel>> {
    try {
      const token = Cookies.get("token");

      return axios.post<RequestModel>(this.editRequestEndPoint, request, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
