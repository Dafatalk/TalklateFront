import "../LoginRegister.css";
import { Box } from "@mui/material";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { UserLoginModel } from "../../../core/models/UserModel";
import { uploadLogInAction } from "./_redux/logInAction";
import { RootState } from "../../../store/mapStore";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
  const dispatch = useDispatch();
  const result = useSelector((state: RootState) => state.login.result);
  const navigate = useNavigate(); // Usa useNavigate para manejar la navegación

  const [user, setUser] = useState<UserLoginModel>({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (
      !result.error &&
      Object.values(user).some((value) => value && result.token)
    ) {
      Cookies.set("token", result.token ?? "NADA", { expires: 7 }); // Expira en 7 días
      navigate("/request");
    } else {
    }
  }, [result]);

  const handleLoginClick = () => {
    dispatch(uploadLogInAction(user));
  };
  return (
    <Box className="login-box">
      <Box className="header">
        <h3>LOGIN</h3>
      </Box>
      <Box className="content">
        <Box className="input-box">
          <input
            className="inpute"
            type="text"
            placeholder=" "
            onChange={(event) =>
              setUser({
                ...user,
                username: event.target.value,
              })
            }
          />
          <span>username</span>
          <span></span>
        </Box>
        <Box className="input-box">
          <input
            className="inpute"
            type="password"
            placeholder=" "
            onChange={(event) =>
              setUser({
                ...user,
                password: event.target.value,
              })
            }
          />
          <span>password</span>
          <span></span>
        </Box>
        <Box className="input-box">
          <button onClick={handleLoginClick} className="buttone">
            SING IN
          </button>
          <Box>
            <a>Forgot your password?</a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
