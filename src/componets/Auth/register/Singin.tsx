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
    role: "ADMIN",
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
    if (result && result.error === false) {
      dispatch(closeRegister());
    }
  }, [result, dispatch]);

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
