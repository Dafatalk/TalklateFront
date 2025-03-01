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
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import {
  Box,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
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
  const [emptyInput, setEmptyInput] = useState({
    name: false,
    lastName: false,
    email: false,
    username: false,
    password: false,
    documentType: false,
    documentNumber: false,
    phoneNumber: false,
    birthDate: false,
    role: false,
  }); // Estado para el error

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

  // const isUserEmpty = () => {
  //   return Object.values(user).some((value) => !value);
  // };

  useEffect(() => {
    const newValidationState: Record<keyof UserModel, boolean> = {
      ...emptyInput,
    };
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
      setEmptyInput({
        birthDate: false,
        documentNumber: false,
        documentType: false,
        email: false,
        lastName: false,
        name: false,
        password: false,
        phoneNumber: false,
        role: false,
        username: false,
      });
    }
    if (isActionOf(result.action, uploadsinginErrorReducer)) {
      if (Object.values(user).some((value) => !value)) {
        NotificationManager.error("fill out all fields", "Error", 3000);
        for (const key of Object.keys(user) as Array<keyof UserModel>) {
          if (key === "birthDate") {
            newValidationState[key] = isNaN(user.birthDate.getTime());
          } else {
            newValidationState[key] =
              user[key as keyof Omit<UserModel, "birthDate">]
                .toString()
                .trim() === "";
          }
        }
        setEmptyInput(newValidationState);
      } else {
        NotificationManager.error(result.messageUser, "Error", 3000);
      }
    }
  }, [dispatch, result]);

  return (
    <>
      <Box
        className={`login-box register-box ${isRegisterOpen ? "open" : "closed"}`}
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
              <TextField
                error={emptyInput.name}
                label="Name *"
                variant="standard"
                className="textfield-container"
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
            </Box>
            <Box className="input-box">
              <TextField
                error={emptyInput.lastName}
                label="Last name *"
                variant="standard"
                className="textfield-container"
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
            </Box>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                sx={{
                  display: "flex",
                  width: "100%", // Asegura que tome todo el ancho del contenedor

                }}
                components={["DatePicker"]}
              >
                <DatePicker
                  label="Birthdate *"
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
                    "& .MuiTextField-root": {
                      minWidth: "150px", // Fijar el ancho mínimo para evitar scroll
                    },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 0,
                      width: "100%",
                      font: "verdana, sans-serif",
                      fontSize: "0.9em",
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
                        color: "#595959", // Color del texto
                        backgroundColor: "transparent", // Color de fondo
                        // minWidth: "0px",
                        // width: "100px"

                      },
                    },
                    "& .MuiInputLabel-root": {
                      color: "#000000", // Cambia el color de la etiqueta

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

            <Box className="input-box">
              <TextField
                error={emptyInput.username}
                label="Username *"
                variant="standard"
                className="textfield-container"
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
            </Box>
            <Box className="input-box">
              <FormControl
                error={emptyInput.documentType}
                variant="standard"
                sx={{
                  width: "100%"
                  ,
                  "& .MuiInputLabel-root": { color: "#000000" }, // Color del label
                  "& .MuiInputBase-root:before": { borderBottomColor: "#ccc" }, // Línea inferior del input
                  "& .MuiInputBase-root:hover:not(.Mui-disabled):before": {
                    borderBottomColor: "#ccc",
                  }, // Línea inferior cuando se pasa el mouse
                  "& .MuiSelect-root": { color: "#ccc " },
                  "& .css-j218zi-MuiInputBase-root-MuiInput-root-MuiSelect-root::after":
                    { borderBottom: "2px solid #fff" },
                  "& label+.css-j218zi-MuiInputBase-root-MuiInput-root-MuiSelect-root":
                    { marginTop: "16px", color: "#828282" },
                  "& .MuiSelect-icon": { display: "none" }, // Oculta la flecha del select
                }}
              >
                <InputLabel
                  sx={{ fontSize: "1em" }}
                  id="demo-simple-select-standard-label"
                >
                  Document type *
                </InputLabel>
                <Select
                  id="demo-simple-select-standard"
                  value={user.documentType}
                  label="Origin Language *"
                  onChange={(event) =>
                    setUser({
                      ...user,
                      documentType: event.target.value,
                    })
                  }
                >
                  <MenuItem value={"CC"}>CC</MenuItem>
                  <MenuItem value={"CE"}>CE</MenuItem>
                  <MenuItem value={"TI"}>TI</MenuItem>
                  <MenuItem value={"PE"}>PE</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box className="input-box">
              <TextField
                error={emptyInput.documentNumber}
                label="Document *"
                variant="standard"
                className="textfield-container"
                type="text"
                placeholder=" "
                value={user.documentNumber}
                onChange={(event) =>
                  setUser({
                    ...user,
                    documentNumber: event.target.value,
                  })
                }
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <Tooltip title="No special characters like points, comma, etc.">
                          <HelpOutlineIcon fontSize="small" sx={{ cursor: "pointer" }} />
                        </Tooltip>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>
            <Box className="input-box">
              <TextField
                error={emptyInput.phoneNumber}
                label="Number"
                variant="standard"
                className="textfield-container"
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
            </Box>
            <Box className="input-box">
              <TextField
                error={emptyInput.password}
                label="Password *"
                variant="standard"
                className="textfield-container"
                id="password"
                type="password"
                placeholder=" "
                onChange={(event) =>
                  setUser({
                    ...user,
                    password: event.target.value,
                  })
                }
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <Tooltip title="Password must be at least 8 characters long,
contain at least one number,
one uppercase letter,
one special character,
and no whitespace">
                          <HelpOutlineIcon fontSize="small" sx={{ cursor: "pointer" }} />
                        </Tooltip>
                      </InputAdornment>
                    ),
                  },
                }}
              />

            </Box>
          </Box>
          <Box className="input-box">
            <TextField
              error={emptyInput.email}
              label="Email *"
              variant="standard"
              className="textfield-container"
              type="text"
              value={user.email}
              placeholder=" "
              onChange={(event) =>
                setUser({
                  ...user,
                  email: event.target.value,
                })
              }
              slotProps={{
                input: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip title="Like:  example@exa.com">
                        <HelpOutlineIcon fontSize="small" sx={{ cursor: "pointer" }} />
                      </Tooltip>
                    </InputAdornment>
                  ),
                },
              }}
            />

          </Box>


          <Box className="input-box">
            <button
              onClick={() => {
                handleRegisterClick();
              }}
            >
              Sign up
            </button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
