export interface UserModel {
  name: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  documentType: string;
  documentNumber: string;
  phoneNumber: string;
  birthDate: Date;
  role: string;
}

export interface UserLoginModel {
  username: string;
  password: string;
}
