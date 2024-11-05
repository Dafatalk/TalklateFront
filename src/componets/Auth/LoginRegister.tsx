import { LogIn } from "./login/Login";
import "./LoginRegister.css";
import { Singin } from "./register/Singin";

const LoginRegister = () => {
  return (
    <div className="login-container">
      {<LogIn />}
      {<Singin />}
    </div>
  );
};

export default LoginRegister;
