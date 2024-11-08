import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/mapStore";
import { closeRegister, openRegister } from "../_redux/loginRegisterReducer";
import "../LoginRegister.css";
import { UserModel } from "../../../core/models/UserModel";
import { uploadSinginAction } from "./_redux/singInAction";
import { useEffect, useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Button } from "@mui/material";
import dayjs, { Dayjs } from "dayjs";
import { isActionOf } from "../../../core/redux/actions";
import {
  uploadsinginErrorReducer,
  uploadsinginSuccessReducer,
} from "./_redux/singInReducer";
import { NotificationManager } from "react-notifications";

export const Singin = () => {
  const minDate = dayjs().year(2014);
  const dispatch = useDispatch();
  const result = useSelector((state: RootState) => state.singin.result);

  const [user, setUser] = useState<UserModel>({
    name: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    documentType: "",
    documentNumber: "",
    phoneNumber: "",
    birthDate: new Date(),
    role: "USER",
  });

  const isRegisterOpen = useSelector(
    (state: RootState) => state.tooggleRegister.isRegisterOpen
  );

  const handleCloseClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    dispatch(closeRegister());
  };

  const handleOpenClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    dispatch(openRegister());
  };
  const handleRegisterClick = () => {
    dispatch(uploadSinginAction(user));
  };
  const isUserEmpty = () => {
    return Object.values(user).some((value) => !value);
  };

  useEffect(() => {
    if (isActionOf(result.action, uploadsinginSuccessReducer)) {
      NotificationManager.success(result.messageUser, "success", 3000);
      dispatch(closeRegister());
      setUser({
        name: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        documentType: "",
        documentNumber: "",
        phoneNumber: "",
        birthDate: new Date(),
        role: "USER",
      });
    }
    if (isActionOf(result.action, uploadsinginErrorReducer)) {
      NotificationManager.error(result.messageUser, "error", 3000);
    }
  }, [dispatch, result]);

  return (
    <>
      <Box
        className={`login-box register-box ${isRegisterOpen ? "open" : ""}`}
        onClick={handleOpenClick}
      >
        <a onClick={handleCloseClick} className="close">
          +
        </a>
        <Box className="header">
          <h3>REGISTER</h3>
        </Box>
        <Box className="content">
          <Box className="columns">
            <Box className="input-box">
              <input
                className="inpute"
                type="text"
                placeholder=" "
                value={user.name}
                onChange={(event) =>
                  setUser({
                    ...user,
                    name: event.target.value,
                  })
                }
              />
              <span>Name</span>
              <span></span>
            </Box>
            <Box className="input-box">
              <input
                className="inpute"
                type="text"
                value={user.lastName}
                placeholder=" "
                onChange={(event) =>
                  setUser({
                    ...user,
                    lastName: event.target.value,
                  })
                }
              />
              <span>Lastname</span>
              <span></span>
            </Box>
            <Box className="input-box">
              <input
                className="inpute"
                type="text"
                value={user.email}
                placeholder=" "
                onChange={(event) =>
                  setUser({
                    ...user,
                    email: event.target.value,
                  })
                }
              />
              <span>Email</span>
              <span></span>
            </Box>
            <Box className="input-box">
              <input
                className="inpute"
                type="text"
                value={user.username}
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
                placeholder=" "
                value={user.documentType}
                onChange={(event) =>
                  setUser({
                    ...user,
                    documentType: event.target.value,
                  })
                }
              />

              <span>Document Type</span>
              <span></span>
            </Box>
            <Box className="input-box">
              <input
                className="inpute"
                type="text"
                placeholder=" "
                value={user.documentNumber}
                onChange={(event) =>
                  setUser({
                    ...user,
                    documentNumber: event.target.value,
                  })
                }
              />
              <span>Document</span>
              <span></span>
            </Box>
            <Box className="input-box">
              <input
                className="inpute"
                type="text"
                placeholder=" "
                value={user.phoneNumber}
                onChange={(event) =>
                  setUser({
                    ...user,
                    phoneNumber: event.target.value,
                  })
                }
              />
              <span>Phone number</span>
              <span></span>
            </Box>
            <Box className="input-box">
              <input
                className="inpute"
                id="password"
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
          </Box>
          <Box>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%", // Asegura que tome todo el ancho del contenedor
                }}
                components={["DatePicker"]}
              >
                <DatePicker
                  label="Fecha de nacimiento"
                  maxDate={minDate}
                  onChange={(newValue: Dayjs | null) => {
                    if (newValue) {
                      setUser({
                        ...user,
                        birthDate: newValue.toDate(),
                      });
                    }
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 0,
                      width: "100%",
                      font: "verdana, sans-serif",
                      "& fieldset": {
                        borderColor: "transparent",
                        borderBottom: "1px solid #ccc",
                      },
                      "&:hover fieldset": {
                        borderColor: "transparent", // Evita el borde en hover
                        borderBottom: "1px solid #ccc",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "transparent", // Evita el borde en foco
                      },
                      "& .MuiInputBase-input": {
                        color: "#ccc", // Color del texto
                        backgroundColor: "transparent", // Color de fondo
                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#ccc", // Cambia el color de la etiqueta
                    },
                    "& .MuiIconButton-root": {
                      color: "#ccc", // Cambia el color del icono
                    },
                    " .MuiStack-root css-10o2lyd-MuiStack-root": {
                      flexDirection: "column",
                    },
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Box>

          <Box className="input-box">
            <Button
              onClick={() => {
                handleRegisterClick();
              }}
              size="small"
              className="buttne"
              disabled={isUserEmpty()}
            >
              SING UP
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
